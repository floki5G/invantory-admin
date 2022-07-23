import { authConstants } from "../action/constants";
import { getallCategories ,updateallCategories} from "../api/api.url";
const initialState = {
    categories: [],
    loading: false,
    error: null
}

export const categoryreducer = (state = initialState, action) => {

    switch (action.type) {
        // getcategory 
        case authConstants.GETCATEGORY_SUCCESS:
            state = {
                categories: action.payload.message,
                loading: false,

            }
            break
        case authConstants.GETCATEGORY_FAILURE:
            state = {
                loading: true,
                error: "something went wrong"
            }
            break

        // createcategory 
        case authConstants.CATEGORY_SUCCESS:

            const newcategory = action.payload.message

            const updategetcategory = getallCategories(newcategory, state.categories, newcategory.parentId)
            state = {
                categories: updategetcategory,
                loading: false,

            }
            break
        case authConstants.CATEGORY_FAILURE:

        
            state = {
                ...initialState,
                loading: true,
                error: action.payload.error
            }
            break



        // updatecategory 

        case authConstants.UPDATECATEGORY_SUCCESS:
      
           
            state = {

                categories: action.payload.message ,

            }
            break


        case authConstants.UPDATECATEGORY_FAILURE:
            state = {
                ...initialState,
                loading: true,
                error: action.payload.error
            }

      // deletecategory 

      case authConstants.DELETE_SUCCESS:
      
           
        state = {

            categories: action.payload.message ,

        }
        break


    case authConstants.DELETE_FAILURE:
        state = {
            ...initialState,
            loading: true,
            error: action.payload.error
        }


    }
    return state
}
