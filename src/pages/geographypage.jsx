import Geo from "../components/geo";
import Header from "../components/header";
import { useContext } from "react";
import { DrawerContext } from "../context/drawercontext";
import { Stack } from "@mui/material";

const GeoGraphyPage = () =>{
    const {mode} = useContext(DrawerContext)
    return(
        <div className="h-auto px-5 py-7">
            <Header title="Geography" subTitle="Simple Geography Chart" />
            <Stack sx={{width:"100%", overflowX:"auto"}}>
              <Geo mode={mode} />
            </Stack>
        </div>
    )
}
export default GeoGraphyPage;