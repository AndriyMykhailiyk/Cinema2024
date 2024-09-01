import React, { useState } from 'react';
import './ToggleBtn.scss';
import ModaleBtnWindow from './ModaleBtnWindow';

interface Movie {
  runtime: number;
  director: string;
  country: string;
  actors: string;
  genre: string;
  id: number;
  title: string;
  rating: number;
  plot: string;
}


type ShowModal = {
  movies: Movie[];  
  onCheckboxChange: any;
  setNumberFilm: any;
  open: boolean;
  modalElem: any;
  filteredMovies: () => void; 
}


function ToggleButton ({ onCheckboxChange, setNumberFilm, open, movies, }: ShowModal ) {
  const [buttonText, setButtonText] = useState<string>('Додати в обране');
  const [clicked, setClick] = useState<boolean>(false || true);
  const [numberfilm, setNumberFilme] = useState<number>(0);
  const [isCheked, setIsCheked] = useState<boolean>(true);














const handleClick = () => {
  setIsCheked(!isCheked);

    if (isCheked) {
      setButtonText('Додати в обране');
      setNumberFilme(PrevCount => PrevCount - 1); // Віднімаємо фільм
      onCheckboxChange();
    } else {
      setButtonText('Прибрати');
      setNumberFilm(PrevCount => PrevCount + 1); // Додаємо фільм
    }

    setClick(prevClicked => !prevClicked); // Змінюємо значення clicked
  };
  return (
    <>
    <div className='container-Flex'>
    <button className='Btn_Second'>
        {buttonText}
      </button><br />
<ModaleBtnWindow selectgenre={undefined} movies={movies} onCheckboxChange={onCheckboxChange} numberFilm={undefined} runtime={0} director={''} country={''} actors={''}
/>

      </div>

    </>
  );
}

export default ToggleButton;
