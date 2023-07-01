import { useState } from "react";
import { useLogIn } from "../hooks/useLogin";

const LogIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogIn()

    const handleLogin = async(e) => {
        e.preventDefault(); 
        await login(email, password); 
    }
    return(
        <form className="login-form" onSubmit={handleLogin}>
            <h3>Admin Log In</h3>
            <label>Email</label>
            <input type='email' onChange={(e) => setEmail(e.target.value)} value={email}></input>
            <label>Password</label>
            <input type='password' onChange={(e) => setPassword(e.target.value)} value={password}></input>
            <button disabled ={isLoading} >Log in</button>
            {error && <div>error</div>}
        </form>
    )
}

export default LogIn