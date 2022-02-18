
import React from 'react';

import"./quantity.css"
const Quantity = (props)=>{
        return(
            <div className="quantity-input">
        <button className="quantity-input__modifier quantity-input__modifier--left" onClick={props.handleDecrement}>
          &mdash;
        </button>
        <input className="quantity-input__screen" type="text" value={props.quantity} readonly />
        <button className="quantity-input__modifier quantity-input__modifier--right" onClick={props.handleIncrement}>
          &#xff0b;
        </button>  
      </div> 
        )
    }



export default Quantity;