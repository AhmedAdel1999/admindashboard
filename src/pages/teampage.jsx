import Header from "../components/header";
import { DataGrid } from "@mui/x-data-grid";
import { Stack, useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import {AdminPanelSettingsOutlined,LockOpenOutlined,SecurityOutlined} from "@mui/icons-material";
import { teamData } from "../data/data";
import { useContext } from "react";
import { DrawerContext } from "../context/drawercontext";




const TeamPage = () =>{

    const{mode} = useContext(DrawerContext)
    const theme = useTheme();
    const columns = [
        {
          field: "id",
          headerName: "ID",
          width: 33,
          align: "center",
          headerAlign: "center",
        },
        {
          field: "name",
          headerName: "name",
          align: "center",
          headerAlign: "center",
        },
        {
          field: "email",
          headerName: "email",
          flex: 1,
          align: "center",
          headerAlign: "center",
        },
        { field: "age", headerName: "age", align: "center", headerAlign: "center" },
        {
          field: "phone",
          headerName: "phone",
          flex: 1,
          align: "center",
          headerAlign: "center",
        },
        {
          field: "access",
          headerName: "access",
          flex: 1,
          align: "center",
          headerAlign: "center",
          renderCell: ({ row: { access } }) => {
            return (
              <Box
                sx={{
                  p: "5px",
                  width: "99px",
                  margin:"auto",
                  transform:"translateY(35%)",
                  borderRadius: "3px",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "space-evenly",
    
                  backgroundColor:
                    access === "Admin"
                      ? theme.palette.primary.dark
                      : access === "Manager"
                      ? theme.palette.secondary.dark
                      : "#3da58a",
                }}
              >
                {access === "Admin" && (
                  <AdminPanelSettingsOutlined
                    sx={{ color: "#fff" }}
                    fontSize="small"
                  />
                )}
    
                {access === "Manager" && (
                  <SecurityOutlined sx={{ color: "#fff" }} fontSize="small" />
                )}
    
                {access === "User" && (
                  <LockOpenOutlined sx={{ color: "#fff" }} fontSize="small" />
                )}
    
                <Typography sx={{ fontSize: "13px", color: "#fff" }}>
                  {access}
                </Typography>
              </Box>
            );
          },
        },
      ];
    return(
        <div className="h-auto px-5 py-7">
            <Header title={"TEAM"} subTitle={"Managing the Team Members"} /> 
            <Box sx={{ height: 600, mx: "auto",overflowX:"auto"}}>
                <DataGrid
                    sx={{
                        minWidth:"700px",
                        color:mode==="dark"?"#fff":"initial",
                        "& .MuiDataGrid-columnHeader":{
                            bgcolor:mode==="dark"?"#000":"initial"
                        },
                        "& .MuiDataGrid-columnHeader svg":{
                            color:mode==="dark"?"#fff":"initial"
                        },
                        "& .MuiDataGrid-footerContainer .MuiTablePagination-root":{
                            color:mode==="dark"?"#fff":"initial"
                        },
                        "& .MuiDataGrid-footerContainer .MuiTablePagination-root svg":{
                            color:mode==="dark"?"#fff":"initial"
                        }
                    }}
                    rows={teamData}
                    columns={columns}
                />
            </Box> 
        </div>
    )
}
export default TeamPage;