let defaultState = {
    selectedItems: {items: [], restaurantName: ""}
}

let cartReducer = (state = defaultState, action: { type: any; payload: {
    checkboxValue: any;
    title: any; 
    restaurantName: any; 
}; }) => {
    switch (action.type) {
        case "ADD_TO_CART": 
        {
            let newState = { ...state };
            
            if (action.payload.checkboxValue) {
                console.log("ADD_TO_CART")
                
                newState.selectedItems = {
                    items: [ ...newState.selectedItems.items, action.payload],
                    restaurantName: action.payload.restaurantName,
                };  
            }else{
                console.log("REMOVE_FFROM_CART")
                newState.selectedItems = {
                    items: [
                        ...newState.selectedItems.items.filter(
                            (item: any) => item.title !== action.payload.title
                        ),
                    ],
                    restaurantName: action.payload.restaurantName,
                };
            }
            console.log(newState, "->");
            return newState;
        }
        default:
            return state;
    }
};

export default cartReducer;