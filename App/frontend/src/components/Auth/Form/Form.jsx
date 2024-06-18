import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "./styles.scss"
import "../../../styles/Password.css"
import LoadingIndicator from "../LoadingIndicator";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";

function evaluatePasswordStrength(password) {
    const lengthCriteria = password.length >= 12;
    const lowercaseCriteria = /[a-z]/.test(password);
    const uppercaseCriteria = /[A-Z]/.test(password);
    const digitCriteria = /\d/.test(password);
    const specialCharacterCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (lengthCriteria && lowercaseCriteria && uppercaseCriteria && digitCriteria && specialCharacterCriteria) {
        return 'Strong';
    } else if (lengthCriteria || (lowercaseCriteria && uppercaseCriteria && digitCriteria)) {
        return 'Medium';
    } else {
        return 'Weak';
    }
}

function Form({ route, method }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [passwordStrength, setPasswordStrength] = useState('');
    const { setIsAuthorized } = useAuth();
    const name = method === "login" ? "Login" : "Register";
    const handlePasswordChange = (e) => {
        const password = e.target.value;
        setPasswordStrength(evaluatePasswordStrength(password));
        setPassword(password);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!emailRegex.test(email)) {
            setErrorMessage('Email không hợp lệ!');
            return;
        }

        if (!passwordRegex.test(password)) {
            setErrorMessage('Mật khẩu không hợp lệ!');
            return;
        }
        setLoading(true);

        try {
            const res = await api.post(route, { email, password })
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                setIsAuthorized(true);
                navigate("/home")
            } else {
                navigate("/login")
            }
        } catch (error) {
            setErrorMessage('Tên đăng nhập hoặc mật khẩu không đúng!');
        } finally {
            setLoading(false)
        }
    };
    if (name === "Login") {
        return (
            <div className="container-1">
                <header className="title">Sign in</header>
                <div className="subtitle">Sign in and start your work!</div>
                <form onSubmit={handleSubmit} >
                    <div>
                        <label htmlFor="email" className="visually-hidden">Enter Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter Email"
                            className="input-field"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="visually-hidden">Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Password"
                            className="input-field"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    {loading && <LoadingIndicator />}
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <button className="button" type="submit">Login</button>
                </form>
                <div className="link">
                    <Link to="/register">Don’t have an account?</Link>
                </div>
                <div className="info">
                    <span className="link" >Forgot password? </span>
                    <Link to="/register" style={{ fontSize: 18 }}>Sign up</Link>
                </div>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7cb08ccd3d75cd9302262765155183963ba140f9795f48a3ba8f472b701079f7?apiKey=afa45b72ad7c46798aa3d2761c2357ac&" alt="Sign in visual representation" className="img-container" />
            </div>
        );
    }

    return (
        <div className="container-1">
            <header className="title">Sign up</header>
            <div className="subtitle">Create your account!</div>
            <form onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="email" className="visually-hidden">Enter Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Enter Email"
                        className="input-field"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password" className="visually-hidden">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Password"
                        className="input-field"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                {loading && <LoadingIndicator />}
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                {<p className={`password-strength ${passwordStrength.toLowerCase()}`}>Password strength: {passwordStrength}</p>}
                <button className="button" type="submit">Sign up</button>
            </form>
            <div className="link">
                <Link to="/login">Have an account?</Link>
            </div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7cb08ccd3d75cd9302262765155183963ba140f9795f48a3ba8f472b701079f7?apiKey=afa45b72ad7c46798aa3d2761c2357ac&" alt="Sign in visual representation" className="img-container" />
        </div>
    );
}

export default Form