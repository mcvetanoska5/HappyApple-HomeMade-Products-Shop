import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import './styles/globals.css';
import {IndexPage} from './pages/IndexPage';
import {CartPage} from './pages/CartPage';
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Layout from "./components/layout/Layout/Layout";
import ProtectedRoute from "./components/routing/ProtectedRoute";
import {ShopPage} from "./pages/ShopPage";
import UserPage from "./pages/UserPage";
import {ProductPage} from "./pages/ProductPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import DeliveryForm from "./components/DeliveryForm/DeliveryForm";

const App = () => {
    return (
        <Router>

            <ScrollToTop/>

            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<IndexPage/>}/>
                    <Route path="/contactUs" element={<ContactUsPage/>}/>
                    <Route path="/aboutUs" element={<AboutUsPage/>}/>
                    <Route path="/products" element={<ShopPage/>} />
                    <Route path="/product/:id" element={<ProductPage/>} />
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route element={<ProtectedRoute/>}>
                        <Route path="/cart" element={<CartPage/>}/>
                        <Route path="/users" element={<UserPage/>}/>
                        <Route path="/delivery" element={<DeliveryForm/>}/>
                    </Route>
                </Route>
            </Routes>

        </Router>
    );
};

export default App;
