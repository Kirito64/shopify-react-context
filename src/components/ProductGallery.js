import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./ProductGallery.css"

const ProuductGallery = (props)=>{
	return(
		<Carousel style={{maxHeight: "25rem", alignItems: "center", justifyContent: "center"}}>
			{props.images.map((image, key)=>{
				return(
					<div>
						<img src={image.src} alt="" key={key}/>
					</div>
				)
			})}
		</Carousel>
	)
}


export default ProuductGallery