import React from "react";
import { Modal, Box } from "@mui/material";
import "./ModaleBtn.scss";

const ModaleBlockAboutFilm = ({ open, handleClose, selectedMovie }) => {
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box className="Boxstyle">
          <div className="Modale_Style_insade_block">
            <button className="btn_close" onClick={handleClose}>
              Close
            </button>
            <li style={{ listStyleType: "none" }}>
              <div className="TitleBlock">
                <center>{selectedMovie.title}</center>
              </div>
              <div
                style={{
                  fontSize: "1vw",
                  padding: "1vw",
                  fontWeight: "400",
                }}
              >
                <span className="wrapper_about_text">
                  <div className="div_text"> Жанр:</div>{" "}
                  <p>{selectedMovie.genre}</p>
                </span>
                <br />
                <span className="text_gray"> Рейтинг: </span>
                {selectedMovie.rating}
                <br />
                <span className="text_gray"> Актори: </span>
                {selectedMovie.actors}
                <div style={{}}>
                  <span className="text_gray"> Опис: </span>
                  {selectedMovie.plot}
                  <br />
                  <span className="text_gray"> Країна: </span>
                  {selectedMovie.country}
                  <br />
                  <span className="text_gray"> Режисер:</span>{" "}
                  {selectedMovie.director}
                  <br />
                  <span className="text_gray">Тривалість:</span>{" "}
                  {selectedMovie.runtime} хв
                </div>
                <br />
              </div>
            </li>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default ModaleBlockAboutFilm;
