import React, { useContext, useEffect, useState }  from 'react'
import { ShopContext } from '../context/shopContext'
import {Row, Col, Container, Pagination, PageItems} from "react-bootstrap";

import Loading from '../components/Loading'
import ProductCard from '../components/ProductCard'

const ProductsPage = () => {
    const {fetchAllProducts, products, clearProducts,} = useContext(ShopContext)
    const [page, setPage] = useState(1);
    const itemper = 20;
    let lastitem = page*itemper;
    let firstitem = lastitem - itemper;
    let items = products.slice(firstitem, lastitem);



    useEffect(() => {
        fetchAllProducts()
        return () => {
            // cleanup
            clearProducts();
        };

        
    }, [fetchAllProducts, clearProducts])

    const handlePrev = () =>{
        if(page-1 >= 1)
            setPage(page-1);
        
    }


    const handleNext = ()=>{
        if(page +1 <= Math.ceil(products.length / itemper))
            setPage(page+1);
    }
     
    const RenderItems = ()=>{
                            const Items = [];

                            for(let i =1 ; i<= Math.ceil(products.length/itemper); i++)
                            {
                                console.log(products.length)
                                Items.push(

                                    <Pagination.Item key={i} active={i === page}>
                                        {i}
                                    </Pagination.Item>  
                                )
                            }

                            return Items;
                        }
    if (products.length === 0) return <Loading />


    return (
        <Container className = "d-flex flex-column justify-content-center min-vw-100 max-vw-100">
            <h1 className= "my-5 mx-auto">Products</h1>
            <Row className = "row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 max-vw-100">
                {items.map((product, key)=>{
                    return(
                        <Col className = "d-flex justify-content-center p-0 " key={key}>
                                <ProductCard product={product}></ProductCard>
                        </Col>
                    )
                })}     
            </Row>

            <Row className = "justify-content-center min-vw-100">
                <Col className = "d-flex justify-content-center">
                    <Pagination>
                        <Pagination.Prev onClick = {handlePrev} />
                            {RenderItems()}
                        <Pagination.Next  onClick = {handleNext}/>
                    </Pagination>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductsPage
