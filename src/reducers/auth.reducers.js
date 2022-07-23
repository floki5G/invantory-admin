import { signIn } from "../action/auth.action";

import { authConstants } from "../action/constants";
const initialState = {
    token: null,
    user: {
        firstName: '',
        lastName: '',
        email: '',
        picture: ''
    },
    authenticate: false,
    authenticating: false,
    loading: false,
    error: null,
    message: ''
}

export const authreducers = (state = initialState, action) => {
 
    switch (action.type) {
        case authConstants.SIGNIN_REQUEST:
            state = {
                ...state,
                authenticating: true
            }
            break;
        case authConstants.SIGNIN_SUCCESS:
            state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                authenticate: true,
                authenticating: false
            }
            break;
        case authConstants.SIGNIN_FILURE:
            state = {
                ...state,
                error: action.payload.error,
                authenticate: false,
                authenticating: false
            }
            break;

        case authConstants.SIGNOUT_SUCCESS:
            state = {
                ...initialState
            }
            break;

    }

    return state;
}