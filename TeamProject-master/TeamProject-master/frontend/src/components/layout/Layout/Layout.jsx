import Header from "../Header/Header";
import {Outlet} from "react-router-dom";
import Footer from "../Footer/Footer";


const Layout = () => {
    return (
        <div className="font-body text-slate-600 antialiased bg-white">

            <Header/>

            <main className="pt-16">
                <Outlet/>
            </main>

            <Footer/>

        </div>
    );
};

export default Layout;