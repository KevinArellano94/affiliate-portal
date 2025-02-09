import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../utils/authentication/registerUser";

const Register = ({ setUser }: { setUser: (user: any) => void }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    console.log(setUser);

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        const success = await registerUser(email, password);
        if (success) {
            setMessage("Registration successful! Redirecting...");
            navigate("/login", { state: { registered: true } });
        } else {
            setMessage("Email already registered!");
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-header">
                <h2 className="auth-title">Register</h2>
                <p className="auth-subtitle">Create an account and have access your dashboard</p>
            </div>

            <form className="auth-form" onSubmit={handleRegister}>
                <div className="form-group">
                    <label className="form-label">Email</label>
                    <input 
                        type="email" 
                        className="form-input" 
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Password</label>
                    <input 
                        type="password" 
                        className="form-input" 
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="password-toggle">👁️</span>
                </div>

                <button type="submit" className="auth-button">
                    Sign Up
                </button>
            </form>

            {message && <p className="auth-message">{message}</p>}

            <div className="auth-switch">
                Already have an account?
                <a
                    className="auth-switch-link"
                    onClick={ () => navigate("/login") }
                    style={{ cursor: "pointer" }}
                >Login to account</a>
            </div>
        </div>
    );
};

export default Register;
