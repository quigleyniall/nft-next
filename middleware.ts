import { withAuth } from "next-auth/middleware";

// More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware
export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      // `/admin` requires admin role
      if (req.nextUrl.pathname === "/admin") {
        return token?.userRole === "admin";
      }
      // `/me` only requires the user to be logged in
      if (req.nextUrl.pathname === "/signout") {
        return false;
      }

      // temp fix to access application
      return true;
      return !!token;
    },
  },
});

export const config = { matcher: ["/", "/metrics", "/accounts"] };
