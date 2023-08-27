import Link from 'next/link';
import React from 'react';
import './login.css'

const Loginlayout = ({children}) => {
    return (
        <div>
            <ul className='login-menu'>
                <li>
                    <h4>Login navbar</h4>
                </li>
                <li>
                    <Link href='/login'>
                        Login main
                    </Link>
                </li>
                <li>
                    <Link href='/login/loginstudent'>
                        Login Student
                    </Link>
                </li>
                <li>
                    <Link href='/login/loginteacher'>
                        Login Teacher
                    </Link>
                </li>
            </ul>
            {children}
        </div>
    );
};

export default Loginlayout;