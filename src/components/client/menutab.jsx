import Modal from "../modal";
import { useState } from "react";
import InputNormal from '../input/inputnormal'

export default function MenuTab() {
	const [showModal, setShowModal] = useState(false)
	const [showEditModal, setShowEditModal] = useState(false)
	const [showDeleteModal, setDeleteModal] = useState(false)
	const [deleteId, setDeleteId] = useState(null)
    const [menuForm, setMenuForm] = useState({
      name: '',
      url: '',
      isActive: true,
    //   client: id,
      parent: ''
    }) 
    const [editMenuForm, setEditMenuForm] = useState({
      name: 'Godwin',
      url: 'Daniel',
      isActive: true,
    //   client: id,
      parent: ''
    })

	const handleClose = ()=>{
		setShowModal(false)
		setShowEditModal(false)
		setDeleteModal(false)
		setDeleteId(null)
	} 


	const handleSubmit = ()=>{
		console.log(menuForm)
	}

	const handleMenuName = (e)=>{
		setMenuForm(prv=> ({...prv, name: e.target.value}))
	}
	const handleMenuUrl = (e)=>{
		setMenuForm(prv=> ({...prv, url: e.target.value}))
	}
	const handleMenuParent= (e)=>{
		console.log(menuForm)
		setMenuForm(prv=> ({...prv, parent: e.target.value}))
	}
	const handleMenuAsActive = (e)=>{
		console.log(menuForm)
		setMenuForm(prv=> ({...prv, isActive: e.target.checked}))
	}

	
	
	const handleUpdateMenu = ()=>{
		console.log(editMenuForm)
	}
	const handleEditMenuName = (e)=>{
		setEditMenuForm(prv=> ({...prv, name: e.target.value}))
	}
	const handleEditMenuUrl = (e)=>{
		setEditMenuForm(prv=> ({...prv, url: e.target.value}))
	}
	const handleEditMenuParent= (e)=>{
		console.log(menuForm)
		setEditMenuForm(prv=> ({...prv, parent: e.target.checked}))
	}
	const handleEditMenuAsActive = (e)=>{
		console.log(menuForm)
		setEditMenuForm(prv=> ({...prv, isActive: e.target.checked}))
	}

	const handleDeleteMenu = ()=>{
		console.log(deleteId)
		handleClose()
	}

  return (
    <>
		<div className='py-4'>
            <div className="nk-block-between px-2 px-md-5 pb-4">
              <div className="nk-block-head-content">
                <h6 className="nk-block-title ">
                  Menu
                </h6>
              </div>
              {/* .nk-block-head-content */}
              <div className="nk-block-head-content ms-auto">
                <div className="toggle-wrap nk-block-tools-toggle">
                  <span
					onClick={()=> setShowModal(prv=> !prv)}
                    className="btn btn-icon py-1 btn-primary d-md-none"
                  >
                    <em className="icon ni ni-plus" />
                  </span>
                  <div
                    className="toggle-expand-content"
                  >
                    <ul className="nk-block-tools g-3">
                      <li onClick={()=> setShowModal(prv=> !prv)} className="nk-block-tools-opt">
                        <div >
                          <div
                            className="btn btn-primary d-none d-md-inline-flex"
                          >
                            <em className="icon ni ni-plus" />
                            <span>Create Menu</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* .nk-block-head-content */}
            </div>
			<div className="w-100 overflow-x-scroll">
				<table className="table table-bordered">
					<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Menu Name</th>
						<th scope="col">Parent</th>
						<th scope="col">Status</th>
						<th scope="col">Actions</th>
					</tr>
					</thead>
					<tbody>
						{
							[1,2,3,4,5].map((element, index)=>{
								return (
					<tr key={index}>
					<th scope="row">1</th>
					<td>Mark</td>
					<td className="truncate-td">
						<span className="">
						iuiuhihiihihijojpjoiopkpk mpmmpm mmionononon 
						</span>
					</td>
					<td>Mark</td>
					<td>
						<span onClick={() => {setShowEditModal(true)}} className='table-action'>
						<em className="icon ni ni-edit" />
						</span>
						<span onClick={()=> {setDeleteId(index); setDeleteModal(true)}} className='table-action'>
						<em className="icon ni ni-trash" />
						</span>
					</td>
					</tr>
				);
							})
						}
					</tbody>
				</table>
			</div>
		</div>

		
		{showModal && (
				<Modal handleClose={handleClose} showModal={showModal} >
					<div className="modal-body modal-body-lg">
						<h5 className="title">Create Menu</h5>
						<div className="tab-content">
							<div className="tab-pane active" id="personal" role="tabpanel">
								<div className="row gy-4">
								<div className="col-md-12">
									<InputNormal
									value={menuForm.name}
									handleChange={handleMenuName}
									placeholder="Enter menu Name"
									type="text"
									label="menu Name"
									id="menuName"
									required
									/>
								</div>
								<div className="col-md-12">
									<InputNormal
									value={menuForm.url}
									handleChange={handleMenuUrl}
									placeholder="Enter URL"
									type="url"
									label="Menu URL"
									id="url"
									required
									/>
								</div>
								<div className="col-12">
									<div className="form-group">
										<label className="form-label" htmlFor="default-06">
											Parent
										</label>
										<div className="form-control-wrap ">
											<div className="form-control-select">
											<select value={menuForm.parent} onChange={(e)=>handleMenuParent(e)} className="form-control" id="default-06">
												<option hidden value=''> select an Agent</option>
												<option value="option_select_name">
												Option select name
												</option>
												<option value="option_select_name">
												Option select name
												</option>
											</select>
											</div>
										</div>
									</div>
								</div>
								
								
								<div className="col-12">
									<div className="custom-control custom-switch">
									<input
										type="checkbox"
										checked={menuForm.isActive}
										onChange={(e) => handleMenuAsActive(e)}
										className="custom-control-input"
										id="latestsale"
									/>
									<label
										className="custom-control-label"
										htmlFor="latestsale"
									>
										isActive
									</label>
									</div>
								</div>
								</div>
							</div>
							{/* .tab-pane */}
						</div>
						<div className="col-12 mt-4">
							<ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
								<li>
									<div
										onClick={()=> handleSubmit()}
										className="btn btn-lg btn-primary"
									>
										Create Menu
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


		{showEditModal && (
				<Modal handleClose={handleClose} showModal={showEditModal} >
					<div className="modal-body modal-body-lg">
						<h5 className="title">Edit Menu</h5>
						<div className="tab-content">
							<div className="tab-pane active" id="personal" role="tabpanel">
								<div className="row gy-4">
								<div className="col-md-12">
									<InputNormal
									value={editMenuForm.name}
									handleChange={handleEditMenuName}
									placeholder="Enter Menu Name"
									type="text"
									label="Menu Name"
									id="menuName"
									required
									/>
								</div>
								<div className="col-md-12">
									<InputNormal
									value={editMenuForm.url}
									handleChange={handleEditMenuUrl}
									placeholder="Enter URL"
									type="url"
									label="Menu URL"
									id="menu-url"
									required
									/>
								</div>
								<div className="col-12">
									<div className="form-group">
										<label className="form-label" htmlFor="default-06">
											Parent
										</label>
										<div className="form-control-wrap ">
											<div className="form-control-select">
											<select value={editMenuForm.parent} onChange={(e)=>handleEditMenuParent(e)} className="form-control" id="default-06">
												<option hidden value=''> select an Agent</option>
												<option value="option_select_name">
												Option select name
												</option>
												<option value="option_select_name">
												Option select name
												</option>
											</select>
											</div>
										</div>
									</div>
								</div>
								
								<div className="col-12">
									<div className="custom-control custom-switch">
									<input
										type="checkbox"
										checked={editMenuForm.isActive}
										onChange={(e) => handleEditMenuAsActive(e)}
										className="custom-control-input"
										id="latest-sale"
									/>
									<label
										className="custom-control-label"
										htmlFor="latest-sale"
									>
										isActive
									</label>
									</div>
								</div>
								</div>
							</div>
							{/* .tab-pane */}
						</div>
						<div className="col-12 mt-4">
							<ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
								<li>
									<div
										onClick={()=> handleUpdateMenu()}
										className="btn btn-lg btn-primary"
									>
										Update Menu
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

		


		{showDeleteModal && (
				<Modal handleClose={handleClose} showModal={showDeleteModal} >
					<div className="modal-body modal-body-lg">
						<h5 className="title">Confirm Delete</h5>
						<div className="tab-content">
							<div className="tab-pane active" id="personal" role="tabpanel">
								<p>Are you sure you want to delete selected  Menu</p>
							</div>
							{/* .tab-pane */}
						</div>
						<div className="col-12 mt-4">
							<ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
								<li>
									<div
										onClick={()=> handleDeleteMenu()}
										className="btn btn-lg btn-primary"
									>
										Delete Menu
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
