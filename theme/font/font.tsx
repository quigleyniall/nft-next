const font = (mode) => ({
  ...(mode === "dark"
    ? {
        h1: {
          color: "white",
        },
        h5: {
          margin: "1rem 0px",
          fontWeight: "500",
          fontSize: "1.25rem",
          lineHeight: "1.334",
          color: "#22a176",
        },
        h6: {
          margin: "0px",
          letterSpacing: "0.15px",

          fontweight: "500",
          fontSize: "1.125rem",
          lineHeight: "1.6",
          color: "white",
        },
        body1: {
          fontWeight: "400",
          fontSize: "0.875rem",
          color: "white",
        },
        body2: {
          margin: "0px",
          letterSpacing: "0.15px",
          fontSize: "1rem",
          lineHeight: "1.5",
          color: "white",
          fontWeight: "600",
        },
      }
    : {
        h1: {
          color: "black",
        },
        h5: {
          margin: "1rem 0px",
          fontWeight: "500",
          fontSize: "1.25rem",
          lineHeight: "1.334",
          color: "#22a176",
        },
        body1: {
            fontWeight: "400",
            fontSize: "0.875rem",
            color: "rgba(58, 53, 65, 0.6)",
        },
        h6: {
          margin: "0px",
          letterSpacing: "0.15px",

          fontweight: "500",
          fontSize: "1.125rem",
          lineHeight: "1.6",
          color: "rgba(58, 53, 65, 0.87)",
        },
        body2: {
          margin: "0px",
          letterSpacing: "0.15px",
          fontSize: "1rem",
          lineHeight: "1.5",
          color: "rgba(58, 53, 65, 0.87)",
          fontWeight: "600",
        },
      }),
});
export default font;
