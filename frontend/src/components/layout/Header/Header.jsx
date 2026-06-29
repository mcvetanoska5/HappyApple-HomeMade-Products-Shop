import {Link, useLocation} from "react-router-dom";
import {Text} from "../../Text";
import {Icon} from "../../Icon";
import AuthenticationToggle from "../../auth/AuthenticationToggle";
import {useCart} from "../../../providers/CartProvider";
import {useEffect, useRef, useState} from "react";

const pages = [
    {path: "/", name: "Home"},
    {path: "/products", name: "Shop"},
    {path: "/aboutUs", name: "About Us"},
    {path: "/contactUs", name: "Contact Us"},
    {path: "/cart", name: "Cart"},
    {path: "/users", name: "My Account"},
];

const Header = () => {

    const {cart} = useCart();

    const items = cart?.list || [];

    const totalItems = items.reduce(
        (sum, item) => sum + (item.requiredQuantity || 0),
        0
    );

    const [animate, setAnimate] = useState(false);
    const prevTotalRef = useRef(0);

    useEffect(() => {
        if (totalItems > prevTotalRef.current) {
            setAnimate(true);
            setTimeout(() => setAnimate(false), 700);
        }
        prevTotalRef.current = totalItems;
    }, [totalItems]);

    const {pathname} = useLocation();

    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header>
            <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="flex justify-between items-center h-16">

                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <Link
                                className="font-heading font-bold text-2xl text-slate-900 tracking-tight"
                                to="/"
                            >
                                Happy Apple<Text className="text-primary-600">.</Text>
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8">
                            {pages.map((page) => (
                                <Link
                                    key={page.path}
                                    to={page.path}
                                    className={`font-medium transition-colors
                                    ${pathname === page.path
                                        ? "text-slate-900"
                                        : "text-slate-500"
                                    } hover:text-slate-900`}
                                >
                                    {page.name}
                                </Link>
                            ))}
                        </div>


                        {/* Right Side */}
                        <div className="flex items-center space-x-4">

                            <AuthenticationToggle/>

                            {/* Cart Icon */}
                            <Link
                                className="text-slate-400 hover:text-slate-900 transition-colors relative"
                                to="/cart"
                            >
                                <div
                                    className={`relative transition-all duration-300 ${
                                        animate ? "scale-150 rotate-6" : "scale-100"
                                    }`}
                                >
                                    <Icon className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                        />
                                    </Icon>

                                    {/* BADGE */}
                                    {totalItems > 0 && (
                                        <Text
                                            variant="bold"
                                            className={`
                absolute -top-2 -right-2
                bg-primary-600 text-white text-[11px]
                font-bold w-5 h-5 rounded-full
                flex items-center justify-center
                transition-all duration-300
                ${animate ? "animate-bounce scale-125" : ""}
            `}
                                        >
                                            {totalItems}
                                        </Text>
                                    )}

                                    {/* 🔥 BIG FILLED EXPLOSION EFFECT */}
                                    {animate && (
                                        <>
                                            {/* BIG OUTER CIRCLE */}
                                            <span
                                                className="absolute inset-[-12px] rounded-full bg-primary-600 opacity-20 animate-ping"></span>

                                            {/* MEDIUM CIRCLE */}
                                            <span
                                                className="absolute inset-[-8px] rounded-full bg-primary-600 opacity-30 animate-pulse"></span>

                                            {/* INNER GLOW */}
                                            <span
                                                className="absolute inset-0 rounded-full bg-primary-600 opacity-40"></span>
                                        </>
                                    )}
                                </div>
                            </Link>


                            {/* Hamburger Button */}
                            {/* Hamburger Button */}
                            {/* Hamburger Button (Mobile Only) */}
                            <button
                                onClick={() => setMobileOpen(!mobileOpen)}
                                className="block md:hidden p-2 text-slate-900"
                            >
                                <Icon className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M4 6h16M4 12h16M4 18h16"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                    />
                                </Icon>
                            </button>

                        </div>
                    </div>

                </div>


                {/* MOBILE MENU */}
                <div
                    className={`${mobileOpen ? "flex" : "hidden"}
                    md:hidden absolute top-full left-0 w-full
                    bg-white shadow-lg p-4 flex-col gap-4 z-50`}
                >

                    {pages.map((page) => (
                        <Link
                            key={page.path}
                            to={page.path}
                            onClick={() => setMobileOpen(false)}
                            className={`font-medium transition-colors block w-full
                            ${pathname === page.path
                                ? "text-slate-900"
                                : "text-slate-500"
                            }
                            hover:text-primary-600`}
                        >
                            {page.name}
                        </Link>
                    ))}

                </div>

            </nav>
        </header>
    );
};

export default Header;