import React from "react";
import { NavLink } from "react-router-dom";

/**
 * @constant {Nav} - React stateless component.
 */
const Nav = () => {
  const links = [
    {
      to: "/cats",
      text: "Cats",
    },
    {
      to: "/dogs",
      text: "Dogs",
    },
    {
      to: "/computers",
      text: "Computers",
    },
  ];
  return (
    <nav className="main-nav">
      <ul>
        {links.map((link, i) => (
          <li key={i.toString()}>
            <NavLink activeClassName="active" to={link.to}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
