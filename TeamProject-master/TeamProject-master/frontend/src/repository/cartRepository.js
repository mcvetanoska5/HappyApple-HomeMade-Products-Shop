import instance from "../services/api";

const cartRepository = {

    removeFromCart : async (orderProductId) => {
        return await instance.delete(`/cart/delete/${orderProductId}`)
    },

    findCartByUser : async () => {
        return await instance.get(`/cart`)
    },

    clearCart : async () => {
        return await instance.delete(`/cart/clear`)
    },

    addToCart : async (data) => {
        return await instance.post(`/cart/add`, data)
    },

    changeQuantity : async  (orderProductId, newQuantity) => {
        return await instance.patch(`/cart/modifyQuantity/${orderProductId}?newQuantity=${newQuantity}`)
    }
};

export default cartRepository;