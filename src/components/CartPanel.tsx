import { useContext } from 'react'
import { Offcanvas } from 'react-bootstrap'
import { CartContext } from '../context/CartContext'
import { storeItemType } from '../types/types'
import storeItems from '../data/items.json'
import { CartPanelItem } from './CartPanelItem'


type cartPanelType = {
  open: boolean,
  onHide: () => void,
}


const CartPanel = ({ open, onHide }: cartPanelType) => {

  const { state } = useContext(CartContext);

  const cartTotalPrice = () => {
    let result = state.reduce((total, x) => {
      const relatedItem = (storeItems.find((item) => item.id == x.id) as storeItemType);
      return total + (relatedItem?.price * x.quantity)
    }, 0)
    return result;
  }

  return (
    <Offcanvas show={open} onHide={onHide} placement='end'>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className='d-flex flex-column'>
        {(state.length > 0) ? <>
          {state.map((itemObj) => (
            <div key={itemObj.id} className='mb-2'>
              <CartPanelItem {...itemObj} />
            </div>
          ))}
          <div className="ms-auto mt-2 fw-bold">Total: ${cartTotalPrice()}</div>
        </> : 
        <div style={{height: "200px", border: "1px solid gray", display:"flex", justifyContent: "center", alignItems: "center"}}>Chart is empty</div>}
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default CartPanel

