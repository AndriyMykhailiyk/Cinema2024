import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GiPopcorn } from "react-icons/gi";
import "./SideBarMenu.scss";

import { FaRegStar } from "react-icons/fa";
import { TiArrowUp } from "react-icons/ti";
import Checkbox from "@mui/material/Checkbox";

const SideBarMenu = ({
  isOpen,
  filteredMovies,
  handleRatingChange,
  handleGenreChange,
  setIsOpen,
  checking,
  SetCheking,
  checking3d,
  SetCheking3D,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isSee, SetisSee] = useState<boolean>(false);
  const [isRating, SetisRating] = useState<boolean>(false);
  const [isOpenFormate, SetisOpenModale] = useState<boolean>(false);
  const [checked, setChecked] = React.useState<boolean>(true);

  useEffect(() => {
    if (checking) {
      // Відобразити 2D фільми
    } else if (checking3d) {
      // Відобразити 3D фільми
    }
  }, [checking, checking3d]);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const handleSetisSee = () => {
    SetisSee(!isSee);
  };

  const HandleRating = () => {
    SetisRating(!isRating);
  };

  const HandleClick = () => {
    SetCheking(!checking);
    setIsOpen(false);
  };

  const HandleClick3D = () => {
    SetCheking3D(!checking3d);
    setIsOpen(false);
  };

  const HandleFormate = () => {
    SetisOpenModale(!isOpenFormate);
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ x: 0, opacity: 0 }} // Початкове положення тексту та прозорість
          animate={{ x: isOpen ? 6 : 78, opacity: isOpen ? 1 : 0 }} // Зсув тексту та прозорість залежно від стану меню
          transition={{ duration: 0.3 }} // Тривалість анімації
          style={{
            color: "white",
            fontFamily: "Poppins, Roboto, sans-serif",
            width: "35%",
            padding: "0vh 2vh 0vh 0vh",
          }}
        >
          <section
            className={isOpen ? "open-section" : ""}
            style={{
              height: "100%",
              flex: "1",
              backgroundColor: "#363c49",
            }}
          >
            <div className="wrapper">
              <div
                className="Flex_center"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <GiPopcorn className="plantet" style={{ color: "white" }} />
                <a style={{ color: "white" }}>Фільтр фільмів</a>
              </div>
              <div style={{ paddingBottom: "1vw" }}>
                <ul className="UL_GENRE_MODALE">
                  <span id="Span_id">
                    <p
                      style={{
                        padding: "0.5vw 2vw",
                        color: "white",
                        fontFamily: "'Poppins', 'Roboto', sans-serif",
                        display: "flex",
                        fontSize: "16px",
                        cursor: "pointer",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                      onClick={handleSetisSee}
                    >
                      Genre
                      <TiArrowUp id="Span_id" style={{ fontSize: "2vw" }} />
                    </p>
                  </span>
                  {isSee && (
                    <li className="li_genre_modale">
                      <label style={{ padding: "0vw 2vw" }}>
                        <span>
                          {filteredMovies.map((item) => (
                            <li
                              key={item.id}
                              style={{
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <Checkbox
                                sx={{
                                  color: "white", // Color for unchecked state
                                  "&.Mui-checked": {
                                    color: "black", // Color for checked state
                                  },
                                }}
                                {...label}
                                style={{
                                  padding: "0.2vh",
                                }}
                                onChange={() => handleGenreChange(item.genre)}
                              />{" "}
                              <a
                                style={{ color: "white" }}
                                onChange={() => handleGenreChange(item.genre)}
                              >
                                {item.genre}
                              </a>
                            </li>
                          ))}
                        </span>
                      </label>
                    </li>
                  )}
                </ul>
              </div>

              <div style={{ paddingBottom: "1vw" }}>
                <ul className="UL_GENRE_MODALE">
                  <span>
                    <p
                      style={{
                        cursor: "pointer",
                        alignItems: "center",
                        justifyContent: "space-between",
                        color: "white",
                        fontFamily: "'Poppins', 'Roboto', sans-serif",
                        display: "flex",
                        fontSize: "16px",
                        padding: "0.5vw 2vw",
                      }}
                      onClick={HandleRating}
                    >
                      Rating
                      <TiArrowUp id="Span_id" style={{ fontSize: "2vw" }} />
                    </p>
                  </span>
                  {isRating && (
                    <li className="li_genre_modale">
                      <label style={{ padding: "0vw 2vw" }}>
                        <span>
                          {filteredMovies.map((item) => (
                            <li
                              key={item.id}
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <Checkbox
                                sx={{
                                  color: "white", // Колір бордера, коли чекбокс не вибраний
                                  "&.Mui-checked": {
                                    color: "black", // Колір бордера та іконки, коли чекбокс вибраний
                                  },
                                }}
                                {...label}
                                style={{
                                  padding: "0.2vh",
                                  borderColor: "white",
                                }}
                                onChange={() => handleRatingChange(item.rating)}
                              />
                              <FaRegStar /> {">="} {item.rating}
                            </li>
                          ))}
                        </span>
                      </label>
                    </li>
                  )}
                </ul>
              </div>

              <div style={{ paddingBottom: "1vw" }}>
                <ul className="formats_89">
                  <span className="hover_span">
                    <p
                      style={{
                        alignItems: "center",
                        color: "white",
                        fontFamily: "'Poppins', 'Roboto', sans-serif",
                        display: "flex",
                        fontSize: "16px",
                        justifyContent: "space-between",
                        padding: "0.5vw 2vw",
                      }}
                      onClick={HandleFormate}
                    >
                      All format
                      <TiArrowUp id="Span_id" style={{ fontSize: "2vw" }} />
                    </p>
                  </span>
                </ul>

                <div className="Formates">
                  {isOpenFormate && (
                    <div className="popup_modale_windows">
                      {" "}
                      <p className="hover-color" onClick={HandleClick}>
                        <Checkbox
                          sx={{
                            color: "white", // Колір бордера, коли чекбокс не вибраний
                            "&.Mui-checked": {
                              color: "black", // Колір бордера та іконки, коли чекбокс вибраний
                            },
                          }}
                          {...label}
                          style={{ padding: "0.2vh" }}
                          onClick={HandleClick}
                        />{" "}
                        2D
                      </p>
                      <p className="hover-color" onClick={HandleClick3D}>
                        <Checkbox
                          sx={{
                            color: "white", // Колір бордера, коли чекбокс не вибраний
                            "&.Mui-checked": {
                              color: "black", // Колір бордера та іконки, коли чекбокс вибраний
                            },
                          }}
                          {...label}
                          style={{ padding: "0.2vh" }}
                          onClick={HandleClick3D}
                        />{" "}
                        3D
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div style={{ paddingBottom: "1vw" }}>
                <ul className="Adult-Onle">
                  <span className="hover_span">
                    <p
                      style={{
                        color: "white",
                        fontFamily: "'Poppins', 'Roboto', sans-serif",
                        display: "flex",
                        fontSize: "16px",
                        paddingBottom: "1vh",
                      }}
                    >
                      Adult Only
                    </p>
                  </span>

                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleToggle}
                    />
                    <span className="slider"></span>
                  </label>
                </ul>
              </div>
            </div>
          </section>
        </motion.div>
      )}
    </>
  );
};

export default SideBarMenu;
