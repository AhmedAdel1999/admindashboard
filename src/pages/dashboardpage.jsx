import { DownloadOutlined } from "@mui/icons-material";
import { Button,Stack,Box,Grid,Typography,Paper,IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../components/header"
import Card from "../components/card";
import Line from "../components/line"
import Bar from "../components/bar"
import Pie from "../components/pie"
import Geo from "../components/geo"
import { dashData,Transactions } from "../data/data"
import { useContext } from "react";
import { DrawerContext } from "../context/drawercontext";

const DashboardPage = () =>{
    const {data1,data2,data3,data4} = dashData
    const {mode} = useContext(DrawerContext)
    return(
        <div className="h-auto px-5 py-7">
            <Stack direction={"row"} justifyContent={"space-between"} columnGap={"20px"} flexWrap={"wrap"} alignItems={"center"}>
                    <Header
                        isDashboard={true}
                        title={"DASHBOARD"}
                        subTitle={"Welcome to your dashboard"}
                    />
                    <Box sx={{ textAlign: "right", mb: 1.3 }}>
                        <Button
                            sx={{ padding: "6px 8px", textTransform: "capitalize" }}
                            variant="contained"
                            color="primary"
                        >
                            <DownloadOutlined />
                            Download Reports
                        </Button>
                    </Box>
            </Stack>

            
            <Grid container spacing={1.5}>
                <Grid item xs={12} sm={6} lg={3} >
                    <Card
                        icon={<EmailIcon
                        sx={{ fontSize: "23px", color: "rgb(156, 39, 176)" }} />}
                        title={"12,361"}
                        subTitle={"Emails Sent"}
                        increase={"+14%"}
                        data={data1} 
                        scheme={"nivo"}      
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}  >
                    <Card
                        icon={
                        <PointOfSaleIcon
                            sx={{ fontSize: "23px", color: "rgb(156, 39, 176)" }}
                        />
                        }
                        title={"431,225"}
                        subTitle={"Sales obtained"}
                        increase={"+21%"}
                        data={data2}
                        scheme={"category10"} 
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}  >
                    <Card
                        icon={
                        <PersonAddIcon
                            sx={{ fontSize: "23px", color: "rgb(156, 39, 176)" }}
                        />
                        }
                        title={"32,441"}
                        subTitle={"New Clients"}
                        increase={"+5%"}
                        data={data3}
                        scheme={"accent"} 
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}  >
                    <Card
                        icon={
                        <TrafficIcon
                            sx={{ fontSize: "23px", color: "rgb(156, 39, 176)" }}
                        />
                        }
                        title={"1,325,134"}
                        subTitle={"Traffic Received"}
                        increase={"+43%"}
                        data={data4}
                        scheme={"dark2"} 
                    />
                </Grid>
            </Grid>


            <Grid container spacing={1.3} sx={{overflowX:"auto"}} mt={1.3}>
                <Grid item xs={12} lg={9}>
                    <Paper className="grow xs:min-w-[650px] md:min-w-[350px]">
                        <Stack
                        alignItems={"center"}
                        direction={"row"}
                        flexWrap={"wrap"}
                        justifyContent={"space-between"}
                        >
                        <Box>
                            <Typography
                            color="#9c27b0"
                            mb={1}
                            mt={2}
                            ml={4}
                            variant="h6"
                            fontWeight={"bold"}
                            >
                            Revenue Generated
                            </Typography>
                            <Typography variant="body2" ml={4}>
                            $59,342.32
                            </Typography>
                        </Box>

                        <Box>
                            <IconButton sx={{ mr: 3,color:"#9c27b0" }}>
                            <DownloadOutlined />
                            </IconButton>
                        </Box>
                        </Stack>

                        <Line mode={mode} isDahboard={true} />
                    </Paper>
                </Grid>

                <Grid item xs={12} lg={3}>
                    <Box
                        className="xs:min-w-[650px] md:min-w-[350px]"
                        sx={{
                        overflow: "auto",
                        borderRadius: "4px",
                        minWidth: "280px",
                        maxHeight: 355,
                        flexGrow: 1,
                        }}
                    >
                        <Paper>
                        <Typography
                            color="#9c27b0"
                            fontWeight={"bold"}
                            p={1.2}
                            variant="h6"
                        >
                            Recent Transactions
                        </Typography>
                        </Paper>

                        {Transactions.map((item) => {
                        return (
                            <Paper
                            sx={{
                                mt: 0.4,
                                pr:1,
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                            >
                            <Box p={1.2}>
                                <Typography variant="body1">{item.txId}</Typography>
                                <Typography variant="body2">{item.user} </Typography>
                            </Box>
                            <Typography variant="body1">{item.date} </Typography>

                            <Typography
                                borderRadius={1.4}
                                p={1}
                                bgcolor="#d32f2f"
                                color="#fff"
                                variant="body2"
                            >
                                ${item.cost}
                            </Typography>
                            </Paper>
                        );
                        })}
                    </Box>
                </Grid>
            </Grid>


            <Stack gap={1.5} direction={"row"} sx={{overflowX:"auto"}} flexWrap={"wrap"} mt={1.4}>
                <Paper sx={{flexGrow: 1,minWidth: "500px", width: "28%",overflowX:"auto"  }}>
                    <Typography
                    color="#9c27b0"
                    sx={{ padding: "30px 30px 0 30px" }}
                    variant="h6"
                    fontWeight="600"
                    >
                    Campaign
                    </Typography>

                    <Pie isDashbord={true} />
                    <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
                    $48,352 revenue generated
                    </Typography>
                    <Typography variant="body2" px={0.7} pb={3} align="center">
                    Includes extra misc expenditures and costs
                    </Typography>
                </Paper>

                <Paper sx={{flexGrow: 1,minWidth: "500px", width: "33%",overflowX:"auto"  }}>
                    <Typography
                        color="#9c27b0"
                        variant="h6"
                        fontWeight="600"
                        sx={{ padding: "30px 30px 0 30px" }}
                        >
                        Sales Quantity
                    </Typography>
                    <Bar mode={mode} isDashbord={true} />
                </Paper>

                <Paper sx={{flexGrow: 1,minWidth: "500px", width: "33%", overflowX:"auto" }}>
                   <Geo isDashbord={true} />
                </Paper>
            </Stack>
        </div>
    )
}
export default DashboardPage;