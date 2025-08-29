import { Fragment, useEffect, useState } from "react";
import Button from "../components/Elements/Button";
import MoviesCard from "../components/Fragments/MoviesCard";
import { getMovies } from "../services/movies.service";
import MoviesSearch from "../components/Fragments/MoviesSearch";

const Movies = () => {
    const moviesTest = [
        {
            id: 1,
            title: "Movie Title",
            plot: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi harum aliquam amet. Nulla cumque aliquam officiis. Obcaecati, eius tempora! Molestiae doloremque tempora temporibus. Cumque eaque voluptatem sit! Tempore, et repellat!"
        },
        {
            id: 2,
            title: "Movie Title2",
            plot: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi harum aliquam amet. Nulla cumque aliquam officiis. Obcaecati, eius tempora! Molestiae doloremque tempora temporibus. Cumque eaque voluptatem sit! Tempore, et repellat!"
        },
        {
            id: 3,
            title: "Movie Title3",
            plot: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi harum aliquam amet. Nulla cumque aliquam officiis. Obcaecati, eius tempora! Molestiae doloremque tempora temporibus. Cumque eaque voluptatem sit! Tempore, et repellat!"
        },
        {
            id: 4,
            title: "Movie Title4",
            plot: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi harum aliquam amet. Nulla cumque aliquam officiis. Obcaecati, eius tempora! Molestiae doloremque tempora temporibus. Cumque eaque voluptatem sit! Tempore, et repellat!"
        },
        {
            id: 5,
            title: "Movie Title5",
            plot: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi harum aliquam amet. Nulla cumque aliquam officiis. Obcaecati, eius tempora! Molestiae doloremque tempora temporibus. Cumque eaque voluptatem sit! Tempore, et repellat!"
        },
        {
            id: 6,
            title: "Movie Title6",
            plot: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi harum aliquam amet. Nulla cumque aliquam officiis. Obcaecati, eius tempora! Molestiae doloremque tempora temporibus. Cumque eaque voluptatem sit! Tempore, et repellat!"
        }
    ];

    const email = localStorage.getItem('email')
    const handleLogout = (e) => {
        e.preventDefault()
        localStorage.removeItem('email')
        localStorage.removeItem('password')
        window.location.href = '/login'
    }
    const [favorites, setFavorites] = useState([]);
    const [movies, setMovies] = useState([]);
    const handleAddFavorites = (title, plot, imdbID) => {
        setFavorites([
            ...favorites,
            {
                title,
                plot,
                imdbID
            }
        ]);
    }
    const [searchTerm, setSearchTerm] = useState("fight club");

    useEffect(() => {
        if (!searchTerm) return;
            getMovies(searchTerm, (data) => {
            console.log(data);
            setMovies([data]);
        });
    }, [searchTerm]);

    return (
        <div>
            <div className="flex justify-end h-20 bg-blue-400 text-white items-center">
                <div>
                    <MoviesSearch onResults={setMovies} />
                </div>
                <div className="px-5">
                    {email}
                </div>
                <div className="px-5">
                    <Button full="" text="Logout" onclick={handleLogout}></Button>
                </div>
                
            </div>
            <div className="flex justify-center mt-5">
                <div className="w-3/4 flex flex-wrap">
                    { movies.length > 0 && movies.map((movie) => (
                        <MoviesCard key={movie.imdbID} plot={movie.Plot} title={movie.Title} image={movie.Poster} handleAddFavorites={handleAddFavorites}></MoviesCard>
                    )) }
                </div>
                <div className="w-1/4 my-5">
                    <h1 className="font-semibold">Your fav</h1>
                    <ul>
                        { favorites.map((item) => (
                            <li key={item.imdbID}>{item.title}</li>
                        )) }
                    </ul>
                </div>
            </div>
        </div>
        
    );
}

export default Movies;