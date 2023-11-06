// import PropTypes from 'prop-types';
import ElementoPlaylist from '../../Components/ElementoPlaylist/ElementoPlaylist';

const ReproductorPage = () => {
    return (

        <div className="container-fluid">
            {/* <NavBar /> */}

            <div className="row m-2">
                <div className="col-lg-8 custom-border-lg p-3">
                    <div className="ratio ratio-16x9 mx-auto">
                        <iframe
                            src="https://www.youtube.com/embed/mP2qWBj3SQ8"
                            title="YouTube video player"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <h3 className="mt-3">Jhay Cortez - Como Se Siente (Official Video)</h3>
                </div>
                <div className="col-lg-4 p-3">
                    <div className='d-flex justify-content-between align-items-center'>
                        <h3>Lista de reproducción</h3>
                        <h6>4/10</h6>
                    </div>
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
