import React from "react";
import {StydledInput } from './Style'

const Input=({children , ...props})=>{
        return(
            <StydledInput {...props}>
                {children}
            </StydledInput>
        )
}

export default Input