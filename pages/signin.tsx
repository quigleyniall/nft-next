import React from "react";
import { CtxOrReq } from "next-auth/client/_utils";
import {
  getProviders,
  signIn,
  getCsrfToken,
  getSession,
} from "next-auth/react";
import { InferGetServerSidePropsType } from "next";
import { Box, Button, Card } from "@mui/material";
import Image from "next/image";
import AppBar from "@/layouts/Appbar";

const providersIcons = {
  Salesforce: "/icons/salesforce-svgrepo-com.svg",
};

const SignIn = ({
  providers,
  csrfToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
   <style jsx global>{`
        body {
          margin: 0
        }
      `}</style>
      <AppBar />
      <Box
      sx={{
        padding: 0,
        width: "100%",
        height: "100vh",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',
        backgroundColor: 'background.page'
      }}>
        {providers && csrfToken ? (
          Object.values(providers).map((item: any, index) => {
            if (item.id !== "email") {
              return (
                <Button key={item.id} variant="contained" onClick={() => signIn(item.id)}>
                  Salesforce Login
                </Button>
              );
            }
          })
        ) : (
          <p>No Available Providers</p>
        )}
      </Box>
    </>
  );
};

export default SignIn;

export const getServerSideProps = async (ctx: CtxOrReq | undefined) => {
  const providers = await getProviders();
  const csrfToken = await getCsrfToken(ctx);
  const session = await getSession(ctx);

  /**
   * If session is available then redirect to main page.
   */
  if (session) {
    return {
      redirect: { destination: "/", permanent: false },
    };
  }

  /**
   * Return providers and CSRF Token
   */
  return {
    props: { providers, csrfToken },
  };
};
