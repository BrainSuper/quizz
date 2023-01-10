import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import quizzReducer from "./reducers/quizzReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    quizz: quizzReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export type RootState = ReturnType<typeof rootReducer>;