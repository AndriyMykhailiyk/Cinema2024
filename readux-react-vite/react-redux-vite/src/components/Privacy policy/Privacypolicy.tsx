import React from "react";
import { Header } from "../header/Header";
import { Fotter } from "../../Fotter";

const Privacypolucy = () => {
  return (
    <>
      <Header />
      <div className="wraaper">
        <section style={{ padding: "5vw 9vw", color: "black" }}>
          <div
            style={{
              textAlign: "left",
              backgroundColor: "#e5e8e8",
              padding: "1vw",
            }}
          >
            <div className="head">
              <h2>Загальні правила на сайті</h2>{" "}
            </div>
            <div className="text-about">
              <h4> Загальні правила поведінки на сайті:</h4>
              <br />
              <p>
                {" "}
                Почнемо з того, що на сайті спілкуються сотні людей, різних
                релігій і поглядів, та всі вони є повноправними відвідувачами
                нашого сайту, тому, якщо ми хочемо, щоби ця спільнота людей
                функціонувала, нам і потрібні правила. Ми наполегливо
                рекомендуємо прочитати правила, що займе у вас усього хвилинок
                зо п’ять, але збереже нам і вам час та допоможе зробити сайт
                цікавішим й організованішим.
              </p>
              <br />{" "}
              <p>
                Почнемо з того, що на нашому сайті потрібно вести себе з повагою
                до всіх відвідувачів сайту. Не потрібно ображати учасників — це
                завжди зайве. Якщо є претензії — звертайтеся до Адміністраторів
                чи Модераторів (скористайтеся персональними повідомленнями).
                Образа інших відвідувачів вважається в нас одним із найтяжчих
                порушень і суворо карається адміністрацією. У нас суворо
                заборонений расизм, релігійні й політичні висловлювання.
                Заздалегідь дякуємо Вам за розуміння і за бажання зробити наш
                сайт ввічливішим і доброзичливішим.{" "}
              </p>
              <br />
              <p> На сайті суворо заборонено:</p> • повідомлення, які не
              відносяться до вмісту статті або до контексту обговорення; <br />{" "}
              • образи і погрози до відвідувачів сайту; <br /> • у коментарях
              забороняються висловлювання, які містять ненормативну лексику, що
              принижують людську гідність, розпалюють міжнаціональну ворожнечу;{" "}
              <br />• спам, а також реклама будь-яких товарів та послуг, інших
              ресурсів, ЗМІ або подій, які не відносяться до контексту
              обговорення статті. <br />
              <p>
                Поважаймо одне одного і сайт, на якому Ви й інші читачі
                приходять поспілкуватися та висловити свої думки. Адміністрація
                сайту залишає за собою право видаляти коментарі або частину
                коментарів, якщо вони не відповідають цим вимогам.{" "}
              </p>
              <br />
              <p>
                {" "}
                У разі порушення правил Вам може бути дано попередження. У
                деяких випадках, Вас може бути заблоковано без попереджень. З
                питань зняття блокування — писати адміністратору. Образа
                адміністраторів або модераторів також караються блокуванням —
                поважайте чужу працю.{" "}
              </p>
            </div>{" "}
          </div>
        </section>
      </div>
      <Fotter />
    </>
  );
};

export default Privacypolucy;
