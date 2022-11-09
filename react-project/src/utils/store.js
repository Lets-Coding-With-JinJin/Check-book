import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducer from "../rootReducer";
import rootSaga from "../rootSaga";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware({
    context: { history: history },
});
const initialState = {};

const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware, logger],
    devTools: true,
    preloadedState: initialState,
});

sagaMiddleware.run(rootSaga);

export default store;