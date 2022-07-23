import axiosInstance from "../../api/api.axios"
import { authConstants } from "../constants"

// add new category 

export const createcategory = (formData) => {
    return async (dispatch) => {
        const res = await axiosInstance.post(`/api/category`, formData)
        if (res.status === 200) {
            dispatch({
                type: authConstants.CATEGORY_SUCCESS,
                payload: {
                    ...res.data
                }
            })
        }
        else {
            dispatch({
                type: authConstants.CATEGORY_FAILURE,
                payload: {
                    payload: { error: "error category " }
                }
            })
        }

    }
}



// get all categories 
export const getCategory = () => {
    return async (dispatch) => {
        const res = await axiosInstance.post('/api/getcategory')
        if (res.status === 200) {
            dispatch({
                type: authConstants.GETCATEGORY_SUCCESS,
                payload: {
                    ...res.data
                }
            })
        }
        else {
            dispatch({
                type: authConstants.GETCATEGORY_FAILURE,
                payload: {
                    payload: { error: "error getcategory " }
                }
            })
        }
    }

}


// update category 
export const updatCategory = (_updatecategory) => {
    return async (dispatch) => {
        const res = await axiosInstance.post('/api/updatecategory', _updatecategory)
        if (res.status == 200) {
            dispatch({
                type: authConstants.UPDATECATEGORY_SUCCESS,
                payload: {
                    ...res.data
                }
            })
        }
        else {
            dispatch({
                type: authConstants.UPDATECATEGORY_FAILURE,
                payload: {
                    payload: { error: "error UPDATEcategory " }
                }
            })
        }
    }
}


// delete category
export const deleteCategory = (_deletecategory) => {
    return async (dispatch) => {
        const res = await axiosInstance.post('/api/deletecategory', _deletecategory)
        if (res.status == 200) {
            dispatch({
                type: authConstants.DELETE_SUCCESS,
                payload: {
                    ...res.data
                }
            })
        }
        else {
            dispatch({
                type: authConstants.DELETE_FAILURE,
                payload: {
                    payload: { error: "error UPDATEcategory " }
                }
            })
        }
    }
}