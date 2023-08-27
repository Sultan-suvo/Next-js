"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {

    const router = useRouter()
    const navigate = (name) => {
        router.push(name)
    }
    return (
        <div>
            login
            <br />
            <br />
            <button onClick={() => navigate('/')}>Back to home page</button>
            <br />
            <br />
            <Link href='login/loginstudent'>go to loginstudent</Link>
            <br />
            <br />
            <Link href='login/loginteacher'>go to loginteacher</Link>
        </div>
    );
};

export default Login;