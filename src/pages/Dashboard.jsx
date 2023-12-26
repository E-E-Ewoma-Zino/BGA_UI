// Dashboard for Admin
import { Link } from "react-router-dom";
import DropdownBtn from "../components/Buttons/DropdownBtn";
import _route from "../constant/routes";

export default function Dashboard() {
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
                <div className="nk-block-head-content">
                  <div className="toggle-wrap nk-block-tools-toggle">
                    <a
                      href="#x"
                      className="btn btn-icon btn-trigger toggle-expand me-n1"
                      data-target="pageMenu"
                    >
                      <em className="icon ni ni-more-v" />
                    </a>
                    <div
                      className="toggle-expand-content"
                      data-content="pageMenu"
                    >
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
                </div>
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
                              23<small className="fs-4">/68</small>
                            </div>
                            <div className="nk-ecwg6-ck">ic</div>
                          </div>
                        </div>
                        <div className="info">
                          <span className="change down text-danger">
                            <em className="icon ni ni-arrow-long-down" />
                            2.34%
                          </span>
                          <span> Requests</span>
                        </div>
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
                              3<small className="fs-4">/13</small>
                            </div>
                            <div className="nk-ecwg6-ck"></div>
                          </div>
                        </div>
                        <div className="info">
                          <span className="change up">
                            <em className="icon ni ni-arrow-long-up" />
                            3.97%
                          </span>
                          <span> Requests</span>
                        </div>
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
                            <Link
                              to={_route._admin_administrator}
                              className="link"
                            >
                              View All
                            </Link>
                          </div>
                        </div>
                      </div>
        {
          [1,2,3,4,5].map((element, index)=>{
            return(
              <div key={index} className="card-inner card-inner-md">
                <div className="user-card">
                <div className="user-avatar bg-primary-dim">
                  <span>AB</span>
                </div>
                <div className="user-info">
                  <span className="lead-text">
                  Abu Bin Ishtiyak
                  </span>
                  <span className="sub-text">
                  info@softnio.com
                  </span>
                </div>
                {/* <div className="user-action">
                  <div className="drodown">
                  <a
                    href="#x"
                    className="dropdown-toggle btn btn-icon btn-trigger me-n1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <em className="icon ni ni-more-h" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-end">
                    <ul className="link-list-opt no-bdr">
                    <li>
                      <a href="#x">
                      <em className="icon ni ni-setting" />
                      <span>Action Settings</span>
                      </a>
                    </li>
                    <li>
                      <a href="#x">
                      <em className="icon ni ni-notify" />
                      <span>Push Notification</span>
                      </a>
                    </li>
                    </ul>
                  </div>
                  </div>
                </div> */}
                </div>
              </div>
            )
          })
        }
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
                            <Link
                              to={_route._admin_client}
                              className="link"
                            >
                              View All
                            </Link>
                          </div>
                        </div>
                      </div>
        {
          [1,2,3,4,5].map((element, index)=>{
            return(
              <div key={index} className="card-inner card-inner-md">
                <div className="user-card">
                <div className="user-avatar bg-primary-dim">
                  <span>AB</span>
                </div>
                <div className="user-info">
                  <span className="lead-text">
                  Abu Bin Ishtiyak
                  </span>
                  <span className="sub-text">
                  info@softnio.com
                  </span>
                </div>
                {/* <div className="user-action">
                  <div className="drodown">
                  <a
                    href="#x"
                    className="dropdown-toggle btn btn-icon btn-trigger me-n1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <em className="icon ni ni-more-h" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-end">
                    <ul className="link-list-opt no-bdr">
                    <li>
                      <a href="#x">
                      <em className="icon ni ni-setting" />
                      <span>Action Settings</span>
                      </a>
                    </li>
                    <li>
                      <a href="#x">
                      <em className="icon ni ni-notify" />
                      <span>Push Notification</span>
                      </a>
                    </li>
                    </ul>
                  </div>
                  </div>
                </div> */}
                </div>
              </div>
            )
          })
        }
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