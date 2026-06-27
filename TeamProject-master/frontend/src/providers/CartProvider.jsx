import { createContext, useContext, useCallback, useEffect, useState } from "react";
import cartRepository from "../repository/cartRepository";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cartAddAnimation, setCartAddAnimation] = useState(false);
    const triggerAddToCartAnimation = () => {
        setCartAddAnimation(true);
        setTimeout(() => setCartAddAnimation(false), 600);
    };

    const [cart, setCart] = useState(null);

    const fetchCart = useCallback(async () => {
        try {
            const res = await cartRepository.findCartByUser();
            setCart(res.data);
        } catch (e) {
            setCart({ list: [] }); // fallback
        }
    }, []);

    useEffect(() => {
        fetchCart();
    }, [fetchCart]);

    const value = {
        cart,
        refetchCart: fetchCart,
        setCart,
        triggerAddToCartAnimation,
        cartAddAnimation
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);