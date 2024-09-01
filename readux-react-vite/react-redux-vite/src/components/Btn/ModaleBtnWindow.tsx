import {Modal} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import "./ModaleBtn.scss";

type ModaleBtnWindowProps = {
  runtime: number;
  director: string;
  country: string;
  actors: string;
  selectgenre: any,
  movies: Moviee[],
  onCheckboxChange: any,
  numberFilm: any,
}



interface Moviee {
  runtime: number;
  director: string;
  country: string;
  actors: string;
  genre: string;
  id: number;
  title: string;
  rating: number;
  plot: string;
}

const ModaleBtnWindow = ({ selectgenre, movies}: ModaleBtnWindowProps) => {
  const [open, setIsOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Moviee | null>(null); // Store selected movie

  const handleOpen = (movie: Moviee) => {
    setSelectedMovie(movie); // Set selected movie
    setIsOpen(true);
  };
  const handleClose = () => setIsOpen(false);



  const filteredMovies = selectgenre ? movies.filter(movie => movie.genre === selectgenre) : movies;

  return (
    <div>
      <div className="container">
        <br />
        {filteredMovies.map((movie) => (
          <button key={movie.id} className="isopebtn" onClick={() => handleOpen(movie)}>
            {movie.title}
          </button>
        ))}
        <Modal
          className="Modale_scss"
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="Boxstyle">
            <div className="Style_Modale">
              <button className="btn_close" onClick={handleClose}>
                Close
              </button>
              

              {selectedMovie && (
                <div className="Modale_Style">
                  <li style={{ listStyleType: "none",  }}>
                    <div className="TitleBlock">
                      <center>
                        {selectedMovie.title}
                      </center>
                    </div>
                    <div className="EnatherDescription">
                    Жанр: {selectedMovie.genre}
                    <br />
                    Рейтинг: <span>{selectedMovie.rating}</span>
                    <br />
                    Актори: <span>{selectedMovie.actors}</span>
                    <div className="Plot">
                      Опис:<span>{selectedMovie.plot}</span>< br />
                      Країна:{selectedMovie.country}< br />

                      Режисер:{selectedMovie.director}< br />
                      Тривалість:{selectedMovie.runtime} хв
                    </div><br />
                    </div>

                  </li>
              
                </div>
              )}

            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default ModaleBtnWindow;
