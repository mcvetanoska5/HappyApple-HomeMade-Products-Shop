import {useCallback, useState, useContext} from "react";
import cartRepository from "../../repository/cartRepository";
import { useCart} from "../../providers/CartProvider";
import AuthContext from "../../contexts/authContext";

export const useAddToCart = () => {
    const [addToCartLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showLoginModal, setShowLoginModal] = useState(false);

    const { refetchCart, triggerAddToCartAnimation } = useCart();
    const { isLoggedIn } = useContext(AuthContext);

    const addToCart = useCallback(async (data) => {
        if (!isLoggedIn) {
            setShowLoginModal(true);
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await cartRepository.addToCart(data);
            await refetchCart();
            triggerAddToCartAnimation();
            return response.data;
        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    }, [refetchCart, isLoggedIn]);

    return { addToCart, addToCartLoading, error, showLoginModal, setShowLoginModal };
};