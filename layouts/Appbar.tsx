import { useContext, useState } from "react";
import { AppBar as MuiAppBar, Box, IconButton, Toolbar, Button } from "@mui/material";
import { CustomTheme } from "../context/theme";
import { Brightness7, Brightness4, Menu } from "@mui/icons-material";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";


const AppBar = ({ authenticated = false}) => {
  const { theme, switchTheme, setOpen } = useContext(CustomTheme);
  const {push } = useRouter();
  

  const logout = () => {
    signOut();
    push('/signin');
  }
  
  return (
    <MuiAppBar elevation={1}>
      <Toolbar
        sx={{
          backgroundColor: `${
            theme.palette.mode === "light" ? "#F4F5FA" : "#171C24"
          }`,
          color: `${theme.palette.text.primary}`,
        }}
      >
        <Box sx={{ display: "flex", flex: 1, justifyContent: "space-between" }}>
          {authenticated && <IconButton onClick={setOpen} color="inherit">
            <Menu />
          </IconButton>}
          <Box sx={{ display: 'flex', flex: 1, justifyContent: 'flex-end', alignItems: 'center', gap: '8px'}}>
            {authenticated && <Button onClick={logout}>Sign out</Button>}
            <IconButton sx={{ ml: 1 }} onClick={switchTheme} color="inherit">
              {theme.palette.mode === "dark" ? (
                <Brightness7 />
              ) : (
                <Brightness4 />
              )}
            </IconButton>
            {/* <WalletDropdownOptions /> */}
          </Box>
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;


