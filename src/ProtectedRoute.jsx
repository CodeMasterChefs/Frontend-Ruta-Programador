import { Navigate, Outlet, useLocation } from "react-router-dom"

const ProtectedRoute = () => {
    const {state} = useLocation();
  return state?.logged ? <Outlet/> : <Navigate to='/registro' />
}

export default ProtectedRoute