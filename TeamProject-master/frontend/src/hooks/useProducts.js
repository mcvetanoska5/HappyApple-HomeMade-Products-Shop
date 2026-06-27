import {useCallback, useEffect, useState} from "react";
import productRepository from "../repository/productRepository";


const initialState = {
    products: [],
    loading: true,
};


const useProducts = () => {

    const [state, setState] = useState(initialState);

    const fetch = useCallback(() => {
        setState(initialState);
        productRepository
            .listAllProducts()
            .then((response) => setState({
                products: response.data,
                loading: false,
            }))
            .catch((error) => console.log(error));
    }, []);

    const onAdd = useCallback((data) => {
        productRepository
            .addProduct(data)
            .then(() => fetch())
            .catch((error) => console.log(error));
    }, [fetch]);

    const onEdit = useCallback((id, data) => {
        productRepository
            .updateProduct(id, data)
            .then(() => fetch())
            .catch((error) => console.log(error));
    }, [fetch]);

    const onDelete = useCallback((id) => {
        productRepository
            .delete(id)
            .then(() => fetch())
            .catch((error) => console.log(error));
    }, [fetch]);

    const changeQuantity = useCallback((id, data) => {
        productRepository
            .changeQuantity(id, data)
            .then(() => fetch())
            .catch((error) => console.log(error));
    }, [fetch]);

    const addDiscount = useCallback((id, data) => {
        productRepository
            .addDiscount(id, data)
            .then(() => fetch())
            .catch((error) => console.log(error));
    }, [fetch]);

    const deleteDiscount = useCallback((id) => {
        productRepository
            .deleteDiscount(id)
            .then(() => fetch())
            .catch((error) => console.log(error));
    }, [fetch]);

    useEffect(() => {
        fetch();
    }, [fetch]);

    return {...state, fetch, onAdd, onEdit, onDelete, changeQuantity, addDiscount, deleteDiscount};

};

export default useProducts;