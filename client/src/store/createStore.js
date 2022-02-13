import categoryReducer from "./category";

const { combineReducers, configureStore } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
    category: categoryReducer,
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
