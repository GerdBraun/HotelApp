import { Outlet } from "react-router-dom";
import Navbar from "./partials/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
