import { useState, useEffect } from 'react';
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListItemButton,
    Collapse,
    Link
} from "@mui/material";
import classes from "./sidebar.module.scss";
import { ExpandMore, ExpandLess } from '@mui/icons-material'
import IconResolver from "../../utils/IconResolver";
import Tooltip from "../Tooltip/Tooltip";
import { useRouter } from 'next/router';

const style = (active) => ({
    
    backgroundColor: active ? 'sidebar.backgroundActive' : 'inherit',
    '& .MuiListItemIcon-root': {
        color: active ? 'sidebar.textActive' : 'sidebar.text'
    },
    '& .MuiTypography-root': {
        color: active ? 'sidebar.textActive' : 'sidebar.text',
    },
    '&:hover': {
        backgroundColor: 'sidebar.backgroundHover',
        '& .MuiListItemIcon-root': {
            color: 'sidebar.textActive'
        },
        '& .MuiTypography-root': {
            color: 'sidebar.textActive',
        },
    },
})

const LinkIcon = ({ name, title, open}) => {
    const icon = (
        <ListItemIcon className={classes.icon}>
            <IconResolver name={name} />
        </ListItemIcon>
    );

    return open ? icon : <Tooltip title={title} children={icon}/>
}

const MenuItems = ({ link, open, setOpen }) => {
    const {pathname} = useRouter();
    // const pathname = '';
    let parentActive = false;
    
    if (!!link.children) {
        for (let child of link.children) {
            if (pathname === child.href) {
                parentActive = true;
            }
        }
    }

    const [subMenuOpen, setSubMenuOpen] = useState(parentActive);

    useEffect(() => {
        if (!open) setSubMenuOpen(false);
    }, [open])

    const handleClick = () => {
        if (!open) {
            setSubMenuOpen(true);
            // setOpen(true)
        } else {
            setSubMenuOpen(!subMenuOpen);
        }
    }

    const buttonProps = !!link.children ? {
        onClick: () => handleClick()
    } : {
        component: Link,
        href: link.href
    }

    return (
        <>
            <ListItem className={classes.listItem}>
                <ListItemButton {...buttonProps} className={classes.link} sx={style(parentActive || link.href === pathname)}>
                    <LinkIcon name={link.icon} title={link.title} open={open}/>
                    <ListItemText primary={link.title} className={classes.linkTextSpacing} primaryTypographyProps={{ className: classes.linkText }} />
                    {open && !!link.children && (subMenuOpen ? <ExpandLess /> : <ExpandMore />)}
                </ListItemButton>
            </ListItem>
            {!!link.children && <Collapse in={subMenuOpen} timeout="auto" unmountOnExit>
                <List sx={{ paddingTop: 0, paddingLeft: '18px' }}>
                    {link.children.map(item => (
                        <ListItem className={classes.listItem}>
                            <Link href={item.href} sx={style(item.href === pathname)} className={classes.link}>
                                <ListItemText
                                    className={classes.linkTextSpacing}
                                    primaryTypographyProps={{ className: classes.linkText }}
                                    primary={item.title}
                                />
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </Collapse>}
        </>
    )
}

export default MenuItems;