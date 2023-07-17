import { Box, Container } from "@mui/material";
import SideBar from "../Sidebar/Sidebar";
import AppbarOffset from "../../layouts/AppbarOffset";
import Appbar from "../../layouts/Appbar";
import { sections } from "../../utils/SideBarSections";

const Dashboard = ({ children }) => (
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
        {children}
      </Box>
    </Box>
  </>
);

export default Dashboard;
