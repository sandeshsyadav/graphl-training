type Movie = {
    movieName: string;
    movieYear: number;
    movieGenre: string;

}
function SingleMovie(props: Movie) {
    return (
        <div className="card">
            <div className="container">
                <h2>{props.movieName}</h2>
                <h2>{props.movieYear}</h2>
                <h2>{props.movieGenre}</h2>
            </div>
        </div>
    )
}

export default SingleMovie;