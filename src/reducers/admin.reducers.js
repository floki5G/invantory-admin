
import { authConstants } from "../action/constants";

const initialState = {
    success: false,
    failed: false,
    accountalreadyexist: false,
    error: ""
}
export const adminreducers = (state = initialState, action) => {

    switch (action.type) {
        case authConstants.SIGNUP_REQUEST:
            state = {
                accountalreadyexist: true,
                success: false,
                error: "account already exist"
            }
            break;
        case authConstants.SIGNUP_SUCCESS:
            state = {
                accountalreadyexist: false,
                success: true,
                error: "account created successfull"
            }
            break;
        case authConstants.SIGNUP_FILURE:
            state = {
                accountalreadyexist: false,
                success: false,
                error: "something went wrong"
            }
            break;


            case authConstants.UPDATE_REQUEST:
                state = {
                    accountalreadyexist: true,
                    success: false,
                    error: "UPDATE REQUEST"
                }
                break;
            case authConstants.UPDATE_SUCCESS:
                state = {
                    accountalreadyexist: false,
                    success: true,
                    error: "UPDATE successfull"
                }
                break;
            case authConstants.UPDATE_FILURE:
                state = {
                    accountalreadyexist: false,
                    success: false,
                    error: "something went wrong"
                }
                break;
    


    }
    return state
}