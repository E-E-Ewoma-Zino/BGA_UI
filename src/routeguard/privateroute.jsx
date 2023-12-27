import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux'
import _route from "../constants/routes";
// import { useAuthContext } from "../hooks/auth/useauthcontext";

export default function PrivateRoute() {
     const user = useSelector((state) => state.auth.user)
     console.log(user?.hasOwnProperty('client_id'))
     return user?.hasOwnProperty('client_id') ? <Outlet /> : <Navigate to={_route._user_login} />;
}

