import Modal from "../modal";
import { useState, useEffect } from "react";
import InputNormal from '../input/inputnormal'
import useGetAllMenu from '../../hooks/admin/menu/usegetallmenu';
import { useParams } from 'react-router-dom';
import useGetAllGroupMenu from '../../hooks/admin/groupmenu/usegetallmenu';
import useCreateMenu from '../../hooks/admin/menu/usecreatemenu';
import useUpdateMenu from '../../hooks/admin/menu/useupdatemenu';
import useDeleteMenu from '../../hooks/admin/menu/usedeletemenu';
import Spinnar from "../spinnar";

export default function MenuTab() {
	const [showModal, setShowModal] = useState(false)
	const [showEditModal, setShowEditModal] = useState(false)
	const [showDeleteModal, setDeleteModal] = useState(false)
    const {getAllMenu, loading} = useGetAllMenu()
    const {createMenu, loading: createMenuLoading} = useCreateMenu()
    const {deleteMenu, loading: deleteMenuLoading} = useDeleteMenu()
	const [deleteId, setDeleteId] = useState(null)
    const {upDateMenu, loading: updateMenuLoading} = useUpdateMenu()
    const {id} = useParams()
    const [menu, setMenu] = useState([])
    const [groupMenu, setGroupMenu] = useState([])
    const {getAllGroupMenu, loading: groupMenuLoading} = useGetAllGroupMenu()
    const [menuForm, setMenuForm] = useState({
      name: '',
      url: '',
      isActive: true,
      client: id,
      parent: ''
    }) 
    const [editMenuForm, setEditMenuForm] = useState({
      name: '',
      url: '',
      isActive: true,
      client: id,
      parent: ''
    })

	const handleClose = ()=>{
		setMenuForm({
			name: '',
			url: '',
			isActive: true,
			client: id,
			parent: ''
		  })
		setShowModal(false)
		setShowEditModal(false)
		setDeleteModal(false)
		setDeleteId(null)
	}
	
// all Get Fetches   
const fetch = async ()=>{
	handleClose()
	const data = await getAllMenu(id)
	if(data !== undefined){
	  setMenu(data)
	}
  }   
  const fetchGroup = async ()=>{
	handleClose()
	const data = await getAllGroupMenu(id)
	if(data !== undefined){
	  setGroupMenu(data)
	}
  } 

// Making initial get request 
useEffect(()=>{

	fetch()
	fetchGroup()
	// fetchWidgets()
	// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

	const handleSubmit = async ()=>{
		console.log(menuForm)
		const formData = {
		  name: menuForm.name,
		  url: menuForm.url,
		  isActive: menuForm.isActive,
		  client: id,
		  parent: menuForm.parent
		}
		if(formData.parent === '') delete formData.parent;
	  
		await createMenu(formData) && fetch()
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

	
	
	const handleUpdateMenu = async ()=>{
		console.log(editMenuForm)
		const formData = {
		  name: editMenuForm.name,
		  url: editMenuForm.url,
		  isActive: editMenuForm.isActive,
		  // client: id,
		  parent: editMenuForm.parent
		}
		if(formData.parent === '') delete formData.parent;
	  console.log(editMenuForm)
		await upDateMenu(formData, editMenuForm._id) && fetch()
	}
	const handleEditMenuName = (e)=>{
		setEditMenuForm(prv=> ({...prv, name: e.target.value}))
	}
	const handleEditMenuUrl = (e)=>{
		setEditMenuForm(prv=> ({...prv, url: e.target.value}))
	}
	const handleEditMenuParent= (e)=>{
		console.log(menuForm)
		setEditMenuForm(prv=> ({...prv, parent: e.target.value}))
	}
	const handleEditMenuAsActive = (e)=>{
		console.log(menuForm)
		setEditMenuForm(prv=> ({...prv, isActive: e.target.checked}))
	}

	const handleDeleteMenu = async ()=>{
		console.log(deleteId)
		await deleteMenu(deleteId, id) && fetch()
		// handleClose()
	}

	const handleEditButton = (menu)=>{
		
		if(menu.parent === undefined){
			setEditMenuForm({
				name: menu.name,
				url: menu.url,
				isActive: menu.isActive,
				client: menu.client._id,
				_id: menu._id,
				parent: ''
			})
		  }else{
			setEditMenuForm({
				name: menu.name,
				url: menu.url,
				isActive: menu.isActive,
				client: menu.client._id,
				_id: menu._id,
				parent: menu.parent._id
			})
		  }
		setShowEditModal(true)
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
                           menu.length === 0 
                            ?
                            (
                              
                              <div className='w-full h-full flex justify-center items-center'><p className='text-textgrey'>No Data to show</p></div>
                              
                            )
                            :
                            (
                              
							menu.map((menu, index)=>{
								return (
					<tr key={menu._id}>
					<th scope="row">{index +1 }</th>
					<td className="truncate">{menu.name}</td>
					<td className="text-truncate">
						<span className="">
						{menu?.parent?.name} 
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
						<span onClick={() => {handleEditButton(menu)}} className='table-action'>
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
												<option hidden value=''>{groupMenuLoading ? 'Loading...' : 'select an Agent'}</option>
												{groupMenu?.map((menu, index) => (
													<option key={index} value={menu._id}>
													{menu?.name}
													</option>
												))}
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
										{createMenuLoading ? <Spinnar /> : 'Create Menu'}
										
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
												{console.log(editMenuForm)}
											<select value={editMenuForm.parent} onChange={(e)=>handleEditMenuParent(e)} className="form-control" id="default-06">
												<option hidden value=''> { groupMenuLoading ? 'Loading' : 'select an Agent'}</option>
												{groupMenu?.map((menu, index) => (
													<option key={index} value={menu._id}>
													{menu?.name}
													</option>
												))}
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
										{updateMenuLoading ? <Spinnar /> : 'Update Menu'}
										
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
										{
											deleteMenuLoading ? <Spinnar /> : 'Delete Menu'
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
