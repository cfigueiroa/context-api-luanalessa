import React, { useContext } from 'react'
import { MovieContext } from '../context/index';

const Home = () => {
    const { movies, genres } = useContext(MovieContext);

    return (
        <div>
            <h1>Home</h1>
            {movies ? movies.results.map(movie =>
                <h2> {movie.name} </h2>
            ) : null}
        </div>

    )
}

export default Home;