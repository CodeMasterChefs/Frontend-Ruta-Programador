import { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import api from '../../config/site.config';
import NavBar from '../../Components/NavBar/NavBar';
import ErrorComponent from '../../Components/ErrorComponent/ErrorComponent';
import YouTubeEmbebido from '../../Components/YouTubeEmbebido/YouTubeEmbebido';
import ElementoPlaylist from '../../Components/ElementoPlaylist/ElementoPlaylist';

const ReproductorPage = () => {
    const { idPlaylist } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const idVideo = queryParams.get('v');
    const keyElemento = queryParams.get('key');

    const [elementos, setElementos] = useState([]);
    const [tituloElemento, setTituloElemento] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const elementosResponse = await api.get(`/elemento_playlists/${idPlaylist}`);
                setElementos(elementosResponse.data.elementos);
                setTituloElemento(elementosResponse.data.elementos[keyElemento - 1]?.tituloElemento);
                scrollToElemento();
            } catch (error) {
                console.error(error);
            }
        };

        const scrollToElemento = () => {
            document.getElementById(idVideo)?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'start',
            });
        };

        const visualizarIframe = () => {
            YouTubeEmbebido.visualizarIframe();
        };

        fetchData();
        scrollToElemento();

        if (idVideo !== 'undefined')
            visualizarIframe();
    }, [idPlaylist, keyElemento, idVideo]);

    const elementosPlaylist = elementos.map((elemento, index) => (
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
        <div className="container-fluid min-vh-100">
            <NavBar />
            {idVideo !== 'undefined' ? (
                <>
                    <div className="row mt-2 align-items-start">
                        <div className="col-lg-8 custom-border-reproductor-lg p-3">
                            <div className="ratio ratio-16x9 mx-auto">
                                <YouTubeEmbebido IdVideo={idVideo} />
                            </div>
                            <h3 className="mt-3">{tituloElemento}</h3>
                        </div>
                        <div className="col-lg-4 p-3 custom-border-lista_reproduccion-lg">
                            <div className="d-flex justify-content-between align-items-center">
                                <h4>Lista de reproducción</h4>
                                <h6>
                                    {keyElemento}/{elementos.length}
                                </h6>
                            </div>
                            <div className="custom-overflow custom-scrollbar">{elementosPlaylist}</div>
                        </div>
                    </div>
                    <div className="text-center mb-4">
                        <button onClick={() => { navigate('/mis_playlists') }} className="btn btn-primary d-block mx-auto">
                            Mis Playlists
                        </button>
                    </div>
                </>
            ) : (
                <ErrorComponent ErrorCode={400}>
                    Lo sentimos, no puedes reproducir tu Playlist porque está vacía. Agrega al menos un elemento en tu Playlist, y podrás disfrutar de tu contenido personalizado.
                </ErrorComponent>
            )}
        </div>
    );
};

export default ReproductorPage;
