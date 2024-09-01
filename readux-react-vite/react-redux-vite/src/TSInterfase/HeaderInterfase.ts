
import { MenuProps } from "react-pro-sidebar";

export default interface HeaderInterfase  {
    onGenreSelect: (genry: string) => void;
    numberFilm: number | null;
    handleSearch: () => void;
    search: string;
    
}

