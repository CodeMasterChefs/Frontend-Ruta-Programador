import PropTypes from "prop-types";

import "./TitDescripcion.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../config/site.config";
import BuscadorElemento from "../BuscadorElemento/BuscadorElemento";


export const TitDescripcion = ({
  IdPrimerVideo,
  handleShow
}) => {

  let params = useParams()
  const [playlist, setPlaylist] = useState({})

  useEffect(()=> {
    const fetchData = async () => {
      const id = Number(params.idPlaylist)
      try {
        const playlistResponse = await api.get(
          "/playlist/valores/" + id
        );
        setPlaylist(playlistResponse.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData()
  }, [params.idPlaylist])
  return (
    <>
      <div className="descripcion-lg">
       
        <div className="title-container d-flex justify-content-center align-items-center">
          <img
            className="img-thumbnail p-2"
            src={
              "https://backend-rutadelprogramador-production.up.railway.app/storage/iconoMundos/" +
              playlist.iconoMundo
            }
            alt="..."
          />
  
          <div className="p-2 d-flex align-items-start flex-column">
            <h3>{playlist.tituloPlaylist}</h3>
           
            <div className="d-flex justify-content-start">
              <Link to={`/mis_playlists/${params.idPlaylist}/reproducir?v=${IdPrimerVideo}&key=1`}>
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
                    <Link to={`/mis_playlists/${params.idPlaylist}/reproducir?v=${IdPrimerVideo}&key=1`}>
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
                    <button className="dropdown-item color-boton">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                      >
                        <path
                          d="M7.4998 2.87182C6.81881 2.24564 5.92744 1.8981 5.0023 1.89807C4.51264 1.89858 4.02791 1.99592 3.57602 2.18449C3.12412 2.37306 2.71397 2.64913 2.36918 2.99682C0.898555 4.4737 0.89918 6.7837 2.37043 8.25432L6.95293 12.8368C7.05918 13.0237 7.26418 13.1443 7.4998 13.1443C7.59655 13.1434 7.69173 13.1198 7.7777 13.0754C7.86367 13.031 7.93803 12.967 7.9948 12.8887L12.6292 8.25432C14.1004 6.78307 14.1004 4.4737 12.6279 2.99432C12.2833 2.64727 11.8735 2.37176 11.422 2.18362C10.9706 1.99549 10.4864 1.89845 9.9973 1.89807C9.0722 1.89822 8.18087 2.24574 7.4998 2.87182ZM11.7442 3.87807C12.7211 4.85995 12.7217 6.3937 11.7454 7.37057L7.4998 11.6162L3.25418 7.37057C2.27793 6.3937 2.27855 4.85995 3.25293 3.88057C3.72793 3.40807 4.34918 3.14807 5.0023 3.14807C5.65543 3.14807 6.27418 3.40807 6.74543 3.87932L7.05793 4.19182C7.11592 4.24991 7.1848 4.296 7.26062 4.32744C7.33644 4.35889 7.41772 4.37507 7.4998 4.37507C7.58189 4.37507 7.66317 4.35889 7.73899 4.32744C7.81481 4.296 7.88369 4.24991 7.94168 4.19182L8.25418 3.87932C9.19918 2.9362 10.8004 2.9387 11.7442 3.87807Z"
                          fill="#F2F2F2"
                        />
                      </svg>
                      &nbsp;Me gusta
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item color-boton">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                      >
                        <path
                          d="M6.87484 4.32121V1.61621L3.93297 4.55809L1.57422 6.91684L3.97484 8.91746L6.87484 11.3343V8.68746C11.9661 8.30371 13.7498 11.25 13.7498 11.25C13.7498 9.41433 13.5986 7.50934 12.1555 6.06684C10.478 4.38871 8.04859 4.26996 6.87484 4.32121Z"
                          fill="#F2F2F2"
                        />
                      </svg>
                      &nbsp;Compartir
                    </button>
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
            <p>{playlist.descripcionPlaylist}</p>
            
          </div>
         
        </div>
        <div className="mt-3 d-flex justify-content-end"><BuscadorElemento></BuscadorElemento></div>
        
      </div>
      <div className="descripcion-md">
        <div className="row">
          <div className="col d-flex justify-content-center pb-2">
            <img
              className="img-thumbnail p-2"
              src={
                "https://backend-rutadelprogramador-production.up.railway.app/storage/iconoMundos/" +
                playlist.iconoMundo
              }
              alt="..."
            />
          </div>
          <div className="col">
            <h3>{playlist.tituloPlaylist}</h3>
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
                    <button className="dropdown-item color-boton">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                      >
                        <path
                          d="M7.4998 2.87182C6.81881 2.24564 5.92744 1.8981 5.0023 1.89807C4.51264 1.89858 4.02791 1.99592 3.57602 2.18449C3.12412 2.37306 2.71397 2.64913 2.36918 2.99682C0.898555 4.4737 0.89918 6.7837 2.37043 8.25432L6.95293 12.8368C7.05918 13.0237 7.26418 13.1443 7.4998 13.1443C7.59655 13.1434 7.69173 13.1198 7.7777 13.0754C7.86367 13.031 7.93803 12.967 7.9948 12.8887L12.6292 8.25432C14.1004 6.78307 14.1004 4.4737 12.6279 2.99432C12.2833 2.64727 11.8735 2.37176 11.422 2.18362C10.9706 1.99549 10.4864 1.89845 9.9973 1.89807C9.0722 1.89822 8.18087 2.24574 7.4998 2.87182ZM11.7442 3.87807C12.7211 4.85995 12.7217 6.3937 11.7454 7.37057L7.4998 11.6162L3.25418 7.37057C2.27793 6.3937 2.27855 4.85995 3.25293 3.88057C3.72793 3.40807 4.34918 3.14807 5.0023 3.14807C5.65543 3.14807 6.27418 3.40807 6.74543 3.87932L7.05793 4.19182C7.11592 4.24991 7.1848 4.296 7.26062 4.32744C7.33644 4.35889 7.41772 4.37507 7.4998 4.37507C7.58189 4.37507 7.66317 4.35889 7.73899 4.32744C7.81481 4.296 7.88369 4.24991 7.94168 4.19182L8.25418 3.87932C9.19918 2.9362 10.8004 2.9387 11.7442 3.87807Z"
                          fill="#F2F2F2"
                        />
                      </svg>
                      &nbsp;Me gusta
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item color-boton">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                      >
                        <path
                          d="M6.87484 4.32121V1.61621L3.93297 4.55809L1.57422 6.91684L3.97484 8.91746L6.87484 11.3343V8.68746C11.9661 8.30371 13.7498 11.25 13.7498 11.25C13.7498 9.41433 13.5986 7.50934 12.1555 6.06684C10.478 4.38871 8.04859 4.26996 6.87484 4.32121Z"
                          fill="#F2F2F2"
                        />
                      </svg>
                      &nbsp;Compartir
                    </button>
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
            <p>{playlist.descripcionPlaylist}</p>
          </div>
        </div>
      </div>

    </>
  );
};

TitDescripcion.propTypes = {
  handleShow: PropTypes.func.isRequired,
  IdPrimerVideo: PropTypes.number.isRequired
};
