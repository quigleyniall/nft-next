import * as React from "react";
import {
  List,
  ListItem
} from "@mui/material";

import classes from "./sidebar.module.scss";
import MenuItems from './MenuItems';

const MenuSections = ({ section, sectionTitle, open }) => (
      <List className={classes.section}>
        <ListItem
          sx={{ display: open ? "block" : "none", }}
          className={classes.sectionTitle}
        >{sectionTitle}</ListItem>
        <List key={sectionTitle} sx={{ padding: 0 }}>
          {section.map((link) => (
            <MenuItems key={link.title} link={link} open={open} setOpen={null} />
          ))}
        </List>
      </List>
  );

  export default MenuSections;
  