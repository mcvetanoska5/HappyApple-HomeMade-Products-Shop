import instance from "../services/api";

const productRepository = {

    listAllProducts: async () => {
        return await instance.get("/products");
    },

    findById: async (id) => {
        return await instance.get(`/products/${id}`)
    },

    addProduct: async (data) => {
        return await instance.post(`/products/add`, data);
    },

    updateProduct: async (id, data) => {
        return await instance.put(`/products/${id}/update`, data);
    },

    delete: async (id) => {
        return await instance.delete(`/products/${id}/delete`);
    },

    changeQuantity: async (productId, q) => {
        return await instance.patch(`/products/${productId}/quantity?q=${q}`)
    },

    addDiscount: async (productId, discount) => {
        return await instance.post(`/products/${productId}/discount?discount=${discount}`);
    },

    deleteDiscount: async (productId) => {
        return await instance.delete(`/products/${productId}/discount`);
    },

    calculateDiscountPrice: async (id) => {
        return await instance.post(`/products/${id}/calculate-discount-price`);
    }
};

export default productRepository;