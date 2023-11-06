// import PropTypes from 'prop-types';
import { ClockIcon } from '../icons';
import './ElementoPlaylist.css';

const ElementoPlaylist = () => {
    return (
        <div className="body-content-modal p-2 mb-3">
            <div className="row">
                <div className="col-3">
                    <div className="d-flex justify-content-start">
                        <img src="https://img.youtube.com/vi/mP2qWBj3SQ8/hqdefault.jpg" className="ratio ratio-16x9" alt="Imagen del elemento" />
                    </div>
                </div>
                <div className="col-9">
                    <div className="d-flex flex-column justify-content-start">
                        <p className="mb-0">
                            Jhay Cortez - Como Se Siente (Official Video)
                        </p>
                        <div className="d-flex align-items-center">
                            <ClockIcon />
                            <p className="mb-0 ml-2">03:55</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


ElementoPlaylist.propTypes = {

};


export default ElementoPlaylist;
