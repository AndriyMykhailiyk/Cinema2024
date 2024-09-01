import React, { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import axios from "axios";
import "./AboutPage.scss";
import ReactPlayer from "react-player";

import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import {FaYoutube } from "react-icons/fa";

import { Fotter } from "../../Fotter";
import { Header } from "../header/Header";

import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";

import { IoTicketSharp } from "react-icons/io5";

import { Banner } from "./But_Tikets/Banner";
import { PostersFilm } from "../../Api/Posters";



const About = ({ value }) => {

  const { id } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState<null>(null);
  const [liked, setLiked] = useState<number>(150);
  const [likeded, setLikeded] = useState<number>(150);
  const [description, Setdescription] = useState<boolean>(false);
  const [poster, setPoster] = useState([]);
  const [telegram, setTelegram] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get(`https://freetestapi.com/api/v1/movies/${id}`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => console.error("Error fetching movie details:", error));
  }, [id]);

  useEffect(() => {
    const PostersFilm = localStorage.getItem("posters");
    if (PostersFilm) {
      setPoster(JSON.parse(PostersFilm));
    }
  }, [location]);


  const BlackText = ({ children }) => (
    <span style={{ color: "black" }}>{children}</span>
  );

  const HandleClickPlus = () => {
    setLiked(liked + 1);
    setLikeded(likeded - 1);
  };

  const HandleClickNegative = () => {
    setLiked(liked - 1);
    setLikeded(likeded + 1);
  };

  const HandleDescriptionSee = () => {
    Setdescription(!description);
  };

  const HandleSeeTelegram = () => {
    setTelegram(!telegram);
  };

  const FirstTheePhoto = PostersFilm.slice(0, 3);

  const randomIndex = Math.floor(Math.random() * PostersFilm.length);
  const randomPoster = PostersFilm[randomIndex];

  const MovieDetails = () => (
    <div className="gray">
      <p>
        Рік випуску: <BlackText>{movie.year}</BlackText>
      </p>
      <p>
        Касові збори: <BlackText>{movie.boxOffice}</BlackText>
      </p>
      <p>
        Актори: <BlackText>{movie.actors}</BlackText>
      </p>
      <p>
        Рейтинг: <span className="IMDB">IMDB {movie.rating}</span>
      </p>
      <p>
        Режисер: <BlackText>{movie.director}</BlackText>
      </p>

      <div className="Plot">
        <a
          className="Plot_Text"
          id="openModaleBtn"
onClick={HandleDescriptionSee}
        >
          Опис
    
        </a>
      
      </div>

      {description && <p>{movie.plot}</p>}


    </div>
  );

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="button-container-about">
        <p style={{ color: "black" }}>{value}</p>
      </div>

      <div className="description">
        <div className="photo">
        <img
  key={randomIndex}
  src={randomPoster.poster}
  alt="Movie Poster"
  style={{
    borderRadius: "1vw",
    width: "14vw",
  }}
/>
          <div className="Tickets">
            <a href="#buy_Tikets">
              <button className="btn_tickets">
                <IoTicketSharp className="tickte" />
                Купити Білет
              </button>
            </a>
          </div>

          <section className="Genre">
            <div className="wrapper_genre">
              <p className="Genre_text">
                {movie.genre.map((genre, index) => (
                  <span key={index} className="span_genre_text">
                    {genre}
                  </span>
                ))}
              </p>
            </div>
          </section>
        </div>

        <div className="FLEX">
          <p className="title_text">{movie.title}</p>
          <MovieDetails movie={movie} />
          <div className="trailer23">
            <div className="reclama">
              <p>
                Дивитися фільм «{movie.title}» 2024 українською мовою онлайн
                безкоштовно
              </p>
            </div>

            <div className="container_for_video">
              <p className="header_insade_trailer">Плеєр</p>
              <p className="player_insade_trailer">Трейлер</p>

              <ReactPlayer
                url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                width={"100%"}
              />

              <div className="fotter_container">
                <div className="footer01">
                  <div className="footer012">
                    <FaYoutube className="FaYoutube" />
                    <FaTwitter className="FaTwitter" />
                    <FaInstagram className="FaInstagram" />
                  </div>
                  <div className="footer02">
                    <p onClick={HandleClickPlus}>
                      <FcLike className="green_heart" /> {liked}
                    </p>
                    <p onClick={HandleClickNegative}>
                      <FcDislike /> {likeded}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {telegram && (
              <Banner
                FaYoutube={FaYoutube}
                HandleSeeTelegram={HandleSeeTelegram}
              />
            )}
          </div>
          <section className="sectino_film">
            <div className="wrapper_24_text">
              <a
                style={{
                  fontWeight: "100",
                  textTransform: "uppercase",
                  fontFamily: "Oswald, sans-serifі",
                  marginRight: 10,
                  fontSize: "2.5vw",

                  textDecoration: "none",
                }}
              >
                Що ще подивитися
              </a>

              <div className="wrapper_24_photo">
                {FirstTheePhoto.map((poster, index) => (
                  <img
                    key={index}
                    src={poster.poster}
                    alt="Movie Poster"
                    style={{
                      borderRadius: "1vw",
                      margin: "0vw 1vw 0vw 0vw",
                      width: "14vw",
                    }}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="footer_About">
        <Fotter />
      </div>
    </>
  );
};

export default About;
