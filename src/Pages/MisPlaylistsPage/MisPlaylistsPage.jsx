import Playlist from "../../Components/NewPlaylist/Playlist";
const MisPlaylistsPage = () => {
  return (
    <main className="col-sm-9">
      <div className="row">
        <div className="col-4">
          <h3>Mis Playlists</h3>
        </div>
        <div className="col-4">
          <Playlist />
        </div>
      </div>
    </main>
  );
};

export default MisPlaylistsPage;
