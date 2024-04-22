import React, { useContext } from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Avatar, styled, Typography, Tooltip,Drawer, Stack } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { grey } from "@mui/material/colors";
import { DrawerContext } from "../context/drawercontext";
import { NavLink } from "react-router-dom";
import logo from "../data/assets/ahmed.jpg"


const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  
const Array1 = [
    { text: "Dashboard", icon: <HomeOutlinedIcon />, path: "/" },
    { text: "Manage Team", icon: <PeopleOutlinedIcon />, path: "/team" },
    {
        text: "Contacts Information",
        icon: <ContactsOutlinedIcon />,
        path: "/contacts",
    },
    {
        text: "Invoices Balances",
        icon: <ReceiptOutlinedIcon />,
        path: "/invoices",
    },
];

const Array2 = [
    { text: "Profile Form", icon: <PersonOutlinedIcon />, path: "/form" },
    { text: "Calendar", icon: <CalendarTodayOutlinedIcon />, path: "/calendar" },
    {
        text: "FAQ Page",
        icon: <HelpOutlineOutlinedIcon />,
        path: "/faq",
    },
];

const Array3 = [
    { text: "Bar Chart", icon: <BarChartOutlinedIcon />, path: "/bar" },
    { text: "Pie Chart", icon: <PieChartOutlineOutlinedIcon />, path: "/pie" },
    { text: "Line Chart", icon: <TimelineOutlinedIcon />, path: "/line" },
    { text: "Geography Chart", icon: <MapOutlinedIcon />, path: "/geography" },
]


const SideBar = () =>{
    const {open,mode,handleCloseDrawer} = useContext(DrawerContext)
    return(
        <Drawer 
            variant="permanent"  
            open={open}
            sx={{
                "& .MuiDrawer-paper":{
                    backgroundColor:mode==="dark"&&"rgb(18, 18, 18)",
                    backgroundImage:mode==="dark"&&"linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))",
                    color:mode==="dark"&&"#fff",
                },
                "& .MuiDrawer-paper svg":{
                    color:mode==="dark"&&"#fff",
                }
            }}
        >
           <Stack sx={{width:open?"240px":"65px"}}>
            <DrawerHeader>
                    <IconButton onClick={handleCloseDrawer}>
                    <ChevronLeftIcon />
                    </IconButton>
            </DrawerHeader>
            <Divider />
            <Avatar
                sx={{
                    mx: "auto",
                    width: open ? 88 : 44,
                    height: open ? 88 : 44,
                    my: 1,
                    border: "2px solid grey",
                    transition: "0.25s",
                }}
                alt="Remy Sharp"
                src={logo}
            />
            <Typography
                align="center"
                sx={{ fontSize: open ? 17 : 0, transition: "0.25s" }}
            >
              Ahmed Adel
            </Typography>
            <Typography
                align="center"
                sx={{
                    fontSize: open ? 17 : 0,
                    transition: "0.25s",
                    color: "#a51ebd",
                    mb:"10px"
                }}
            >
              Admin
            </Typography>

            <Divider />

            <List>
            {Array1.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ display: "block",overflow:"hidden" }}>
                <Tooltip title={open ? null : item.text} placement="left">
                    <ListItemButton
                        component={NavLink}
                        to={item.path}
                        sx={{
                            minHeight: 48,
                            height:open?"auto":48,
                            justifyContent: open ? "initial" : "center",
                            px: 2.5,
                            "&.active":{
                                bgcolor:mode === "dark"
                                ? grey[800]
                                : grey[300]
                            }
                         }}
                    >
                    <ListItemIcon
                        sx={{
                        minWidth: 0,
                        mr: open ? 2 : "auto",
                        justifyContent: "center",
                        }}
                    >
                        {item.icon}
                    </ListItemIcon>
                    <ListItemText
                        primary={item.text}
                        sx={{ opacity: open ? 1 : 0 }}
                    />
                    </ListItemButton>
                </Tooltip>
            </ListItem>
            ))}
            </List>

            <Divider />

            <List>
            {Array2.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ display: "block",overflow:"hidden" }}>
                <Tooltip title={open ? null : item.text} placement="left">
                    <ListItemButton
                        component={NavLink}
                        to={item.path}
                        sx={{
                            minHeight: 48,
                            height:open?"auto":48,
                            justifyContent: open ? "initial" : "center",
                            px: 2.5,
                            "&.active":{
                                bgcolor:mode === "dark"
                                ? grey[800]
                                : grey[300]
                            }
                        }}
                    >
                    <ListItemIcon
                        sx={{
                        minWidth: 0,
                        mr: open ? 2 : "auto",
                        justifyContent: "center",
                        }}
                    >
                        {item.icon}
                    </ListItemIcon>
                    <ListItemText
                        primary={item.text}
                        sx={{ opacity: open ? 1 : 0 }}
                    />
                    </ListItemButton>
                </Tooltip>
            </ListItem>
            ))}
            </List>

            <Divider />

            <List>
            {Array3.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ display: "block",overflow:"hidden" }}>
                <Tooltip title={open ? null : item.text} placement="left">
                    <ListItemButton
                        component={NavLink}
                        to={item.path}
                        sx={{
                            minHeight: 48,
                            height:open?"auto":48,
                            justifyContent: open ? "initial" : "center",
                            px: 2.5,
                            "&.active":{
                                bgcolor:mode === "dark"
                                ? grey[800]
                                : grey[300]
                            }
                        }}
                    >
                    <ListItemIcon
                        sx={{
                        minWidth: 0,
                        mr: open ? 2 : "auto",
                        justifyContent: "center",
                        }}
                    >
                        {item.icon}
                    </ListItemIcon>
                    <ListItemText
                        primary={item.text}
                        sx={{ opacity: open ? 1 : 0 }}
                    />
                    </ListItemButton>
                </Tooltip>
            </ListItem>
            ))}
            </List>
           </Stack>
        </Drawer>
    )
}
export default SideBar;