import {useCallback, useState} from "react";
import cartRepository from "../../repository/cartRepository";
import {useCart} from "../../providers/CartProvider";


export const useChangeQuantity = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const {refetchCart} = useCart();

    const changeQuantity = useCallback(async (orderProductId, newQuantity) => {
        setLoading(true);
        setError(null);

        try {
            const response = await cartRepository.changeQuantity(orderProductId, newQuantity);

            // 🔥 IMPORTANT
            await refetchCart();

            return response.data;
        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    }, [refetchCart]);

    return {changeQuantity, loading, error};
};