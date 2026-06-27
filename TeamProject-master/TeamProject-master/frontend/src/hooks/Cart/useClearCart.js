import {useCallback, useState} from "react";
import cartRepository from "../../repository/cartRepository";


export const useClearCart = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const clearCart = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await cartRepository.clearCart();
            return response.data;
        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    return { clearCart, loading, error };
};