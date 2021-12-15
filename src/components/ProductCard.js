import React from 'react';
import {Link} from "react-router-dom";
import s from "./ProductCard.module.css";



const ProductCard = (props)=>{
	const product = props.product;
	const img = product.images[0]?product.images[0].src: "";

	return(
		
			<div style={{ width: '19rem', minHeight: "25rem", maxHeight: "25rem", overflow: 'hidden'}} className={`mx-2 my-4 ${s.card} ${s.slide_in_top}`} key = {product.id}>
				<Link to = {"/product/" + product.id} style={{textDecoration: "none", color: "black"}} >
				<div className = {s.ohidden}><img src={img} alt ="" className= {`${s.cardImage}`} /></div>
				<div className = {`${s.cardTitle} p-2`}>
					<h5>{product.title}</h5>
					<p>Rs. {product.variants[0].price}</p>
				</div>
				</Link>
			</div>

		
	)
}

export default ProductCard