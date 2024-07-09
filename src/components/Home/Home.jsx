import { Outlet } from "react-router-dom";

import Footer from "../Footer/Footer";
import Team from "../Team/Team";
import Nav from "../Nav/Nav";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div className="">
            <Nav></Nav>,
            <Banner></Banner>,
            <Team></Team>,
            <Footer></Footer>,
            <Outlet></Outlet>
        </div>
    );
};

export default Home;