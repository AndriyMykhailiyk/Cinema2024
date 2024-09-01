import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiPopcorn } from "react-icons/gi";
import Menu from "../Menu/Menu";
import App from "../../App";
import { HiMagnifyingGlass } from "react-icons/hi2";
import "../Menu/Menu.scss";

import HeaderInterfase from "../../TSInterfase/HeaderInterfase";



export function Header({ onGenreSelect, handleSearch, search }: HeaderInterfase) {


  return (
    <>
      <div className="Header_Name_Font">
        <div
          style={{
            margin: 0,
            backgroundColor: "gray",
            width: "100%",
            top: "0%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row-reverse",
          }}
        >
          <div className="container_12">
            <GiPopcorn className="plantet" />

            <Link to="/">
              {" "}
              <a
                style={{
                  margin: 0,
                  fontSize: 45,
                  color: "#f1f1f1",
                  fontFamily: "Russo One, sans-serif",
                  fontStyle: "normal",
                }}
              >
                ЮПІТЕР
              </a>
            </Link>
          </div>

          <div className="right_sside">
            <Menu onGenreSelect={onGenreSelect} isButtonClicked={function (): void {
              throw new Error("Function not implemented.");
            } } thisfilm={0} numberFilm={""}  />
          </div>

          <form className="search">
            <input
              autoComplete="off"
              placeholder="Пошук..."
              type="text"
              className="input12"
              onChange={handleSearch}
              value={search}
            />
            <a href="#">
              <HiMagnifyingGlass className="searsh_svg" />
            </a>
          </form>
        </div>
      </div>
    </>
  );
}
