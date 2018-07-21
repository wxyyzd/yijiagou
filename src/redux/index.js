import {createStore} from "redux"; //createstore 创建store;
import {combineReducers,compose} from "redux";// combineReducers 合并reducer
import footerreducer from "./reducer/footerreducer";
var reducer = combineReducers({
	footerreducer
})
// const store = createStore(reducer,applyMiddleware(thunk,promiseMiddleware)); //applyMiddleware 应用中间件

//开发 阶段中用
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    
  ));
export default store;
