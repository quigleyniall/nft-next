import { Box, Container } from "@mui/material";
import SideBar from "../Sidebar/Sidebar";
import AppbarOffset from "../../layouts/AppbarOffset";
import Appbar from "../../layouts/Appbar";
import { sections } from "../../utils/SideBarSections";
import { CustomTheme } from "@/context/theme";
import { useContext } from "react";
import { ErrorMsg } from "../typography/typography";
import { Errors } from "@/context/errors";

const Dashboard = ({ children }) => {
  const { theme } = useContext(CustomTheme);
  const {errorMsg, errorSet} = useContext(Errors)

  return (
    <>
      <style jsx global>{`
        body {
          background: ${theme.palette.mode === "light" ? "#F4F5FA" : "#161C24"};
        }
      `}</style>
      <Appbar authenticated/>
      <Box
        sx={{
          display: "flex",
          width: "100vw",
          height: "100%",
          boxSizing: "border-box",
          backgroundColor: "background.page",
        }}
      >
        <SideBar sections={sections} />
        <Box
          component="main"
          sx={{ flex: "1", backgroundColor: "background.page" }}
        >
          <AppbarOffset />
          {!!errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
          {children}
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
