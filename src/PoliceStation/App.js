import React from "react";
import { Route, Routes } from "react-router-dom";
import Topbar from "./Components/Topbar/Topbar";
import Home from "./pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import TC from "../Admin/Pages/T&C/T&C";
import Privacy from "../Admin/Pages/Privacy/Privacy";
import CaseDashboard from "./pages/CaseDashboard/CaseDashboard";
import RegisterCaseForm from "./pages/RegisterCaseForm/RegisterCaseForm";
import SearchCases from "./pages/SearchCases/SearchCases";
import SetVisitDatePass from "./pages/SetVisitDatePass/SetVisitDatePass";
import PermitApprovalPage from "./pages/PermitApprovalPage/PermitApprovalPage";








const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Topbar" element={<Topbar />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/Terms&Conditions" element={<TC />} />
        <Route path="/Privacy-Policy" element={<Privacy />} />
        <Route path="/CaseDashboard" element={<CaseDashboard />} />
        <Route path="/RegisterCaseForm" element={<RegisterCaseForm />} />
        <Route path="/SearchCases" element={<SearchCases />} />
        <Route path="/Passport" element={<SetVisitDatePass />} />
        <Route path="/PermitApprovalPage" element={<PermitApprovalPage />} />
        

     
    
       

      </Routes>
    </div>
  );
};

export default App;
