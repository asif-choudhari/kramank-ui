import Homepage from "@/area/homepage/homepage";
import Login from "@/area/login/login";
import { Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" Component={Homepage} />
      <Route path="/login" Component={Login} />
    </Routes>
  );
}

export default AppRoutes; 