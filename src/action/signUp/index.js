import axiosInstance from "../../api/api.axios"
import { authConstants } from "../constants"



// create new account 
export const actionsignup = (signupdata) => {
    return async (dispatch) => {
        const res = await axiosInstance.post('api/admin/signup', signupdata)
        if (res.status === 201) {
            dispatch({
                type: authConstants.SIGNUP_REQUEST,
                payload: { error: "user already xist login" }
            })
        }
        else {
            if (res.status === 200) {
                dispatch({
                    type: authConstants.SIGNUP_SUCCESS,
                    payload: {
                        ...res.data
                    }
                })
            } else {
                dispatch({
                    type: authConstants.SIGNUP_FILURE,
                    payload: { error: "error invalid login" }
                })
            }

        }

    }
}




// update profile 
export const actionupdate = (updata) => {
    return async (dispatch) => {
        const res = await axiosInstance.post('api/admin/update', updata)
        if (res.status === 201) {
            dispatch({
                type: authConstants.UPDATE_REQUEST,
                payload: { error: "user already xist login" }
            })
        }
        else {
            if (res.status === 200) {
                dispatch({
                    type: authConstants.UPDATE_SUCCESS,
                    payload: {
                        ...res.data
                    }
                })
            } else {
                dispatch({
                    type: authConstants.UPDATE_FILURE,
                    payload: { error: "error invalid login" }
                })
            }

        }

    }
}