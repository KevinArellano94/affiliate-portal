import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { registerUser } from "../utils/authentication/registerUser";


const Register = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: ""
    });
    const [validationState, setValidationState] = useState({
        fullName: "required",
        email: "required",
        password: "required"
    });
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    useEffect(() => {
        const { fullName, email, password } = formData;

        setValidationState({
            fullName: fullName.length ? "" : "required",
            email: email.length === 0 ? "required" : !validateEmail(email) ? "invalid email" : "",
            password: password.length === 0 
                ? "required" 
                : password.length < 8 
                ? "must be at least 8 characters" 
                : !/[A-Z]/.test(password)
                ? "must include an uppercase letter"
                : !/[a-z]/.test(password)
                ? "must include a lowercase letter"
                : !/[0-9]/.test(password)
                ? "must include a number"
                : !/[!@#$%^&*(),.?":{}|<>]/.test(password)
                ? "must include a special character"
                : /(.)\1{2,}/.test(password)
                ? "cannot contain repeating characters"
                : ""
        });
    }, [formData]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (Object.values(validationState).some(state => state !== "")) {
            setMessage("Please correct all fields before submitting.");
            return;
        }

        try {
            const success = await registerUser(formData.email, formData.password, formData.fullName);

            console.log(success)

            if (!success) {
                throw new Error(`Registration failed. Please try again later.`)
            }
            
            navigate("/login", { state: { registered: true } });
        } catch (error) {
            setMessage("Registration failed. Please try again later.");
        }
    };

    return (
        <>
            <div className="auth-container max-w-md mx-auto">
                <div className="auth-header space-y-2">
                    <h2 className="auth-title text-2xl font-bold">Register</h2>
                    <p className="auth-subtitle text-gray-600">Create an account and access your dashboard</p>
                </div>

                <form className="auth-form space-y-4 mt-6" onSubmit={handleRegister}>
                    <div className="form-group relative">
                        <label className="form-label block mb-1">Full name</label>
                        <input 
                            type="text"
                            name="fullName"
                            className={`form-input w-full px-3 py-2 border rounded-lg transition-colors duration-200 
                            ${validationState.fullName ? 'border-red-300' : 'border-green-300'}`}
                            placeholder="John Doe"
                            value={formData.fullName}
                            onChange={handleInputChange}
                        />
                        {validationState.fullName && (
                            <span className="absolute -bottom-5 left-0 text-sm text-red-500 flex items-center">
                                <h3 className="error-message">{ validationState.fullName }</h3>
                            </span>
                        )}
                    </div>

                    <div className="form-group relative">
                    <label className="form-label block mb-1">Email</label>
                    <input 
                        type="email"
                        name="email"
                        className={`form-input w-full px-3 py-2 border rounded-lg transition-colors duration-200
                        ${validationState.email ? 'border-red-300' : 'border-green-300'}`}
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    {validationState.email && (
                        <span className="absolute -bottom-5 left-0 text-sm text-red-500 flex items-center">
                            <h3 className="error-message">{ validationState.email }</h3>
                        </span>
                    )}
                    </div>

                    <div className="form-group relative">
                        <label className="form-label block mb-1">Password</label>
                        <div className="relative">
                            <input 
                                type={showPassword ? "text" : "password"}
                                name="password"
                                className={`form-input w-full px-3 py-2 border rounded-lg transition-colors duration-200
                                    ${validationState.password ? 'border-red-300' : 'border-green-300'}`}
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                👁️
                            </button>
                        </div>
                        {validationState.password && (
                            <span className="absolute -bottom-5 left-0 text-sm text-red-500 flex items-center">
                                <h3 className="error-message">{ validationState.password }</h3>
                            </span>
                        )}
                    </div>

                    {message && (
                        <p className="error-message text-red-500 text-center">{message}</p>
                    )}

                    <button 
                        type="submit" 
                        className="auth-button w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors duration-200 mt-8"
                    >
                        Sign Up
                    </button>
                </form>

                <div className="auth-switch mt-6 text-center">
                    Already have an account?
                    <a
                        className="auth-switch-link ml-1 text-blue-600 hover:text-blue-700 cursor-pointer"
                        onClick={() => navigate("/login")}
                    >
                    Login to account
                    </a>
                </div>
            </div>
        </>
    );
};

export default Register;