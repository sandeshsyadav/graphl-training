import SingleMovie from "../components/SingleMovies";
import {gql, useQuery } from '@apollo/client';

const listMovies = gql`
query {
    listMovies{
        name
        genre
        year
    }
}
`

function Movies() {
    const { loading, error, data } = useQuery(listMovies);

    if (loading) return <p className="loading">Loading...</p>
    if (error) return <p className="error">Error : {error.message}</p>
    return (
        <>
        <div className="Movies">
            {
                data.listMovies.map((movies: any, index: number) => {
                    return <SingleMovie key={index}
                    movieName={movies.name}
                    movieYear={movies.year}
                    movieGenre={movies.genre}
                     />
                })
            }
        </div>
        </>
    )
}
export default Movies;