import { useContext } from "react";
import { DrawerContext } from "./context/drawercontext";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import SideBar from "./components/sidebar";
import TobHeader from "./components/topheader";
import DashboardPage from "./pages/dashboardpage";
import TeamPage from "./pages/teampage";
import ContactsPage from "./pages/contactspage";
import InvoicesPage from "./pages/invoicespage";
import FormPage from "./pages/formpage";
import CalenderPage from "./pages/calenderpage";
import FAQPage from "./pages/faqpage";
import BarChartPage from "./pages/barchartpage";
import LineChartPage from "./pages/linechart";
import PieChartPage from "./pages/piechartpage";
import GeoGraphyPage from "./pages/geographypage";
import NotFoundPage from "./pages/notfoundpage"


function App() {
  const {open,mode} = useContext(DrawerContext)
  return (
      <div className={`App ${mode==="dark"?"dark":""} flex flex-col h-screen`}>
        <TobHeader />
        <div className="basis-full overflow-x-auto dark:bg-[#121212]">
          <BrowserRouter>
            <SideBar /> 
            <div className={`h-full ml-[65px] ${open?"ml-[246px]":""}`}>
              <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="/invoices" element={<InvoicesPage />} />
                <Route path="/form" element={<FormPage />} />
                <Route path="/calendar" element={<CalenderPage />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/geography" element={<GeoGraphyPage />} />
                <Route path="/pie" element={<PieChartPage />} />
                <Route path="/bar" element={<BarChartPage />} />
                <Route path="/line" element={<LineChartPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </div>
          </BrowserRouter>
          
        </div>
        
      </div>
  );
}

export default App;
