import { configureStore} from "@reduxjs/toolkit";
import rootreducers from "./components/redux/reducers/main";

//const middleware = [thunk];

const store = configureStore({
    reducer: rootreducers
}
);

export default store;