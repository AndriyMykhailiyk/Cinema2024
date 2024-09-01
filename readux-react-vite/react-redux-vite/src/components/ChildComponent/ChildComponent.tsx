import React, { useState } from "react";
import "./ChildComponent.scss";
import "./ModaleBtn.scss";
import SideBarMenu from "./SideBarMenu/SideMenu";
import ChooseBtnFilm from "./BtnFilm/ChooseBtnFilm";

import { ImCross } from "react-icons/im";
import ReactPlayer from "react-player";

import { FaRegCirclePlay } from "react-icons/fa6";

import ModaleBlockAboutFilm from "./FilteredGenre/ModaleAbut";
import GenreF from "./FilteredGenre/GenreF";
import PageFilm from "./FilteredGenre/PageFilm";

// Interface for Movie data
interface Movie {
  buttontext: string;
  plot: string;
  actors: string;
  director: string;
  country: string;
  searchedData: string;
  genre: string;
  id: number;
  title: string;
  rating: number;
  year: number;
}

// Interface for ToggleButton props (unchanged)
interface ToggleButtonProps {
  onCheckboxChange: () => void; // Function to handle checkbox change
  isChecked?: boolean; // Optional prop for initial checked state (default: false)
  setNumberFilm?: (numberFilm: number) => void; // Optional function to update a number
  numberFilm?: number; // Optional prop for displaying a number
}

// Type for handleCheckboxChange props with corrected types
type handleCheckboxChangeProps = {
  item: Movie[]; // Movie object
  id: number; // Movie ID
  checked: boolean; // Checkbox checked state
  movieTitle: string; // Movie title
  prevMovie: Movie | null; // Previously selected movie (can be null)
};

// Type for onCheckboxChange props with corrected types
type onCheckboxChangeProps = {
  handleCheckboxChange: (props: handleCheckboxChangeProps) => void;
  setLocaleNumberFilm: (number) => void; // Function to update local number
};

interface Poster {
  poster: string;
  id: number;
}

// Type for ChildComponent props with corrected types and optional selectgenre
type ChildComponentProps = {
  checking: boolean;
  checking3d: boolean;
  poster: Poster[];
  PostersFilm: string;
  movies: Movie[]; // Array of Movie objects
  onCheckboxChange: (props: handleCheckboxChangeProps) => void; // Function to handle checkbox change with all props
  selectgenre?: string | null; // Optional genre filter
  numberFilm: number; // Initial number of selected movies
  selectedRating: number | null;
  hanalecClick: (props: handleCheckboxChangeProps) => void;
  SetCheking: () => void;
  SetCheking3D: () => void;
};




const ChildComponent: React.FC<ChildComponentProps> = ({
  movies,
  poster,
  checking,
  SetCheking,
  checking3d,
  SetCheking3D,
  onCheckboxChange,
  selectgenre,
  selectedRating,
  numberFilm = 0,
  hanalecClick,
}) => {
  const [buttonStates, setButtonStates] = useState<{ [id: number]: boolean }>(
    {}
  );
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [thisfilm, setThisfilm] = useState<number>(numberFilm);
  const [textfilm, setTextFilm] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [noshow, setnoShow] = useState<boolean>(false);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedRatings, setselectedRatings] = useState<number[]>([]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };





  const handleCheckboxChange = (
    id: number,
    checked: boolean,
    movieTitle: string,
    prevMovie: Movie | null
  ) => {
    onCheckboxChange({
      id,
      checked,
      movieTitle,
      prevMovie,
      item: [],
    });
  };

  const handleOpen = (movie: Movie) => {
    setSelectedMovie(movie);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedMovie(null);
    setOpen(false);
  };

  const handleClick = (id: number) => {
    setButtonStates((prevState) => {
      const newState = { ...prevState, [id]: !prevState[id] };
      setThisfilm(Object.values(newState).filter((clicked) => clicked).length);

      setThisfilm(thisfilm);

      return newState;
    });
  };

  const handlesecondClick = () => {
    setTextFilm(!textfilm);
  };

  const handleShow = () => {
    setShow(!show);
  };

  const Hande = () => {
    setnoShow(!noshow);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      (selectedGenres.length === 0 || selectedGenres.includes(movie.genre)) &&
      (selectedRatings.length === 0 || selectedRatings.includes(movie.rating))
  );

  const filteredByGenre = selectgenre
    ? movies.filter((movie) => movie.genre === selectgenre)
    : movies.filter((movie) => selectedGenres.includes(movie.genre));


  const handleGenreChange = (genre: string) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  const handleRatingChange = (rating: number) => {
    if (selectedRatings.includes(rating)) {
      setselectedRatings(selectedRatings.filter((r) => r !== rating));
    } else {
      setselectedRatings([...selectedRatings, rating]);
    }
  };

  return (
    <div>
      <div className="black">
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
      </div>

      <div style={{ height: "100%" }}>
        <div className="perents">
          <ChooseBtnFilm isOpen={isOpen} toggleMenu={toggleMenu} />
          <div className="begemot">
            <SideBarMenu
              filteredMovies={filteredMovies}
              handleRatingChange={handleRatingChange}
              handleGenreChange={handleGenreChange}
              setIsOpen={setIsOpen}
              isOpen={isOpen}
              checking={checking}
              SetCheking={SetCheking}
              checking3d={checking3d}
              SetCheking3D={SetCheking3D}
            />

            {filteredMovies && (
              <div>
                <ul className="container">
                  {filteredMovies.length > 0 ? (
                    <PageFilm
                      filteredMovies={filteredMovies}
                      poster={poster}
                      handleShow={handleShow}
                      handleOpen={handleOpen}
                      buttonStates={buttonStates}
                      handleClick={handleClick}
                      FaRegCirclePlay={FaRegCirclePlay}
                    />
                  ) : filteredByGenre ? (
                    <GenreF
                      filteredByGenre={filteredByGenre}
                      poster={poster}
                      FaRegCirclePlay={FaRegCirclePlay}
                      handleShow={handleShow}
                      handleOpen={handleOpen}
                      buttonStates={buttonStates}
                      handleClick={handleClick}
                    />
                  ) : null}
                </ul>
              </div>
            )}
          </div>
          {selectedMovie && (
            <ModaleBlockAboutFilm
              open={open}
              handleClose={handleClose}
              selectedMovie={selectedMovie}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChildComponent;
