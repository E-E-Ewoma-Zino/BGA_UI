import Modal from "../modal";
import { useState, useEffect } from "react";
import InputNormal from '../input/inputnormal'
import useGetAllWidget from '../../hooks/admin/widget/usegetallwidget';
import { useParams } from 'react-router-dom';
import useCreateWidget from '../../hooks/admin/widget/usecreatewidget';
import useDeleteWidget from "../../hooks/admin/widget/usedeletewidget"
import useUpdateeWidget from "../../hooks/admin/widget/useupdatewidget"
import Spinnar from "../spinnar";

export default function WidgetTab() {
	const [showModal, setShowModal] = useState(false)
	const [showEditModal, setShowEditModal] = useState(false)
	const [showDeleteModal, setDeleteModal] = useState(false)
    const {deleteWidget, loading: deleteWidgetLoading} = useDeleteWidget()
    const {getAllWidget, loading} = useGetAllWidget()
    const {createWidget, loading: createWidgetLoading} = useCreateWidget()
    const {upDateWidget, loading: upDatteWidgetLoading} = useUpdateeWidget()
	const [profile, setProfile] = useState(null);
    const {id} = useParams()
	const [deleteId, setDeleteId] = useState(null)
    const [widgetData, setWidgetData] = useState([])
    const [image, setImage] = useState(null)
    const [widgetForm, setWidgetForm] = useState({
      name: '',
      url: '',
      isActive: true,
      client: id,
      internal: true
    }) 
    const [editWidgetForm, setEditWidgetForm] = useState({
		name: '',
		url: '',
		isActive: true,
		client: id,
		internal: true
	  })

	const handleClose = ()=>{
		setShowModal(false)
		setShowEditModal(false)
		setDeleteModal(false)
		setProfile(null)
		setDeleteId(null)
		setWidgetForm({
			name: '',
			url: '',
			isActive: true,
			client: id,
			internal: true
		  })
		setEditWidgetForm({
			name: '',
			url: '',
			isActive: true,
			client: id,
			internal: true
		  })
	} 

	 
const fetch = async ()=>{
	handleClose()
	const data = await getAllWidget(id)
	if(data !== undefined){
	  setWidgetData(data)
	}
} 
   
// display select image 
// const imageHandler = (e) => {
// 	setImage(e.target.files[0]);
//   };
  
const imageHandle = (e) => {
	const reader = new FileReader();
	reader.onload = () => {
		if (reader.readyState === 2) {
		setProfile(reader.result);
		setImage(e.target.files[0]);
		}
	};
	reader.readAsDataURL(e.target.files[0]);
	};
 


useEffect(()=>{
	fetch()
	// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


	const handleSubmit = async (e)=>{
		e.preventDefault()
		if(image !== null){
		  
		  if(widgetForm.url === '') delete widgetForm.url;
		  let formData = new FormData()
		  Object.keys(widgetForm).forEach(key => {
			formData.append(key, widgetForm[key]);
		  });
		  // append form data
		console.log(image)
		  formData.append('icon', image);
		  formData.forEach((value, key) => {
			console.log(key, value);
		  });
		  await createWidget(formData) && fetch()
		}
	}

	const handleWidgetName = (e)=>{
		setWidgetForm(prv=> ({...prv, name: e.target.value}))
	}
	const handleWidgetUrl = (e)=>{
		setWidgetForm(prv=> ({...prv, url: e.target.value}))
	}
	const handleWidgetInternal= (e)=>{
		setWidgetForm(prv=> ({...prv, internal: e.target.checked}))
	}
	const handleWidgetAsActive = (e)=>{
		setWidgetForm(prv=> ({...prv, isActive: e.target.checked}))
	}

	
	
const handleUpdateWidget = async (e)=>{
	e.preventDefault()
	if(image !== null){
	  
	  const formData1 = {
	    name: editWidgetForm.name,
	      url: editWidgetForm.url ? editWidgetForm.url : '',
	      isActive: editWidgetForm.isActive,
	      internal: editWidgetForm.internal
	  }
	  if(formData1.url === '' || formData1.url === undefined ) delete formData1.url;
	  let formData = new FormData()
	  Object.keys(formData1).forEach(key => {
	    formData.append(key, formData1[key]);
	  });
	  // append form data
		console.log(image)
	  formData.append('icon', image);
	//   console.log(formData)
	  formData.forEach((value, key) => {
		console.log(key, value);
	  });
	  await upDateWidget(formData, editWidgetForm._id) && fetch()
	}else{
		
		const formData1 = {
			name: editWidgetForm.name,
			url: editWidgetForm.url ? editWidgetForm.url : '',
			isActive: editWidgetForm.isActive,
			internal: editWidgetForm.internal
		  }
		  if(formData1.url === '' || formData1.url === undefined ) delete formData1.url;
		  let formData = new FormData()
		  Object.keys(formData1).forEach(key => {
			formData.append(key, formData1[key]);
		  });
		  console.log(Boolean(formData1.isActive))
		  // append form data
		  await upDateWidget(formData, editWidgetForm._id) && fetch()
	}
  
  }
	const handleEditWidgetName = (e)=>{
		setEditWidgetForm(prv=> ({...prv, name: e.target.value}))
	}
	const handleEditWidgetUrl = (e)=>{
		setEditWidgetForm(prv=> ({...prv, url: e.target.value}))
	}
	const handleEditWidgetInternal= (e)=>{
		console.log(editWidgetForm)
		setEditWidgetForm(prv=> ({...prv, internal: e.target.checked}))
	}
	const handleEditWidgetAsActive = (e)=>{
		setEditWidgetForm(prv=> ({...prv, isActive: e.target.checked}))
		console.log(editWidgetForm)
		console.log(e.target.checked)
	}

	const handleDeleteWidget = async ()=>{
		await deleteWidget(deleteId, id) && fetch()
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
					{ loading 
                          ?
                          <tr>
							<td ></td>
							<td ></td>
							<td >
								<div className='w-full h-full flex justify-center items-center'><Spinnar /></div>
							</td>
							<td ></td>
							<td ></td>
						  </tr>
                            
                          :
						  widgetData.length === 0 
                            ?
                            (
                              
                              <div className='w-full h-full flex justify-center items-center'><p className='text-textgrey'>No Data to show</p></div>
                              
                            )
                            :
                            (
							widgetData.map((widget, index)=>{
								return (
									<tr key={widget._id}>
									<th scope="row">{index + 1}</th>
									<td>{widget?.name}</td>
									<td className="truncate-td">
										<span className="">
										{widget.url}
										</span>
									</td>
									<td>
										{
											widget.isActive ?
												<span className="tb-status text-success">Active</span>
											:
												<span className="tb-status text-danger">inActive</span>
										}
									</td>
									<td>
										<span onClick={() => {setEditWidgetForm(widget); setProfile(widget.icon.url); setShowEditModal(true)}} className='table-action'>
										<em className="icon ni ni-edit" />
										</span>
										<span onClick={()=> {setDeleteId(widget._id); setDeleteModal(true)}} className='table-action'>
										<em className="icon ni ni-trash" />
										</span>
									</td>
									</tr>
								);
							})
							)
						}
					</tbody>
				</table>
			</div>
		</div>

		
		{showModal && (
				<Modal handleClose={handleClose} showModal={showModal} >
					<form onSubmit={handleSubmit} className="modal-body modal-body-lg">
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
										placeholder="Enter URL"
										type="url"
										label="Widget URL"
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
								<div className="col-12">
									<div className="custom-control ps-0 custom-switch">
									<input
										type="file"
										accept="image/*"
										onChange={imageHandle}
										id='iconUploade'
										required
										// className="custom-control-input"
									/>
									{profile && <label
										// className="custom-control-label"
										htmlFor="iconUploade"
									>
										<img style={{'width': '50px'}} alt="icon" src={profile} />
									</label>}
									</div>
								</div>
								</div>
							</div>
							{/* .tab-pane */}
						</div>
						<div className="col-12 mt-4">
							<ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
								<li>
									<button
										className="btn btn-lg btn-primary"
									>
										{
											createWidgetLoading ? <Spinnar /> : 'Create Widget'
										}
										
									</button>
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
					</form>
				</Modal>
		)}


		{showEditModal && (
				<Modal handleClose={handleClose} showModal={showEditModal} >
					<form onSubmit={handleUpdateWidget} className="modal-body modal-body-lg">
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
								<div className="col-12">
									<div className="custom-control ps-0 custom-switch">
									<input
										type="file"
										accept="image/*"
										onChange={imageHandle}
										id='iconUpload'
										// className="custom-control-input"
									/>
									{profile && <label
										// className="custom-control-label"
										htmlFor="iconUpload"
									>
										<img style={{'width': '50px'}} alt="icon" src={profile} />
									</label>}
									</div>
								</div>
								</div>
							</div>
							{/* .tab-pane */}
						</div>
						<div className="col-12 mt-4">
							<ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
								<li>
									<button
										className="btn btn-lg btn-primary"
									>
										{upDatteWidgetLoading ? <Spinnar /> : 'Update Widget'}
										
									</button>
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
					</form>
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
										{
											deleteWidgetLoading ? <Spinnar /> : 'Delete Widget'
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
