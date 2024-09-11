import { StoreEnhancer, legacy_createStore as createStore} from 'redux'
import reducer from './reducer';

export default function configureStore(initialState: StoreEnhancer<{}, {}> | undefined) {
    const store = createStore(reducer, initialState);
    return store;
}