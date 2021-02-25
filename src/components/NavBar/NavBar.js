import { NavLink } from "react-router-dom";
import "./NavBar.scss";

export default function NavBar() {
  return (
    <div className="navBar">
      <div>
        <h2>Cocktails</h2>
      </div>
      <div className="navBarLink">
        <NavLink
          className="inactive"
          activeClassName="active"
          exact={true}
          to="/"
        >
          Categories
        </NavLink>{" "}
      </div>
      <div className="navBarLink">
        <NavLink
          className="inactive"
          activeClassName="active"
          exact={true}
          to="/ingredients"
        >
          Ingredients
        </NavLink>{" "}
      </div>
      <div className="navBarLink">
        <NavLink
          className="inactive"
          activeClassName="active"
          exact={true}
          to="/random"
        >
          Random
        </NavLink>
      </div>
    </div>
  );
}
