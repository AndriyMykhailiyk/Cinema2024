import React from "react";
import { Link } from "react-router-dom";

const GenreF = ({
  filteredByGenre,
  poster,
  FaRegCirclePlay,
  handleShow,
  handleOpen,
  buttonStates,
  handleClick,
}) => {
  return (
    <>
      {filteredByGenre.map((item) => (
        <li className="Ul_Style" key={item.id} style={{}}>
          <div className="Height_Container">
            <div>
              <Link key={item.id} to={`/about/${item.id}`}>
                {poster.map(
                  (p) =>
                    p.id === item.id &&
                    p.poster && (
                      <img key={p.id} src={p.poster} className="poster" />
                    )
                )}
              </Link>
              <div className="title">
                <Link key={item.id} to={`/about/${item.id}`}>
                  {item.title}
                </Link>
                <br />
              </div>
              <div className="genry">
                {item.genre}
                <br />
              </div>
              Рейтинг: <span>{item.rating}</span>
              <br />
              Рік: <span>{item.year}</span>
              <br />
              <div className="trailer_div" onClick={handleShow}>
                <FaRegCirclePlay />
                <span className="trailer">Дивитись трейлер</span>
              </div>
            </div>
          </div>

          <div className="btn_in_block">
            <button className="btn_sec" onClick={() => handleOpen(item)}>
              Показати фільм
            </button>
            <button
              className={buttonStates[item.id] ? "btn_sec1" : "btn_sec"}
              onClick={() => handleClick(item.id)}
            >
              {buttonStates[item.id] ? "Прибрати" : "Додати в обране"}
            </button>
          </div>
        </li>
      ))}
    </>
  );
};

export default GenreF;
