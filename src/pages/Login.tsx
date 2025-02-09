import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { loginUser } from "../utils/authentication/loginUser";


const Login = ({ setUser }: any) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const user = await loginUser(email, password);

            if (user) {
                setUser(user);
                navigate("/dashboard");
            }
        } catch (error) {
            setMessage("Invalid username or password");
        }
    };
    
    return (
        <>
            <div className="auth-container">
                <div className="auth-header">
                    <h2 className="auth-title">Welcome Back</h2>
                    <p className="auth-subtitle">Enter your credentials to access your dashboard</p>
                </div>

                <form className="auth-form">
                    <div className="form-group">
                        <label className="form-label">Email</label>
                        <input 
                            type="email" 
                            className="form-input" 
                            placeholder="your@email.com"
                            value={ email }
                            onChange={ e => setEmail(e.target.value) }
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Password</label>
                        <input 
                            type="password" 
                            className="form-input" 
                            placeholder="••••••••"
                            value={ password }
                            onChange={ e => setPassword(e.target.value) }
                        />
                        <span className="password-toggle">👁️</span>
                    </div>

                    <p className="error-message">{ message }</p>

                    <button type="button" className="auth-button" onClick={ handleLogin }>
                        Sign In
                    </button>
                </form>

                <div className="auth-switch">
                    New to the platform?
                    <a
                        className="auth-switch-link"
                        onClick={ () => navigate("/register") }
                        style={{ cursor: "pointer" }}
                    >Create an account</a>
                </div>
            </div>
        </>
    )
}

export default Login;
