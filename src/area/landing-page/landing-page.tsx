import TopBar from "./top-bar";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <TopBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default LandingPage;
