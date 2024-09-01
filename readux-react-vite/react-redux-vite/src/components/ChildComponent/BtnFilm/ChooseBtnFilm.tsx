import React from "react";
import { motion } from "framer-motion";

const ChooseBtnFilm = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div className="flex_start" style={{ padding: "1vh 0vh" }}>
        <motion.div
          initial={{ x: 0 }} // Початкове положення тексту
          animate={{ x: isOpen ? "8vh" : "3vh" }} // Зсув тексту вправо, якщо меню відкрите
          transition={{ duration: 0.5 }}
          style={{
            margin: "0vh 5vh",
            display: "flex", // Дозволяємо блоку тексту займати залишковий простір // Додаємо максимальну ширину для запобігання виходу за межі
          }}
        >
          <button
            onClick={toggleMenu}
            style={{ padding: "0.6vw 1vw", fontWeight: "0", width: "10vw" }}
          >
            Вибрати Фільм
          </button>
        </motion.div>
      </div>
    </>
  );
};

export default ChooseBtnFilm;
