import React from "react";
import { Header } from "../header/Header";
import { Fotter } from "../../Fotter";

const QuestionSection = ({ Questionfirs }) => { 
  return (
    <>
      <Header onGenreSelect={function (genry: string): void {
              throw new Error("Function not implemented.");
          } } numberFilm={null} handleSearch={function (): void {
              throw new Error("Function not implemented.");
          } } search={""}/>
      <div className="wraaper">
        <section style={{ padding: "5vw 9vw", color: "black" }}>
          {Questionfirs ? ( 
            <div
              style={{
                textAlign: "left",
                backgroundColor: "#e5e8e8",
                padding: "1vw",
              }}
            >
              <div className="head">
                <h2>Загальні правила на сайті</h2>
              </div>
              <div className="text-about">
                <h4> Загальні правила поведінки на сайті:</h4>
                <br />
                <p>Чорнобривці</p>
                <br />
              </div>
            </div>
          ) : (
            <p>Hwe</p>
          )}
        </section>
      </div>
      <Fotter />
    </>
  );
};

export default QuestionSection;
