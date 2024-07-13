import { Routes, Route } from "react-router-dom";
import LandingPage from "@/area/landing-page/landing-page";
import Login from "@/area/login/login";
import Dashboard from "@/area/dashboard/dashboard";
import DashboardHome from "@/area/dashboard/home/home";
import AdminBranch from "@/area/dashboard/admin-branch/admin-branch";
import Budget from "@/area/dashboard/budget/budget";
import Report from "@/area/dashboard/report/report";
import Invoice from "@/area/dashboard/invoice/invoice";
import RaiseQuery from "@/area/dashboard/raise-query/raise-query";
import PrivateRoute from "./private-route";
import Waitlist from "@/area/waitlist/waitlist";
import Products from "@/area/products/products-services";
import ProductPage from "@/area/product/product";
import Home from "@/area/landing-page/home";
import TermsConditions from "@/area/landing-page/terms-conditions";
import PrivacyPolicy from "@/area/landing-page/privacy-policy";
import ReturnPolicy from "@/area/landing-page/return-policy";

function AppRoutes() {
  return (
    <Routes>
      <Route path="" Component={LandingPage}>
        <Route path="" Component={Home} />
        <Route path="privacy-policy" Component={PrivacyPolicy} />
        <Route path="return-policy" Component={ReturnPolicy} />
        <Route path="terms-and-conditions" Component={TermsConditions} />
      </Route>
      <Route path="login" Component={Login} />
      <Route path="waitlist" Component={Waitlist} />
      <Route Component={PrivateRoute}>
        <Route path="home" Component={Products} />
        <Route path="product/:id" Component={ProductPage} />
        <Route path="dashboard" Component={Dashboard}>
          <Route path="home" Component={DashboardHome} />
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
