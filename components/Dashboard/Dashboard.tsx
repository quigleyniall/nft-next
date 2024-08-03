import { Box, Card, Container } from "@mui/material";
import SideBar from "../Sidebar/Sidebar";
import AppbarOffset from "../../layouts/AppbarOffset";
import Appbar from "../../layouts/Appbar";
import { sections } from "../../utils/SideBarSections";
import { CustomTheme } from "@/context/theme";
import { useContext } from "react";
import { ErrorMsg } from "../typography/typography";
import { Errors } from "@/context/errors";
import SnackBar from "../SnackBar/SnackBar";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Snackbar } from "@/context/snackbar";
import { Dna } from "react-loader-spinner";

interface Props {
  children: any
  
  // pending?: {status?: string, msg?: string} | boolean
  pending?: any
  // error?: {status?: string, msg?: string} | boolean
  error?: any
  // success?: {status?: string, msg?: string} | boolean
  success?: any
}

const Dashboard = ({ children, pending = false, error = false, success = false }: Props) => {
  const { theme } = useContext(CustomTheme);
  const { messageList } = useContext(Snackbar);

  return (
    <>
      <style jsx global>{`
        body {
          background: ${theme.palette.mode === "light" ? "#F4F5FA" : "#161C24"};
        }
      `}</style>
      <Appbar authenticated />
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

          <Box
            sx={{
              position: "fixed",
              bottom: "8px",
              right: "8px",
              maxWidth: "320px",
              minWidth: "280px",
            }}
          >
            {messageList.map(({ message, type }) => (
              <SnackBar key={message} message={message} type={type}></SnackBar>
            ))}
          </Box>
          {pending && (
            <Box
              sx={{
                minHeight: "calc(100vh - 64px)",
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                textAlign: "center",
              }}
            >
              <Dna
                visible={true}
                height="140"
                width="140"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
              />
            </Box>
          )}
            {typeof error != 'boolean' && error?.status && (
          <Card sx={{margin: '32px', padding: '12px', display: 'flex', alignItems: 'center', gap: '16px'}}>
             <ErrorOutlineIcon
            sx={{ fontSize: "4rem", color: "red" }}
          />
            <ErrorMsg>{error.msg}</ErrorMsg>
          </Card>
        )}
        {typeof success != 'boolean' && success?.status && success.msg && (
           <Card sx={{margin: '32px', padding: '12px', display: 'flex', alignItems: 'center', gap: '16px'}}>
           <ErrorOutlineIcon
          sx={{ fontSize: "4rem", color: "grey" }}
        />
          <ErrorMsg>{success.msg}</ErrorMsg>
        </Card>
        )}
          {children}
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
