import PropTypes from "prop-types";
import { PointsMenu } from "../icons/PointsMenu";
import "./FilePlaylist.css";
const Fileplaylist = ({ Titulo, Fecha, Duracion, Id, UrlImg }) => {
  return (
    <>
      <div className="d-flex align-items-center">
        <div className="col text-center ">{id}</div>
        <div className="col text-center">{titulo}</div>
        <div className="col text-center">{fecha}</div>
        <div className="col text-center">{duracion}</div>
        <div className="col text-center">
          <div>
            <button className="Icons" type="button">
              <PointsMenu></PointsMenu>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Reproducir video
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Mover
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Compartir
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Eliminar de esta Playlist
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="d-flex inline">
        <div scope="row">{Id}</div>
        <div>
          <img src={UrlImg} className="img-fluid" alt={UrlImg} />
        </div>
        <div>{Titulo}</div>
        <div>{Fecha}</div>
        <div>{Duracion}</div>
        <div className="dropdown">
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
              <button className="dropdown-item">Reproducir video</button>
            </li>
            <li>
              <button className="dropdown-item">Mover</button>
            </li>
            <li>
              <button className="dropdown-item">Compartir</button>
            </li>
            <li>
              <button className="dropdown-item">
                Eliminar de esta Playlist
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
  Id: PropTypes.number.isRequired,
};

export default Fileplaylist;
