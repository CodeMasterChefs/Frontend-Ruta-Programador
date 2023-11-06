// import PropTypes from 'prop-types';
import ElementoPlaylist from '../../Components/ElementoPlaylist/ElementoPlaylist';
// import NavBar from '../../Components/NavBar/NavBar';

const ReproductorPage = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-8">
                    <div className="ratio ratio-16x9 mx-auto">
                        <iframe
                            src="https://www.youtube.com/embed/mP2qWBj3SQ8"
                            title="YouTube video player"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <h3 className="mt-3">Jhay Cortez - Como Se Siente (Official Video)</h3>
                </div>
                <div className="col-md-4">
                    <div className='d-flex justify-content-between w-100 align-items-center'>
                        <h3>Lista de reproducción</h3>
                        <h4>4/10</h4>
                    </div>
                    <ElementoPlaylist />
                    <ElementoPlaylist />
                    <ElementoPlaylist />
                    <ElementoPlaylist />
                    <ElementoPlaylist />
                    <ElementoPlaylist />
                </div>
            </div>
        </div>
    );
};


ReproductorPage.propTypes = {

};


export default ReproductorPage;
