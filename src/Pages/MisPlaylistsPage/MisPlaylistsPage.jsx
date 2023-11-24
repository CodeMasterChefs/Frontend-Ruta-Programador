import Playlist from "../../Components/NewPlaylist/Playlist";
import { Card } from "../../Components/CardPlanet/Card";
import api from "../../config/site.config"; // Importa la instancia 'api' en lugar de axios
import { useEffect, useState } from "react";
import EditarPlaylist from "../../Components/EditarPlaylist/EditarPlaylist";
import "./MisPlaylistsPage.css";
import BuscadorPlaylist from "../../Components/BuscadorPlaylist/BuscadorPlaylist";
import ErrorComponent from "../../Components/ErrorComponent/ErrorComponent";
import { PicandoLuna } from "../../Components/icons/PicandoLuna";

const MisPlaylistsPage = () => {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorCargarPlaylists, setErrorCargarPlaylists] = useState(null);
  const [selectedPlaylistId, setSelectedPlaylistId] = useState(0); // Nuevo estado para el IdPlaylist seleccionado
  const [encontrado, setEncontrado] = useState(false);

  // Función para cargar los datos desde la API
  const fetchDataCargarPlaylists = async () => {
    try {
      const response = await api.get("/playlist/1");
      setPlaylists(response.data);
      setLoading(false);
    } catch (error) {
      setErrorCargarPlaylists("Error al cargar las playlists.");
      setLoading(false);
    }
  };

  //Funcion para obtener las cards de buscadorPlaylist
  const OnBuscardorPlaylist = (playlistBuscador) => {
    setPlaylists(playlistBuscador);
  };

  const OnNoHay = (result) => {
    setEncontrado(result);
  };

  // Llamar a fetchData cuando se monta el componente
  useEffect(() => {
    fetchDataCargarPlaylists();
  }, []);

  // Función para manejar el clic en el botón "Editar playlist"
  const handleEditarClick = (id) => {
    setSelectedPlaylistId(id);
  };

  return (
    <main className="col-sm-11">
      <div className="row my-3">
        <div className="col-sm-5 align-items-center">
          <h3>Mis Playlists</h3>
        </div>
        <div className="col-sm-6 d-flex justify-content-end col-search">
          <BuscadorPlaylist
            playlistsBuscadas={OnBuscardorPlaylist}
            noHay={OnNoHay}
          />
          <Playlist CantPlaylists={playlists.length} />
        </div>
      </div>
      <div className="d-flex p-2"></div>
      <div className="col-12">
        {loading ? (
          <p>Cargando...</p>
        ) : errorCargarPlaylists ? (
          <p>{errorCargarPlaylists}</p>
        ) : encontrado ? (
          <ErrorComponent ErrorCode={404}>
            No se encontraron resultados. <br />
            Asegúrate de que las palabras estén escritas correctamente o prueba
            con menos palabras clave o con otras distintas.
          </ErrorComponent>
        ) : playlists.length > 0 ? (
          <div className="row row-cols-1 row-cols-md-5 g-4 playlist-responsive">
            {playlists.map((playlist) => (
              <Card
                key={playlist.idPlaylist}
                id={playlist.idPlaylist}
                Titulo={playlist.tituloPlaylist}
                Descripcion={playlist.descripcionPlaylist}
                IdPrimerVideo={playlist.elementos[0]?.idVideoYoutube}
                UrlImagen={
                  "https://backend-rutadelprogramador-production.up.railway.app/storage/iconoMundos/" +
                  playlist.iconoMundo
                }
                onEditarClick={() => handleEditarClick(playlist.idPlaylist)} // Pasa la función de manejo de clic al Card
              ></Card>
            ))}

            <EditarPlaylist IdPlaylist={selectedPlaylistId} />
          </div>
        ) : (
          <p className="text-center py-4">
            <br />
            <PicandoLuna></PicandoLuna>
            <br />
            <br />
            <h4>
              Da inicio a tu travesía espacial creando tu primera playlist.
              <br />
              ¡Buena suerte!
            </h4>
          </p>
        )}
      </div>
    </main>
  );
};

export default MisPlaylistsPage;
