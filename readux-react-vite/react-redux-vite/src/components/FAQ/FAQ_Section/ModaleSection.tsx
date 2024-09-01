import React from "react";
import "../FAQ.scss";

const ModaleSection = ({
  AiTwotoneQuestionCircle,
  toggleMenu,
  isOpen,
  IoIosArrowDown,
}) => {
  return (
    <>
      <section className="FAQ_Question_1">
        <div className="block">
          <div className="Plot">
            <AiTwotoneQuestionCircle />
            <h2
              className="Plot_Text_1"
              id="openModaleBtn"
              onClick={() => toggleMenu("menu2")}
            >
              Чи можна забронювати квитки онлайн:
            </h2>
            <IoIosArrowDown />
            <br />
          </div>
          <hr />
          {isOpen.menu2 && (
            <div id="faqQueastion_wrapper_id" className="faqQueastion_wrapper">
              <p>
                Так, у нашому кінотеатрі можна забронювати квитки онлайн! Ми
                прагнемо зробити процес покупки квитків максимально зручним та
                швидким для вас.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="FAQ_Question_1">
        <div className="block">
          <div className="Plot">
            <AiTwotoneQuestionCircle />
            <h2
              className="Plot_Text_1"
              id="openModaleBtn"
              onClick={() => toggleMenu("menu3")}
            >
              Формати 3D окулярів які ми використовуєм:
            </h2>
            <IoIosArrowDown />
            <hr />
            <br />
          </div>
          <hr />
          {isOpen.menu3 && (
            <div id="faqQueastion_wrapper_id" className="faqQueastion_wrapper">
              <p>
                У нашому кінотеатрі ви можете насолоджуватися переглядом фільмів
                у форматі 3D завдяки сучасним технологіям і зручним 3D окулярам.
                Ми пропонуємо такі формати 3D окулярів:
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="FAQ_Question_1">
        <div className="block">
          <div className="Plot">
            <AiTwotoneQuestionCircle />
            <h2
              className="Plot_Text_1"
              id="openModaleBtn"
              onClick={() => toggleMenu("menu4")}
            >
              Наша програма лояльності:
            </h2>
            <IoIosArrowDown />
            <hr />
            <br />
          </div>
          <hr />
          {isOpen.menu4 && (
            <div id="faqQueastion_wrapper_id" className="faqQueastion_wrapper">
              <p>
                Ми цінуємо кожного нашого відвідувача, тому розробили спеціальну
                програму лояльності, яка дозволяє насолоджуватися улюбленими
                фільмами за ще вигіднішими умовами!
                <ul style={{ padding: "1vw 0vw" }}>
                  <span style={{ fontWeight: "500" }}>
                    Переваги участі у програмі лояльності:
                  </span>
                  <li>
                    {" "}
                    Бонуси за кожну покупку: Заробляйте бонусні бали при купівлі
                    квитків та продукції кіно-бару.{" "}
                  </li>
                  <li>
                    {" "}
                    Накопичені бали можна обміняти на знижки або безкоштовні
                    квитки.{" "}
                  </li>
                  <li>
                    Ексклюзивні пропозиції та акції: Отримуйте доступ до
                    спеціальних пропозицій, які доступні лише для учасників
                    програми лояльності.{" "}
                  </li>{" "}
                  <li>
                    {" "}
                    Подарунки до свят та днів народження: Насолоджуйтесь
                    приємними сюрпризами від кінотеатру у ваш особливий день.
                  </li>
                  <li>
                    Перший вибір: Будьте серед перших, хто отримає доступ до
                    прем'єрних показів та спеціальних подій.{" "}
                  </li>
                </ul>
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="FAQ_Question_1">
        <div className="block">
          <div className="Plot">
            <AiTwotoneQuestionCircle />
            <h2
              className="Plot_Text_1"
              id="openModaleBtn"
              onClick={() => toggleMenu("menu5")}
            >
              Чи можна приносити власну їжу та напої:
            </h2>
            <IoIosArrowDown />
            <br />
          </div>
          <hr />

          {isOpen.menu5 && (
            <div id="faqQueastion_wrapper_id" className="faqQueastion_wrapper">
              <p>
                Для забезпечення комфортних умов для всіх гостей нашого
                кінотеатру, приносити власну їжу та напої заборонено. Ми
                пропонуємо широкий вибір смачних перекусів і напоїв у нашому
                кіно-барі, де ви знайдете попкорн, солодощі, безалкогольні напої
                та багато іншого.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="FAQ_Question_1">
        <div className="block">
          <div className="Plot">
            <AiTwotoneQuestionCircle />
            <h2
              className="Plot_Text_1"
              id="openModaleBtn"
              onClick={() => toggleMenu("menu6")}
            >
              Чи є знижки для студентів, пенсіонерів:
            </h2>
            {""}
            {""}
            {""}
            {""}
            <IoIosArrowDown />
            <br />
          </div>
          <hr />
          {isOpen.menu6 && (
            <div id="faqQueastion_wrapper_id" className="faqQueastion_wrapper">
              <p>
                Ми раді повідомити, що наш кінотеатр пропонує спеціальні знижки
                для студентів та пенсіонерів. Щоб скористатися знижкою, будь
                ласка, пред’явіть студентське посвідчення або пенсійне
                посвідчення при купівлі квитка.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ModaleSection;
