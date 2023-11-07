// import PropTypes from 'prop-types';
import ElementoPlaylist from '../../Components/ElementoPlaylist/ElementoPlaylist';
import { useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../config/site.config';
// import NavBar from '../../Components/NavBar/NavBar'

const ReproductorPage = () => {
    const { idPlaylist } = useParams();
    // const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const idVideo = queryParams.get('v');
    const keyElemento = queryParams.get('key');

    const [elementos, setElementos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const elementosResponse = await api.get(
                    "/elemento_playlists/" + idPlaylist
                );
                console.log(elementosResponse.data.elementos);
                setElementos(elementosResponse.data.elementos);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [idPlaylist]);

    const playlists = elementos.map((elemento, index) => (
        <ElementoPlaylist
            key={index}
            KeyElemento={index + 1}
            IdPlaylist={idPlaylist}
            TituloElemento={elemento.tituloElemento}
            IdVideo={elemento.idVideoYoutube}
            DuracionVideo={elemento.duracionElemento}
        />
    ));

    return (
        <div className="container-fluid">
            <div className="row m-2 align-items-start">
                <div className="col-lg-8 custom-border-lg p-3">
                    <div className="ratio ratio-16x9 mx-auto">
                        <iframe
                            src={`https://www.youtube.com/embed/${idVideo}`}
                            title="YouTube video player"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <h3 className="mt-3">Jhay Cortez - Como Se Siente (Official Video)</h3>
                </div>
                <div className="col-lg-4 p-3">
                    <div className='d-flex justify-content-between align-items-center'>
                        <h3>Lista de reproducción</h3>
                        <h6>{keyElemento}/{elementos.length}</h6>
                    </div>
                    <div className="custom-overflow custom-scrollbar" >
                        {playlists}
                    </div>
                </div>
            </div>
        </div>
    );
};


ReproductorPage.propTypes = {

};


export default ReproductorPage;
