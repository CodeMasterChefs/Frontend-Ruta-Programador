import "./BuscadorPlaylist.css";
import "./BDtest.js";
import { useState, useRef, useEffect } from "react";
import { sortedNames } from "./BDtest";

const BuscadorPlaylist = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const maxSuggestions = 5;
  const inputRef = useRef(null);

  useEffect(() => {
    // Agregar un evento para cerrar el input cuando se hace clic fuera
    document.addEventListener("click", handleDocumentClick);

    return () => {
      // Eliminar el evento cuando se desmonta el componente
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const handleInputChange = (event) => {
    const inputText = event.target.value;
    setSearchText(inputText);

    const matchingNames = sortedNames.filter((name) =>
      name.toLowerCase().includes(inputText.toLowerCase())
    );

    const limitedSuggestions = matchingNames.slice(0, maxSuggestions);

    setSuggestions(limitedSuggestions);
    setShowSuggestions(inputText.length > 0 && limitedSuggestions.length > 0);
  };

  const handleSuggestionClick = (name) => {
    setSearchText(name);
    setSuggestions([]);
    setShowSuggestions(false);
  };

  const handleDocumentClick = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      // Si se hace clic fuera del input, oculta las sugerencias
      setShowSuggestions(false);
    }
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
