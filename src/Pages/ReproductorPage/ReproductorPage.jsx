import ElementoPlaylist from '../../Components/ElementoPlaylist/ElementoPlaylist';
import { useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../config/site.config';

const ReproductorPage = () => {
    const { idPlaylist } = useParams();
    // const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const idVideo = queryParams.get('v');
    const keyElemento = queryParams.get('key');

    const [elementos, setElementos] = useState([]);
    const [tituloElemento, setTituloElemento] = useState('');



    useEffect(() => {
        const scrollToElemento = () => {
            document.getElementById(idVideo)?.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "start"
            });
        }

        const fetchData = async () => {
            try {
                const elementosResponse = await api.get("/elemento_playlists/" + idPlaylist);
                setElementos(elementosResponse.data.elementos);
                setTituloElemento(elementosResponse.data.elementos[keyElemento - 1]?.tituloElemento);
                scrollToElemento();
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
        scrollToElemento();
    }, [idPlaylist, keyElemento, idVideo]);

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
                    <h3 className="mt-3">{tituloElemento}</h3>
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

export default ReproductorPage;
