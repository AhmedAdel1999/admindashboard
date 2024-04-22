import Pie from "../components/pie";
import Header from "../components/header";
import { useContext } from "react";
import { DrawerContext } from "../context/drawercontext";
import { Stack } from "@mui/material";

const PieChartPage = () =>{
    const {mode} = useContext(DrawerContext)
    return(
        <div className="h-auto px-5 py-7">
            <Header title="Pie Chart" subTitle="Simple Pie Chart" />
            <Stack sx={{width:"100%", overflowX:"auto"}}>
              <Pie mode={mode} />
            </Stack>
        </div>
    )
}
export default PieChartPage;