import { useParams } from "react-router-dom";
import Fileplaylist from "../../Components/FilePlaylist/FilePlaylist";
import { TitDescripcion } from "../../Components/TitDescripcion/TitDescripcion";
import { useEffect, useState } from "react";
import api from "../../config/site.config";
import Aniadir from "../../Components/AniadirElemento/Aniadir";
import EditarPlaylist from "../../Components/EditarPlaylist/EditarPlaylist";

import { ClockIcon } from "../../Components/icons";
import "./MiPlaylist.css";
const MiPlaylist = () => {
  let params = useParams();

  const [elementos, setElementos] = useState([]);
  const [playlist, setPlaylist] = useState({});
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
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

      try {
        const playlistResponse = await api.get(
          "/playlist/valores/" + params.idPlaylist
        );
        setPlaylist(playlistResponse.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
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
            Titulo={playlist.tituloPlaylist}
            Descripcion={playlist.descripcionPlaylist}
            UrlIcon={playlist.idMundo}
          />
          <EditarPlaylist IdPlaylist={params.idPlaylist} />
          <br></br>
          <div className=" text-center color-fl ">
            <div className="row align-items-start align-items-center">
              <div className="col-2">
                <p className="titulo-link">#</p>
              </div>
              <div className="col-5">
                <p className="titulo-link">Videos</p>
              </div>
              <div className="col-3">
                <p className="titulo-link">Añadido el:</p>
              </div>
              <div className="col-1">
                <ClockIcon className="icon" />
              </div>
              <div className="col-1">
                <p className="titulo-link"></p>
              </div>
            </div>
          </div>
          <br></br>
          <div className="titulo-link">
            {elementos.length == 0 ? (
              <div className="d-flex justify-content-center align-items-center d-inline">
                <Aniadir />
                <p className="m-0 ms-2">Añadir contenido</p>
              </div>
            ) : (
              <div>
                {elementos.map((elemento, index) => (
                  <Fileplaylist
                    key={index}
                    Titulo={elemento.tituloElemento}
                    Fecha={elemento.fechaAgregado}
                    Duracion={elemento.duracionElemento}
                    UrlImg={elemento.urlImg}
                    Id={index + 1}
                    className="fileplaylist-item" 
                  />
                ))}
                <div className="add-playlist-container">
                  <Aniadir />
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
