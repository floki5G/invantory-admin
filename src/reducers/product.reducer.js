import { authConstants } from "../action/constants";

const initialState = {
    product: [],
    loading: false,
    error: null
}

const productList = (product,stateproduct) => {
    const _product = stateproduct.filter((e)=>e._id !== product._id )
     return _product
}

export const productreducer = (state = initialState, action) => {

    switch (action.type) {

        // create product 
        case authConstants.PRODUCT_SUCCESS:

            const _product = state.product.concat( action.payload.message)

            state = {
                product: _product,
                loading: false,

            }
            break

        case authConstants.PRODUCT_FAILURE:
            state = {
                loading: true,
                error: "something went wrong"
            }

        // GET product 
        case authConstants.GETPRODUCT_SUCCESS:

            state = {
                product: action.payload.message,
                loading: false,
            }
            break
        case authConstants.GETPRODUCT_FAILURE:
            state = {
                loading: true
            }
            break

        // update product 
        case authConstants.UPDATEPRODUCT_SUCCESS:

            state = {
                product: action.payload.message,
            }
            break


        case authConstants.UPDATEPRODUCT_FAILURE:
            state = {
                ...initialState,
                loading: true,
                error: action.payload.error
            }

        // deletecategory 
        case authConstants.DELETEPRODUCT_SUCCESS:
            const _deleteproduct = action.payload.message
            const deleteproduct = productList(_deleteproduct,state.product)

            state = {
                product: deleteproduct
            }
            break

        case authConstants.DELETEPRODUCT_FAILURE:
            state = {
                ...initialState,
                loading: true,
                error: action.payload.error
            }

    }
    return state
}