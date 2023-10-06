import { useParams } from "react-router-dom";
import Fileplaylist from "../../Components/FilePlaylist/FilePlaylist";
import { TitDescripcion } from "../../Components/TitDescripcion/TitDescripcion";
import { MoreIcon } from "../../Components/icons/MoreIcon";
import { ClockIcon } from "../../Components/icons";
import { Aniadir } from "../../Components/AniadirElemento/Aniadir";
import "./MiPlaylist.css"
const MiPlaylist = () => {
  let params = useParams();
  console.log(params);
  const videos = [
    { titulo: "titulo video 1", fecha: "2023-10-04", duracion: "15:02" },
    { titulo: "titulo video 1", fecha: "2023-10-04", duracion: "15:02" },
    { titulo: "titulo video 1", fecha: "2023-10-04", duracion: "15:02" },
    { titulo: "titulo video 1", fecha: "2023-10-04", duracion: "15:02" },
  ];
  return (
    <>
      <br></br>
      <TitDescripcion
        Titulo={params.idPlaylist}
        Descripcion="Aqui va la descripcion de la playlist con todos sus elementosst Aqui va la descripcion de la playlist con todos sus elementos playlist con todos sus elementos"
      />
      <Aniadir idPlaylist={params.idPlaylist} ></Aniadir>
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
          </div>
        </div>
  <br></br>
      <div className="titulo-link">
        <div>
          {videos.map((video, index) => (
            <Fileplaylist
              key={index}
              titulo={video.titulo}
              fecha={video.fecha}
              duracion={video.duracion}
              id={index}
              className="fileplaylist-item"
            />
          ))}
        </div>
      </div>
      <br></br>

      <div className="d-flex justify-content-end text-center"> 
        <button className="btn btn-primary"> <MoreIcon/></button>       
      </div>
    </>
  );
};

export default MiPlaylist;
