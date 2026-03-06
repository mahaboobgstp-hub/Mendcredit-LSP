import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VerifyOtp from "./pages/VerifyOtp";
import DashboardOverview from "./pages/dashboard/DashboardOverview";
import CreditScore from "./pages/dashboard/CreditScore";
import ActiveLoans from "./pages/dashboard/ActiveLoans";
import NegativeAccounts from "./pages/dashboard/NegativeAccounts";
import Subscription from "./pages/dashboard/Subscription";
import DPDHistory from "./pages/dashboard/DPDHistory";
import CreditUtilization from "./pages/dashboard/CreditUtilization";
import CreditMix from "./pages/dashboard/CreditMix";
import B2BOverview from "./pages/b2b/dashboard/Overview";
import BorrowerSearch from "./pages/b2b/dashboard/BorrowerSearch";
import BorrowerProfile from "./pages/b2b/dashboard/BorrowerProfile";
import CreditReport from "./pages/b2b/dashboard/CreditReport";
import BankAnalysis from "./pages/b2b/dashboard/BankAnalysis";
import RiskEngine from "./pages/b2b/dashboard/RiskEngine";
import IncomeVerification from "./pages/b2b/dashboard/IncomeVerification";
import CreditDecision from "./pages/b2b/dashboard/CreditDecision";
import Step1KYC from "./pages/lsp/apply/Step1KYC";
import Step2CreditCheck from "./pages/lsp/apply/Step2CreditCheck";
import Step3Employment from "./pages/lsp/apply/Step3Employment";
import Step4Documents from "./pages/lsp/apply/Step4Documents";
import Step5Result from "./pages/lsp/apply/Step5Result";
import Step6Handoff from "./pages/lsp/apply/Step6Handoff";
import Step7Agreement from "./pages/lsp/apply/Step7Agreement";
import Step8Status from "./pages/lsp/apply/Step8Status";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/dashboard" element={<DashboardOverview />} />
        <Route path="/dashboard/credit-score" element={<CreditScore />} />
        <Route path="/dashboard/active-loans" element={<ActiveLoans />} />
        <Route path="/dashboard/negative-accounts" element={<NegativeAccounts />} />
        <Route path="/dashboard/subscription" element={<Subscription />} />
        <Route path="/dashboard/dpd-history" element={<DPDHistory />} />
        <Route path="/dashboard/credit-utilization" element={<CreditUtilization />} />
        <Route path="/dashboard/credit-mix" element={<CreditMix />} />
        <Route path="/b2b/dashboard" element={<B2BOverview />} />
        <Route path="/b2b/dashboard/borrowers" element={<BorrowerSearch />} />
        <Route path="/b2b/dashboard/borrowers/:id" element={<BorrowerProfile />} />
        <Route path="/b2b/dashboard/borrowers/:id/credit-report" element={<CreditReport />} />
        <Route path="/b2b/dashboard/borrowers/:id/bank-analysis" element={<BankAnalysis />} />
        <Route path="/b2b/dashboard/risk" element={<RiskEngine />} />
        <Route path="/b2b/dashboard/borrowers/:id/income" element={<IncomeVerification />} />
        <Route path="/b2b/dashboard/decision" element={<CreditDecision />} />
        <Route path="/lsp/apply" element={<Step1KYC />} />
        <Route path="/lsp/apply/credit-check" element={<Step2CreditCheck />} />
        <Route path="/lsp/apply/employment" element={<Step3Employment />} />
        <Route path="/lsp/apply/documents" element={<Step4Documents />} />
        <Route path="/lsp/apply/result" element={<Step5Result />} />
        <Route path="/lsp/apply/handoff" element={<Step6Handoff />} />
        <Route path="/lsp/apply/agreement" element={<Step7Agreement />} />
        <Route path="/lsp/apply/status" element={<Step8Status />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
