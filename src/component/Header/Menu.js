import React from "react";
import './Menu.css';

const Menu = props => (
    <nav className="menuNavigation">
      <div className="menuOptions">
        <ul>
          <li><a href="/">Option 1</a></li>
          <li><a href="/">Option 2</a></li>
          <li><a href="/">Option 3</a></li>
        </ul>
      </div>
    </nav>
);

export default Menu;