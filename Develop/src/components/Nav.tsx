import { NavLink } from "react-router-dom";

const Nav = () => {
  console.log("Nav mounting");

  return (
    <nav style={{ padding: "1rem", background: "#eee" }}>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          marginRight: "1rem",
          fontWeight: isActive ? "bold" : "normal",
        })}
      >
        Search
      </NavLink>
      <NavLink
        to="/saved"
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
        })}
      >
        Saved Candidates
      </NavLink>
    </nav>
  );
};

export default Nav;
