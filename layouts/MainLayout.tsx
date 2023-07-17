import { Box } from "@mui/material";
import SideBar from "../components/Sidebar/Sidebar";
import AppbarOffset from "./AppbarOffset";
import Appbar from "./Appbar";
import { sections } from "../utils/SideBarSections";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Appbar />
      <Box
        sx={{
          display: "flex",
          width: "100vw",
          height: "100vh",
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
          <Outlet />
        </Box>
      </Box>
      </>
  );
};

export default MainLayout;
