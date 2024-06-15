import { Routes, Route } from "react-router-dom";
import LandingPage from "@/area/landing-page/landing-page";
import Login from "@/area/login/login";
import Dashboard from "@/area/dashboard/dashboard";
import Home from "@/area/dashboard/home/home";
import AdminBranch from "@/area/dashboard/admin-branch/admin-branch";
import Budget from "@/area/dashboard/budget/budget";
import Report from "@/area/dashboard/report/report";
import Invoice from "@/area/dashboard/invoice/invoice";
import RaiseQuery from "@/area/dashboard/raise-query/raise-query";
import PrivateRoute from "./private-route";

function AppRoutes() {
  return (
    <Routes>
      <Route path="" Component={LandingPage} />
      <Route path="login" Component={Login} />
      <Route element={<PrivateRoute />}>
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="home" element={<Home />} />
          <Route path="admin-branch" element={<AdminBranch />} />
          <Route path="budget" element={<Budget />} />
          <Route path="report" element={<Report />} />
          <Route path="invoice" element={<Invoice />} />
          <Route path="raise-query" element={<RaiseQuery />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRoutes;
