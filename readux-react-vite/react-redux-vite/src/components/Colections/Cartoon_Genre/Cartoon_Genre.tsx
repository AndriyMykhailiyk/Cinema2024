import React, { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "../../header/Header";
import { Fotter } from "../../../Fotter";
import { useParams } from "react-router-dom";
import { PostersFilm } from "../../../Api/Posters";
import "./Cartoon_Genre.scss";
import { type } from "os";

interface Movie {
  id: number;
  title: string;
  genre: string;
  rating: number;
  year: number;
}


const Cartoon_Genre = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const { id } = useParams<{id: string}>();
  const poster = PostersFilm;

  useEffect(() => {
    axios
      .get(`https://freetestapi.com/api/v1/movies?genre=${id}`)
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, [id]);

  if (movies.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header onGenreSelect={function (genry: string): void {
        throw new Error("Function not implemented.");
      } } numberFilm={null} handleSearch={function (): void {
        throw new Error("Function not implemented.");
      } } search={""} />
      <section className="film_list">
        <div className="movies-container">
          {movies.map((movie) => (
            <div key={movie.id}>
              <li
                className="Ul_Style"
                key={movie.id}
                style={{ minWidth: "300px" }}
              >
                <div className="Height_Container">
                  <div>
                    {poster.map(
                      (p) =>
                        p.id === movie.id &&
                        p.poster && (
                          <img key={p.id} src={p.poster} className="poster" />
                        )
                    )}
                    <div className="title">
                      {movie.title}

                      <br />
                    </div>
                    <div className="genry">
                      {movie.genre}
                      <br />
                    </div>
                    Рейтинг: <span>{movie.rating}</span>
                    <br />
                    Рік: <span>{movie.year}</span>
                    <br />
                    <div className="trailer_div">
                      <span className="trailer">Дивитись трейлер</span>
                    </div>
                  </div>
                  <div className="btn_in_block">
                    <button className="btn_sec">Показати фільм</button>
                  </div>
                </div>
              </li>
            </div>
          ))}
        </div>
      </section>
      <div className="footer_About">
        <Fotter />
      </div>
    </>
  );
};

export default Cartoon_Genre;
