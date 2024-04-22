import { useContext } from "react";
import { DrawerContext } from "../context/drawercontext";
import Bar from "../components/bar";
import Header from "../components/header";
import { Stack } from "@mui/material";

const BarChartPage = () =>{
    const {mode} = useContext(DrawerContext)
    return(
        <div className="h-auto px-5 py-7">
            <Header 
              title="Bar Chart"
              subTitle="The minimum wage in Germany, France and Spain (EUR/month)"
            />
            <Stack sx={{width:"100%", overflowX:"auto"}}>
              <Bar mode={mode} />
            </Stack>
        </div>
    )
}
export default BarChartPage;