import { useEffect, useState } from "react";
import api from "../../config/site.config";
import { useAuth } from "../../context/AuthContext";

const TuCuentaPage = () => {
  const [user, setUser] = useState({nombre_usuario: '', correo_electronico: '', cantidad_playlists: ''})
  const {logout} = useAuth()
  const fetchData = async () =>{
    try {
      const res = await api.get('infocuenta')
      if(res.status===200){
        setUser(res.data.userinfo)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  return <div className="py-3">
    <h5><p>Nombre de usuario: {user.nombre_usuario}</p></h5>
    <h5><p>Correo electrónico: {user.correo_electronico}</p></h5>
    <h5><p>Cantidad de playlists creadas: {user.cantidad_playlists}</p></h5>
    <div className="d-flex justify-content-end">
    <button className="btn btn-primary" onClick={logout}>Cerrar sesión</button>

    </div>
  </div>;
};

export default TuCuentaPage;
