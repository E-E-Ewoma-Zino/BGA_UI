// Dashboard for Admin
import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import _route from "../constants/routes";
import useGetAllAdmin from '../hooks/admin/admin/usegetalladmin';
import useGetAllAdminClient from '../hooks/admin/client/usegetalladminclient';
import Spinnar from '../components/spinnar';

export default function Dashboard() {
	// const navigate = useNavigate()
	const {getAllAdmin, loading} = useGetAllAdmin()
	const {getAllAdminClient, loading: clientLoading} = useGetAllAdminClient()
	const [admin, setAdmin] = useState([])
	const [client, setClient] = useState([])


	useEffect(()=>{
		const fetch = async ()=>{
		  const data = await getAllAdmin()
		  if(data !== undefined){
			setAdmin(data)
		  }
		}
	
		fetch()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	  }, [])
	
	  useEffect(()=>{
		const fetch = async ()=>{
		  const data = await getAllAdminClient()
		  if(data !== undefined){
			setClient(data)
		  }
		}
	
		fetch()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	  }, [])

	return (
    <div className="nk-content-body">
      <div className="nk-block-head nk-block-head-sm">
        <div className="nk-block-between">
          <div className="nk-block-head-content">
            <h3 className="nk-block-title page-title">
              <em className="icon ni ni-dashboard me-2" />
              Overview
            </h3>
          </div>
          {/* .nk-block-head-content */}
          {/* <div className="nk-block-head-content">
            <div className="toggle-wrap nk-block-tools-toggle">
              <a
                href="#x"
                className="btn btn-icon btn-trigger toggle-expand me-n1"
                data-target="pageMenu"
              >
                <em className="icon ni ni-more-v" />
              </a>
              <div className="toggle-expand-content" data-content="pageMenu">
                <ul className="nk-block-tools g-3">
                  <li>
                    <DropdownBtn />
                  </li>
                  <li className="nk-block-tools-opt">
                    <a href="#x" className="btn btn-primary">
                      <em className="icon ni ni-reports" />
                      <span>Reports</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          {/* .nk-block-head-content */}
        </div>
        {/* .nk-block-between */}
      </div>
      {/* .nk-block-head */}
      <div className="nk-block">
        <div className="row g-gs">
          <div className="col-xxl-3 col-sm-6">
            <div className="card">
              <div className="nk-ecwg nk-ecwg6">
                <div className="card-inner">
                  <div className="card-title-group">
                    <div className="">
                      <small className="fs-6">Active</small>
                      <div className="align-center card-title d-flex justify-center">
                        <em className="icon ni ni-users-fill me-1 fs-2"></em>
                        <h6 className="title">Client</h6>
                      </div>
                    </div>
                  </div>
                  <div className="data">
                    <div className="data-group">
                      <div className="amount">
                        {clientLoading ? <Spinnar /> : client?.length}
                        {/* <small className="fs-4">/68</small> */}
                      </div>
                      {/* <div className="nk-ecwg6-ck"> */}
                      <div className="nk-ecwg6-ck">
                        <canvas
                          className="ecommerce-line-chart-s3"
                          id="todayOrders"
                          width={123}
                          height={50}
                          style={{
                            display: "block",
                            boxSizing: "border-box",
                            height: 40,
                            width: 98,
                          }}
                        />
                      </div>

                      {/* </div> */}
                    </div>
                  </div>
                  {/* <div className="info">
                          <span className="change down text-danger">
                            <em className="icon ni ni-arrow-long-down" />
                            2.34%
                          </span>
                          <span> Requests</span>
                        </div> */}
                </div>
                {/* .card-inner */}
              </div>
              {/* .nk-ecwg */}
            </div>
            {/* .card */}
          </div>
          {/* .col */}
          <div className="col-xxl-3 col-sm-6">
            <div className="card">
              <div className="nk-ecwg nk-ecwg6">
                <div className="card-inner">
                  <div className="card-title-group">
                    <div className="">
                      <small className="fs-6">Active</small>
                      <div className="align-center card-title d-flex justify-center">
                        <em className="icon ni ni-users-fill me-1 fs-2"></em>
                        <h6 className="title">Administrators</h6>
                      </div>
                    </div>
                  </div>
                  <div className="data">
                    <div className="data-group">
                      <div className="amount">
                        {loading ? <Spinnar /> : admin?.length}
                        {/* <small className="fs-4">/13</small> */}
                      </div>
                      {/* <div className="nk-ecwg6-ck"></div> */}
                      <div className="nk-ecwg6-ck">
                        <canvas
                          className="ecommerce-line-chart-s3"
                          id="todayRevenue"
                          width={187}
                          height={80}
                          style={{
                            display: "block",
                            boxSizing: "border-box",
                            height: 40,
                            width: 93,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  {/* <div className="info">
                          <span className="change up">
                            <em className="icon ni ni-arrow-long-up" />
                            3.97%
                          </span>
                          <span> Requests</span>
                        </div> */}
                </div>
                {/* .card-inner */}
              </div>
              {/* .nk-ecwg */}
            </div>
            {/* .card */}
          </div>
          {/* .col */}
          <div className="col-md-6 col-xxl-4">
            <div className="card card-full">
              <div className="card-inner-group">
                <div className="card-inner">
                  <div className="card-title-group">
                    <div className="card-title">
                      <h6 className="title">Administrators</h6>
                    </div>
                    <div className="card-tools">
                      <Link to={_route._admin_administrator} className="link">
                        View All
                      </Link>
                    </div>
                  </div>
                </div>
                {loading ? (
                  <div className="w-full h-full flex justify-center items-center">
                    <p>Loading...</p>
                  </div>
                ) : admin.length === 0 ? (
                  <div className="w-full h-full flex justify-center items-center">
                    <p className="text-textgrey">No Data to show</p>
                  </div>
                ) : (
                  admin
                    .reverse()
                    .slice(0, 5)
                    .map((admin, index) => {
                      return (
                        <div key={index} className="card-inner card-inner-md">
                          {console.log(admin)}
                          <div className="user-card">
                            <div className="user-avatar bg-primary-dim">
                              <span>
                                {`${admin.fullNames.firstname} ${admin.fullNames.lastname}`
                                  .match(/\b(\w)/g)
                                  .join("")
                                  .toUpperCase()
                                  .substring(0, 2)}
                              </span>
                            </div>
                            <div className="user-info">
                              <span className="lead-text">
                                {`${admin.fullNames.firstname} ${admin.fullNames.lastname}`}
                              </span>
                              <span className="sub-text">{admin.username}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })
                )}
                {}
              </div>
            </div>
            {/* .card */}
          </div>

          <div className="col-md-6 col-xxl-4">
            <div className="card card-full">
              <div className="card-inner-group">
                <div className="card-inner">
                  <div className="card-title-group">
                    <div className="card-title">
                      <h6 className="title">Users</h6>
                    </div>
                    <div className="card-tools">
                      <Link to={_route._admin_client} className="link">
                        View All
                      </Link>
                    </div>
                  </div>
                </div>

                {clientLoading ? (
                  <div className="w-full h-full flex justify-center items-center">
                    <p>Loading...</p>
                  </div>
                ) : client.length === 0 ? (
                  <div className="w-full h-full flex justify-center items-center">
                    <p className="text-textgrey">No Data to show</p>
                  </div>
                ) : (
                  client
                    .reverse()
                    .slice(0, 5)
                    .map((clients, index) => {
                      return (
                        <div key={index} className="card-inner card-inner-md">
                          <div className="user-card">
                            <div className="user-avatar bg-primary-dim">
                              <span>
                                {`${clients.organization.name}`
                                  .match(/\b(\w)/g)
                                  .join("")
                                  .toUpperCase()
                                  .substring(0, 2)}
                              </span>
                            </div>
                            <div className="user-info">
                              <span className="lead-text">
                                {clients.organization.name}
                              </span>
                              <span className="sub-text">
                                {clients.userName}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })
                )}
              </div>
            </div>
            {/* .card */}
          </div>

          {/* .col */}
        </div>
        {/* .row */}
      </div>
      {/* .nk-block */}
    </div>
  );
}

// export async function Loader() {
// 	const user = useSelector((state) => state.auth.user)
// 	return defer({ posts: AdminClientServices.getAllClient(user) });
//   }