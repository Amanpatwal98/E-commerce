import { legacy_createStore} from 'redux';
import ProductReducer from '../reducers/ProductReducer'

const store = legacy_createStore(ProductReducer);

export default store;