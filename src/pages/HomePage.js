import React, { useContext, useEffect }  from 'react'
import { ShopContext } from '../context/shopContext'
import { Text, Div, Row, Col, Container } from "atomize";
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'


const HomePage = () => {
    const {fetchAllProducts, products} = useContext(ShopContext)

    useEffect(() => {
        fetchAllProducts()
        return () => {
            // cleanup
        };
    }, [fetchAllProducts])
    

     

    if (!products) return <Loading />
    return (
        <Container>
            <Row>
                {products.map(product => {

                    var  img = product.images[0]? product.images[0].src:"";
                    return(<Col key={product.id} size="3" >
                        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                            <Div p="2rem">
                                <Div 
                                    h="20rem"
                                    bgImg={img}
                                    bgSize="cover"
                                    bgPos="center center"
                                    shadow="3"
                                    hoverShadow="4"
                                    transition="0.3s"
                                    m={{ b: "1.5rem" }}
                                    >
                                </Div>
                                <Text tag="h1" textWeight="300" textSize="subheader" textDecor="none" textColor="black500">{product.title}</Text>
                                <Text tag="h2" textWeight="300" textSize="body" textDecor="none" textColor="gray500">${product.variants[0].price}</Text>
                            </Div>
                        </Link>
                    </Col>)})}
                    {products.map(product => {

                    var  img = product.images[0]? product.images[0].src:"";
                    return(<Col key={product.id} size="3" >
                        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                            <Div p="2rem">
                                <Div 
                                    h="20rem"
                                    bgImg={img}
                                    bgSize="cover"
                                    bgPos="center center"
                                    shadow="3"
                                    hoverShadow="4"
                                    transition="0.3s"
                                    m={{ b: "1.5rem" }}
                                    >
                                </Div>
                                <Text tag="h1" textWeight="300" textSize="subheader" textDecor="none" textColor="black500">{product.title}</Text>
                                <Text tag="h2" textWeight="300" textSize="body" textDecor="none" textColor="gray500">${product.variants[0].price}</Text>
                            </Div>
                        </Link>
                    </Col>)})}
                    {products.map(product => {

                    var  img = product.images[0]? product.images[0].src:"";
                    return(<Col key={product.id} size="3" >
                        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                            <Div p="2rem">
                                <Div 
                                    h="20rem"
                                    bgImg={img}
                                    bgSize="cover"
                                    bgPos="center center"
                                    shadow="3"
                                    hoverShadow="4"
                                    transition="0.3s"
                                    m={{ b: "1.5rem" }}
                                    >
                                </Div>
                                <Text tag="h1" textWeight="300" textSize="subheader" textDecor="none" textColor="black500">{product.title}</Text>
                                <Text tag="h2" textWeight="300" textSize="body" textDecor="none" textColor="gray500">${product.variants[0].price}</Text>
                            </Div>
                        </Link>
                    </Col>)})}
                    {products.map(product => {

                    var  img = product.images[0]? product.images[0].src:"";
                    return(<Col key={product.id} size="3" >
                        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                            <Div p="2rem">
                                <Div 
                                    h="20rem"
                                    bgImg={img}
                                    bgSize="cover"
                                    bgPos="center center"
                                    shadow="3"
                                    hoverShadow="4"
                                    transition="0.3s"
                                    m={{ b: "1.5rem" }}
                                    >
                                </Div>
                                <Text tag="h1" textWeight="300" textSize="subheader" textDecor="none" textColor="black500">{product.title}</Text>
                                <Text tag="h2" textWeight="300" textSize="body" textDecor="none" textColor="gray500">${product.variants[0].price}</Text>
                            </Div>
                        </Link>
                    </Col>)})}{products.map(product => {

                    var  img = product.images[0]? product.images[0].src:"";
                    return(<Col key={product.id} size="3" >
                        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                            <Div p="2rem">
                                <Div 
                                    h="20rem"
                                    bgImg={img}
                                    bgSize="cover"
                                    bgPos="center center"
                                    shadow="3"
                                    hoverShadow="4"
                                    transition="0.3s"
                                    m={{ b: "1.5rem" }}
                                    >
                                </Div>
                                <Text tag="h1" textWeight="300" textSize="subheader" textDecor="none" textColor="black500">{product.title}</Text>
                                <Text tag="h2" textWeight="300" textSize="body" textDecor="none" textColor="gray500">${product.variants[0].price}</Text>
                            </Div>
                        </Link>
                    </Col>)})}
            </Row>
        </Container>
    )
}

export default HomePage
