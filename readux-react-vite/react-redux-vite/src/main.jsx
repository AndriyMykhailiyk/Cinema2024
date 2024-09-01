import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import News from "./components/News/News.tsx";
import About from "./components/FullFilm/About.tsx";
import Colections from "./components/Colections/Colections.tsx";
import Cartoon from "./components/Cartton/Cartoon.tsx";
import About_Us from "./components/About_Us/About_Us.tsx";
import Cartoon_Genre from "./components/Colections/Cartoon_Genre/Cartoon_Genre.tsx";
import FAQQ from "./components/FAQ/FAQQ.tsx";
import Privacypolucy from "./components/Privacy policy/Privacypolicy.tsx";
import "./components/Menu/Menu.scss";
import QuestionSection from "./components/QuestinSection/Questin_Section.tsx";

import Three3Movie from "./components/afisha/3D_2DMovie/Three3Movie";
import Two2Movie from "./components/afisha/2D_Movie/Two2Movie";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="/about/:id" element={<About />} />
      <Route path="/news" element={<News />} />
      <Route path="/colection" element={<Colections />} />
      <Route path="/cartoon" element={<Cartoon />} />
      <Route path="/cartoon_genre/:id" element={<Cartoon_Genre />} />
      <Route path="/about_us" element={<About_Us />} />
      <Route path="/FAQQ" element={<FAQQ />} />
      <Route path="/privacy" element={<Privacypolucy />} />
      <Route path="/privacy" element={<Privacypolucy />} />
      <Route path="/question_section" element={<QuestionSection />} />
      
    </Routes>
  </BrowserRouter>
);
