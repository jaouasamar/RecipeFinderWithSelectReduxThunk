
import rootreducer from "./rootreducer";
import {createStore,compose,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const devtools= window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store=createStore(rootreducer,compose(applyMiddleware(thunk),devtools));
export default store