import { authConstants } from "./constants";
import axiosInstance from "../api/api.axios";


// create product 
export const product = (_product) => {
    return async (dispatch) => {
        const res = await axiosInstance.post('/api/admin/product',_product )
        if (res.status === 200) {
            console.log("creatate product")
            dispatch({
                type: authConstants.PRODUCT_SUCCESS,
                payload: {
                    ...res.data
                }
            })
        }
        else {
            console.log(" error creatate product")
            dispatch({
                type: authConstants.PRODUCT_FAILURE,
                payload: {
                    ...res.data
                }
            })
        }

    }

}

// get all category 
export const getProduct = () => {
    return async (dispatch) => {
        const res = await axiosInstance.post('/api/admin/getproductbyadmin')
        if (res.status === 200) {
            console.log("get product")
            dispatch({
                type: authConstants.GETPRODUCT_SUCCESS,
                payload: {
                    ...res.data
                }
            })
        }
        else {
            console.log("erroe get product")
            dispatch({
                type: authConstants.GETPRODUCT_FAILURE,
                payload: {
                    payload: { error: "error getPRODUCT" }
                }
            })
        }
    }

}

// update category 
export const updatProduct = (_updateproduct) => {
    return async (dispatch) => {
        const res = await axiosInstance.post('/api/admin/updateproduct', _updateproduct)
        if (res.status == 200) {
            dispatch({
                type: authConstants.UPDATEPRODUCT_SUCCESS,
                payload: {
                    ...res.data
                }
            })
        }
        else {
            dispatch({
                type: authConstants.UPDATEPRODUCT_FAILURE,
                payload: {
                    payload: { error: "error UPDATEproduct" }
                }
            })
        }
    }
}

// delete category 
export const deleteProduct = (_deleteproduct) => {
    return async (dispatch) => {
        const res = await axiosInstance.post('/api/admin/deleteproduct', _deleteproduct)
        if (res.status == 200) {
            dispatch({
                type: authConstants.DELETEPRODUCT_SUCCESS,
                payload: {
                    ...res.data
                }
            })
        }
        else {
            dispatch({
                type: authConstants.DELETEPRODUCT_FAILURE,
                payload: {
                    error: "error DELETEPRPDUCT "
                }
            })
        }
    }
}