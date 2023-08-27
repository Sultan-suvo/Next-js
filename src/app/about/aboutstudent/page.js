"use client"
import { useRouter } from 'next/navigation';

const Aboutcollege = () => {
    const router = useRouter()
    const navigate = (name) => {
        router.push(name)
    }
    return (
        <div>
            <h1>About student</h1>
            <button onClick={() => navigate('/about')}>Back to about page</button>
        </div>
    );
};

export default Aboutcollege;