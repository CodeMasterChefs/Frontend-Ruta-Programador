import Playlist from "../../Components/NewPlaylist/Playlist";
import { Card } from "../../Components/CardPlanet/Card";
import axios from "axios";
import { useEffect, useState } from "react";

const MisPlaylistsPage = () => {
  const [playlist, setPlaylists] = useState([]);
  

  const url = "https://backend-rutadelprogramador-production.up.railway.app/api/playlist/2";

  useEffect(() => {
    axios.get(url).then(
      (response) => {
        setPlaylists(response.data);
        console.log(response.data);
      }
    )
  }, [])

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
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {
            playlist.map((playlist) => {
              return <Card
                key={playlist.idPlaylist}
                Titulo={playlist.tituloPlaylist}
                Descripcion={playlist.descripcionPlaylist}
              ></Card>
            })
          }
          <Card
            Descripcion="El planeta con mas anillos del sistema solar, el 2do planeta mas grande de nuestro astro sol"
            Titulo="Saturno"
          />
          <Card Descripcion="x" Titulo="Jupiter" />
          <Card
            Descripcion="El planeta con mas anillos del sistema solar, el 2do planeta mas grande de nuestro astro sol"
            Titulo="Tierra"
          />
          <Card
            Descripcion="El planeta con mas anillos del sistema solar, el 2do planeta mas grande de nuestro astro sol"
            Titulo="Mercurio"
          />
          <Card
            Descripcion="El planeta con mas anillos del sistema solar, el 2do planeta mas grande de nuestro astro sol"
            Titulo="Venus"
          />
          <Card
            Descripcion="El planeta con mas anillos del sistema solar, el 2do planeta mas grande de nuestro astro sol"
            Titulo="Marte"
          />
        </div>
      </div>
    </main>
  );
};

export default MisPlaylistsPage;
