// Dashboard for Admin
import { Link } from "react-router-dom";
// import Pagination from "../components/pagination/pagination";
import _route from "../constants/routes";
import { SelectItem } from '../helpers/selectitem'
import { useEffect, useState } from 'react';
import useGetAllAdmin from '../hooks/admin/admin/usegetalladmin';
import useDeleteAdmin from '../hooks/admin/admin/usedeleteadmin'
import Spinnar from "../components/spinnar";
import Modal from "../components/modal";

export default function AdminList() {
	const {handleSelectAllChecked, handleEachInvoice, /*selectedItem*/} = SelectItem()
	const {getAllAdmin, loading} = useGetAllAdmin()
	const {deleteAdmin, loading:deleteLoading} = useDeleteAdmin()
	const [showDeleteModal, setDeleteModal] = useState(false)
	const [admin, setAdmin] = useState([])
	const [deleteId, setDeleteId] = useState(null)
    const options = { month: 'long', year: 'numeric', day: 'numeric' };


	const fetch = async ()=>{
		handleClose()
		const data = await getAllAdmin()
		if(data !== undefined){
		  setAdmin(data)
		}
	}
	const handleClose =()=>{
		setDeleteModal(false)
		setDeleteId(null)
	}

	const handleDelete = async ()=>{
		await deleteAdmin(deleteId) && fetch()
		handleClose()
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
					Administrator Lists
					</h3>
					<div className="nk-block-des text-soft">
					<p>You have total {admin?.length} Administrators.</p>
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
					<div className="nk-tb-col tb-col-sm nk-tb-col-check">
					<div className="custom-control  custom-control-sm custom-checkbox notext">
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
									<em className="icon ni ni-trash" />
									<span>Delete Seleted</span>
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
						admin.length === 0 
						?
						(
						<div className='w-full h-full flex justify-center items-center'><p className='text-textgrey'>No Data to show</p></div>
							
						)
						:
							admin.map((admin, index)=>{
							return(
								
								<Link to={`${_route._admin_administrator}/${admin._id}`} key={admin._id} className="nk-tb-item">
								<div onClick={(e)=> e.stopPropagation()} className="nk-tb-col tb-col-sm nk-tb-col-check">
									<div className="custom-control custom-control-sm custom-checkbox notext">
									<input
										type="checkbox"
										className="custom-control-input each_invoice"
										onChange={(e) =>handleEachInvoice(e)}
										id={admin._id}
									/>
									<label
										className="custom-control-label"
										htmlFor={admin._id}
									/>
									</div>
								</div>
								<div className="nk-tb-col">
									<div>
									<div className="user-card">
										<div className="user-avatar bg-primary">
										<span>
										{`${admin.fullNames.firstname} ${admin.fullNames.lastname}`.match(/\b(\w)/g).join('').toUpperCase().substring(0, 2)}
										</span>
										</div>
										<div className="user-info">
										<span className="tb-lead">
											{`${admin.fullNames.firstname} ${admin.fullNames.lastname}`}{" "}
											{/* <span className="dot dot-success d-md-none ms-1" /> */}
										</span>
										<span>{admin.username}</span>
										</div>
									</div>
									</div>
								</div>
								<div className="nk-tb-col tb-col-mb">
									<span className="tb-amount">
										{admin.role}
									</span>
									{/* <span className="tb-amount">
									35,040.34 <span className="currency">USD</span>
									</span> */}
								</div>
								<div className="nk-tb-col tb-col-md">
									<span className="tb-amount">{admin.phone}</span>
								</div>
								<div className="nk-tb-col tb-col-lg">
									<span className="tb-amount">{(new Date(admin?.lastLogin)).toLocaleDateString('en-US', options)}</span>
								</div>
								<div className="nk-tb-col tb-col-md">
									{
										admin.isActive ?
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
												<Link to={`${_route._admin_administrator}/${admin._id}`}>
												<em className="icon ni ni-eye" />
												<span>View Admin</span>
												</Link>
											</li>
											<li>
												<a onClick={() => {setDeleteId(admin._id); setDeleteModal(true)}} href="#x">
												<em className="icon ni ni-trash" />
												<span>Delete Admin</span>
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
						<p>Are you sure you want to delete selected Administrator</p>
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
									deleteLoading ? <Spinnar /> : 'Delete Admin'
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