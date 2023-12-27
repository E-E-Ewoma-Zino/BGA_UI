import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux'
import _route from "../constants/routes";
// import { useAuthContext } from "../hooks/auth/useauthcontext";

export default function AdminPrivateRoute() {
     const user = useSelector((state) => state.auth.user)
     return user  ? <Outlet /> : <Navigate to={_route._admin_login} />;
}

