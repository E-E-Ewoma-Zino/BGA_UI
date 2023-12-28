import Modal from "../modal";
import { useState, useEffect } from "react";
import InputNormal from '../input/inputnormal'
import { useParams } from "react-router-dom";
import useGetAllGroupMenu from '../../hooks/admin/groupmenu/usegetallmenu';
import useGetAllWidget from '../../hooks/admin/widget/usegetallwidget';
import useCreateGroupMenu from '../../hooks/admin/groupmenu/usecreategroupmenu';
import useDeleteGroupMenu from '../../hooks/admin/groupmenu/usedeletemenu';
import useUpdateGroupMenu from '../../hooks/admin/groupmenu/useupdatemenu';
import Spinnar from "../spinnar";

export default function GroupedMenuTab() {
	const [showModal, setShowModal] = useState(false)
	const [showEditModal, setShowEditModal] = useState(false)
	const [showDeleteModal, setDeleteModal] = useState(false)
    const {getAllGroupMenu, loading: groupMenuLoading} = useGetAllGroupMenu()
    const {upDateGroupMenu, loading: updateGroupMenuLoading} = useUpdateGroupMenu()
    const {getAllWidget, loading: widgetLoading} = useGetAllWidget()
    const {createGroupMenu, loading: createGroupMenuLoading} = useCreateGroupMenu()
    const {deleteGroupMenu, loading: deleteGroupMenuLoading} = useDeleteGroupMenu()
    const {id} = useParams()
    const [groupMenu, setGroupMenu] = useState([])
    const [widgets, setWidgets] = useState([])
	const [deleteId, setDeleteId] = useState(null)
    const [groupedMenuForm, setGroupedMenuForm] = useState({
      name: '',
      url: '',
      isActive: true,
      client: id,
      widget: ''
    }) 
    const [editGroupedMenuForm, setEditGroupedMenuForm] = useState({
      name: '',
      url: '',
      isActive: true,
      client: id,
      widget: ''
    })

	const handleClose = ()=>{
		setShowModal(false)
		setShowEditModal(false)
		setDeleteModal(false)
		setDeleteId(null)
	}
	const fetchGroup = async ()=>{
		handleClose()
	  const data = await getAllGroupMenu(id)
	  if(data !== undefined){
		setGroupMenu(data)
	  }
	}  
	const fetchWidgets = async ()=>{
	  handleClose()
	  const data = await getAllWidget(id)
	  if(data !== undefined){
		setWidgets(data)
	  }
	} 

	// Making initial get request 
useEffect(()=>{

	// fetch()
	fetchGroup()
	fetchWidgets()
	// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


	const handleSubmit = async (e)=>{
		e.preventDefault()
		console.log(groupedMenuForm)
		if(groupedMenuForm.url === '') delete groupedMenuForm.url;
		await createGroupMenu(groupedMenuForm) && fetchGroup()
	}

	const handleGroupedMenuName = (e)=>{
		setGroupedMenuForm(prv=> ({...prv, name: e.target.value}))
	}
	const handleGroupedMenuUrl = (e)=>{
		setGroupedMenuForm(prv=> ({...prv, url: e.target.value}))
	}
	const handleGroupedMenuWidget= (e)=>{
		console.log(groupedMenuForm)
		setGroupedMenuForm(prv=> ({...prv, widget: e.target.value}))
	}
	const handleGroupedMenuAsActive = (e)=>{
		console.log(groupedMenuForm)
		setGroupedMenuForm(prv=> ({...prv, isActive: e.target.checked}))
	}

	
	
	const handleUpdateGroupedMenu = async (e)=>{
		e.preventDefault()
		console.log(editGroupedMenuForm)
		const formData = {
		  name: editGroupedMenuForm.name,
		  url: editGroupedMenuForm.url,
		  isActive: editGroupedMenuForm.isActive,
		  // client: id,
		  widget: editGroupedMenuForm.widget
		}
		if(formData.widget === '') delete formData.widget;
	  
		await upDateGroupMenu(formData, editGroupedMenuForm._id) && fetchGroup()
	}
	const handleEditGroupedMenuName = (e)=>{
		setEditGroupedMenuForm(prv=> ({...prv, name: e.target.value}))
	}
	const handleEditGroupedMenuUrl = (e)=>{
		setEditGroupedMenuForm(prv=> ({...prv, url: e.target.value}))
	}
	const handleEditGroupedMenuWidget= (e)=>{
		console.log(groupedMenuForm)
		setEditGroupedMenuForm(prv=> ({...prv, widget: e.target.value}))
	}
	const handleEditGroupedMenuAsActive = (e)=>{
		console.log(groupedMenuForm)
		setEditGroupedMenuForm(prv=> ({...prv, isActive: e.target.checked}))
	}

	const handleDeleteGroupedMenu = async ()=>{
		console.log(deleteId)
		await deleteGroupMenu(deleteId, id) && fetchGroup()
	}
console.log(groupMenu)
  return (
    <>
		<div className='py-4'>
            <div className="nk-block-between px-2 px-md-5 pb-4">
              <div className="nk-block-head-content">
                <h6 className="nk-block-title ">
                  Grouped Menu
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
						<th scope="col">Group Menu Name</th>
						<th scope="col">Widget</th>
						<th scope="col">Status</th>
						<th scope="col">Actions</th>
					</tr>
					</thead>
					<tbody>
					{ groupMenuLoading 
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
						  groupMenu.length === 0 
                            ?
                            (
                              
                              <div className='w-full h-full flex justify-center items-center'><p className='text-textgrey'>No Data to show</p></div>
                              
                            )
                            :
                            (
							groupMenu?.map((menu, index)=>{
								return (
									<tr key={menu._id}>
									<th scope="row">{index +1}</th>
									<td>{menu.name}</td>
									<td className="truncate-td">
										<span className="">
										{menu?.widget?.name} 
										</span>
									</td>
									<td>
									{
											menu.isActive ?
												<span className="tb-status text-success">Active</span>
											:
												<span className="tb-status text-danger">inActive</span>
										}
									</td>
									<td>
										<span onClick={() => {setEditGroupedMenuForm(menu); setShowEditModal(true)}} className='table-action'>
										<em className="icon ni ni-edit" />
										</span>
										<span onClick={()=> {setDeleteId(menu._id); setDeleteModal(true)}} className='table-action'>
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
						<h5 className="title">Create Group Menu</h5>
						<div className="tab-content">
							<div className="tab-pane active" id="personal" role="tabpanel">
								<div className="row gy-4">
								<div className="col-md-12">
									<InputNormal
									value={groupedMenuForm.name}
									handleChange={handleGroupedMenuName}
									placeholder="Enter menu Name"
									type="text"
									label="menu Name"
									id="menuName"
									required
									/>
								</div>
								<div className="col-md-12">
									<InputNormal
									value={groupedMenuForm.url}
									handleChange={handleGroupedMenuUrl}
									placeholder="Enter URL"
									type="url"
									label="Menu URL"
									id="url"
									required
									/>
								</div>
								{widgets.length > 0 && <div className="col-12">
									<div className="form-group">
										<label className="form-label" htmlFor="default-06">
											Widget
										</label>
										<div className="form-control-wrap ">
											<div className="form-control-select">
											<select value={groupedMenuForm.widget} onChange={(e)=>handleGroupedMenuWidget(e)} className="form-control" id="default-06">
												<option hidden value=''> {widgetLoading ? 'Loading...' :'select a widget'}</option>
												
												{widgets?.map((widget, index) => (
													<option key={index} value={widget._id}>
													{widget?.name}
													</option>
												))}
											</select>
											</div>
										</div>
									</div>
								</div>}
								
								
								<div className="col-12">
									<div className="custom-control custom-switch">
									<input
										type="checkbox"
										checked={groupedMenuForm.isActive}
										onChange={(e) => handleGroupedMenuAsActive(e)}
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
									<button
										// onClick={()=> handleSubmit()}
										className="btn btn-lg btn-primary"
									>
										{ createGroupMenuLoading ? <Spinnar /> : 'Create Menu'}
										
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
					<form onSubmit={handleUpdateGroupedMenu} className="modal-body modal-body-lg">
						<h5 className="title">Edit Group Menu</h5>
						<div className="tab-content">
							<div className="tab-pane active" id="personal" role="tabpanel">
								<div className="row gy-4">
								<div className="col-md-12">
									<InputNormal
									value={editGroupedMenuForm.name}
									handleChange={handleEditGroupedMenuName}
									placeholder="Enter Menu Name"
									type="text"
									label="Menu Name"
									id="menuName"
									required
									/>
								</div>
								<div className="col-md-12">
									<InputNormal
									value={editGroupedMenuForm.url}
									handleChange={handleEditGroupedMenuUrl}
									placeholder="Enter URL"
									type="url"
									label="Menu URL"
									id="menu-url"
									required
									/>
								</div>
								{widgets.length > 0 && <div className="col-12">
									<div className="form-group">
										<label className="form-label" htmlFor="default-06">
											Widget
										</label>
										<div className="form-control-wrap ">
											<div className="form-control-select">
											<select value={editGroupedMenuForm.widget} onChange={(e)=>handleEditGroupedMenuWidget(e)} className="form-control" id="default-06">
												<option hidden value=''>  {widgetLoading ? 'Loading...' :'select a widget'}</option>
												
												{widgets?.map((widget, index) => (
													<option key={index} value={widget._id}>
													{widget?.name}
													</option>
												))}
											</select>
											</div>
										</div>
									</div>
								</div>}
								
								<div className="col-12">
									<div className="custom-control custom-switch">
									<input
										type="checkbox"
										checked={editGroupedMenuForm.isActive}
										onChange={(e) => handleEditGroupedMenuAsActive(e)}
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
									<button
										// onClick={()=> handleUpdateGroupedMenu()}
										className="btn btn-lg btn-primary"
									>
										{updateGroupMenuLoading? <Spinnar /> : 'Update Menu'}
										
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
								<p>Are you sure you want to delete selected Grouped Menu</p>
							</div>
							{/* .tab-pane */}
						</div>
						<div className="col-12 mt-4">
							<ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
								<li>
									<div
										onClick={()=> handleDeleteGroupedMenu()}
										className="btn btn-lg btn-primary"
									>
										{deleteGroupMenuLoading ? <Spinnar /> : 'Delete Menu'}
										
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
