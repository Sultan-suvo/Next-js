'use client'
import React from 'react';

const Button = ({price}) => {
    return (
        <div>
            <button onClick={()=> alert(price)}>Click Price</button>
        </div>
    );
};

export default Button;