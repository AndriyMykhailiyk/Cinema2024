import React from "react";
import {
  Link,
  Outlet,
  useLocation,
} from "react-router-dom";
import "./Menu.scss";
import { MenuProps } from "./MenuProps.ts";

const Menu = ({ onGenreSelect }: MenuProps) => {
  const location = useLocation();


  const GetActiveStyle = (path: string) => {
    return location.pathname === path
      ? { color: "#ff01fb" }
      : { color: "white" };
  };

  const GetActiveStyleUsers = (path: string) => {
    return location.pathname === path
      ? { color: "#ff01fb" }
      : { color: "white" };
  };

  const GetActiveStyleAboutUs = (path: string) => {
    return location.pathname === path
      ? { color: "#ff01fb" }
      : { color: "white" };
  };

  return (
    <>
      <div className="Hover_Btn">
        <div className="Gap">
          <nav className="Nav_Header">
            <div className="Menu">
              <li className="Menu_items">
                <Link
                  to="/about_us"
                  style={{
                    fontWeight: "100",
                    textTransform: "uppercase",
                    fontFamily: "Oswald, sans-serifі",
                    marginLeft: 10,
                    marginRight: 10,
                    border: "0",
                    fontSize: 20,
                    textDecoration: "none",
                    ...GetActiveStyleAboutUs("/about_us"),
                  }}
                >
                  <a style={{ color: "white", fontWeight: "300" }}> Про нас</a>
                </Link>
                <Link
                  to="/FAQQ"
                  style={{
                    fontWeight: "100",
                    textTransform: "uppercase",
                    fontFamily: "Oswald, sans-serifі",
                    marginLeft: 10,
                    marginRight: 10,
                    fontSize: 20,
                    textDecoration: "none",
                    ...GetActiveStyle("/FAQQ"),
                  }}
                >
                  FAQ
                </Link>
                <div className="Menu_items_second">
                  <Link
                    to="/privacy"
                    style={{
                      fontWeight: "100",
                      textTransform: "uppercase",
                      fontFamily: "Oswald, sans-serifі",
                      marginLeft: 10,
                      marginRight: 10,
                      fontSize: 20,
                      textDecoration: "none",
                      ...GetActiveStyleUsers("/privacy"),
                    }}
                  >
                    Користувацьке Погодження
                  </Link>
                </div>
              </li>
            </div>
          </nav>
        </div>
      </div>
      <br />

      <div id="menu" className="menu">
        <a onClick={() => onGenreSelect("Drama")}>Drama</a>
        <a onClick={() => onGenreSelect("CrimeDrama")}>CrimeDrama</a>
        <a onClick={() => onGenreSelect("ActionCrimeDrama")}>
          ActionCrimeDrama
        </a>
        <a onClick={() => onGenreSelect("ActionThrillerDrama")}>
          ActionThriller
        </a>
        <a onClick={() => onGenreSelect("CrimeDramaThriller")}>
          CrimeDramaThriller
        </a>
      </div>

      <Outlet />
    </>
  );
};

export default Menu;
