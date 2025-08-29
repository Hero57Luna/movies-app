import Input from "../Elements/Input";
import Button from "../Elements/Button";

const LoginForm = () => {
    const handleLogin = (e) => {
        e.preventDefault();
        localStorage.setItem('email', e.target.email.value)
        localStorage.setItem('password', e.target.password.value)
        window.location.href = "/movies"
    }
    return (
        <form onSubmit={handleLogin}>
            <Input 
                text="Email" 
                htmlFor="email" 
                type="email"
                placeholder="example@mail.com"
                name="email">
            </Input>

            <Input
                text="Password" 
                htmlFor="password" 
                type="password"
                placeholder="****"
                name="password">
            </Input>
            <Button text="Login" type="submit"></Button>
        </form>
    );
}

export default LoginForm;