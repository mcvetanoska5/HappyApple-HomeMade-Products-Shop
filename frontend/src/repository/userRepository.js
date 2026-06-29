import instance from "../services/api";

const userRepository = {
    listUsers : async () => {
        return await instance.get(`/users`)
    },

    findByUsername : async (username) => {
        return await instance.get(`/users/${username}`)
    },


    registerUser : async (data) => {
        return await instance.post(`/users/register`, data)
    },

    deleteUser : async (username) => {
        return await instance.delete(`/users/delete/${username}`)
    },

    updateUser : async (data) => {
        return await instance.put(`/users/update`, data)
    },

    login : async (data) => {
        return await instance.post(`/users/login`, data)
    },

    me : async () => {
        return await instance.get(`/users/me`)
    }
};

export default userRepository;