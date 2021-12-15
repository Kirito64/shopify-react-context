import React, { useContext, useEffect , useState}  from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/shopContext'
// import { Text, Div, Row, Col, Container } from "atomize";
import {Row, Col, Container} from "react-bootstrap";
import Loading from '../components/Loading'
import ProductCard from '../components/ProductCard'

const CollectionsPage = () => {
    const {products, fetchCollection, collection, clearCollection} = useContext(ShopContext);
	let {id} = useParams();
	useEffect(()=>{

		fetchCollection(id);

		return()=>{
            clearCollection()
		}
	}, [fetchCollection, id, clearCollection])

    

    if(!collection)
        return <Loading></Loading>
     
    if (collection) 
        if(!collection.products)
            return (
                <Container className = "my-auto min-vh-100 p-5 d-flex flex-column  align-items-center" >
                    <Loading></Loading>
                </Container>
            )

    

    return (
        <Container className = "my-auto d-flex flex-column  justify-content-center min-vw-100">
            {/* <h1 className= "m-auto">Products</h1> */}
            <h1 className= "my-5 mx-auto">{collection.title}</h1>
            <Row className = "row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 max-vw-100">
                {collection.products.map((product, key)=>{
                    return(
                        <Col className = "d-flex justify-content-center p-0 " key={key}>
                                <ProductCard product={product}></ProductCard>
                        </Col>
                    )
                })}   
				{products.map((product, key)=>{
                    return(
                        <Col className = "d-flex justify-content-center p-0 " key={key}>
                                <ProductCard product={product}></ProductCard>
                        </Col>
                    )
                })}  
				{products.map((product, key)=>{
                    return(
                        <Col className = "d-flex justify-content-center p-0 " key={key}>
                                <ProductCard product={product}></ProductCard>
                        </Col>
                    )
                })}  
				{products.map((product, key)=>{
                    return(
                        <Col className = "d-flex justify-content-center p-0 " key={key}>
                                <ProductCard product={product}></ProductCard>
                        </Col>
                    )
                })}  
				{products.map((product, key)=>{
                    return(
                        <Col className = "d-flex justify-content-center p-0 " key={key}>
                                <ProductCard product={product}></ProductCard>
                        </Col>
                    )
                })}  
				{products.map((product, key)=>{
                    return(
                        <Col className = "d-flex justify-content-center p-0 " key={key}>
                                <ProductCard product={product}></ProductCard>
                        </Col>
                    )
                })}  
				{products.map((product, key)=>{
                    return(
                        <Col className = "d-flex justify-content-center p-0 " key={key}>
                                <ProductCard product={product}></ProductCard>
                        </Col>
                    )
                })}  
				{products.map((product, key)=>{
                    return(
                        <Col className = "d-flex justify-content-center p-0 " key={key}>
                                <ProductCard product={product}></ProductCard>
                        </Col>
                    )
                })}  
				{products.map((product, key)=>{
                    return(
                        <Col className = "d-flex justify-content-center p-0 " key={key}>
                                <ProductCard product={product}></ProductCard>
                        </Col>
                    )
                })}  
				{products.map((product, key)=>{
                    return(
                        <Col className = "d-flex justify-content-center p-0 " key={key}>
                                <ProductCard product={product}></ProductCard>
                        </Col>
                    )
                })}  
				{products.map((product, key)=>{
                    return(
                        <Col className = "d-flex justify-content-center p-0 " key={key}>
                                <ProductCard product={product}></ProductCard>
                        </Col>
                    )
                })}    
            </Row>
        </Container>
    )
}

export default CollectionsPage