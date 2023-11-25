import PropTypes from "prop-types";
import { dateFormater } from "../../utils/date-format";

import "./FilePlaylist.css";
import { EliminarElemento } from "../EliminarElemento/EliminarElemento";
import { Link } from "react-router-dom";

const Fileplaylist = ({ Titulo, Fecha, Duracion, KeyOrderValue, UrlImg, IdPlaylist, IdElemento, KeyElemento, IdVideo, actualizarElementos }) => {

  return (
    <>
      <EliminarElemento Imagen={UrlImg} Titulo={Titulo} IdPlaylist={IdPlaylist} IdElemento={IdElemento} actualizarElementos={actualizarElementos} />
      <div className="row video-elente-file">
        <div className="col-1 d-flex align-items-center justify-content-center">
          <p className="text-center filePlayListId">{KeyOrderValue}</p>
        </div>
        <div className="col-7 d-flex align-items-center">
          <img
            src={UrlImg}
            className="img-fluid imagen-personalizada"
            alt={UrlImg}
          />
          <div className="col mx-5">{Titulo}</div>
        </div>
        <div className="col-2 d-flex align-items-center justify-content-center">
          <p className="text-center dateResponsive">{dateFormater(Fecha)}</p>
        </div>
        <div className="col-1 d-flex align-items-center justify-content-center">
          <p className="text-center dateResponsive">{Duracion}</p>
        </div>
        <div className="col-1 d-flex align-items-center justify-content-center">
          <button
            data-bs-toggle="dropdown"
            className="dropdown-vertical-button"
          >
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
                  d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"
                  fill="#F2F2F2"
                />
              </g>
            </svg>
          </button>
          <ul className="dropdown-menu">
            <li>
              <Link to={`/mis_playlists/${IdPlaylist}/reproducir?v=${IdVideo}&key=${KeyElemento}`}>
                <button className="dropdown-item color-boton">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <path
                      d="M7.5 1.25C4.05375 1.25 1.25 4.05375 1.25 7.5C1.25 10.9462 4.05375 13.75 7.5 13.75C10.9462 13.75 13.75 10.9462 13.75 7.5C13.75 4.05375 10.9462 1.25 7.5 1.25ZM7.5 12.5C4.74313 12.5 2.5 10.2569 2.5 7.5C2.5 4.74313 4.74313 2.5 7.5 2.5C10.2569 2.5 12.5 4.74313 12.5 7.5C12.5 10.2569 10.2569 12.5 7.5 12.5Z"
                      fill="#F2F2F2"
                    />
                    <path
                      d="M5.625 10.625L10.625 7.5L5.625 4.375V10.625Z"
                      fill="#F2F2F2"
                    />
                  </svg>
                  &nbsp;Reproducir video
                </button>
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="dropdown-item color-boton"
                data-bs-toggle="modal"
                data-bs-target={"#eliminarElementoModal" + IdElemento}
                data-bs-whatever="@fat"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <path
                    d="M9.375 1.25H5.625C4.93563 1.25 4.375 1.81062 4.375 2.5V3.75H1.875V5H3.125V12.5C3.125 13.1894 3.68562 13.75 4.375 13.75H10.625C11.3144 13.75 11.875 13.1894 11.875 12.5V5H13.125V3.75H10.625V2.5C10.625 1.81062 10.0644 1.25 9.375 1.25ZM5.625 2.5H9.375V3.75H5.625V2.5ZM10.625 12.5H4.375V5H10.625V12.5Z"
                    fill="#F2F2F2"
                  />
                </svg>
                &nbsp;Eliminar elemento
              </button>
            </li>

          </ul>
        </div>
      </div>
    </>
  );
};
Fileplaylist.propTypes = {
  Titulo: PropTypes.string.isRequired,
  Fecha: PropTypes.string.isRequired,
  Duracion: PropTypes.string.isRequired,
  UrlImg: PropTypes.string.isRequired,
  KeyOrderValue: PropTypes.number.isRequired,
  IdPlaylist: PropTypes.number.isRequired,
  IdElemento: PropTypes.number.isRequired,
  KeyElemento: PropTypes.number.isRequired,
  IdVideo: PropTypes.string.isRequired,
  actualizarElementos: PropTypes.func
};

export default Fileplaylist;
