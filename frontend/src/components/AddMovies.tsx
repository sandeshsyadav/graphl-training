import { HashLink as Link } from "react-router-hash-link";
import { gql, useMutation } from '@apollo/client';
import { useState } from "react";

const addNewMovie = gql`
mutation AddNewMovie($name: String!, $genre: String!, $year: String!){
    addMovie(name: $name, genre: $genre, year: $year) {
        name
        genre
        year
    }
}
`
const listMovies = gql`
query {
    listMovies{
        name
        genre
        year
    }
}
`


function AddMovies() {

    const submitMovie = (e: any) => {
        e.preventDefault();
        newMovieData({
            variables: {
                name: movieName,
                genre: movieGenre,
                year: movieYear
            },
            refetchQueries: [{
                query: listMovies
            }]
        })
    }

    const [movieName, setMovieName] = useState('')
    const [movieYear, setMovieYear] = useState('')
    const [movieGenre, setMovieGenre] = useState('')

    const [newMovieData, { data, loading, error }] = useMutation(addNewMovie);

    if (loading) return <p className="loading">Submitting...'</p>;
    if (error) return <p className="error">`Submission error! ${error.message}`</p>
    return (<div className="addMovie" id="addmovies">
        <form onSubmit={submitMovie}>
            <input type="text" required placeholder="Enter a movie name" onChange={(e) => setMovieName(e.target.value)}/>
            <input type="text" required placeholder="Enter the Genre" onChange={(e) => setMovieGenre(e.target.value)}/>
            <input type="text" placeholder="Movie Year" onChange={(e) => setMovieYear(e.target.value)}/>
            <button>Add Movie</button>
        </form>
        <div className="top">
            <Link smooth to="#header" className="top-button">Back to top</Link>
        </div>
    </div>)
}

export default AddMovies;