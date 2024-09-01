import React from "react";
import About from "../About";

export function Banner({ FaYoutube, HandleSeeTelegram }) {
  return (
    <>
      <div className="telegram">
        <div className="text">
          <span className="span_youtube">
            Підпишись на телеграм щоб побачити більше відео{" "}
            <FaYoutube
              className="FaYoutube_Rename"
              onClick={HandleSeeTelegram}
            />
          </span>
        </div>
      </div>
    </>
  );
}
