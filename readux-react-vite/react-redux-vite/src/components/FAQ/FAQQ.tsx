import React, { useState } from "react";
import "./FAQ.scss";
import { Header } from "../header/Header";
import { Fotter } from "../../Fotter";
import { AiTwotoneQuestionCircle } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowUpLong } from "react-icons/fa6";

import ModaleSection from "./FAQ_Section/ModaleSection";
import Button from "@mui/material/Button";

const FAQQ = () => {
  const [isOpen, setIsOpen] = useState({
    menu1: false,
    menu2: false,
    menu3: false,
    menu4: false,
    menu5: false,
    menu6: false,
  });

  const toggleMenu = (menu) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <>
      <div className="wrapper_header" id="header_top">
        <Header onGenreSelect={function (genry: string): void {
          throw new Error("Function not implemented.");
        } } numberFilm={null} handleSearch={function (): void {
          throw new Error("Function not implemented.");
        } } search={""} />
      </div>
      <div className="wrapper_faq">
        <section className="about_FAQ">
          <div className="wrapper_about">
            <div className="Header_FAQ">
              <h1>FAQ</h1>
            </div>

            <div className="text_FAQ">
              <p>Маєш питання? Знайди його тут.</p>
            </div>

            <div className="text_FAQ">
              <p>
                Не знайшов? Напиши нам на{" "}
                <span className="span_whatsapp">WhatsApp</span>
              </p>
            </div>
          </div>
        </section>

        <section className="FAQ_Question_1">
          <div className="block">
            <div className="Plot">
              <AiTwotoneQuestionCircle />
              <h2
                className="Plot_Text_1"
                id="openModaleBtn"
                onClick={() => toggleMenu("menu1")}
              >
                Чи можна внести зміни в вже куплений квиток:
              </h2>
              <IoIosArrowDown />
            </div>
            <hr />

            {isOpen.menu1 && (
              <div
                id="faqQueastion_wrapper_id"
                className="faqQueastion_wrapper"
              >
                <p>
                  Виберіть фільм і час сеанcу, який вас цікавить. Клік на час
                  сеансу відкриє вікно покупки / бронювання квитків онлайн.
                  Переконайтесь в тому, що обраний кінотеатр, дата, фільм, зал і
                  технологія показу відповідають вашим бажанням.
                </p>
              </div>
            )}
          </div>
        </section>

        <ModaleSection
          IoIosArrowDown={IoIosArrowDown}
          AiTwotoneQuestionCircle={AiTwotoneQuestionCircle}
          toggleMenu={toggleMenu}
          isOpen={isOpen}
        />
      </div>
      <div className="btn_wrapper">
        <Button
          href="#header_top"
          variant="contained"
          sx={{
            backgroundColor: "#FF01FB;",
            ":hover": {
              backgroundColor: "cornflowerblue",
            },
            padding: "15px 12px",
          }}
        >
          <FaArrowUpLong />
        </Button>
      </div>
      <Fotter />
    </>
  );
};

export default FAQQ;
