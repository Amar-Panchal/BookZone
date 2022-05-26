import { createStore } from "redux";
import rootReducers from "./reducer/index";

const store = createStore(rootReducers)
export default store;