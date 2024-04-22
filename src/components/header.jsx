import React, { useContext } from 'react';
import { Box, Typography } from "@mui/material";
import { DrawerContext } from '../context/drawercontext';





const Header = ({title, subTitle, isDashboard=false}) => {

  const {mode} = useContext(DrawerContext)

    return (
    <Box mb={ isDashboard? 2 : 4}>
      <Typography
        sx={{
          color: "#03a9f4",
          fontWeight: "bold",
        }}
        variant="h5"
      >
        {title}
      </Typography>
      <Typography 
        sx={{
          color: mode==="dark"?"#fff":"initial"
        }}
        variant="body1"
      >
        {subTitle}
      </Typography>
    </Box>  
  );
}

export default Header;
