import React, {useContext, useEffect, useState} from 'react'
// import { Container, Anchor, Icon } from 'atomize'
import { useLocation} from 'react-router-dom'
import { ShopContext } from '../context/shopContext'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from "react-bootstrap/Nav"
import Container from 'react-bootstrap/Container'
import {FaShoppingBag} from 'react-icons/fa'

import "./Navbar.css"
// const Navbar1 = () => {

//     const { openCart } = useContext(ShopContext)

//     return (
//         <>  
//             <Container d="flex" flexDir="row" p="2rem" justify="space-between" >
//                 <Link to="/"><Icon name="Store" size="30px" color="black500" /></Link>
//                 <Anchor onClick={() => openCart()}><Icon name="Bag" size="20px" color="black500" /></Anchor>
//             </Container>
//         </>
//     )
// }

const NavbarB = ()=>{
    
    const {openCart, collections} = useContext(ShopContext)


    const [navbar, setNavbar]= useState(false)
    
    const location = useLocation()
    var cols = collections;

    cols = cols.filter((item)=>{
        return item.handle !== "frontpage"
    })
    const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() =>{
    changeBackground();
    console.log(cols)
    window.addEventListener("scroll", changeBackground)
  })

    if(location.pathname === "/")
      return(
        <Navbar collapseOnSelect expand="lg" bg={navbar || location.pathname !== "/"? "white":"transparent"} variant={navbar? "light": "dark"} fixed ="top" style = {{padding: "0.9rem"}} className={navbar || location.pathname  !== "/"? "nb-tra nav-shadow": "nb-tra"}>
          <Container>
            <Navbar.Brand href="/" className = {navbar || location.pathname !== "/"? "white nb-tra": "nb-tra" }  >
              <img
                alt=""
                src="/logo.svg"
                width="100"
                className = {navbar || location.pathname !== "/"? "white nb-tra d-inline-block": "nb-tra d-inline-block" }
              />
            TheSASTech
            </Navbar.Brand >
            <Navbar.Toggle aria-controls="responsive-navbar-nav" variant = {"light"}/>
            <Navbar.Collapse id = "responsive-navbar-nav" >
              <Nav className =  "me-auto" >
                <Nav.Link href="/" className = {navbar|| location.pathname !== "/" ? "nb-tra": "nb-tra" }>Home</Nav.Link>
                <Nav.Link href ="/products" className = {navbar || location.pathname !== "/"? " nb-tra": "nb-tra" }>Products</Nav.Link>
                <Nav.Link href="#" className = {navbar || location.pathname !== "/"? "nb-tra": "nb-tra" }>Contact Us</Nav.Link>
                <NavDropdown title = "Categories">
                  {cols.map((col, key)=>{
                      return<NavDropdown.Item key = {key} href = {"/collections/"+col.handle}>{col.title}</NavDropdown.Item>
                  })}
                </NavDropdown>
              </Nav>

              
              <a href=" " onClick={(e)=>{e.preventDefault();
              openCart()}}><FaShoppingBag color={navbar || location.pathname !== "/"?"black" :"white"} className = "justify-content-end nb-tra" ></FaShoppingBag></a>
              </Navbar.Collapse>
        </Container>
        
      </Navbar>
      )
    else
      return(
        <Navbar collapseOnSelect expand="lg" bg={"white"} variant={"light"} sticky ="top" style = {{padding: "0.9rem"}} className={"nb-tra nav-shadow"}>
          <Container>
            <Navbar.Brand href="/" className = {"nb-tra"} >
              
              <img
                alt=""
                src="/logo.svg"
                width="100"
                className="d-inline-block white"
              />
            TheSASTech
            </Navbar.Brand >
            <Navbar.Toggle aria-controls="responsive-navbar-nav" variant = {"light"} />
            <Navbar.Collapse id = "responsive-navbar-nav">
              <Nav className =  "me-auto" >
                <Nav.Link href="/" className = {"nb-tra"}>Home</Nav.Link>
                <Nav.Link href ="/products" className = {"nb-tra"}>Products</Nav.Link>
                <Nav.Link href="#" className = {"nb-tra"}>Contact Us</Nav.Link>
                <NavDropdown title = "Categories" className = "nb-tra">
                  {cols.map((col, key)=>{
                    return<NavDropdown.Item key = {key} href = {"/collections/"+col.handle}>{col.title}</NavDropdown.Item>
                  })}
                </NavDropdown>
              </Nav>
              <a href=" " onClick={(e)=>{e.preventDefault();
              openCart()}}><FaShoppingBag color={"black"} className = "justify-content-end nb-tra" ></FaShoppingBag></a>
              </Navbar.Collapse>
        </Container>
        
      </Navbar>
      )
}

export default NavbarB
