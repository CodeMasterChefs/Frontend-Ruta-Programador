import { useParams } from "react-router-dom";
import Fileplaylist from "../../Components/FilePlaylist/FilePlaylist";
import { TitDescripcion } from "../../Components/TitDescripcion/TitDescripcion";
import { useEffect, useState } from "react";
import api from "../../config/site.config";
import Aniadir from "../../Components/AniadirElemento/Aniadir";
import EditarPlaylist from "../../Components/EditarPlaylist/EditarPlaylist";

import { MoreIcon } from "../../Components/icons/MoreIcon";
import { ClockIcon } from "../../Components/icons";
import "./MiPlaylist.css"
const MiPlaylist = () => {
  let params = useParams();

  const [elementos, setElementos] = useState([]);
  const [playlist, setPlaylist] = useState({});
  const [selectedPlaylistId, setSelectedPlaylistId] = useState(0); // Nuevo estado para el IdPlaylist seleccionado

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

  const handleEditarClick = (id) => {
    setSelectedPlaylistId(id);
  };
  return (
    <>
      <br></br>
      <TitDescripcion
        Titulo={playlist.tituloPlaylist}
        Descripcion={playlist.descripcionPlaylist}
        UrlIcon={playlist.idMundo}
        onEditarClick={() => handleEditarClick(playlist.idPlaylist)}
        id={playlist.idPlaylist}
      />
      <EditarPlaylist IdPlaylist={selectedPlaylistId} />
      <br></br>
        <div className="container text-center color-fl">
          <div className="row align-items-start">
            <div className="col">
            <p className="titulo-link">#</p>
          </div>
            <div className="col">
              <p className="titulo-link">Videos</p>
            </div>
            <div className="col">
            <p className="titulo-link">Añadido el:</p>
            </div>
            <div className="col">
            <ClockIcon className="icon"></ClockIcon>
            </div>
            <div className="col">
            <p className="titulo-link"></p>
            </div>

      <div className="container text-center">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-2">#</div>
          <div className="col-md-2">Videos</div>
          <div className="col-md-2">Añadido el:</div>
          <div className="col-md-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z"
                fill="#000000"
              />
              <path d="M13 7H11V13H17V11H13V7Z" fill="#000000" />
            </svg>
          </div>
        </div>
  <br></br>
      <div className="titulo-link">
        {elementos.length == 0 ? (
          <div className="d-flex d-inline">
            <Aniadir />
            <p>Añadir contenido</p>
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
        <button className="btn btn-primary"> <MoreIcon/></button>       
      </div>
    </>
  );
};

export default MiPlaylist;
