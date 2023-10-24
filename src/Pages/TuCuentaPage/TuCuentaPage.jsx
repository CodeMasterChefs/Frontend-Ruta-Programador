import { useAuth } from "../../context/AuthContext";

const TuCuentaPage = () => {
  const { logout } = useAuth();

  return <div>
    <p>Tu cuenta</p>
    <button className="btn btn-primary" onClick={logout}>Cerrar sesión</button>
  </div>;
};

export default TuCuentaPage;
