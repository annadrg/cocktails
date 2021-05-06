import { NavLink, Link } from "react-router-dom";
import "./NavBar.scss";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { useState } from "react";

export default function NavBar() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Navbar className="nav pr-2" bg="white" expand="sm">
      <Navbar.Brand>
        <h2>Cocktails</h2>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink to="/" exact className="navItem">
            Categories
          </NavLink>

          <NavLink
            to="/ingredients"
            className="navItem"
            activeClassName="active"
          >
            Ingredients
          </NavLink>

          <NavLink to="/random" className="navItem">
            Random
          </NavLink>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mx-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Link to={`/search/${searchTerm}`}>
            <Button className="searchButton" onClick={() => setSearchTerm("")}>
              Search
            </Button>
          </Link>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
