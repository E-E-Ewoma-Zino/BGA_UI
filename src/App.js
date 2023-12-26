import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
  } from 'react-router-dom';
import "./App.css";
import { Dashboard, ClientList, AdminList, ViewClient, CreateClient, CreateAdmin, ViewAdmin } from "./pages/index";
// import RootLayout from './pages/rootlayout';
import PageLayouts from "./pages/layout";
import _route from './constant/routes';

const router = createBrowserRouter(
	createRoutesFromElements(
	//   <Route path={_route._user_login} element={<RootLayout />} />
	<Route path={_route._admin_login} element={<PageLayouts.RootLayout />}>
		<Route path={_route._admin_dashboard}  element={<Dashboard />} />
		<Route path={_route._admin_client} element={<ClientList />} />
		<Route path={_route._admin_view_client} element={<ViewClient />} />
		<Route path={_route._admin_create_client} element={<CreateClient />} />
		<Route path={_route._admin_create_admin} element={<CreateAdmin />} />
		<Route path={_route._admin_administrator} element={<AdminList />} />
		<Route path={_route._admin_view_administrator} element={<ViewAdmin />} />
	</Route>
	)
  );

function App() {
  return <RouterProvider router={router} />;
}

export default App;
