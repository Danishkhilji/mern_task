import React from "react";
import {StyleInputGroup } from './Style'

const InputGroup=({children , ...props})=>{
        return(
            <StyleInputGroup {...props}>
                {children}
            </StyleInputGroup>
        )
}

export default InputGroup