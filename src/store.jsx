import { createStore, applyMiddleware } from "redux";
import { createLogger   } from "redux-logger";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import rootReducer from "./reducers";

const logger = createLogger();

const store  = createStore(
	rootReducer,
	{},
	applyMiddleware(logger, reduxImmutableStateInvariant())
);

export default store;