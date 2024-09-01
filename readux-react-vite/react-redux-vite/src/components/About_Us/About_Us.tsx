import React from "react";
import { Header } from "../header/Header";
import { Fotter } from "../../Fotter";
import "./Avout_Us.scss";
import Cinema from "./Cinema-4-1.jpg";

const About_Us = ({ anchor }) => {
  return (
    <>
      <div className="Hover_Btn12">
        <Header />
      </div>
      <section className="About_Sinem">
        <div className="firstBlock">
          <img className="photo_first_section" src={Cinema} alt="photo" />

          <p className="Text_firstBlock">
            Ласкаво просимо до нашого кінотеатру — місця, де кожен сеанс стає
            справжньою кіноподією! Ми прагнемо створити для вас незабутні
            враження від перегляду найкращих фільмів у найкомфортнішій
            атмосфері.
          </p>
        </div>

        <div className="firstBlock">
          <p className="Text_firstBlock">
            Наш кінотеатр обладнаний сучасними технологіями, що дозволяє
            зануритися в світ кіно з головою. Високоякісне зображення та звук,
            зручні місця і простора зала гарантують, що кожен глядач зможе
            насолодитися улюбленими фільмами на максимум.
          </p>

          <img className="photo_first_section" src={Cinema} alt="photo" />
        </div>

        <div className="firstBlock">
          <img className="photo_first_section" src={Cinema} alt="photo" />

          <p className="Text_firstBlock">
            Ми пропонуємо широкий репертуар фільмів — від захоплюючих новинок і
            блокбастерів до класичних стрічок та артхаусного кіно. Незалежно від
            того, який жанр ви обираєте, у нас знайдеться фільм на будь-який
            смак.
          </p>
        </div>

        <div className="firstBlock">
          <p className="Text_firstBlock">
            Наша команда завжди готова допомогти вам обрати сеанс, замовити
            квитки та зробити ваш візит комфортним і приємним. Ми цінуємо
            кожного нашого гостя та робимо все можливе, щоб кожне ваше
            відвідування нашого кінотеатру було особливим.
          </p>
          <img className="photo_first_section" src={Cinema} alt="photo" />{" "}
        </div>
      </section>
      <hr />

      <section className="me_Contacts">
        <div className="wrapper_1_1">
          <p>
            <span>Кінотеатр «ЛІНІЯ КІНО» в ТЦ «Магеллан»</span>
          </p>
          <p>м. Київ,</p>
          <p>пр-т Глушкова, 13-Б</p>
          <a href="tel:+6494461709">(095) 641-72-29</a>
        </div>
        <div className="wrapper_1_1">
          <p>
            <span>Кінотеатр «ЛІНІЯ КІНО» в ТЦ «CherryMall»</span>
          </p>
          <p>м. Вишневе</p>
          <p>вул. Київська, 2л</p>
          <a href="tel:+6494461709">(095) 641-72-29</a>
        </div>
        <div className="wrapper_1_1">
          <p>
            <span className="span_23">
              Кінотеатр «КОСМОС» мережі «ЛІНІЯ КІНО»
            </span>
          </p>
          <p>м. Івано-Франківськ</p>
          <p>вул. Незалежності, 97</p>
          <a href="tel:+6494461709">(095) 641-72-29</a>
        </div>
      </section>

      <Fotter anchor={anchor} />
    </>
  );
};

export default About_Us;
