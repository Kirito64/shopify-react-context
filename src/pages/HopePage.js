
import React from 'react';
import Container from "react-bootstrap/Container"
import s from "./homepage.module.css"
import Button from "react-bootstrap/Button"
import DisplayCard from "../components/displayCard";

const HomePage = () =>{



	return(
		<div>
			<section className = {`${s.hero}  justify-content-center`} fluid>

				<img src = "display1.png" className = {`${s.heroImage}`} alt=""/>
				<Container className = {`${s.heroText}`}>
					<p className = {`h1 h-100`} >
					lorem ipsum dolor sit amet,
					sit amet
					</p>
					<Button className = {s.button_store}>
						Store
					</Button>
				</Container>
			</section>
			
				<Container className = {`${s.display}`}>
						<DisplayCard className = "w-75" img = "/display1.png" href = "/collections/graphics-cards">Graphics Card</DisplayCard>
						<DisplayCard img = "/display2.png" href="/collections/motherboards">Motherboard</DisplayCard>	
						<DisplayCard img = "/display3.png" href="/collections/processors">Processor</DisplayCard>		
				</Container>

			
		</div>
		
	)
}

export default HomePage;