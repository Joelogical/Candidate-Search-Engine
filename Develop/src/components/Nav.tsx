import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav style={{ padding: "1rem", background: "#eee" }}>
      <Link to="/" style={{ marginRight: "1rem" }}>
        Search
      </Link>
      <Link to="/SavedCandidates">Saved Candidates</Link>
    </nav>
  );
};

export default Nav;
