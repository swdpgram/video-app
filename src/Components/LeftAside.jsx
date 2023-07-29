import { Link } from "react-router-dom";

export function LeftAside() {
  return (
    <nav className="nav-container">
      <Link to="/" className="no-decoration font-normalization">
        <i className="material-symbols-outlined"> home </i>  <span className="nav-padding"> Home </span>
      </Link>

      <Link to="/explore" className="no-decoration font-normalization">
        <i className="material-symbols-outlined"> explore </i> <span className="nav-padding">  Explore </span>
      </Link>

      <Link to="/playlist" className="no-decoration font-normalization">
        <i className="material-symbols-outlined"> playlist_add</i> <span className="nav-padding"> Playlist </span>
      </Link>

      <Link to="/watchlater" className="no-decoration font-normalization">
        <i className="material-symbols-outlined"> pace </i>  <span className="nav-padding"> Watch Later </span>
      </Link>

   
    </nav>
  );
}
