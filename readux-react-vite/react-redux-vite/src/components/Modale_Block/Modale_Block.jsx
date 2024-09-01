import * as React from "react";
import { useState } from "react";
import "./Modale_Block.scss";
import MySvg from "../../Svg/keyboard_arrow_down.svg";

export default function Modale_Block({
  checking,
  SetCheking,
  checking3d,
  SetCheking3D,
}) 
{
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const HandleClick = () => {
    SetCheking(!checking);
    setIsOpen(false);
  };

  const HandleClick3D = () => {
    SetCheking3D(!checking3d);
    setIsOpen(false);
  };

  return (
    <div className="container_modale_block">
      <div className="Padding_Container">
        <button className="btn_popup" onClick={togglePopup}>
          Всі формати
          <img src={MySvg} alt="Стрілка вниз" className="arroy" />
        </button>

        {isOpen && (
          <div className="popup_modale_windows">
            <p className="hover-color" onClick={HandleClick}>
              <input type="checkbox" className="money" onClick={HandleClick} />{" "}
              2D
            </p>
            <p className="hover-color" onClick={HandleClick3D}>
              <input
                type="checkbox"
                className="money"
                onClick={HandleClick3D}
              />{" "}
              3D
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
