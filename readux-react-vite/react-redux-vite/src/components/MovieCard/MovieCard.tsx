import React, { useState } from 'react';
import { Modal, Box } from '@mui/material';
import './MovieCard.scss';
import "./ModaleBtn.scss";

interface Movie {
  buttontext: string;
  plot: string;
  actors: string;
  director: string;
  runtime: number;
  country: string;
  searchedData: string;
  genre: string;
  id: number;
  title: string;
  rating: number;
  year: number;
}

interface MovieCardProps {
  movie: Movie;
  onCheckboxChange: (props: handleCheckboxChangeProps) => void;
}

type handleCheckboxChangeProps = {
  item: Movie[];
  id: number;
  checked: boolean;
  movieTitle: string;
  prevMovie: Movie | null;
};

const MovieCard: React.FC<MovieCardProps> = ({ movie, onCheckboxChange }) => {
  const [buttontext, setButtonText] = useState<string>('Додати в обране');
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setSelectedMovie(movie);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedMovie(null);
    setOpen(false);
  };

  const SavesMovie = () => {
    setButtonText(isClicked ? 'Додати в обране' : 'Додано');
    setIsClicked(!isClicked);
    // Update number of films in parent component if needed
    onCheckboxChange({
      id: movie.id,
      checked: !isClicked,
      movieTitle: movie.title,
      prevMovie: selectedMovie,
      item: [],
    });
  };

  return (
    <li className="Ul_Style" key={movie.id}>
      <div className='Height_Container'>
        Назва: {movie.title}<br />
        Жанр: {movie.genre}<br />
        Рейтинг: <span>{movie.rating}</span><br />
        Рік: <span>{movie.year}</span>
      </div>
      <div className='btn_in_block'>
        <button className='btn_sec' onClick={handleOpen}>Показати фільм</button>
        <button className={isClicked ? "btn_sec1" : "btn_sec"} onClick={SavesMovie}>{buttontext}</button>
      </div>

      {selectedMovie && (
        <Modal open={open} onClose={handleClose}>
          <Box className="Boxstyle">
            <div className="Modale_Style">
              <button className="btn_close" onClick={handleClose}>Close</button>
              <li style={{ listStyleType: "none" }}>
                <div className="TitleBlock">
                  <center>{selectedMovie.title}</center>
                </div>
                <div className="EnatherDescription">
                  Жанр: {selectedMovie.genre}<br />
                  Рейтинг: <span>{selectedMovie.rating}</span><br />
                  Актори: <span>{selectedMovie.actors}</span>
                  <div className="Plot">
                    Опис:<span>{selectedMovie.plot}</span><br />
                    Країна:{selectedMovie.country}<br />
                    Режисер:{selectedMovie.director}<br />
                    Тривалість:{selectedMovie.runtime} хв
                  </div><br />
                </div>
              </li>
            </div>
          </Box>
        </Modal>
      )}
    </li>
  );
};

export default MovieCard;
