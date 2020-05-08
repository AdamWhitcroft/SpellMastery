import React from "react";
import { Link } from "gatsby";

const links = [
  {
    to: "/about",
    label: "About",
  },
  {
    to: "/tags",
    label: "Tags",
  },
];

const Navigation = () => (
  <nav role="navigation">
    <ul>
      {links.map(({ to, label }) => (
        <li key={to}>
          <Link to={to} activeClassName="active">
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigation;
