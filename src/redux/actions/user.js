import Axios from "axios";
import { API_URL } from "../../constant/API";

export const userInputHandler = (text) => {
    return {
        type: "USERNAME",
        payload: text,
    };
};

export const getUser = (item) => {
    return {
        type: "GET_USER",
        payload: item,
    };
};

export const loginHandler = (userData) => {
    return (dispacth) => {
        // dispacth({
        //     type: "TESTING",
        //     payload: "Halo Coba Dispatch"
        // })

        // dispacth({
        //     type: "TESTING2",
        //     payload: "Coba lagi"
        // })
        const { username, password } = userData;
        Axios.get(`${API_URL}/users`, {
            params: {
                username,
                password,
            },
        })
            .then((res) => {
                if (res.data.length > 0) {
                    dispacth({
                        type: "ON_LOGIN_SUCCESS",
                        payload: res.data[0],
                    });
                } else {
                    dispacth({
                        type: "ON_LOGIN_FAIL",
                        payload: "Username atau Password Salah",
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export const registerHandler = (newUser) => {
    return (dispacth) => {
        const { username, password, fullname, role } = newUser;
        Axios.get(`${API_URL}/users`, {
            params: {
                username,
            },
        })
            .then((res) => {
                if (res.data.length == 0) {
                    Axios.post(`${API_URL}/users`, {
                        username,
                        password,
                        fullname,
                        role,
                    })
                        .then(res => {
                            dispacth({
                                type: "ON_REGISTER_SUCCESS",
                                payload: newUser,
                            });
                        })
                        .catch(err => {
                            console.log(err)
                        })
                } else {
                    dispacth({
                        type: "ON_REGISTER_FAIL",
                        payload: "Username Sudah Ada",
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
};
