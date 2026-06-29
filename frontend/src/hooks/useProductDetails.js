import {useCallback, useEffect, useState} from "react";
import productRepository from "../repository/productRepository";

const useProductDetails = (id) => {
    const [product, setProduct] = useState(null);

    const fetch = useCallback(() => {
        productRepository
            .findById(id)
            .then((response) => {
                setProduct(response.data)
            })
            .catch((error) => console.log(error));
    }, [id])

    useEffect(() => {
        productRepository
            .findById(id)
            .then((response) => setProduct(response.data))
            .catch((error) => console.log(error));
    }, [id]);

    return {product, fetch};
};

export default useProductDetails;