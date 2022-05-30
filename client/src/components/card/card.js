import React from "react";
import {StydledCard } from './Style'

const Card=({children , ...props})=>{
        return(
            <StydledCard {...props}>
                {children}
            </StydledCard>
        )
}

export default Card