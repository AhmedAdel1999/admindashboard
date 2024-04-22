import Line from "../components/line";
import Header from "../components/header";
import { useContext } from "react";
import { DrawerContext } from "../context/drawercontext";
import { Stack } from "@mui/material";

const LineChartPage = () =>{
    const {mode} = useContext(DrawerContext)
    return(
        <div className="h-auto px-5 py-7">
            <Header title="Line Chart" subTitle="Simple Line Chart" />
            <Stack sx={{width:"100%", overflowX:"auto"}}>
              <Line mode={mode} />
            </Stack>
        </div>
    )
}
export default LineChartPage;