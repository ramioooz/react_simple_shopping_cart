export type CartItemType = {
    id: number,
    quantity: number,
}

export type EditCart_ActionType = {
    type: 'INCREASE_ITEM' | 'DECREASE_ITEM' | 'REMOVE_ITEM',
    payload: number
}
export type VoidCart_ActionType = {
    type: 'LOAD_ITEMS' | 'EMPYT_CART',
}
export type ReducerActionType = EditCart_ActionType | VoidCart_ActionType;

export type componentChildrenType = {
    children: React.ReactNode
}

export type cartContextType = {
    state: CartItemType[],
    dispatch: React.Dispatch<ReducerActionType>
}

export type storeItemType = {
    id: number,
    name: string,
    price: number,
    imgUrl: string,
    details: string
}