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
        <div className='login-page'>
            <form className="login-form" onSubmit={handleLogin}>
                <h2>Log In</h2>
                <label htmlFor='login-email'>Email</label>
                <input id='login-email' type='email' onChange={(e) => setEmail(e.target.value)} value={email} required></input>
                <label htmlFor='login-password'>Password</label>
                <input id='login-password' type='password' onChange={(e) => setPassword(e.target.value)} value={password} required></input>
                <button disabled ={isLoading} >Log in</button>
                {error && <div className='login-error'>*{error}</div>}
            </form>
        </div>
    )
}

export default LogIn