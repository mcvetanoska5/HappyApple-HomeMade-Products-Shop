import instance from "../services/api";


const orderProductRepository = {
    findById : async (id) => {
        return await instance.get(`/orderProducts/${id}`)
    },

    findAll : async () => {
        return await instance.get(`/orderProducts`)
    },

    calculatePricePerOrderProduct : async (orderProductId) => {
        return await instance.get(`/orderProducts/${orderProductId}/price`)
    }

};
export default orderProductRepository;