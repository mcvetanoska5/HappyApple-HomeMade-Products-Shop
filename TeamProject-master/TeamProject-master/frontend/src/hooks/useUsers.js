import {useCallback, useEffect, useState} from "react";
import userRepository from "../repository/userRepository";

const initialState = {
    users: [],
    loading: true,
};

const useUsers = () => {

    const [state, setState] = useState(initialState);

    const fetch = useCallback(() => {
        setState(initialState);

        userRepository
            .listUsers()
            .then((response) => {
                console.log("Response from backend:", response)
                setState({
                    users: response.data,
                    loading: false,
                });
            })
            .catch((error) => console.log(error))
    }, []);

    const onAdd = useCallback((data) => {
        userRepository
            .registerUser(data)
            .then(() => fetch())
            .catch((error) => console.log(error));
    }, [fetch]);

    const onEdit = useCallback((data) => {
        userRepository
            .updateUser(data)
            .then(() => fetch())
            .catch((error) => console.log(error));
    }, [fetch])

    const onDelete = useCallback((username) => {
        userRepository
            .deleteUser(username)
            .then(() => fetch())
            .catch((error) => console.log(error));
    }, [fetch])


    useEffect(() => {
        fetch()
    }, [fetch]);

    return {...state, onAdd, onEdit, onDelete};

};

export default useUsers;