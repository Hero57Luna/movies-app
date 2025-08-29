import Button from "../Elements/Button";

const MoviesCard = (props) => {
    const { title, image = "/images/movies1.jpg", plot, imdbID, handleAddFavorites } = props
    return (
        <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-5 my-5">
                <a href="#">
                     <img src={`${image}`} alt="movie-ticket" className="rounded p-8"/>
                </a>
                <div className="px-5 pb-5">
                    <a href="">
                        <h5 className="text-xl font-bold tracking-tight text-white">
                            {title}
                        </h5>
                        <p className="font-semibold text-white">
                            {plot}
                        </p>
                    </a>
                </div>
                <div className="flex items-center px-5 mb-5">
                    <Button text="Add to Favorite" onclick={() => handleAddFavorites(title, plot, imdbID)}></Button>
                </div>
            </div>
    );
}

export default MoviesCard;