import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globals.css';
import AuthProvider from "./providers/authProvider";
import {CartProvider} from "./providers/CartProvider";

const root = ReactDOM.createRoot(
    document.getElementById('root')
);

root.render(
    <React.StrictMode>
        <AuthProvider>
            <CartProvider>
                <App/>
            </CartProvider>
        </AuthProvider>
    </React.StrictMode>
);
