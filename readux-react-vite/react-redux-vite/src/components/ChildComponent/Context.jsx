import React, {useState, useContext, createContext} from "react";

const FilmContext = createContext();

export const useFilmContext = () => useContext(FilmContext)

export const FilmProvider = ({ children }) => {
    const [thisfilm, setThisfilm] = useState<number>(0);
  
    return (
      <FilmContext.Provider value={{ thisfilm, setThisfilm }}>
        {children}
      </FilmContext.Provider>
    );
  };