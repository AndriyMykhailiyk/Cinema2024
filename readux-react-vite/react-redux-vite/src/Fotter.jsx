import React from "react";
import "./App.css";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import AppleStore from "./Svg/Footer_Png/pngwing.com.png";
import { GiPopcorn } from "react-icons/gi";
import { Link } from "react-router-dom";

const Hello = () => {
  location.reload();
};

export const Fotter = () => {

  const HandleQuestion = () => {
    SetQuesionfirs(!Quesionfirs)
  }

  return (
    <>
      <footer className="footer">
        <div className="wrapper_footer">
          <div className="layout_text_first">
            <h3 className="text_menu_footer">Корисна інформація</h3>

            <div className="layout_text_second">
              <li className="layout_text_second_li">
                <Link to="/question_section">
                <p href="#" className="text_menu_footer1"
                
                onClick={HandleQuestion}>
                  Питання відповідь
                </p>
                </Link>
              </li>

              <li className="layout_text_second_li">
                <p href="#" className="text_menu_footer1">
                  Як купити квиток?
                </p>
              </li>

              <li className="layout_text_second_li">
                <p href="#" className="text_menu_footer1">
                  Повернення квитків
                </p>
              </li>

              <li className="layout_text_second_li">
                <p href="#" className="text_menu_footer1">
                  Конфіденційність
                </p>
              </li>

              <li className="layout_text_second_li">
                <p href="#" className="text_menu_footer1">
                  Наші контакти
                </p>
              </li>

              <li className="layout_text_second_li">
                <p href="#" className="text_menu_footer1">
                  Публічна оферта
                </p>
              </li>
            </div>
          </div>

          <div className="suspendes_Information">
            <div className="layout_text">
              <p className="texttext">
                ©Copyright 2024 Безкоштовний онлайк кінотеатр
              </p>
            </div>
            <GiPopcorn className="plantet" />{" "}
            <Link to={"/"}>
              <a
                style={{
                  margin: 0,
                  fontSize: "3vw",
                  color: "#f1f1f1",
                  fontFamily: "Russo One, sans-serif",
                  fontStyle: "normal",
                }}
                onClick={Hello}
              >
                ЮПІТЕР
              </a>
            </Link>
          </div>

          <div className="footer012">
            <div className="soc_media_section">
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
            <div className="footer012_text">
              <h2 className="text_mobile_footer_block">Мобільні додатки</h2>
              <div className="Photo_section_footer">
                <img src={AppleStore} alt="Play_Store" className="Play_Photo" />
                <img src={AppleStore} alt="Play_Store" className="Play_Photo" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
