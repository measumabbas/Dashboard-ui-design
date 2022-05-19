import React from "react";
import "./Menu.css";
import { data } from "./MenuData";
function Menu(props) {
  function Scroll_to_menu(id) {
    document.getElementById(id).scrollIntoView();
  }
  return (
    <div className="Menu" id="Menu">
      {data.map((item, key) => (
        <div className="Menu-container" onClick={() => Scroll_to_menu(item.id)}>
          {item.icon}
          <div className="Menu-title">{item.name}</div>
        </div>
      ))}
    </div>
  );
}

export default Menu;


