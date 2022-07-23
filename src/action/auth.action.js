import axiosInstance from "../api/api.axios";
import { authConstants } from "./constants";

// signin 
export const signIn = (adminsignIn) => {
    return async (dispatch) => {
        const res = await axiosInstance.post(`/api/admin/signin`, {
            ...adminsignIn
        });
        if (res.status === 200) {
            const { token, user } = res.data;
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            dispatch({
                type: authConstants.SIGNIN_SUCCESS,
                payload: {
                    token, user
                }
            })
        } else {
            dispatch({
                type: authConstants.SIGNIN_FILURE,
                payload: { error: "error invalid login" }
            })
        }


    }
}

// check user signin 
export const isAdminSignin =  () => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    return async (dispatch) => {
        if (token) {
            dispatch({
                type: authConstants.SIGNIN_SUCCESS,
                payload: {
                    token, user
                }
            })
        } else {
            dispatch({
                type: authConstants.SIGNIN_FILURE,
                payload: { error: "error invalid login" }
            })
        }
    }
}


// signout 
export const adminsingout = (user) => {
    return (dispatch) => {
        const token = localStorage.getItem("token");

        if (token) {
            localStorage.clear()
            dispatch({
                type: authConstants.SIGNOUT_SUCCESS,
                payload: {
                    signout: "signout succesfull"
                }
            })
        }

    }
}