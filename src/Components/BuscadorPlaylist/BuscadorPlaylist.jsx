import "./BuscadorPlaylist.css";
import "./BDtest.js";
import { useState, useRef} from "react";
import { sortedNames } from "./BDtest";

const BuscadorPlaylist = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const maxSuggestions = 5;
  const inputRef = useRef(null);

  const handleInputChange = (event) => {
    const inputText = event.target.value;
    setSearchText(inputText);
  
    // Filtra los nombres que coinciden con el texto de búsqueda
    const matchingNames = sortedNames.filter((name) =>
      name.toLowerCase().includes(inputText.toLowerCase())
    );
  
    // Excluye el valor exacto del input de las sugerencias
    const filteredSuggestions = matchingNames.filter(
      (name) => name.toLowerCase() !== inputText.toLowerCase()
    );
  
    const limitedSuggestions = filteredSuggestions.slice(0, maxSuggestions);
  
    setSuggestions(limitedSuggestions);
    setShowSuggestions(inputText.length > 0 && limitedSuggestions.length > 0);
  };

  const handleSuggestionClick = (name) => {
    setSearchText(name);
    setSuggestions([]);
    setShowSuggestions(false);
  };

  const handleInputFocus = () => {
    setShowSuggestions(true);
  };

  const handleInputBlur = () => {
    // Espera un momento antes de ocultar las sugerencias para que el clic en la sugerencia se maneje primero
    setTimeout(() => {
      setShowSuggestions(false);
    }, 100);
  };

  return (
    <>
      <link rel="stylesheet" href="./style.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />
      <form className="form-search" autoComplete="off" action="">
      <input
          className="input-search"
          type="text"
          placeholder="Busca tu playlist"
          id="input"
          value={searchText}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          ref={inputRef}
        />
        <i className="fa fa-search"></i>
        {showSuggestions && (
          <ul className="suggestions">
            {suggestions.map((name, index) => (
              <li
                key={index}
                className="suggestion"
                onClick={() => handleSuggestionClick(name)}
              >
                {name}
              </li>
            ))}
          </ul>
        )}
      </form>
    </>
  );
};
export default BuscadorPlaylist;
