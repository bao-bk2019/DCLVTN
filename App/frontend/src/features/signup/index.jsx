// import React from "react";
// import './styles.scss'
// import { Link } from "react-router-dom";
// // Input component for reuse
// const InputField = ({ label, type = "text", id }) => (
//     <>
//         <label htmlFor={id} className="visually-hidden">
//             {label}
//         </label>
//         <input
//             type={type}
//             id={id}
//             className="input-field"
//             placeholder={label}
//             aria-label={label}
//         />
//     </>
// );

// // Button component for reuse
// const ActionButton = ({ text, onClick }) => (
//     <button className="action-button" onClick={onClick}>
//         {text}
//     </button>
// );

// function SignupForm() {
//     return (
//         <div className="signup-form">
//             <div className="title">Sign up</div>
//             <div className="sub-title">Create your account!</div>
//             <InputField label="Full Name" id="fullName" />
//             <InputField label="Email" type="email" id="email" />
//             <InputField label="Password" type="password" id="password" />
//             <InputField label="Confirm your password" type="password" id="confirmPassword" />
//             <div className="link-container">
//                 <div>Have an account?</div>
//                 <Link to="/signin">
//                     <div className="signin-link">Sign in</div>
//                 </Link>
//             </div>
//             <ActionButton text="Sign up" />
//             <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/7cb08ccd3d75cd9302262765155183963ba140f9795f48a3ba8f472b701079f7?apiKey=afa45b72ad7c46798aa3d2761c2357ac&"
//                 alt=""
//                 className="signup-image"
//             />
//         </div>
//     );
// }
import Form from "../../components/Form/Form";
function SignupForm() {
    return <Form route="/api/register/" method="register" />
}
export default SignupForm;