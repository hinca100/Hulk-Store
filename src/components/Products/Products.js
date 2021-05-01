import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Product from '../Product'
import Loading from '../Loading'

export default function Products(props){
const  {
     products: {result, loading, error},
     addProductCart
    } = props
    
    return (
    <Container>
        <Row>
            { loading  || !result 
            ? (
                <Loading />
            ) :  ( 
                result.map((product, index) =>(
                <Product  key={product.id} 
                product={product} 
                addProductCart={addProductCart}/>
                ))
            )}
        </Row>
    </Container>


    )
}