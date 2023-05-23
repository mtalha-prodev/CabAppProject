import {createStore} from 'redux';
import thunk from 'redux-thunk';
import {driverReducer} from './reducers/driverVerificationReducer';

const store = createStore(driverReducer);
export {store};
