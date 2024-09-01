import React from "react";
import "./Afisha.scss";
import { FaRegCirclePlay } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AfishaComponent = ({ poster, onCheckboxChange, selectgenre, movies }) => {
  const handleCheckboxChange = (id, checked, movieTitle, prevMovie) => {
    onCheckboxChange({
      id,
      checked,
      movieTitle,
      prevMovie,
      item: [],
    });
  };

  const handlePosterClick = (posters) => {
    localStorage.setItem("posters", JSON.stringify(posters));
  };

  const filteredMovies = selectgenre
    ? movies.filter((movie) => movie.genre === selectgenre)
    : movies;

  return (
    <>
      <div className="contaier9090">
        {filteredMovies.map((movie) => (
          <li className="Ul_style" key={movie.id}>
            <div className="Poster_Page">
              <div className="Gage">
                {poster
                  .filter((p) => p.id === movie.id)
                  .map((p) => (
                    <Link
                      key={p.id}
                      to={{
                        pathname: `/about/${movie.id}`,
                        state: { poster: p },
                      }}
                      onClick={() => handlePosterClick([p])}
                      style={{ margin: "10px" }}
                    >
                      <img src={p.poster} alt="Poster" className="photoo" />
                    </Link>
                  ))}
              </div>
            </div>
          </li>
        ))}
      </div>
    </>
  );
};

export default AfishaComponent;
