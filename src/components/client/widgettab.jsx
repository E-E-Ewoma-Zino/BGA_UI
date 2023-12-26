import Modal from "../modal";
import { useState } from "react";
import InputNormal from '../input/inputnormal'

export default function WidgetTab() {
	const [showModal, setShowModal] = useState(false)
	const [showEditModal, setShowEditModal] = useState(false)
	const [showDeleteModal, setDeleteModal] = useState(false)
	const [deleteId, setDeleteId] = useState(null)
    const [widgetForm, setWidgetForm] = useState({
      name: '',
      url: '',
      isActive: true,
    //   client: id,
      internal: true
    }) 
    const [editWidgetForm, setEditWidgetForm] = useState({
      name: 'Godwin',
      url: 'Daniel',
      isActive: true,
    //   client: id,
      internal: true
    })

	const handleClose = ()=>{
		setShowModal(false)
		setShowEditModal(false)
		setDeleteModal(false)
		setDeleteId(null)
	} 


	const handleSubmit = ()=>{
		console.log(widgetForm)
	}

	const handleWidgetName = (e)=>{
		setWidgetForm(prv=> ({...prv, name: e.target.value}))
	}
	const handleWidgetUrl = (e)=>{
		setWidgetForm(prv=> ({...prv, url: e.target.value}))
	}
	const handleWidgetInternal= (e)=>{
		console.log(widgetForm)
		setWidgetForm(prv=> ({...prv, internal: e.target.checked}))
	}
	const handleWidgetAsActive = (e)=>{
		console.log(widgetForm)
		setWidgetForm(prv=> ({...prv, isActive: e.target.checked}))
	}

	
	
	const handleUpdateWidget = ()=>{
		console.log(editWidgetForm)
	}
	const handleEditWidgetName = (e)=>{
		setEditWidgetForm(prv=> ({...prv, name: e.target.value}))
	}
	const handleEditWidgetUrl = (e)=>{
		setEditWidgetForm(prv=> ({...prv, url: e.target.value}))
	}
	const handleEditWidgetInternal= (e)=>{
		console.log(widgetForm)
		setEditWidgetForm(prv=> ({...prv, internal: e.target.checked}))
	}
	const handleEditWidgetAsActive = (e)=>{
		console.log(widgetForm)
		setEditWidgetForm(prv=> ({...prv, isActive: e.target.checked}))
	}

	const handleDeleteWidget = ()=>{
		console.log(deleteId)
		handleClose()
	}

  return (
    <>
		<div className='py-4'>
            <div className="nk-block-between px-2 px-md-5 pb-4">
              <div className="nk-block-head-content">
                <h6 className="nk-block-title ">
                  Widgets
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
                            <span>Create Widget</span>
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
						<th scope="col">Widget Name</th>
						<th scope="col">URL</th>
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
						<h5 className="title">Create Widget</h5>
						<div className="tab-content">
							<div className="tab-pane active" id="personal" role="tabpanel">
								<div className="row gy-4">
								<div className="col-md-12">
									<InputNormal
									value={widgetForm.name}
									handleChange={handleWidgetName}
									placeholder="Enter Widget Name"
									type="text"
									label="Widget Name"
									id="widgetName"
									required
									/>
								</div>
								<div className="col-12">
									<div className="custom-control custom-switch">
									<input
										type="checkbox"
										checked={widgetForm.internal}
										onChange={(e) => handleWidgetInternal(e)}
										className="custom-control-input"
										id="internal-widget"
									/>
									<label
										className="custom-control-label"
										htmlFor="internal-widget"
									>
										Internal Widget
									</label>
									</div>
								</div>
								{
									!widgetForm.internal &&
										<div className="col-md-12">
										<InputNormal
										value={widgetForm.url}
										handleChange={handleWidgetUrl}
										placeholder="Enter Phone"
										type="tel"
										label="Phone"
										id="phone"
										required
										/>
								</div>
								}
								
								<div className="col-12">
									<div className="custom-control custom-switch">
									<input
										type="checkbox"
										checked={widgetForm.isActive}
										onChange={(e) => handleWidgetAsActive(e)}
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
										onClick={()=> handleSubmit()}
										className="btn btn-lg btn-primary"
									>
										Create Widget
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
						<h5 className="title">Edit Widget</h5>
						<div className="tab-content">
							<div className="tab-pane active" id="personal" role="tabpanel">
								<div className="row gy-4">
								<div className="col-md-12">
									<InputNormal
									value={editWidgetForm.name}
									handleChange={handleEditWidgetName}
									placeholder="Enter Widget Name"
									type="text"
									label="Widget Name"
									id="widgetName"
									required
									/>
								</div>
								<div className="col-12">
									<div className="custom-control custom-switch">
									<input
										type="checkbox"
										checked={editWidgetForm.internal}
										onChange={(e) => handleEditWidgetInternal(e)}
										className="custom-control-input"
										id="internal-widget"
									/>
									<label
										className="custom-control-label"
										htmlFor="internal-widget"
									>
										Internal Widget
									</label>
									</div>
								</div>
								{
									!editWidgetForm.internal &&
										<div className="col-md-12">
										<InputNormal
										value={editWidgetForm.url}
										handleChange={handleEditWidgetUrl}
										placeholder="Enter URL"
										type="url"
										label="Widget URL"
										id="widget-url"
										required
										/>
								</div>
								}
								
								<div className="col-12">
									<div className="custom-control custom-switch">
									<input
										type="checkbox"
										checked={editWidgetForm.isActive}
										onChange={(e) => handleEditWidgetAsActive(e)}
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
										onClick={()=> handleUpdateWidget()}
										className="btn btn-lg btn-primary"
									>
										Update Widget
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
								<p>Are you sure you want to delete selected widget</p>
							</div>
							{/* .tab-pane */}
						</div>
						<div className="col-12 mt-4">
							<ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
								<li>
									<div
										onClick={()=> handleDeleteWidget()}
										className="btn btn-lg btn-primary"
									>
										Delete Widget
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
