'use client'
import React from 'react';

const Lecture = ({params}) => {
    return (
        <div>
            <h1>Name : {params.lecture[0]}</h1>
            <h1>Unknown : {params.lecture[1]}</h1>
        </div>
    );
};

export default Lecture;