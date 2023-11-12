import "./BuscadorPlaylist.css";
import "./BDtest.js";
import { useState, useEffect} from "react";
//import { sortedNames } from "./BDtest";
import api from "../../config/site.config";

const BuscadorPlaylist = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const isMouseOverInput = (false);
  const [titulosPlaylits, setTitulosPlaylists] = useState([]);

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
    console.log(titulosPlaylits)
    const inputText = event.target.value;
    setSearchText(inputText);
    const matchingNames = titulosPlaylits.filter((name) =>
      name.toLowerCase().includes(inputText.toLowerCase())
    );

    const filteredSuggestions = matchingNames.filter(
      (name) => name.toLowerCase() !== inputText.toLowerCase()
    );

    if (inputText.length === 0) {
      setSuggestions([]);
      setShowSuggestions(false);
    } else {
      const limitedSuggestions = filteredSuggestions.slice(0, 5);
      setSuggestions(limitedSuggestions);
      setShowSuggestions(limitedSuggestions.length > 0);
    }
  };

  const handleSuggestionClick = (name) => {
    setSearchText(name);
    console.log("Valor del input:", name);
    setSuggestions([]);
    setShowSuggestions(false);
  };

  const handleInputFocus = () => {
    setShowSuggestions(true);
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      if (!isMouseOverInput) {
        setSearchText("");
        setSuggestions([]);
        setShowSuggestions(false);
      }
    }, 500);
  };

  const handleSearchButtonClick = () => {
    if (searchText.length > 0) {
      console.log("Valor del input:", searchText);
    }
  };

  return (
    <>
      <link rel="stylesheet" href="./style.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />
      <form
        className="form-search"
        autoComplete="off"
        action=""
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="input-search"
          type="text"
          placeholder="Busca tu playlist"
          id="input"
          value={searchText}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        <button
          type="button"
          onClick={() => {
            handleSearchButtonClick();
          }}
          className="button-search-playlist"
        >
          <i className="fa fa-search"></i>
        </button>
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
