import Menu from './Menu.jsx'

export interface MenuProps {
    
    isButtonClicked: () => void;
    thisfilm: number;
    onGenreSelect: (genry: string) => void;
    numberFilm: string;
}