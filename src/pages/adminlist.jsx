// Dashboard for Admin
import { Link } from "react-router-dom";
import Pagination from "../components/pagination/pagination";
import _route from "../constant/routes";
import { SelectItem } from '../helpers/selectitem'

export default function AdminList() {
	const {handleSelectAllChecked, handleEachInvoice, /*selectedItem*/} = SelectItem()


	return (
        <div className="nk-content-body">
          <div className="nk-block-head nk-block-head-sm">
            <div className="nk-block-between">
              <div className="nk-block-head-content">
                <h3 className="nk-block-title page-title">
                  Administrator Lists
                </h3>
                <div className="nk-block-des text-soft">
                  <p>You have total 2,595 Administrators.</p>
                </div>
              </div>
              {/* .nk-block-head-content */}
              <div className="nk-block-head-content">
                <div className="toggle-wrap nk-block-tools-toggle">
                  <a
                    href="#x"
                    className="btn btn-icon btn-trigger toggle-expand me-n1"
                  >
                    <em className="icon ni ni-more-v" />
                  </a>
                  <div
                    className="toggle-expand-content"
                  >
                    <ul className="nk-block-tools g-3">
                      <li>
                        <div className="form-control-wrap">
                          <div className="form-icon form-icon-right">
                            <em className="icon ni ni-search" />
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search by name"
                          />
                        </div>
                      </li>
                      <li>
                        <div className="drodown">
                          <a
                            href="#x"
                            className="dropdown-toggle dropdown-indicator btn btn-outline-light btn-white"
                            data-bs-toggle="dropdown"
                          >
                            Status
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <ul className="link-list-opt no-bdr">
                              <li>
                                <a href="#x">
                                  <span>Actived</span>
                                </a>
                              </li>
                              <li>
                                <a href="#x">
                                  <span>Inactived</span>
                                </a>
                              </li>
                              {/* <li>
                                <a href="#x">
                                  <span>Blocked</span>
                                </a>
                              </li> */}
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="nk-block-tools-opt">
						<Link to={_route._admin_create_admin}>
							<div
							className="btn btn-icon btn-primary d-md-none"
							>
							<em className="icon ni ni-plus" />
							</div>
							<div
							className="btn btn-primary d-none d-md-inline-flex"
							>
							<em className="icon ni ni-plus" />
							<span>Create Admin</span>
							</div>
						</Link>
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
            <div className="nk-tb-list is-separate mb-3">
              <div className="nk-tb-item nk-tb-head">
                <div className="nk-tb-col nk-tb-col-check">
                  <div className="custom-control custom-control-sm custom-checkbox notext">
                    <input
                      type="checkbox"
                      className="custom-control-input selectAll"
                      onChange={(e) =>handleSelectAllChecked(e)}
                      id="uid"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="uid"
                    />
                  </div>
                </div>
                <div className="nk-tb-col">
                  <span className="sub-text">Admins</span>
                </div>
                <div className="nk-tb-col tb-col-mb">
                  <span className="sub-text">Role</span>
                </div>
                <div className="nk-tb-col tb-col-md">
                  <span className="sub-text">Phone</span>
                </div>
                <div className="nk-tb-col tb-col-lg">
                  <span className="sub-text">Last Login</span>
                </div>
                <div className="nk-tb-col tb-col-md">
                  <span className="sub-text">Status</span>
                </div>
                <div className="nk-tb-col nk-tb-col-tools">
                  <ul className="nk-tb-actions gx-1 my-n1">
                    <li>
                      <div className="drodown">
                        <a
                          href="#x"
                          className="dropdown-toggle btn btn-icon btn-trigger me-n1"
                          data-bs-toggle="dropdown"
                        >
                          <em className="icon ni ni-more-h" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <ul className="link-list-opt no-bdr">
                            <li>
                              <a href="#x">
                                <em className="icon ni ni-mail" />
                                <span>Send Email to All</span>
                              </a>
                            </li>
                            <li>
                              <a href="#x">
                                <em className="icon ni ni-na" />
                                <span>Suspend Selected</span>
                              </a>
                            </li>
                            <li>
                              <a href="#x">
                                <em className="icon ni ni-trash" />
                                <span>Remove Seleted</span>
                              </a>
                            </li>
                            <li>
                              <a href="#x">
                                <em className="icon ni ni-shield-star" />
                                <span>Reset Password</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* .nk-tb-item */}
              {
                [1,2,3,4,5,6,7,8,9,0].map((element, index)=>{
                  return(
                    
					<Link to={`${_route._admin_administrator}/${index}`} key={index} className="nk-tb-item">
					  <div className="nk-tb-col nk-tb-col-check">
						<div className="custom-control custom-control-sm custom-checkbox notext">
						  <input
							type="checkbox"
							className="custom-control-input each_invoice"
							onChange={(e) =>handleEachInvoice(e)}
							id={index}
						  />
						  <label
							className="custom-control-label"
							htmlFor={index}
						  />
						</div>
					  </div>
					  <div className="nk-tb-col">
						<div>
						  <div className="user-card">
							<div className="user-avatar bg-primary">
							  <span>AB</span>
							</div>
							<div className="user-info">
							  <span className="tb-lead">
								Abu Bin Ishtiyak{" "}
								<span className="dot dot-success d-md-none ms-1" />
							  </span>
							  <span>info@softnio.com</span>
							</div>
						  </div>
						</div>
					  </div>
					  <div className="nk-tb-col tb-col-mb">
						<span className="tb-amount">
						  35,040.34 <span className="currency">USD</span>
						</span>
					  </div>
					  <div className="nk-tb-col tb-col-md">
						<span>+811 847-4958</span>
					  </div>
					  <div className="nk-tb-col tb-col-lg">
						<span>10 Feb 2020</span>
					  </div>
					  <div className="nk-tb-col tb-col-md">
						<span className="tb-status text-success">Active</span>
					  </div>
					  <div className="nk-tb-col nk-tb-col-tools">
						<ul className="nk-tb-actions gx-1">
						  <li>
							<div className="drodown">
							  <div
								className="dropdown-toggle btn btn-icon btn-trigger"
								data-bs-toggle="dropdown"
							  >
								<em className="icon ni ni-more-h" />
							  </div>
							  <div className="dropdown-menu dropdown-menu-end">
								<ul className="link-list-opt no-bdr">
								  <li>
									<a href="#x">
									  <em className="icon ni ni-eye" />
									  <span>View Client</span>
									</a>
								  </li>
								  <li>
									<a href="#x">
									  <em className="icon ni ni-trash" />
									  <span>Delete Client</span>
									</a>
								  </li>
								</ul>
							  </div>
							</div>
						  </li>
						</ul>
					  </div>
					</Link>
                  )
                })
              }
              {/* .nk-tb-item */}
            </div>
            {/* .nk-tb-list */}
            {/* Pagiination  */}
            <Pagination />
            {/* .card */}
          </div>
          {/* .nk-block */}
        </div>
  );
}