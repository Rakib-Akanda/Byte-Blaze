import { Outlet } from "react-router-dom";
import Blogs from "../../pages/Blogs";
import Bookmarks from "../../pages/Bookmarks";
import Home from "../../pages/Home";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const MainLayouts = () => {
  return (
    <div>
      <div className="h-16">
        <Navbar></Navbar>
      </div>
      {/* Packet */}
      <div className="min-h-[calc(100vh-116px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
