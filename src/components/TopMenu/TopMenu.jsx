import React from 'react';
import { Container, Navbar, Nav} from 'react-bootstrap'
import Cart from '../Cart'
import {ReactComponent as Logo} from '../../assets/svg/marvel-logo.svg'
import './TopMenu.scss'


export default function TopMenu(props) {
    const {productsCart, getProductsCart, products} = props;
    
    return (
    <Navbar bg='dark' variant='dark' className= 'top-menu'>
       <Container>
       <BrandNav />
       {/**<MenuNav />*/}
       <Cart 
        productsCart={productsCart} 
        getProductsCart={getProductsCart}
        products={products} />
       </Container>
   </Navbar>

    )
}


function BrandNav() {
    return(<Navbar.Brand>
        <Logo />
        <h1>Hulk Store</h1>
    </Navbar.Brand>


    )
}
function MenuNav() {
    return(
    <Nav className='mr-auto'>
        <Nav.Link href="#">capitan america</Nav.Link>
        <Nav.Link href="#">iron man</Nav.Link>
        <Nav.Link href="#">thor</Nav.Link>

    </Nav>
)}
