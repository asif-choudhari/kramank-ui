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

function AppRoutes() {
  return (
    <Routes>
      <Route path="" Component={LandingPage} />
      <Route path="login" Component={Login} />
      <Route>
        <Route path="dashboard" Component={Dashboard} >
          <Route path="home" Component={Home} />
          <Route path="admin-branch" Component={AdminBranch} />
          <Route path="budget" Component={Budget} />
          <Route path="report" Component={Report} />
          <Route path="invoice" Component={Invoice} />
          <Route path="raise-query" Component={RaiseQuery} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRoutes;
