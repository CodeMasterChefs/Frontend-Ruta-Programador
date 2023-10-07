import { Eliminar } from "../EliminarElemento/Eliminar";
import PropTypes from "prop-types";

import "./TitDescripcion.css";
export const TitDescripcion = ({ Titulo, Descripcion, UrlIcon }) => {
  const iconMap = {
    1: "moon.svg",
    2: "earth.svg",
    3: "uranus.svg",
    4: "neptune.svg",
    5: "mars.svg",
    6: "haumea.svg",
  };

  return (
    <>
      <div className="d-flex mb-3">
        <div className="p-2">
          <img
            src={
              "https://backend-rutadelprogramador-production.up.railway.app/storage/iconoMundos/" +
              iconMap[UrlIcon]
            }
            className="img-thumbnail mi-div"
            alt="..."
          />
        </div>
        <div className="p-2">
          <div className="align-self-start titulo">
            <h3>{Titulo}</h3>
          </div>
          <div className="d-flex flex-row">
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
            {/*
            {/* <button className="heart-button"> //no se muestra el icono del corazon para dar like
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="bx-heart">
                  <path
                    id="Vector"
                    d="M12 4.59511C10.9104 3.59321 9.48419 3.03716 8.00398 3.03711C7.22052 3.03793 6.44495 3.19367 5.72192 3.49538C4.99888 3.79709 4.34265 4.2388 3.79098 4.79511C1.43798 7.15811 1.43898 10.8541 3.79298 13.2071L11.125 20.5391C11.295 20.8381 11.623 21.0311 12 21.0311C12.1548 21.0296 12.3071 20.9918 12.4446 20.9208C12.5822 20.8498 12.7011 20.7475 12.792 20.6221L20.207 13.2071C22.561 10.8531 22.561 7.15811 20.205 4.79111C19.6536 4.23583 18.9979 3.79501 18.2756 3.49399C17.5532 3.19298 16.7785 3.03771 15.996 3.03711C14.5158 3.03735 13.0897 3.59338 12 4.59511ZM18.791 6.20511C20.354 7.77611 20.355 10.2301 18.793 11.7931L12 18.5861L5.20698 11.7931C3.64498 10.2301 3.64598 7.77611 5.20498 6.20911C5.96498 5.45311 6.95898 5.03711 8.00398 5.03711C9.04898 5.03711 10.039 5.45311 10.793 6.20711L11.293 6.70711C11.3858 6.80006 11.496 6.87379 11.6173 6.9241C11.7386 6.97441 11.8686 7.00031 12 7.00031C12.1313 7.00031 12.2614 6.97441 12.3827 6.9241C12.504 6.87379 12.6142 6.80006 12.707 6.70711L13.207 6.20711C14.719 4.69811 17.281 4.70211 18.791 6.20511Z"
                    fill="#F2F2F2"
                  />
                </g>
              </svg>
            </button> 
          */}
            <div className="dropdown">
              <button data-bs-toggle="dropdown" className="dropdown-button">
                <svg
                  width="14"
                  height="14"
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
        <div className="ms-auto p-2 text-center mi-ti descrip">{Descripcion}</div>
      </div>
    </>
  );
};
TitDescripcion.propTypes = {
  Titulo: PropTypes.string.isRequired,
  Descripcion: PropTypes.string.isRequired,
  UrlIcon: PropTypes.string.isRequired,
};
