import PropTypes from "prop-types";
import { PointsMenu } from "../icons/PointsMenu";
import "./FilePlaylist.css"
const Fileplaylist = ({ titulo, fecha, duracion, id }) => {
  return (
    <>
     <div className="d-flex align-items-center">
    <div className="col text-center ">{id}</div>
    <div className="col text-center">{titulo}</div>
    <div className="col text-center">{fecha}</div>
    <div className="col text-center">{duracion}</div>
    <div className="col text-center">
        <div >
            <button className="Icons" type="button">               
                <PointsMenu></PointsMenu>
            </button>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Reproducir video</a></li>
                <li><a className="dropdown-item" href="#">Mover</a></li>
                <li><a className="dropdown-item" href="#">Compartir</a></li>
                <li><a className="dropdown-item" href="#">Eliminar de esta Playlist</a></li>
            </ul>
        </div>
    </div>
</div>
    </>
  );
};
Fileplaylist.propTypes = {
  titulo: PropTypes.string.isRequired,
  fecha: PropTypes.string.isRequired,
  duracion: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Fileplaylist;
