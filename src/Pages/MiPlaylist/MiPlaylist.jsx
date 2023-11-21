import { useParams } from "react-router-dom";
import Fileplaylist from "../../Components/FilePlaylist/FilePlaylist";
import { TitDescripcion } from "../../Components/TitDescripcion/TitDescripcion";
import { useEffect, useState } from "react";
import EliminarPlaylist from "../../Components/EliminarPlaylist/EliminarPlaylist";
import api from "../../config/site.config";
import Aniadir from "../../Components/AniadirElemento/Aniadir";
import EditarPlaylist from "../../Components/EditarPlaylist/EditarPlaylist";
import ErrorComponent from "../../Components/ErrorComponent/ErrorComponent";

import { ClockIcon } from "../../Components/icons";
import "./MiPlaylist.css";
const MiPlaylist = () => {
  const params = useParams();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [playlist, setPlaylist] = useState({
    idPlaylist: null,
    tituloPlaylist: "",
    descripcionPlaylist: "",
    idMundo: null,
    iconoMundo: "",
  });
  const [elementos, setElementos] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const [encontrado, setEncontrado] = useState(false);

  const fetchDataElementos = async () => {
    try {
      const elementosResponse = await api.get(
        "/elemento_playlists/" + params.idPlaylist
      );
      setElementos(elementosResponse.data.elementos);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error.response.data.errors[0]);
      setLoading(false);
    }
  };

  const fetchDataPlaylist = async () => {
    const id = Number(params.idPlaylist);
    try {
      const playlistResponse = await api.get("/playlist/valores/" + id);
      setPlaylist(playlistResponse.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataElementos();
    fetchDataPlaylist();
  }, [params.idPlaylist]);

  return (
    <div className="container">
      {loading ? (
        <div className="d-flex inline justify-content-center">
          <div className="spinner-grow text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p>Cargando</p>
        </div>
      ) : error ? (
        <div className="d-flex align-items-center justify-content-center">
          {error}
        </div>
      ) : (
        <>
          <br></br>
          <TitDescripcion
            Playlist={playlist}
            IdPrimerVideo={elementos[0]?.idVideoYoutube}
            handleShow={handleShow}
            elementosBuscadosTit={(elementosBuscados) => {
              setElementos(elementosBuscados);
            }}
            noHayElementosTit={(result) => {
              setEncontrado(result);
              console.log(result);
            }}
          />

          <EditarPlaylist
            IdPlaylist={Number(params.idPlaylist)}
            actualizarPlaylist={fetchDataPlaylist}
          />
          <EliminarPlaylist
            IdPlaylist={Number(params.idPlaylist)}
            show={show}
            handleClose={handleClose}
            refrescar={2}
          />
          <br></br>
          <div className=" text-center color-fl ">
            <div className="row align-items-start align-items-center">
              <div className="col-1">
                <p className="titulo-link">#</p>
              </div>
              <div className="col-7">
                <p className="titulo-link">Videos</p>
              </div>
              <div className="col-2 ">
                <p className="titulo-link titulo-Añadido">Añadido el:</p>
              </div>
              <div className="col-1">
                <ClockIcon className="icon iconResponsive" />
              </div>
              <div className="col-1">
                <p className="titulo-link"></p>
              </div>
            </div>
          </div>
          <br></br>
          <div className="titulo-link">
            {elementos.length === 0 ? (
              <div className="d-flex justify-content-center align-items-center d-inline">
                <Aniadir actualizarElementos={fetchDataElementos} />
                <p className="m-0 ms-2">Añadir contenido</p>
              </div>
            ) : encontrado ? (
              <ErrorComponent ErrorCode={404}>
                No se encontraron resultados. <br />
                Asegúrate de que las palabras estén escritas correctamente o
                prueba con menos palabras clave o con otras distintas.
              </ErrorComponent>
            ) : (
              <div>
                {elementos.map((elemento, index) => (
                  <Fileplaylist
                    key={index}
                    KeyElemento={index + 1}
                    Titulo={elemento.tituloElemento}
                    Fecha={elemento.fechaAgregado}
                    Duracion={elemento.duracionElemento}
                    UrlImg={elemento.urlImg}
                    KeyOrderValue={index + 1}
                    className="fileplaylist-item"
                    IdPlaylist={Number(params.idPlaylist)}
                    IdElemento={elemento.idElemento}
                    IdVideo={elemento.idVideoYoutube}
                    actualizarElementos={fetchDataElementos}
                  />
                ))}
                <div className="add-playlist-container">
                  <Aniadir actualizarElementos={fetchDataElementos} />
                </div>
              </div>
            )}
          </div>
          <br></br>
        </>
      )}
    </div>
  );
};

export default MiPlaylist;
