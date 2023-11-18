 import "./BuscadorElemento.css";
import "./BDtest.js";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
//import { sortedNames } from "./BDtest";
import api from "../../config/site.config";

const BuscadorElemento = ({ playlistsBuscadas, noHay }) => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [titulosPlaylits, setTitulosPlaylists] = useState([]);
  const [showClearIcon, setShowClearIcon] = useState(false);
  
  const fetchDataCargarTitulosPlaylists = async () => {
    try {
      const response = await api.get("/playlist/1");
      // Obtén títulos después de haber establecido playlists
      const titulos = response.data.map((playlist) => playlist.tituloPlaylist);
      setTitulosPlaylists(titulos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataCargarTitulosPlaylists();
  }, []);

  const handleInputChange = (event) => {
    const inputText = event.target.value;
    setSearchText(inputText);
    const cleanedText = inputText.trim(); // Limpiar espacios antes de buscar
    setShowClearIcon(cleanedText.length > 0);

    const matchingNames = titulosPlaylits.filter((name) =>
      name.toLowerCase().includes(cleanedText.toLowerCase())
    );

    const filteredSuggestions = matchingNames.filter(
      (name) => name.toLowerCase() !== cleanedText.toLowerCase()
    );

    if (cleanedText.length === 0) {
      setSuggestions([]);
      setShowSuggestions(false);
    } else {
      const limitedSuggestions = filteredSuggestions.slice(0, 5);
      setSuggestions(limitedSuggestions);
      setShowSuggestions(limitedSuggestions.length > 0);
    }
  };

  const handleSuggestionClick = (name) => {
    setShowClearIcon(false);
    setSearchText(name);
    cargarPlaylistBuscadas(name);
    setSuggestions([]);
    setSearchText("");
    setShowSuggestions(false);
  };

  const handleSearchButtonClick = () => {
 // Limpiar espacios antes de buscar
    if (searchText.trim().length > 0) {
      cargarPlaylistBuscadas(searchText.trim());
      setShowSuggestions(false);
    }
  };

  const cargarPlaylistBuscadas = async (tituloPlay) => {
    try {
      const response = await api.get(
        "playlist/buscar/?tituloPlaylist=" + tituloPlay
      );
      playlistsBuscadas(response.data);
      noHay(false);
      //Aqui se enviara las playlist a MisPlaylists
    } catch (error) {
      console.log(error);
      noHay(true);
      
    }
  };

  const handleClearClick = () => {
    setSearchText("");
    setShowClearIcon(false);
    setShowSuggestions(false);
    setSuggestions([]);
  };

  const handleMouseEnter = () => {
    setShowSuggestions(true);
  };

  const handleMouseLeave = () => {
    setSuggestions([]);
    setShowClearIcon(false);
    setSearchText("");
    setShowSuggestions(false);
  };

  return (
    <>
    <div className="container-search-element">
    <link rel="stylesheet" href="./style.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />
      <form
        className="form-search-element"
        autoComplete="off"
        action=""
        onSubmit={(e) => e.preventDefault()}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <input
          className="input-search-element"
          type="text"
          placeholder="Busca tu video favorito"
          id="input"
          value={searchText}
          onChange={handleInputChange}
          
        />
        {showClearIcon && (
          <span className="clear-icon-element" onClick={handleClearClick}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="bx-x">
                <path
                  id="Vector"
                  d="M20.24 7.93018L14.9362 13.2327L9.63371 7.93018L7.86621 9.69768L13.1687 15.0002L7.86621 20.3027L9.63371 22.0702L14.9362 16.7677L20.24 22.0702L22.0075 20.3027L16.705 15.0002L22.0075 9.69768L20.24 7.93018Z"
                  fill="#F2F2F2"
                />
              </g>
            </svg>
          </span>
        )}
        <button
          type="button"
          onClick={() => {
            handleSearchButtonClick();
          }}
          className="button-search-element"
        >
          <i className="fa-element"></i>
        </button>
        {showSuggestions && (
          <ul className="suggestions-element">
            {suggestions.map((name, index) => (
              <li
                key={index}
                className="suggestion-element"
                onClick={() => handleSuggestionClick(name)}
              >
                {name}
              </li>
            ))}
          </ul>
        )}
      </form>
    </div>
      
    </>
  );
};

BuscadorElemento.propTypes = {
  playlistsBuscadas: PropTypes.array.isRequired,
  noHay: PropTypes.bool.isRequired,
};

export default BuscadorElemento;
