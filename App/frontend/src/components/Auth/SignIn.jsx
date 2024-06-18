import Form from "./Form/Form";
function SignIn() {
    return <Form route="/api/token/" method="login" />
}
export default SignIn;