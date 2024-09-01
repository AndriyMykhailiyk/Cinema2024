import React, { useState, useEffect } from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
import Afiha from "./components/afisha/Afiha";
import ChildComponent from "./components/ChildComponent/ChildComponent";
import { Link } from "react-router-dom";
import { PostersFilm } from "../src/Api/Posters";
import { Fotter } from "./Fotter";
import News from "./components/News/News";

import Three3Movie from "./components/afisha/3D_2DMovie/Three3Movie";
import Two2Movie from "./components/afisha/2D_Movie/Two2Movie";

import { Header } from "./components/header/Header";
import QuestionSection from "./components/QuestinSection/Questin_Section";


interface Movie {
  rating: string | null;
  checked: boolean;
  id: number;
  title: string;
  genre: string;
}

function App({ thisfilm }) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filteredData, setFilteredData] = useState<Movie[]>([]);
  const [selectGenre, setSelectGenre] = useState<string | null>(null);
  const [selectedRating, setSelectedRating] = useState(null);

  const [search, setSearch] = useState<string>("");
  const [numberFilm, setNumberFilm] = useState<number>(0);
  const [open, setOpen] = useState(false);

  const [afiha, setAfish] = useState(true);

  const [checking, SetCheking] = useState(false);
  const [checking3d, SetCheking3D] = useState(false);

  const [click, setClick] = useState(0);

  const [Quesionfirs, SetQuesionfirs] = useState(true);



  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://freetestapi.com/api/v1/movies");
      const jsonData = await response.json();
      setMovies(jsonData);
      setFilteredData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onGenreSelect = (genre: string | null): void => {
    if (genre === selectGenre) {
      setSelectGenre(null);
      setFilteredData(movies);
    } else {
      setSelectGenre(genre);
      const filteredData = movies.filter((item) => item.genre === genre);
      setFilteredData(filteredData);
    }
  };

  const onRatingSelect = (rating: number | null): void => {
    if (rating === selectedRating) {
      setSelectedRating(null);
      setFilteredData(movies);
    } else {
      setSelectedRating(rating);
      const filteredData = movies.filter((item) => item.rating === rating);
      setFilteredData(filteredData);
    }
  };

  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  const searchedData = filteredData.filter(
    (movie: Movie) =>
      movie.title && movie.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleMyCheckboxChange = (id: number, checked: boolean) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, checked: !movie.checked } : movie
      )
    );

    setNumberFilm((prevCount) => (checked ? prevCount - 1 : prevCount + 1));
  };

  const handleCheckboxChange = (
    id: number,
    checked: boolean,
    movieTitle: string,
    prevMovie: Movie | null,
    PostersFilm: string
  ) => {
    onCheckboxChange({
      id,
      checked,
      movieTitle,
      prevMovie,
      item: [],
    });
    onCheckboxChangesecons({
      id,
      PostersFilm,
      item: [],
    });

    setLocaleNumberFilm((prevCount) => prevCount + 1);
  };

  const hanalecHANGE = () => {
    setAfish(!afiha);
  };

  const hanalecClick = () => {
    setClick(click + 1);
  };

  const ThreeDMovie = searchedData.filter((movie) => movie.genre === "Action");
  const TwoDMovies = searchedData.filter(
    (movie) => movie.genre === "CrimeDramaThriller"
  );

  const filteredMovies = selectGenre
    ? movies.filter((movie) => movie.genre === selectGenre)
    : movies;


    const HandleQuestion = () => {
      SetQuesionfirs(!Quesionfirs)
    }


  const anchor = "/";
  return (
    <>
      <div className="layout" id="/">
        <Header
          onGenreSelect={onGenreSelect}
          numberFilm={numberFilm}
          handleSearch={handleSearch}
          search={search}
        />

        <div className="Max-Width">
          <div className="Mode_Btn">
            <div className="button-container">
              <Link to="/news" state={{ thisfilm }}>
                <a
                  onClick={hanalecHANGE}
                  color="white"
                  className="btn-style-1"
                  style={{
                    fontSize: "1vw",
                    justifyContent: "flex-end",
                    maxWidth: "100%",
                    padding: "1vw 1vw", // Використання vw для адаптивного розміру
                    margin: 0,
                    display: "flex",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    textDecoration: "none",
                  }}
                >
                  Розклад на тиждень
                </a>
              </Link>

              <a
                onClick={hanalecHANGE}
                className="btn-style-1"
                style={{
                  fontSize: "1vw",
                  justifyContent: "flex-end",
                  maxWidth: "100%",
                  padding: "1vw 1vw", // Використання vw для адаптивного розміру
                  margin: 0,
                  display: "flex",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  textDecoration: "none",
                }}
              >
                Афіши
              </a>
              <Link to="/cartoon">
                <a
                  className="btn-style-1"
                  style={{
                    fontSize: "1vw",
                    justifyContent: "flex-end",
                    maxWidth: "100%",
                    padding: "1vw 1vw", // Використання vw для адаптивного розміру
                    margin: 0,
                    display: "flex",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    textDecoration: "none",
                  }}
                >
                  Мультики
                </a>
              </Link>

              <Link to="/colection" state={{ thisfilm }}>
                <a
                  className="btn-style-1"
                  style={{
                    fontSize: "1vw",
                    justifyContent: "flex-end",
                    maxWidth: "100%",
                    padding: "1vw 1vw", // Використання vw для адаптивного розміру
                    margin: 0,
                    display: "flex",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    textDecoration: "none",
                  }}
                >
                  Підбірка
                </a>
              </Link>
            </div>
          </div>

          {checking ? (
            <Two2Movie
              filteredMovies={filteredMovies}
              movies={searchedData}
              TwoDMovies={TwoDMovies}
              poster={PostersFilm}
              onCheckboxChange={handleMyCheckboxChange}
            />
          ) : checking3d ? (
            <Three3Movie
              filteredMovies={filteredMovies}
              ThreeDMovie={ThreeDMovie}
              movies={ThreeDMovie}
              poster={PostersFilm}
              onCheckboxChange={handleMyCheckboxChange}
            />
          ) : afiha ? (
            <ChildComponent
              checking={checking}
              SetCheking={SetCheking}
              checking3d={checking3d}
              SetCheking3D={SetCheking3D}
              hanalecClick={hanalecClick}
              poster={PostersFilm}
              movies={searchedData}
              onCheckboxChange={handleMyCheckboxChange}
              selectgenre={selectGenre}
              selectedRating={selectedRating}
            />
          ) : (
            <Afiha
              poster={PostersFilm}
              onCheckboxChange={handleMyCheckboxChange}
              movies={searchedData}
              selectgenre={selectGenre}
            />
          )}

        <Fotter />
        </div>
      </div>
    </>
  );
}

export default App;
