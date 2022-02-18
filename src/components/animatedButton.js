import React from 'react';
import s from './animatedButton.module.css'






const AnimatedButton = (props)=>{

	if(props.variant === "dark")
		return(
			<button className = {s.button_store_dark} onClick={props.click}>
				{props.children}
			</button>
		)
	return(
		<button className={s.button_store} onClick={props.click}>
			{props.children}
		</button>
	)
}


export default AnimatedButton	;