'use client'

import { useState } from "react";

export default function Page() {
    const [h3Style,setH3Style] = useState({backgroundColor:'green'})
    return (
        <div>
            <h1>Styletest</h1>
            <h2 style={{backgroundColor:'red'}}>Styletest</h2>
            <h3 style={h3Style}>update</h3>
            <button onClick={()=>setH3Style({backgroundColor:'red'})}>Update Style</button>
        </div>
    );
};
