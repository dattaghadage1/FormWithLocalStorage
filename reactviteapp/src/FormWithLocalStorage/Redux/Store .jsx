import { configureStore} from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk';
import createReducer from '../Redux/FormSlice'
const store = configureStore({
    reducer: createReducer,
    middleware: [thunkMiddleware],
});
export default store