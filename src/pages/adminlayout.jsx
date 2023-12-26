import { Outlet } from 'react-router-dom';


function AdminLayout() {
  return (
    <>
    
    {/* <MainNavigation /> */}
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default AdminLayout;