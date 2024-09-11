import { combineReducers } from 'redux';
import cartReducer from './cartReducer';

let reducers = combineReducers({
    cartReducer: cartReducer,
});

const rootReducer = (state: { cartReducer: { selectedItems: { items: never[]; restaurantName: string; }; }; } | Partial<{ cartReducer: never; }> | undefined, action: { type: any; payload: { restaurantName: any; }; }) => {
    return reducers(state, action);
};

export default rootReducer;