import PropTypes from "prop-types";

import "./TitDescripcion.css";
import { Link, useParams } from "react-router-dom";
import BuscadorElemento from "../BuscadorElemento/BuscadorElemento";
import { propTypes } from "react-bootstrap/esm/Image";

export const TitDescripcion = ({ IdPrimerVideo, handleShow, elementosBuscadosTit, noHayElementosTit, Playlist, Elementos}) => {
  let params = useParams();
  
  const OnBuscadorElementos = (elementosBuscados) => {
    elementosBuscadosTit(elementosBuscados);
  };

  const OnNoHay = (result) => {
    noHayElementosTit(result);
  };

  return (
    <>
      <div className="descripcion-lg">
        <div className="title-container d-flex justify-content-center align-items-center">
          <img
            className="img-thumbnail p-2"
            src={
              "https://backend-rutadelprogramador-production.up.railway.app/storage/iconoMundos/" +
              Playlist.iconoMundo
            }
            alt="..."
          />

          <div className="p-2 d-flex align-items-start flex-column">
            <h3>{Playlist.tituloPlaylist}</h3>
            <div className="d-flex justify-content-start">
              <Link
                to={`/mis_playlists/${params.idPlaylist}/reproducir?v=${IdPrimerVideo}&key=1`}
              >
                <button className="btn btn-primary play-button">
                  <svg
                    width="18"
                    height="20"
                    viewBox="3 7 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.75 7.5V22.5L21.25 15L8.75 7.5Z" fill="black" />
                  </svg>
                </button>
              </Link>
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
                <ul className="dropdown-menu ">
                  <li>
                    <Link
                      to={`/mis_playlists/${params.idPlaylist}/reproducir?v=${IdPrimerVideo}&key=1`}
                    >
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
                        &nbsp;Reproducir Playlist
                      </button>
                    </Link>
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                      >
                        <path
                          d="M10 1.25745L11.875 3.13245L10.4456 4.56245L8.57063 2.68745L10 1.25745ZM2.5 8.74995V10.6249H4.375L9.56187 5.44557L7.68687 3.57057L2.5 8.74995ZM2.5 12.4999H12.5V13.7499H2.5V12.4999Z"
                          fill="#F2F2F2"
                        />
                      </svg>
                      &nbsp;Editar Playlist
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="dropdown-item color-boton"
                      data-bs-toggle="modal"
                      data-bs-target="#modalEliminarPlaylist"
                      data-bs-whatever="@fat"
                      onClick={() => handleShow(params.idPlaylist)}
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
                      &nbsp;Eliminar Playlist
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="title-desc-container border p-2">
            <p>{Playlist.descripcionPlaylist}</p>
          </div>
        </div>
        <div className="">
        <BuscadorElemento
            elementosBuscados={OnBuscadorElementos}
            noHayElementos={OnNoHay}
            ElementosObtenidos={Elementos}
          />
        </div>
      </div>
      <div className="descripcion-md">
        <div className="row">
          <div className="col d-flex justify-content-center pb-2">
            <img
              className="img-thumbnail p-2"
              src={
                "https://backend-rutadelprogramador-production.up.railway.app/storage/iconoMundos/" +
                Playlist.iconoMundo
              }
              alt="..."
            />
          </div>
          <div className="col">
            <h3>{Playlist.tituloPlaylist}</h3>
            <div className="d-flex justify-content-start">
              <button className="btn btn-primary play-button">
                <svg
                  width="18"
                  height="20"
                  viewBox="3 7 20 20"
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
                <ul className="dropdown-menu ">
                  <li>
                    <Link to={`/mis_playlists/${params.idPlaylist}/reproducir`}>
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
                        &nbsp;Reproducir Playlist
                      </button>
                    </Link>
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                      >
                        <path
                          d="M10 1.25745L11.875 3.13245L10.4456 4.56245L8.57063 2.68745L10 1.25745ZM2.5 8.74995V10.6249H4.375L9.56187 5.44557L7.68687 3.57057L2.5 8.74995ZM2.5 12.4999H12.5V13.7499H2.5V12.4999Z"
                          fill="#F2F2F2"
                        />
                      </svg>
                      &nbsp;Editar Playlist
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="dropdown-item color-boton"
                      data-bs-toggle="modal"
                      data-bs-target="#modalEliminarPlaylist"
                      data-bs-whatever="@fat"
                      onClick={() => handleShow(params.idPlaylist)}
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
                      &nbsp;Eliminar Playlist
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="title-desc-container border p-2">
            <p>{Playlist.descripcionPlaylist}</p>
          </div>
        </div>
        <div className="">
          <BuscadorElemento
            elementosBuscados={OnBuscadorElementos}
            noHayElementos={OnNoHay}
            ElementosObtenidos={Elementos}
          />
        </div>
      </div>
    </>
  );
};

TitDescripcion.propTypes = {
  handleShow: PropTypes.func.isRequired,
  IdPrimerVideo: PropTypes.number.isRequired,
  elementosBuscadosTit: PropTypes.func.isRequired,
  noHayElementosTit: PropTypes.bool.isRequired,
  Playlist: PropTypes.object.isRequired,
  Elementos: PropTypes.array.isRequired,
};
