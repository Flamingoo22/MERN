import React, { useState } from 'react'

const Box = (props) => {
    const { height=100, width=100, color } = props;

    return (
    <div
        style={{
            backgroundColor:color,
            height:height+'px',
            width:width +'px'
        }}>
    </div> 
    )
}

export default Box