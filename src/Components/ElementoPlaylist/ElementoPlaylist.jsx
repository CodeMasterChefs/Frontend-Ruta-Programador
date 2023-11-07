import PropTypes from 'prop-types';
import { ClockIcon } from '../icons';
import './ElementoPlaylist.css';
import { Link } from 'react-router-dom';

const formatDuration = (duracion) => {
    const [hours, minutes, seconds] = duracion.split(':').map(Number);

    if (hours > 0) {
        return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    } else {
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
};

const ElementoPlaylist = ({ IdPlaylist, TituloElemento, IdVideo, DuracionVideo, KeyElemento }) => {
    const formattedDuration = formatDuration(DuracionVideo);

    const isSelected = window.location.search.includes(`key=${KeyElemento}`);

    const element_playlist_style = isSelected ? "body-content-element-playlist_isSelected" : "body-content-element-playlist";

    return (
        <Link to={`/mis_playlists/${IdPlaylist}/reproducir?v=${IdVideo}&key=${KeyElemento}`} className="custom-link">
            <div className={element_playlist_style + " mb-2"}>
                <div className="row gx-2">
                    <div className="col-4 col-sm-2 col-lg-3 d-flex flex-grow-1 align-items-center">
                        <div className="d-flex justify-content-start">
                            <div className="m-2">
                                <img
                                    src={`https://img.youtube.com/vi/${IdVideo}/hqdefault.jpg`}
                                    className="ratio ratio-16x9"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-8 col-sm-10 col-lg-9">
                        <div className="d-flex flex-column justify-content-start">
                            <h6 className="mb-0 text-ellipsis mt-2">
                                {TituloElemento}
                            </h6>
                            <div className="d-flex align-items-center">
                                <ClockIcon />
                                <p className="p-1 mb-0">{formattedDuration}</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-1 d-flex align-items-center justify-content-center">
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
                            <button
                                type="button"
                                className="dropdown-item color-boton"
                                data-bs-toggle="modal"
                                data-bs-target={"#eliminarElementoModal"}
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
                </div> */}
                </div>
            </div>
        </Link>
    );
};


ElementoPlaylist.propTypes = {
    IdPlaylist: PropTypes.number.isRequired,
    TituloElemento: PropTypes.string.isRequired,
    IdVideo: PropTypes.string.isRequired,
    DuracionVideo: PropTypes.string.isRequired,
    KeyElemento: PropTypes.number.isRequired
};


export default ElementoPlaylist;
