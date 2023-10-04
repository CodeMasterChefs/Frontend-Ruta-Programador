import { useParams } from "react-router-dom";
import Fileplaylist from "../../Components/FilePlaylist/FilePlaylist";
import { TitDescripcion } from "../../Components/TitDescripcion/TitDescripcion";
const MiPlaylist = () => {
  let params = useParams();
  console.log(params);
  return (
    <div>
      <br></br>
      <TitDescripcion
        Titulo={params.idPlaylist}
        Descripcion="Aqui va la descripcion de la playlist con todos sus elementosst Aqui va la descripcion de la playlist con todos sus elementos playlist con todos sus elementos"
      />
      <br></br>
      <Fileplaylist />
      <br></br>
    </div>
  );
};

export default MiPlaylist;
