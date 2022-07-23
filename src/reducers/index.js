import { combineReducers } from "redux";
import { authreducers } from "./auth.reducers";
import { categoryreducer } from "./category.reducer";
import { adminreducers } from "./admin.reducers";
import { productreducer } from "./product.reducer";

const rootReducer = combineReducers({

    adminsignIn: authreducers,
    adminsignup: adminreducers,
    getcategory: categoryreducer,
    getproduct: productreducer,
})
export default rootReducer
