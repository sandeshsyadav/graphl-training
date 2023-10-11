import { HashLink as Link } from 'react-router-hash-link';

function Header() {
    return (
        <div className="topnav" id="header">
            <Link smooth to="/#">Movie Maker</Link>
            <Link smooth to="#addmovies" className="add-button">Add Movie</Link>
        </div>
    )
}

export default Header