import React from "react";
import {StyleButton } from './Style'

const Button=({children , ...props})=>{
        return(
            <StyleButton {...props}>
                {children}
            </StyleButton>
        )
}

export default Button