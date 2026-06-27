import { useCallback, useState } from "react";
import cartRepository from "../../repository/cartRepository";
import { useCart } from "../../providers/CartProvider";

export const useRemoveFromCart = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { refetchCart } = useCart();

    const removeFromCart = useCallback(async (orderProductId) => {
        setLoading(true);
        setError(null);

        try {
            const response = await cartRepository.removeFromCart(orderProductId);
            await refetchCart();

            return response.data;
        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    }, [refetchCart]);

    return { removeFromCart, loading, error };
};