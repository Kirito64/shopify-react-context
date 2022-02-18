import React, { useEffect, useContext ,useState} from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'
// import { Text, Div, Button, Row, Col, Container } from 'atomize'
import Loading from '../components/Loading'
import ProductGallery from '../components/ProductGallery';
import {Container, Row, Col, Button} from "react-bootstrap"
import AnimatedButton from "../components/animatedButton"
import Quantity from "../components/Quantity"
import s from "./ProductPage.module.css";
const ProductPage = () => {
    let { id } = useParams()
    const { fetchProductWithId, addItemToCheckout, product, clearProduct} = useContext(ShopContext)

    const [quantity, setQuan] = useState(1);

    const handleChange1 = ()=>{
        setQuan(quantity+1);
    }

    const handleChange2 = ()=>{
        if(quantity!== 0)
            setQuan(quantity -1);
    }

    

    useEffect(() => {
        fetchProductWithId(id)
        // fetchData()
        return function cleanup(){
            // setProduct(null)
            clearProduct();
            
        };
    }, [ fetchProductWithId, id, clearProduct]);
    if(!product) return <Loading></Loading>
    if (!product.title) return <Loading />
    return (
        <Container className = " d-flex align-items-center justify-content-center flex-column">
            <Row style = {{minHeight:"8rem" , minWidth: "100vw"}}>                                 </Row>
            <Row className = " mb-3 p-5 my-auto">
                <Col className = "mx-5">
                    <ProductGallery images = {product.images}></ProductGallery>
                </Col>
                <Col className = "d-flex align-items-center flex-column h-100">
                    <div className="my-5">
                    <p className="h1 my-3">{product.title}</p>
				    <p className="h3 my-3">INR {product.variants[0].price}</p>
                    <Quantity quantity = {quantity} handleIncrement = {handleChange1} handleDecrement ={handleChange2} ></Quantity>
                    <AnimatedButton variant = "dark" className = "my-5" click={() => addItemToCheckout(product.variants[0].id, quantity)}>Add To Cart</AnimatedButton></div>
                </Col>
            </Row>

            <Row class="min-vw-100">
                <div dangerouslySetInnerHTML = {{__html: product.descriptionHtml}} className = {`${s.topBorder} my-3 py-3   `}></div>
            </Row>
            
        </Container>
    )
}

export default ProductPage
