import { Eliminar } from "../EliminarElemento/Eliminar";
import PropTypes from "prop-types";

import "./TitDescripcion.css";
export const TitDescripcion = ({ Titulo = "Titulo", Descripcion = "Descripcion", UrlIcon = "UrlIcon" }) => {
  const iconMap = {
    1: "moon.svg",
    2: "earth.svg",
    3: "uranus.svg",
    4: "neptune.svg",
    5: "mars.svg",
    6: "haumea.svg",
  };

  return (
    <div className="title-container">

      <img
        className="img-thumbnail p-2"
        src={
          "https://backend-rutadelprogramador-production.up.railway.app/storage/iconoMundos/" +
          iconMap[UrlIcon]
        }
        alt="..."
      />


      <div className="p-2 d-flex align-items-start flex-column">
        <h3>{Titulo}</h3>
        <div className="d-flex justify-content-start">
          <button className="btn btn-primary play-button">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.75 7.5V22.5L21.25 15L8.75 7.5Z" fill="black" />
            </svg>
          </button>
          <div className="dropdown">
            <button data-bs-toggle="dropdown" className="dropdown-button">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="bx-dots-horizontal-rounded">
                  <path
                    id="Vector"
                    d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10Z"
                    fill="#F2F2F2"
                  />
                </g>
              </svg>
            </button>
            <ul className="dropdown-menu">
              <li>
                <button className="dropdown-item color-boton">Reproducir Playlist</button>
              </li>
              <li>
                <button className="dropdown-item color-boton">Me gusta</button>
              </li>
              <li>
                <button className="dropdown-item color-boton">Compartir</button>
              </li>
              <li>
                {/* button esencial para entrar al modal */}
                <button
                  type="button"
                  className="dropdown-item color-boton"
                  data-bs-toggle="modal"
                  data-bs-target="#modalEditarPlaylist"
                  data-bs-whatever="@mdo"
                >
                  Editar playlist
                </button>
              </li>
              <li >
                <Eliminar/>
              </li>
            </ul>
          </div>
        </div>
      </div>


      <div className="title-desc-container">
        <p>{Descripcion}</p>
      </div>
    </div>
  );
};

TitDescripcion.propTypes = {
  Titulo: PropTypes.string.isRequired,
  Descripcion: PropTypes.string.isRequired,
  UrlIcon: PropTypes.string.isRequired,
};
