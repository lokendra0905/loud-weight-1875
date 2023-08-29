import {
  applyMiddleware,
  combineReducers,
  legacy_createStore
} from "redux";
import thunk from "redux-thunk";
import { reducer as shelterReducer } from "./shelterReducer/reducer";
import { reducer as adminUserReducer } from "./adminUserReducer/reducer"
import { reducer as adminPetsReducer } from "./adminPetsReducer/reducer"
import { reducer as adoptionPetsReducer } from "./adoptionReducer/reducer"
import { reducer as loginUserReducer } from "./loginReducer/reducer"

// import AdminReducer from "./admin/admin.reducer"

const rootReducer = combineReducers({
  adminUserReducer,
  adminPetsReducer,
  loginUserReducer,
  shelterReducer,
  adoptionPetsReducer

});

export const store = legacy_createStore(
  rootReducer,
  applyMiddleware(thunk)
);
