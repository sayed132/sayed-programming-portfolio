import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
// import Test from "../Pages/Shared/Navbar/Test";

const Layout = () => {
    return (
        <div>
            <Navbar/>
            {/* <Test/> */}
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Layout;