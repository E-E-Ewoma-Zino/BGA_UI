import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
  } from 'react-router-dom';
import "./App.css";
import { ToastContainer } from "react-toastify";
import { 
	Dashboard, 
	ClientList, 
	AdminList, 
	ViewClient, 
	CreateClient, 
	CreateAdmin, 
	ViewAdmin, 
	SignIn,
	NotFoundAlt
} from "./pages/index";
// import RootLayout from './pages/rootlayout';
import PageLayouts from "./pages/layout";
import _route from './constants/routes';
import AdminPrivateRoute from '../src/routeguard/adminprivateroute'

const router = createBrowserRouter(
	createRoutesFromElements(
	<>
		<Route path={_route._admin_login} element={<SignIn />} />
		<Route path={_route._not_found} element={<NotFoundAlt />} />
		<Route element={<AdminPrivateRoute />}>
			<Route path={_route._admin_login} element={<PageLayouts.RootLayout />}>
				<Route path={_route._admin_dashboard}  element={<Dashboard />} />
				<Route path={_route._admin_client} element={<ClientList />} />
				<Route path={_route._admin_view_client} element={<ViewClient />} />
				<Route path={_route._admin_create_client} element={<CreateClient />} />
				<Route path={_route._admin_create_admin} element={<CreateAdmin />} />
				<Route path={_route._admin_administrator} element={<AdminList />} />
				<Route path={_route._admin_view_administrator} element={<ViewAdmin />} />
			</Route>
		</Route>
	</>
	)
  );

function App() {
  return (
		<>			
			<ToastContainer />
			<RouterProvider router={router} />
		</>
	);
}

export default App;
