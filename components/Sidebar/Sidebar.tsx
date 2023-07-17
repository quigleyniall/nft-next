import * as React from "react";
import { 
  Drawer as MuiDrawer
} from "@mui/material";

import classes from "./sidebar.module.scss";
import AppbarOffset from "../../layouts/AppbarOffset";

import MenuSections from "./MenuSections";
import { CustomTheme } from "../../context/theme";
import { useContext, useState } from "react";
import { useCookies } from 'react-cookie';


const SideBar = ({ sections }) => {
  const {theme, open, setOpen} = useContext(CustomTheme);
  console.log(theme);
  const className = open === 'open'
    ? classes["sidebar--open"]
    : classes["sidebar--closed"];
  
  const spacingClassName = open === 'open' ? classes["sidebar__spacing--open"] : "";
  
  return (
    <MuiDrawer
      variant="permanent"
      classes={{
        root: `${classes["sidebar__spacing"]} ${spacingClassName}`,
        paper: `${className} ${classes["sidebar"]}`,
      }}
      PaperProps={{
        sx: { backgroundColor: `${theme.palette.background.default}`, overflowY: 'unset' }
      }}
      open={open === 'open'}
      onClose={setOpen}
    >
      <AppbarOffset />
      {Object.keys(sections).map((sectionTitle, index) => (
        <MenuSections
          key={sectionTitle}
          // setOpen={setOpen}
          section={sections[sectionTitle]}
          sectionTitle={sectionTitle}
          // divider={index !== Object.keys(sections).length - 1}
          open={open == 'open'}
        />
      ))}
    </MuiDrawer>
  );
};
export default SideBar;
