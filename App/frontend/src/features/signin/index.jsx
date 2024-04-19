// import React from "react";
// import './styles.scss'
// import { Link } from "react-router-dom";

// const Button = ({ text, secondary }) => (
//     <button className={secondary ? "button secondary" : "button"} type="submit">{text}</button>
// );

// const SignIn = ({ submitLogin, email, setEmail, password, setPassword }) => {
//     return (
//         <div className="container-1">
//             <header className="title">Sign in</header>
//             <div className="subtitle">Sign in and start your work!</div>
//             <form onSubmit={e => submitLogin(e)}>
//                 <div>
//                     <label htmlFor="email" className="visually-hidden">Enter Email</label>
//                     <input id="email" type="email" placeholder="Enter Email" className="input-field" value={email} onChange={e => setEmail(e.target.value)} />
//                 </div>
//                 <div>
//                     <label htmlFor="password" className="visually-hidden">Password</label>
//                     <input id="password" type="password" placeholder="Password" className="input-field" value={password} onChange={e => setPassword(e.target.value)} />
//                 </div>
//                 <Button text="Login" />
//             </form>
//             <div className="link">
//                 <Link to="/signup">Don’t have an account?</Link>
//             </div>
//             <div className="info">
//                 <span className="link" >Forgot password? </span>
//                 <Link to="/signup" style={{ fontSize: 18 }}>Sign up</Link>
//             </div>
//             <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7cb08ccd3d75cd9302262765155183963ba140f9795f48a3ba8f472b701079f7?apiKey=afa45b72ad7c46798aa3d2761c2357ac&" alt="Sign in visual representation" className="img-container" />
//         </div>
//     );
// };
import Form from "../../components/Form/Form";
function SignIn() {
    return <Form route="/api/token/" method="login" />
}
export default SignIn;