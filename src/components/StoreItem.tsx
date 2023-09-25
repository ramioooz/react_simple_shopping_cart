import { useContext } from 'react'
import { Button, Card } from 'react-bootstrap'
import { CartContext } from '../context/CartContext'
import { storeItemType } from '../types/types';



const StoreItem = ({ id, name, price, imgUrl, details }: storeItemType) => {

    const {state, dispatch} = useContext(CartContext);
    
    // console.log('state count: ', state.length);

    const itemQuantity = (itemId: number) => {
        const result = state.find((itemObj) => itemObj.id == itemId)?.quantity || 0;
        return result;
    }

    // const quantity = 0;
    const quantity = itemQuantity(id);
    return (

        <Card
            style={{ maxWidth: "400px" }}
        >
            <Card.Img
                variant="top"
                src={imgUrl}
                height={200}
                style={{ objectFit: "cover" }}
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between">
                    <div>{name}</div>
                    <div>${price}</div>
                </Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                {quantity < 1 ?
                    <Button 
                    variant="primary"
                    onClick={() => dispatch({type: 'INCREASE_ITEM', payload: id})}
                    >Add To Cart</Button> :
                    <div className='d-flex flex-column align-items-center justify-content-center mb-3 '>
                        <div className='mb-2 d-flex gap-2 align-items-center'>
                            <Button 
                            variant="primary"
                            onClick={() => dispatch({type: 'DECREASE_ITEM', payload: id})}
                            >-</Button>
                            <span className="fw-bold">{quantity}</span> in the cart
                            <Button 
                            variant="primary"
                            onClick={() => dispatch({type: 'INCREASE_ITEM', payload: id})}
                            >+</Button>
                        </div>
                        <Button 
                        variant="danger"
                        onClick={() => dispatch({type: 'REMOVE_ITEM', payload: id})}
                        >Remove</Button>
                    </div>
                }



            </Card.Body>
        </Card>


    )
}

export default StoreItem