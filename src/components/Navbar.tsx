import { useContext, useState } from 'react'
import { Button, Container, Nav, Navbar as NavbarBS } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import CartPanel from './CartPanel';
import { CartContext } from '../context/CartContext';

const Navbar = () => {

    const [cartOpen, setCartOpen] = useState(false);

    const { state } = useContext(CartContext);

    // console.log('state count: ', state.length);

    const itemsInCart = () => {
        const result = state.reduce((total, x) => x.quantity + total, 0)
        return result;
    }

    return (
        <NavbarBS bg="primary" data-bs-theme="dark" >
            <Container>
                <NavbarBS.Brand >Shopping Cart</NavbarBS.Brand>
                <Nav className="me-auto">
                    {/* <Nav.Link as={NavLink} to="/">Home</Nav.Link> */}
                    <Nav.Link as={NavLink} to="/">Store</Nav.Link>
                    <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                </Nav>
                <Button
                    variant='outline-light'
                    className='d-flex align-items-center justify-content-center'
                    style={{ width: "3rem", height: "3rem", position: "relative" }}
                    onClick={() => setCartOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                    {itemsInCart() > 0 && <div
                        className='bg-danger rounded-circle d-flex justify-content-center align-items-center'
                        style={{ width: "1rem", height: "1rem", padding: "10px", fontSize: "12px", fontWeight: "bold", position: "absolute", right: 0, top: 0, transform: "translate(5px, -5px)" }}
                    >{itemsInCart()}</div>}
                </Button>
            </Container>

            <CartPanel open={cartOpen} onHide={() => setCartOpen(false)}/>
        </NavbarBS>
    )
}

export default Navbar