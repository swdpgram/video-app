import { Link } from "react-router-dom";

export function LeftAside() {
  return (
    <nav className="nav-container">
      <Link to="/" className="no-decoration">
        <i className="bi bi-house"> </i> <b> Home </b>
      </Link>

      <Link to="/explore" className="no-decoration">
        <i className="bi bi-rocket"> </i> <b> Explore </b>
      </Link>

      <Link to="/playlist" className="no-decoration">
        <i className="bi bi-file-earmark-music"></i> <b>Playlist</b>
      </Link>

      <Link to="/watchlater" className="no-decoration">
        <i className="bi bi-stopwatch"></i> <b> Watch Later</b>
      </Link>
    </nav>
  );
}
