import React, { useState, useEffect } from "react";
import axios from "axios";
import ChooseBtnFilm from "../../ChildComponent/BtnFilm/ChooseBtnFilm";
import SideBarMenu from "../../ChildComponent/SideBarMenu/SideMenu";

import "./3DMovie.scss";
import "../../ChildComponent/ChildComponent.scss";
import { FaRegCirclePlay } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import ReactPlayer from "react-player";
import { Modal, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Two2Movie = ({
  poster,
  filteredMovies,
  checking,
  SetCheking,
  checking3d,
}) => {
  const [movies, setMovies] = useState([]);
  const [filtered, setFilteredMovies] = useState([]);
  const [genre, setGenre] = useState("Action"); // Замініть на потрібний жанр
  const [buttonStates, setButtonStates] = useState({});
  const [show, setShow] = useState(false);
  const [noshow, setnoShow] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(false);
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSee, SetisSee] = useState(false);

  useEffect(() => {
    axios
      .get("https://freetestapi.com/api/v1/movies")
      .then((response) => {
        console.log("Fetched movies:", response.data); // Перевірка отриманих даних
        setMovies(response.data);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, []);

  useEffect(() => {
    const filtered = movies.filter((movie) => {
      const movieGenre = Array.isArray(movie.genre)
        ? movie.genre[0]
        : movie.genre;
      return movieGenre.toLowerCase() === genre.toLowerCase();
    });
    console.log("Filtered movies:", filtered); // Перевірка відфільтрованих фільмів
    setFilteredMovies(filtered);
  }, [movies, genre]);

  const handleShow = () => {
    setShow(!show);
  };

  const Hande = () => {
    setnoShow(!noshow);
  };

  const handleClose = () => {
    setSelectedMovie(null);
    setOpen(false);
  };

  const handleOpen = (movie) => {
    setSelectedMovie(movie);
    setOpen(true);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSetisSee = () => {
    SetisSee(!isSee);
  };

  return (
    <div>
      {show && (
        <div className="video_player">
          <div className="contaier1">
            {noshow ? null : (
              <>
                <button onClick={Hande} className="btn_close45">
                  <ImCross />
                </button>

                <ReactPlayer
                  url={"https://www.youtube.com/watch?v=KRSSH4qdnlQ"}
                />
              </>
            )}
          </div>
        </div>
      )}

      <div className="perents-23">
        <ChooseBtnFilm isOpen={isOpen} toggleMenu={toggleMenu} />

        <div style={{ display: "flex", width: "100%" }}>
          <SideBarMenu
            handleSetisSee={handleSetisSee}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            isSee={isSee}
            SetisSee={SetisSee}
            filteredMovies={filteredMovies}
            checking={checking}
            SetCheking={SetCheking}
            checking3d={checking3d}
          />

          <div className="red_bone">
            <a className="Text2D">2Д Фільми</a>
            <ul className="container">
              {filtered.map((movie) => (
                <li className="Ul_Style" key={movie.id} style={{}}>
                  <div className="Height_Container">
                    <div
                      style={{
                        display: "felx",
                      }}
                    >
                      {poster.map(
                        (p) =>
                          p.id === movie.id && (
                            <img
                              key={p.id}
                              src={p.poster}
                              alt="Poster"
                              className="poster54"
                            />
                          )
                      )}
                      <Link
                        key={movie.id}
                        to={{
                          pathname: `/about/${movie.id}`,
                        }}
                      >
                        <div className="title">{movie.title}</div>
                      </Link>
                      <div className="genry">{movie.genre.join(", ")}</div>{" "}
                      {/* Виведення жанрів як рядок */}
                      Рейтинг: <span>{movie.rating}</span>
                      <br />
                      Рік: <span>{movie.year}</span>
                      <br />
                      <div className="trailer_div" onClick={handleShow}>
                        <FaRegCirclePlay
                          style={{
                            alignItems: "center",
                            display: "block",
                            position: "relative",
                            color: "#FF01FB",
                          }}
                        />
                        <span className="trailer">Дивитись трейлер</span>
                      </div>
                      <div className="btn_in_block">
                        <button
                          className="btn_sec"
                          onClick={() => handleOpen(movie)}
                        >
                          Показати фільм
                        </button>
                        <button
                          className={
                            buttonStates[movie.id] ? "btn_sec1" : "btn_sec"
                          }
                          onClick={() => handleClick(movie.id)}
                        >
                          {buttonStates[movie.id]
                            ? "Прибрати"
                            : "Додати в обране"}
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {selectedMovie && (
          <Modal open={open} onClose={handleClose}>
            <Box className="Boxstyle">
              <div className="Modale_Style">
                <button className="btn_close" onClick={handleClose}>
                  Close
                </button>
                <li style={{ listStyleType: "none" }}>
                  <div className="TitleBlock">
                    <center>{selectedMovie.title}</center>
                  </div>
                  <div className="EnatherDescription">
                    Жанр: {selectedMovie.genre}
                    <br />
                    Рейтинг: <span>{selectedMovie.rating}</span>
                    <br />
                    Актори: <span>{selectedMovie.actors}</span>
                    <div className="Plot">
                      Опис: <span>{selectedMovie.plot}</span>
                      <br />
                      Країна: {selectedMovie.country}
                      <br />
                      Режисер: {selectedMovie.director}
                      <br />
                      Тривалість: {selectedMovie.runtime} хв
                    </div>
                    <br />
                  </div>
                </li>
              </div>
            </Box>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Two2Movie;
