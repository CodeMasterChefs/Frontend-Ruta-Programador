import { useParams } from "react-router-dom";
import Fileplaylist from "../../Components/FilePlaylist/FilePlaylist";
import { TitDescripcion } from "../../Components/TitDescripcion/TitDescripcion";
import { useEffect, useState } from "react";
import api from "../../config/site.config";
import Aniadir from "../../Components/AniadirElemento/Aniadir";
import EditarPlaylist from "../../Components/EditarPlaylist/EditarPlaylist";

import { MoreIcon } from "../../Components/icons/MoreIcon";
import { ClockIcon } from "../../Components/icons";
import "./MiPlaylist.css";
const MiPlaylist = () => {
  let params = useParams();

  const [elementos, setElementos] = useState([]);
  const [playlist, setPlaylist] = useState({});

  useEffect(() => {
    api
      .get("/elemento_playlists/" + params.idPlaylist)
      .then((response) => {
        setElementos(response.data.elementos);
      })
      .catch((error) => {
        console.log(error);
      });
    api
      .get("/playlist/valores/" + params.idPlaylist)
      .then((response) => {
        setPlaylist(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.idPlaylist]);
  return (
    <>
      <br></br>
      <TitDescripcion
        Titulo={playlist.tituloPlaylist}
        Descripcion={playlist.descripcionPlaylist}
        UrlIcon={playlist.idMundo}
      />
      <EditarPlaylist IdPlaylist={params.idPlaylist} />
      <br></br>
      <div className="container text-center color-fl ">
        <div className="row align-items-start align-items-center">
          <div className="col-2">
            <p className="titulo-link">#</p>
          </div>
          <div className="col-3">
            <p className="titulo-link">Videos</p>
          </div>
          <div className="col-5">
            <p className="titulo-link">Añadido el:</p>
          </div>
          <div className="col-1">
            <ClockIcon className="icon"></ClockIcon>
          </div>
          <div className="col">
            <p className="titulo-link"></p>
          </div>
        </div>
      </div>
      <br></br>
      <div className="titulo-link bloque">
        {elementos.length == 0 ? (
          <div className="d-flex justify-content-center align-items-center">
            <Aniadir />
            <p className="m-0 ms-2">Añadir contenido</p>
            {/*Agregar icono, falta funcionalidd*/}
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
          </div>
        )}
      </div>
      <br></br>

      <div className="d-flex justify-content-end text-center">
        <button className="btn btn-primary plus-button">
          {" "}
          <MoreIcon />
        </button>
      </div>
    </>
  );
};

export default MiPlaylist;
