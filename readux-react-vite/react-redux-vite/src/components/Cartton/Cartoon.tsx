import React from "react";
import { Header } from "../header/Header";

const Cartoon = () => {
  return (
    <>
      <div className="Hover_Btn1">
        <Header />
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

export default Cartoon;
