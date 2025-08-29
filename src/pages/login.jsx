import AuthLayouts from "../components/Layouts/AuthLayouts";
import LoginForm from "../components/Fragments/LoginForm";
import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <AuthLayouts title="Login">
            <LoginForm></LoginForm>
            <p className="text-sm mt-5 justify-center flex">
                Don't have an account?
                <Link to="/regiester" className="font-bold ml-1"> Sign up</Link>
            </p>
        </AuthLayouts>
    );
}

export default LoginPage;