import Header from "../components/header";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, useTheme } from "@mui/material";
import { invoicesColumns,invoicesRows } from "../data/data";
import { useContext } from "react";
import { DrawerContext } from "../context/drawercontext";




const InvoicesPage = () =>{

    const{mode} = useContext(DrawerContext)
    const theme = useTheme();

    return(
        <div className="h-auto px-5 py-7">
            <Header title="INVOICES" subTitle="List of Invoice Balances" />
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
                    slots={{
                        toolbar: GridToolbar,
                    }}
                    rows={invoicesRows}
                    columns={invoicesColumns}
                />
            </Box> 
        </div>
    )
}
export default InvoicesPage;