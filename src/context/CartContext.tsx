import { createContext, useReducer } from "react";
import { CartItemType, ReducerActionType, componentChildrenType, cartContextType } from "../types/types";


export const CartContext = createContext({} as cartContextType);

const initialState: CartItemType[] = [];

const reducer = (state: CartItemType[], action: ReducerActionType) => {
    switch (action.type) {
        case "LOAD_ITEMS": {
            const storedJson = localStorage.getItem('storedCartItems');
            let updatedState = JSON.parse(storedJson!) || [];
            return updatedState;
        }
        case "INCREASE_ITEM": {
            // payload = id (itemId)
            // search cartItemsList for object with itemId
            let updatedState = state;
            const objFound = state.find((itemObj) => itemObj.id == action.payload);
            if (objFound != null) {
                // object found - update the state 
                updatedState = state.map((itemObj) => {
                    if (itemObj.id == action.payload) {
                        // itemObj.quantity = itemObj.quantity + 1;
                        itemObj = { ...itemObj, quantity: itemObj.quantity + 1 }
                    }
                    return itemObj;
                })
            } else {
                // object not found - create it and add it to the list
                var newItem: CartItemType = {
                    id: action.payload,
                    quantity: 1
                }

                updatedState = [...state, newItem]
            }

            // console.log('updatedState: ', JSON.stringify(updatedState));
            // save to localStorage here too...
            localStorage.setItem("storedCartItems", JSON.stringify(updatedState));
            return updatedState;
        }
        case "DECREASE_ITEM": {
            let updatedState = state;
            const itemQuantity = state.find((itemObj) => itemObj.id == action.payload)?.quantity || 0;
            if (itemQuantity == 1) {
                // remove it item from cart list
                updatedState = state.filter((itemObj) => itemObj.id != action.payload);
            } else {
                // decrease item count in the list
                updatedState = state.map((itemObj) => {
                    if (itemObj.id == action.payload) {
                        itemObj = { ...itemObj, quantity: itemObj.quantity - 1 }
                    }
                    return itemObj;
                })
            }
            
            console.log('updatedState: ', JSON.stringify(updatedState));
            // save to localStorage here too...
            localStorage.setItem("storedCartItems", JSON.stringify(updatedState));
            return updatedState;
        }
        case "REMOVE_ITEM": {
            let updatedState = state.filter((itemObj) => itemObj.id != action.payload);
            // save to localStorage here too...
            localStorage.setItem("storedCartItems", JSON.stringify(updatedState));
            return updatedState;
        }
        case "EMPYT_CART": {
            let updatedState = initialState;
            // save to localStorage here too...
            localStorage.setItem("storedCartItems", JSON.stringify(updatedState));
            return updatedState;
        }
        // case "GET_ITEM_QUANTITY": {
        //     const itemQuantity = state.find((itemObj) => itemObj.id == action.payload)?.quantity || 0;
        //     return itemQuantity
        // }

        default: {
            return state;
        }
    }
    // return state;
}

export const CartContextProvider = ({ children }: componentChildrenType) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    // useEffect(() => {
    //     localStorage.setItem('storedCartItems', JSON.stringify(state));
    // }, [state])
    
    return <CartContext.Provider value={{ state, dispatch }}>
        {children}
    </CartContext.Provider>
}