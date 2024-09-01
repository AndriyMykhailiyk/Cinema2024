import React, { useState } from "react";
import { Fotter } from "../../Fotter";
import { Header } from "../header/Header";
import "./Colections.scss";
import { ColectionCategory } from "../../Api/colection";
import { Banner } from "../FullFilm/But_Tikets/Banner";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Colections = ({ anchor }) => {
  const [telegram, setTelegram] = useState<boolean>(true);
  const [colection, setColection] = useState<boolean>(false);

  const HandleSeeTelegram = () => {
    setTelegram(!telegram);
  };

  const HandleMoreColection = () => {
    setColection(!colection);
  };

  return (
    <>
      <div className="section">
        <Header onGenreSelect={function (genry: string): void {
          throw new Error("Function not implemented.");
        } } numberFilm={null} handleSearch={function (): void {
          throw new Error("Function not implemented.");
        } } search={""} />
<section className="warpper_section">        <section className="about_film">
          <div className="layout_about_film">
            <p>
              <Link
                to={{
                  pathname: "/",
                }}
              >
                <span className="UA_kINO">UAKino »</span>
              </Link>
              <span className="dobirka">
                {" "}
                Добірки цікавих фільмів та серіалів
              </span>
            </p>
          </div>
        </section>

        <section className="film_list">
          <div style={{}}>
            <h2 style={{ paddingBottom: "1vw" }}>
              Найкращі колекції фільмів та серіалів дивитися онлайн
            </h2>

            <div className="flex_container">
              {ColectionCategory.map((с) => (
                <div key={с.id} className="layout">
                  <div>
                    <Link
                      key={с.id}
                      to={{
                        pathname: `/cartoon_genre/${с.genre}`,
                      }}
                    >
                      <img
                        key={с.id}
                        src={с.colection}
                        alt="Movie_Poster"
                        className="Photo_Movie_Poster"
                      />
                    </Link>
                  </div>

                  <p key={с.id} className="text">
                    {с.title}
                    {", 2024"}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {colection ? (
            <div className="flex_container">
              {ColectionCategory.map((с) => (
                <div key={с.id} className="layout">
                  <img
                    key={с.id}
                    src={с.colection}
                    alt="Movie_Poster"
                    className="Photo_Movie_Poster"
                  />
                  <p key={с.id} className="text">
                    {с.title}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <></>
          )}

          <section className="btn_moreFilm">
            <div className="nav_load" id="nav_load">
              <a className="a_nav_load" onClick={HandleMoreColection}>
                Завантажити ще
              </a>
            </div>
          </section>

          {telegram && (
            <Banner
              FaYoutube={FaYoutube}
              HandleSeeTelegram={HandleSeeTelegram}
            />
          )}
        </section>
        </section>

        <Fotter />
      </div>
    </>
  );
};

export default Colections;
