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

const getQueryValue = (name) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
};


const ElementoPlaylist = ({ IdPlaylist, TituloElemento, IdVideo, DuracionVideo, KeyElemento }) => {
    const formattedDuration = formatDuration(DuracionVideo);

    const keyQueryParam = getQueryValue("key");
    const isSelected = keyQueryParam === String(KeyElemento);

    const element_playlist_style = isSelected ? "body-content-element-playlist_isSelected" : "body-content-element-playlist";

    return (
        <Link to={`/mis_playlists/${IdPlaylist}/reproducir?v=${IdVideo}&key=${KeyElemento}`} className='custom-link' id={IdVideo}>
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
