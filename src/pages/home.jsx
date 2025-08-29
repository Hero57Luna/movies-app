import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="font-bold text-6xl">Hi!</h1>
            <p className="text-4xl mt-5 justify-center flex">
                Please go
                <Link to="/login" className="font-bold ml-1 text-blue-500"> here</Link>
            </p>
        </div>
    )
}

export default Home