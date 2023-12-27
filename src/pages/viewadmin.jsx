// Dashboard for Admin
import { useState } from "react";
import ProfileDetails from '../components/admin/profiledetails'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useGetSingleAdmin from '../hooks/admin/admin/usegetsingleadmin';

export default function ViewAdmin() {
	const navigate = useNavigate()
    const {id} = useParams()
	const [tabIndex, setTabIndex] = useState(0)
    const {getSingleAdmin, /*loading*/} = useGetSingleAdmin()
    const [data, setData] = useState()
    const [clientData, setClientData] = useState(null)

  
    
  const fetch = async ()=>{
	// setProfileModal(false)
	const data = await getSingleAdmin(id)
	if(data !== undefined){
	  setClientData({
		firstName: data.fullNames.firstname,
		lastName: data.fullNames.lastname,
		phone: data.phone
	  })
	  console.log(data)
	  setData(data)
	}
  }


  useEffect(()=>{  
	fetch()
	// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  
	return (
    <div className="nk-content-body">
      <div className="nk-block-head nk-block-head-sm">
        <div className="nk-block-between g-3">
          <div className="nk-block-head-content">
            <h3 className="nk-block-title page-title">
              Administrator /{" "}
              <strong className="text-primary small">{`${data?.fullNames?.firstname} ${data?.fullNames?.lastname}`}</strong>
            </h3>
            {/* <div className="nk-block-des text-soft">
              <ul className="list-inline">
                <li>
                  User ID: <span className="text-base">UD003054</span>
                </li>
                <li>
                  Last Login:{" "}
                  <span className="text-base">15 Feb, 2019 01:02 PM</span>
                </li>
              </ul>
            </div> */}
          </div>
          <div className="nk-block-head-content">
            <div
			onClick={()=> navigate(-1)}
              className="btn btn-outline-light bg-white d-none d-sm-inline-flex"
            >
              <em className="icon ni ni-arrow-left" />
              <span>Back</span>
            </div>
            <span
			onClick={()=> navigate(-1)}
              className="btn btn-icon btn-outline-light bg-white d-inline-flex d-sm-none"
            >
              <em className="icon ni ni-arrow-left" />
            </span>
          </div>
        </div>
      </div>
      {/* .nk-block-head */}
      <div className="nk-block">
        <div className="card">
          <div className="card-aside-wrap">
            <div className="card-content w-100">
              <ul className="nav nav-tabs nav-tabs-mb-icon nav-tabs-card">
                <li onClick={()=> setTabIndex(0)}  className={`px-2 px-md-3 clipboard-init ${tabIndex === 0 && ' nav-item active' }`}>
                  <div className={`nav-link`}>
                    <em className="icon ni ni-user-circle" />
                    <span>Personal Info</span>
                  </div>
                </li>
                {/* <li onClick={()=> setTabIndex(1)}  className={`px-2 px-md-3 clipboard-init ${tabIndex === 1 && ' nav-item active' }`}>
                  <div className={`nav-link `}>
                    <em className="icon ni ni-repeat" />
                    <span>Widget</span>
                  </div>
                </li>
                <li onClick={()=> setTabIndex(2)}  className={`px-2 px-md-3 clipboard-init ${tabIndex === 2 && ' nav-item active' }`}>
                  <div className={`nav-link `}>
                    <em className="icon ni ni-file-text" />
                    <span>Grouped Menu</span>
                  </div>
                </li>
                <li onClick={()=> setTabIndex(3)}  className={`px-2 px-md-3 clipboard-init ${tabIndex === 3 && ' nav-item active' }`}>
                  <div className={`nav-link `}>
                    <em className="icon ni ni-file-text" />
                    <span>Menu</span>
                  </div>
                </li> */}
              </ul>
              {/* .nav-tabs */}

              {
				tabIndex === 0 && <ProfileDetails fetch={fetch} data={data} upDateProfile={clientData} setUpDateProfile={setClientData} />
			  }

              {/* .card-inner */}
            </div>
            {/* .card-content */}
            <div
              className="card-aside card-aside-right user-aside toggle-slide toggle-slide-right toggle-break-xxl toggle-screen-xxl"
              data-content="userAside"
              data-toggle-screen="xxl"
              data-toggle-overlay="true"
              data-toggle-body="true"
            >
              <div className="card-inner-group" data-simplebar="init">
                <div className="simplebar-wrapper" style={{ margin: 0 }}>
                  <div className="simplebar-height-auto-observer-wrapper">
                    <div className="simplebar-height-auto-observer" />
                  </div>
                  <div className="simplebar-mask">
                    <div
                      className="simplebar-offset"
                      style={{ right: 0, bottom: 0 }}
                    >
                      <div
                        className="simplebar-content-wrapper"
                        tabIndex={0}
                        role="region"
                        aria-label="scrollable content"
                        style={{ height: "auto", overflow: "hidden" }}
                      >
                        <div
                          className="simplebar-content"
                          style={{ padding: 0 }}
                        >
                          <div className="card-inner">
                            <div className="user-card user-card-s2">
                              <div className="user-avatar lg bg-primary">
                                <span>AB</span>
                              </div>
                              <div className="user-info">
                                <div className="badge bg-outline-light rounded-pill ucap">
                                  Investor
                                </div>
                                <h5>Abu Bin Ishtiyak</h5>
                                <span className="sub-text">
                                  info@softnio.com
                                </span>
                              </div>
                            </div>
                          </div>
                          {/* .card-inner */}
                          <div className="card-inner card-inner-sm">
                            <ul className="btn-toolbar justify-center gx-1">
                              <li>
                                <a
                                  href="#x"
                                  className="btn btn-trigger btn-icon"
                                >
                                  <em className="icon ni ni-shield-off" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#x"
                                  className="btn btn-trigger btn-icon"
                                >
                                  <em className="icon ni ni-mail" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#x"
                                  className="btn btn-trigger btn-icon"
                                >
                                  <em className="icon ni ni-download-cloud" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#x"
                                  className="btn btn-trigger btn-icon"
                                >
                                  <em className="icon ni ni-bookmark" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#x"
                                  className="btn btn-trigger btn-icon text-danger"
                                >
                                  <em className="icon ni ni-na" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* .card-inner */}
                          <div className="card-inner">
                            <div className="overline-title-alt mb-2">
                              In Account
                            </div>
                            <div className="profile-balance">
                              <div className="profile-balance-group gx-4">
                                <div className="profile-balance-sub">
                                  <div className="profile-balance-amount">
                                    <div className="number">
                                      2,500.00{" "}
                                      <small className="currency currency-usd">
                                        USD
                                      </small>
                                    </div>
                                  </div>
                                  <div className="profile-balance-subtitle">
                                    Invested Amount
                                  </div>
                                </div>
                                <div className="profile-balance-sub">
                                  <span className="profile-balance-plus text-soft">
                                    <em className="icon ni ni-plus" />
                                  </span>
                                  <div className="profile-balance-amount">
                                    <div className="number">1,643.76</div>
                                  </div>
                                  <div className="profile-balance-subtitle">
                                    Profit Earned
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* .card-inner */}
                          <div className="card-inner">
                            <div className="row text-center">
                              <div className="col-4">
                                <div className="profile-stats">
                                  <span className="amount">23</span>
                                  <span className="sub-text">Total Order</span>
                                </div>
                              </div>
                              <div className="col-4">
                                <div className="profile-stats">
                                  <span className="amount">20</span>
                                  <span className="sub-text">Complete</span>
                                </div>
                              </div>
                              <div className="col-4">
                                <div className="profile-stats">
                                  <span className="amount">3</span>
                                  <span className="sub-text">Progress</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* .card-inner */}
                          <div className="card-inner">
                            <h6 className="overline-title-alt mb-2">
                              Additional
                            </h6>
                            <div className="row g-3">
                              <div className="col-6">
                                <span className="sub-text">User ID:</span>
                                <span>UD003054</span>
                              </div>
                              <div className="col-6">
                                <span className="sub-text">Last Login:</span>
                                <span>15 Feb, 2019 01:02 PM</span>
                              </div>
                              <div className="col-6">
                                <span className="sub-text">KYC Status:</span>
                                <span className="lead-text text-success">
                                  Approved
                                </span>
                              </div>
                              <div className="col-6">
                                <span className="sub-text">Register At:</span>
                                <span>Nov 24, 2019</span>
                              </div>
                            </div>
                          </div>
                          {/* .card-inner */}
                          <div className="card-inner">
                            <h6 className="overline-title-alt mb-3">Groups</h6>
                            <ul className="g-1">
                              <li className="btn-group">
                                <a
                                  className="btn btn-xs btn-light btn-dim"
                                  href="#x"
                                >
                                  investor
                                </a>
                                <a
                                  className="btn btn-xs btn-icon btn-light btn-dim"
                                  href="#x"
                                >
                                  <em className="icon ni ni-cross" />
                                </a>
                              </li>
                              <li className="btn-group">
                                <a
                                  className="btn btn-xs btn-light btn-dim"
                                  href="#x"
                                >
                                  support
                                </a>
                                <a
                                  className="btn btn-xs btn-icon btn-light btn-dim"
                                  href="#x"
                                >
                                  <em className="icon ni ni-cross" />
                                </a>
                              </li>
                              <li className="btn-group">
                                <a
                                  className="btn btn-xs btn-light btn-dim"
                                  href="#x"
                                >
                                  another tag
                                </a>
                                <a
                                  className="btn btn-xs btn-icon btn-light btn-dim"
                                  href="#x"
                                >
                                  <em className="icon ni ni-cross" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* .card-inner */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="simplebar-placeholder"
                    style={{ width: "auto", height: 889 }}
                  />
                </div>
                <div
                  className="simplebar-track simplebar-horizontal"
                  style={{ visibility: "hidden" }}
                >
                  <div
                    className="simplebar-scrollbar"
                    style={{ width: 0, display: "none" }}
                  />
                </div>
                <div
                  className="simplebar-track simplebar-vertical"
                  style={{ visibility: "hidden" }}
                >
                  <div
                    className="simplebar-scrollbar"
                    style={{
                      height: 0,
                      transform: "translate3d(0px, 0px, 0px)",
                      display: "none",
                    }}
                  />
                </div>
              </div>
              {/* .card-inner */}
            </div>
            {/* .card-aside */}
          </div>
          {/* .card-aside-wrap */}
        </div>
        {/* .card */}
      </div>
      {/* .nk-block */}
    </div>
  );
}