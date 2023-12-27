// Dashboard for Admin
import { Link } from "react-router-dom";
// import Pagination from "../components/pagination/pagination";
import { SelectItem } from '../helpers/selectitem'
import _route from "../constants/routes";
import useGetAllAdminClient from '../hooks/admin/client/usegetalladminclient';
import { useEffect, useState } from 'react';
import useDeleteClient from '../hooks/admin/client/usedeleteclient'
import Spinnar from "../components/spinnar";
import Modal from "../components/modal";


export default function ClientList() {
	const {getAllAdminClient, loading} = useGetAllAdminClient()
	const {deleteClient, loading: deleteLoading} = useDeleteClient()
	const {handleSelectAllChecked, handleEachInvoice, /*selectedItem*/} = SelectItem()
    const options = { month: 'long', year: 'numeric', day: 'numeric' };
	const [showDeleteModal, setDeleteModal] = useState(false)
	const [deleteId, setDeleteId] = useState(null)
	const [client, setClient] = useState([])

	
  
	const fetch = async ()=>{
		handleClose()
		const data = await getAllAdminClient()
		if(data !== undefined){
		  setClient(data)
		}
	  }
	
	  const handleClose =()=>{
		setDeleteModal(false)
		setDeleteId(null)
	}
		
	  const handleDelete = async (id)=>{
		await deleteClient(deleteId) && fetch()
	  }
	
	
	  
	  useEffect(()=>{
	
		fetch()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	  }, [])

	return (
		<>
        <div className="nk-content-body">
          <div className="nk-block-head nk-block-head-sm">
            <div className="nk-block-between">
              <div className="nk-block-head-content">
                <h3 className="nk-block-title page-title">
                  User Lists
                </h3>
                <div className="nk-block-des text-soft">
                  <p>You have total {client?.length} users.</p>
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
                      {/* <li>
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
                              <li>
                                <a href="#x">
                                  <span>Blocked</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li> */}
                      <li className="nk-block-tools-opt">
                        <Link to={_route._admin_create_client}>
                          <div
                            className="btn btn-icon btn-primary d-md-none"
                          >
                            <em className="icon ni ni-plus" />
                          </div>
                          <div
                            className="btn btn-primary d-none d-md-inline-flex"
                          >
                            <em className="icon ni ni-plus" />
                            <span>Create Client</span>
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
                <div className="nk-tb-col tb-col-sm nk-tb-col-check">
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
                  <span className="sub-text">User</span>
                </div>
                <div className="nk-tb-col tb-col-mb">
                  <span className="sub-text">Organization</span>
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
                            {/* <li>
                              <a href="#x">
                                <em className="icon ni ni-mail" />
                                <span>View Client</span>
                              </a>
                            </li> */}
                            <li>
                              <a href="#x">
                                <em className="icon ni ni-trash" />
                                <span>Remove Seleted</span>
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

				
			  { loading 
					?
					<div className='w-full h-full flex justify-center items-center'><p>Loading...</p></div>
					
					:
					client.length === 0 
					?
					(
					<div className='w-full h-full flex justify-center items-center'><p className='text-textgrey'>No Data to show</p></div>
						
					)
					:
						client.map((client, index)=>{
						return(
							
							<Link to={`${_route._admin_client}/${client._id}`} key={client._id} className="nk-tb-item">
							<div onClick={(e)=> e.stopPropagation()} className="nk-tb-col tb-col-sm nk-tb-col-check">
								<div className="custom-control custom-control-sm custom-checkbox notext">
								<input
									type="checkbox"
									className="custom-control-input each_invoice"
									onChange={(e) =>handleEachInvoice(e)}
									id={client._id}
								/>
								<label
									className="custom-control-label"
									htmlFor={client._id}
								/>
								</div>
							</div>
							<div className="nk-tb-col">
								<div>
								<div className="user-card">
									<div className="user-avatar bg-primary">
									<span>
									{`${client.fullNames.firstname} ${client.fullNames.lastname}`.match(/\b(\w)/g).join('').toUpperCase().substring(0, 2)}
									</span>
									</div>
									<div className="user-info">
									<span className="tb-lead">
										{`${client.fullNames.firstname} ${client.fullNames.lastname}`}{" "}
										{/* <span className="dot dot-success d-md-none ms-1" /> */}
									</span>
									<span>{client.username}</span>
									</div>
								</div>
								</div>
							</div>
							<div className="nk-tb-col tb-col-mb">
								<span className="tb-amount">
									{client.organization.name}
								</span>
								{/* <span className="tb-amount">
								35,040.34 <span className="currency">USD</span>
								</span> */}
							</div>
							<div className="nk-tb-col tb-col-md">
								<span className="tb-amount">{client.phone}</span>
							</div>
							<div className="nk-tb-col tb-col-lg">
								<span className="tb-amount">{(new Date(client.lastLogin)).toLocaleDateString('en-US', options)}</span>
							</div>
							<div className="nk-tb-col tb-col-md">
								{
									client.isActive ?
										<span className="tb-status text-success">Active</span>
									:
										<span className="tb-status text-danger">inActive</span>
								}
							</div>
							<div onClick={(e) => e.stopPropagation()} className="nk-tb-col nk-tb-col-tools">
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
											<Link to={`${_route._admin_client}/${client._id}`}>
											<em className="icon ni ni-eye" />
											<span>View Client</span>
											</Link>
										</li>
										<li>
											<a onClick={() => {setDeleteId(client._id); setDeleteModal(true)}} href="#x">
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
            {/* <Pagination /> */}
            {/* .card */}
          </div>
          {/* .nk-block */}
        </div>

		
{showDeleteModal && (
		<Modal handleClose={handleClose} showModal={showDeleteModal} >
			<div className="modal-body modal-body-lg">
				<h5 className="title">Confirm Delete</h5>
				<div className="tab-content">
					<div className="tab-pane active" id="personal" role="tabpanel">
						<p>Are you sure you want to delete selected Client</p>
					</div>
					{/* .tab-pane */}
				</div>
				<div className="col-12 mt-4">
					<ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
						<li>
							<div
								onClick={()=> handleDelete()}
								className="btn btn-lg btn-primary"
							>
								{
									deleteLoading ? <Spinnar /> : 'Delete Client'
								}
								
							</div>
						</li>
						<li>
							<div
								onClick={()=> handleClose()}
								className="clipboard-init link link-light"
							>
								Cancel
							</div>
						</li>
					</ul>
				</div>
				{/* .tab-content */}
			</div>
		</Modal>
)}
		</>
  );
}