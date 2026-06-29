import {Link} from "../../Link";
import {Text} from "../../Text";
import {Button} from "@mui/material";

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-1">
                        <Link className="font-heading font-bold text-2xl text-white tracking-tight mb-4 block"
                              href="#"> Happy Apple
                            <Text className="text-primary-500"> . </Text></Link>
                        <p className="text-sm text-slate-400">
                            Your destination for modern lifestyle essentials. Quality, style, and sustainability in
                            every product.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4"> Shop </h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link className="hover:text-white transition-colors" href="#"> New Arrivals </Link>
                            </li>
                            <li>
                                <Link className="hover:text-white transition-colors" href="#"> Best Sellers </Link>
                            </li>
                            <li>
                                <Link className="hover:text-white transition-colors" href="#"> Sale </Link>
                            </li>
                            <li>
                                <Link className="hover:text-white transition-colors" href="#"> Gift Cards </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4"> Support </h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link className="hover:text-white transition-colors" href="#"> Help Center </Link>
                            </li>
                            <li>
                                <Link className="hover:text-white transition-colors" href="#"> Shipping &
                                    Returns </Link>
                            </li>
                            <li>
                                <Link className="hover:text-white transition-colors" href="#"> Size Guide </Link>
                            </li>
                            <li>
                                <Link className="hover:text-white transition-colors" href="#"> Contact Us </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4"> Stay in the loop </h4>
                        <form className="flex gap-2">
                            <input placeholder="Enter your email" type="email"
                                   className="bg-slate-800 border-none rounded-md px-4 py-2 text-sm w-full focus:ring-2 focus:ring-primary-500"/>
                            <Button variant="primary"
                                    className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-bold hover:bg-primary-700 transition-colors"> Subscribe </Button>
                        </form>
                    </div>
                </div>
                <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500"> © 2025 Lumina Store.
                    All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;