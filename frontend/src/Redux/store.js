import {
  applyMiddleware,
  combineReducers,
  legacy_createStore
} from "redux";
import thunk from "redux-thunk";
import {reducer as adminUserReducer} from "./adminUserReducer/reducer"
import {reducer as adminPetsReducer} from "./adminPetsReducer/reducer"

// import { reducer as shelterReducer } from "./hireReducer/reducer";
// import AdminReducer from "./admin/admin.reducer"

const rootReducer = combineReducers({
  adminUserReducer,
  adminPetsReducer
});

export const store = legacy_createStore(
  rootReducer,
  applyMiddleware(thunk)
);
