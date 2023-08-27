import Link from 'next/link';
import React from 'react';
import '../login/login.css'

const Aboutlayout = ({children}) => {
    return (
        <div>
        <ul className='login-menu'>
            <li>
                <h4>About navbar</h4>
            </li>
            <li>
                <Link href='/about'>
                    About main
                </Link>
            </li>
            <li>
                <Link href='/about/aboutcollege'>
                    About College
                </Link>
            </li>
            <li>
            <Link href='/about/aboutstudent'>
                    About Student
                </Link>
            </li>
        </ul>
        {children}
    </div>
    );
};

export default Aboutlayout;