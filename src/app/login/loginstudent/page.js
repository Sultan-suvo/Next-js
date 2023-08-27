"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const Loginstudent = () => {
    const router = useRouter()
    const navigate = (name) => {
        router.push(name)
    }
    return (
        <div>
            <h1 className="heading">Login student</h1>
            <br />
            <br />
            <button onClick={() => navigate('/login')}>Back to home page</button>
        </div>
    );
};

export default Loginstudent;