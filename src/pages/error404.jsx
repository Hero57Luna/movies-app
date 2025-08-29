import { useRouteError } from "react-router-dom";

const Error404 = () => {
    const error = useRouteError();
    return (
        <div>
            <h1>Error bosss</h1>
        </div>
    );
}

export default Error404;