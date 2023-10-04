import Playlist from "../../Components/NewPlaylist/Playlist";
import { Card } from "../../Components/CardPlanet/Card";
import api from "../../config/site.config"; // Importa la instancia 'api' en lugar de axios
import { useEffect, useState } from "react";

const MisPlaylistsPage = () => {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Función para cargar los datos desde la API
  const fetchData = async () => {
    try {
      const response = await api.get('/playlist/2'); // Utiliza api.get en lugar de axios.get
      setPlaylists(response.data);
      setLoading(false);
    } catch (error) {
      setError("Error al cargar las playlists.");
      setLoading(false);
    }
  };

  // Llamar a fetchData cuando se monta el componente
  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <main className="col-sm-11">
      <div className="row">
        <div className="d-flex justify-content-between align-items-center">
          <h3>Mis Playlists</h3>
          <Playlist />
        </div>
      </div>
      <div className="d-flex p-2"></div>
      <div className="col-12">
        {loading ? (
          <p>Cargando...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="row row-cols-1 row-cols-md-5 g-4">
            {playlists.map((playlist) => (
              <Card
                key={playlist.idPlaylist}
                Titulo={playlist.tituloPlaylist}
                Descripcion={playlist.descripcionPlaylist}
              ></Card>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default MisPlaylistsPage;
