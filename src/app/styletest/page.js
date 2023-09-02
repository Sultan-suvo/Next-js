'use client'

import { useState } from "react";
import custom from '../custom.module.css'
import other from '../other.module.css'
import outside from '@/app/style/outside.module.css'

export default function Page() {
    const [h3Style, setH3Style] = useState({ backgroundColor: 'green' })
    const [color, setColor] = useState('red')
    const {blue} = outside
    return (
        <div>
            <h1>Styletest</h1>
            <h2 style={{ backgroundColor: 'red' }}>Styletest</h2>
            <h3 style={h3Style}>update</h3>
            <button onClick={() => setH3Style({ backgroundColor: 'red' })}>Update Style</button>

            {/* another vdo */}
            <h3 className={custom.main}>module css</h3>
            <h3 className={other.main}>module css</h3>
            <h3 className={outside.main}>module css</h3>

            {/* another vdo */}
            <h3 className={color == 'red' ? outside.red : outside.green}>conditional css</h3>
            <h2 style={{backgroundColor:color=='red' ? 'red': 'green'}}>Heading2</h2>
            <h3 id={outside.blue}>Heading3</h3>
            <h3 id={blue}>Heading4</h3>
            <button onClick={() => setColor('green')}>Update Style</button>
        </div>
    );
};
