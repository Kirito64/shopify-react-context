import React from 'react'; 
import AnimatedButton from "./animatedButton.js";
import {Link} from "react-router-dom"
import s from "./displayCard.module.css";


const DisplayCard = (props)=>{

	return(
		
			<div className={ `${s.card} flex-column align-items-center my-5 mx-5 ${s.ohidden}`}>
				<Link to = {props.href}>
				<img src = {props.img} alt = "" className = {s.card_image}/>
				<div className={`${s.cardText} py-4 px-4 my-5`}>
						<p className="h1  mb-5	">
							{props.children}
						</p>
						
						<Link to = {props.href}>
							<div className= "mt-5 mb-5">
							
								<AnimatedButton >
									Shop Here
								</AnimatedButton>
							
							</div>
						</Link>
						
						
				</div>
				</Link>
			</div>
	)
}


export default DisplayCard;