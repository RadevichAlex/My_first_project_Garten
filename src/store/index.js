import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cart";
import { categoriesReducer } from "./reducers/categories";
import { productReducer } from "./reducers/product";
import { productsReducer } from "./reducers/products";

const rootReducer = combineReducers({
    category: categoriesReducer,
    products: productsReducer,
    product: productReducer,
    cart: cartReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk))