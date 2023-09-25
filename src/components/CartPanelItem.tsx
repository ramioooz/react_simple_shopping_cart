import { useContext } from "react";
import { CartItemType, storeItemType } from "../types/types";
import { CartContext } from "../context/CartContext";
import { ensure } from "../methods";
import storeItems from "../data/items.json"
import { Button } from "react-bootstrap";

export const CartPanelItem = ({ id, quantity }: CartItemType) => {

    const { dispatch } = useContext(CartContext);

    const relatedItem = ensure(storeItems.find((item: storeItemType) => item.id == id));

    return (
        <>
            <div 
            className="p-2 d-flex" 
            style={{ border: "1px solid gray", borderRadius: "10px", position: "relative" }}>
                <div className='d-flex gap-2 align-items-center'>
                    <img
                        src={relatedItem?.imgUrl}
                        // height={100}
                        // width={100}
                        style={{ width: "125px", height: "75px", objectFit: "cover" }}
                    />
                    <div>
                        <div>{relatedItem?.name} x {quantity}</div>
                        <div>${relatedItem?.price}</div>
                    </div>
                </div>
                <div className="d-flex align-items-center gap-2 ms-auto">
                    <div className="fw-bold">${relatedItem?.price * quantity}</div>
                    <Button
                        variant="outline-dark"
                        size='sm'
                        // style={{ position: "absolute", right: 0, top: 0, transform: "translate(-10px, 10px)" }}
                        onClick={() => dispatch({ type: "REMOVE_ITEM", payload: id })}
                    >&times;</Button>
                </div>
            </div>
        </>
    )
}