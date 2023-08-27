"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

const About = ({ props }) => {
    const router = useRouter()
    const navigate = (name) => {
        router.push(name)
    }
    return (
        <div>
            <h1 className="heading">About</h1>
            <button onClick={() => navigate('/')}>Back to home page</button>
            <br />
            <br />
            <Link href='/about/aboutcollege'>About college</Link>
            <br />
            <br />
            <Link href='/about/aboutstudent'>About Student</Link>
        </div>
    );
};



export default About;