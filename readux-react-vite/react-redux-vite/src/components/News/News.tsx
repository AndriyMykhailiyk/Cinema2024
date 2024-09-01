import React from "react";
import "./News.scss";
import { Header } from "../header/Header";

const News = () => {
  return (
    <>
      <div className="Hover_Btn1">
        <Header onGenreSelect={function (genry: string): void {
          throw new Error("Function not implemented.");
        } } numberFilm={null} handleSearch={function (): void {
          throw new Error("Function not implemented.");
        } } search={""} />
      </div>
      <section className="first_section-news">
        <p style={{ cursor: "text" }}>
          Допоки немає актуальних фільмів, очікуйте. <br />
          Вскорому часі вони появляться....
        </p>
      </section>
    </>
  );
};

export default News;
