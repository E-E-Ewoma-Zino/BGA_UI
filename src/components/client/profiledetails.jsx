import Modal from "../modal";
import { useState, useEffect } from "react";
import InputNormal from '../input/inputnormal'
import useGetAllAdmin from '../../hooks/admin/admin/usegetalladmin';
import useUpdateAdminClient from "../../hooks/admin/client/useupdateadminclient";
import { useParams } from "react-router-dom";
import Spinnar from "../spinnar";


export default function ProfileDetails({ data, upDateProfile, fetch, setUpDateProfile}) {
	const [showModal, setShowModal] = useState(false)
	const {getAllAdmin, loading} = useGetAllAdmin()
	const [admin, setAdmin] = useState([])
    const {id} = useParams()
	const {upDateAdminClient, loading: loadingUpdate} = useUpdateAdminClient()
	// const [upDateProfile, setUpDateProfile] = useState({
	// 	firstName: 'Robert',
	// 	lastName: 'Godwin',
	// 	phone: '082877874',
	// 	password: 'hohohdo23e',
	// 	admin: "Zino",
	// 	organisationName: 'Foundation Center',
	// 	organisationWebsite: 'http://foundation.url',
	// })


	const fetchAdmin = async ()=>{
		const data = await getAllAdmin()
		if(data !== undefined){
		  setAdmin(data)
		}
	}

	
	useEffect(()=>{
		fetchAdmin()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	  }, [])

	const handleSubmit = async ()=>{
		const formData = {
		  fullNames: {
			firstname: upDateProfile.firstName,
			lastname: upDateProfile.lastName,
		  },
		  organization:{
			name: upDateProfile.organisationName,
			website: upDateProfile.organisationWebsite
		  },
		  phone: upDateProfile.phone,
		  admin: upDateProfile.admin
		}
		  console.log(formData)
		await upDateAdminClient(formData, id) && handleClose()
	}

	const handleUpdateFirstName = (e)=>{
		setUpDateProfile(prv=> ({...prv, firstName: e.target.value}))
	}
	const handleUpdateLastName = (e)=>{
		setUpDateProfile(prv=> ({...prv, lastName: e.target.value}))
	}
	const handleUpdatePhone = (e)=>{
		setUpDateProfile(prv=> ({...prv, phone: e.target.value}))
	}
	const handleUpdateadmin = (e)=>{
		setUpDateProfile(prv=> ({...prv, admin: e.target.value}))
	}
	const handleUpdateOrganizationName = (e)=>{
		setUpDateProfile(prv=> ({...prv, organisationName: e.target.value}))
	}
	const handleUpdateOrganizationWebsite = (e)=>{
		setUpDateProfile(prv=> ({...prv, organisationWebsite: e.target.value}))
	}

	
	const handleClose = ()=>{
		fetch()
		setShowModal(false)
	}
	console.log(upDateProfile)
  return (
    <>
      <div className="card-inner card-inner-lg">
        <div className="nk-block-head nk-block-head-lg">
          <div className="nk-block-between">
            <div className="nk-block-head-content">
              <h4 className="nk-block-title">Personal Information</h4>
              <div className="nk-block-des">
                <p>
                  Basic info, like your name and address, that you use on Nio
                  Platform.
                </p>
              </div>
            </div>
            <div className="nk-block-head-content align-self-start d-lg-none">
              <a
                href="#x"
                className="toggle btn btn-icon btn-trigger mt-n1"
                data-target="userAside"
              >
                <em className="icon ni ni-menu-alt-r" />
              </a>
            </div>
          </div>
        </div>
        {/* .nk-block-head */}
        <div className="nk-block">
          <div className="nk-data data-list">
            <div className="data-head">
              <h6 className="overline-title">Basics</h6>
            </div>
            <div
              className="data-item"
              onClick={() => setShowModal((prv) => !prv)}
            >
              <div className="data-col">
                <span className="data-label">Full Name</span>
                <span className="data-value">{`${data?.fullNames?.firstname} ${data?.fullNames?.lastname}`}</span>
              </div>
              <div className="data-col data-col-end">
                <span className="data-more">
                  <em className="icon ni ni-forward-ios" />
                </span>
              </div>
            </div>
            {/* data-item */}
            <div className="data-item">
              <div className="data-col">
                <span className="data-label">Email</span>
                <span className="data-value">{data?.username}</span>
              </div>
              <div className="data-col data-col-end">
                <span className="data-more disable">
                  <em className="icon ni ni-lock-alt" />
                </span>
              </div>
            </div>
            {/* data-item */}
            <div
              className="data-item"
              onClick={() => setShowModal((prv) => !prv)}
            >
              <div className="data-col">
                <span className="data-label">Phone Number</span>
                <span className="data-value">{data?.phone}</span>
              </div>
              <div className="data-col data-col-end">
                <span className="data-more">
                  <em className="icon ni ni-forward-ios" />
                </span>
              </div>
            </div>
            {/* data-item */}
            {/* <div
              className="data-item"
              onClick={() => setShowModal((prv) => !prv)}
            >
              <div className="data-col">
                <span className="data-label">Password</span>
                <span className="data-value text-soft">Not add yet</span>
              </div>
              <div className="data-col data-col-end">
                <span className="data-more">
                  <em className="icon ni ni-forward-ios" />
                </span>
              </div>
            </div> */}
            {/* data-item */}
          </div>
          {/* data-list */}
          <div className="nk-data data-list">
            <div className="data-head">
              <h6 className="overline-title">Organization</h6>
            </div>
            <div
              className="data-item"
              onClick={() => setShowModal((prv) => !prv)}
            >
              <div className="data-col">
                <span className="data-label">Organization Name</span>
                <span className="data-value text-soft">{data?.organization?.name}</span>
              </div>
              <div className="data-col data-col-end">
                <span className="data-more">
                  <em className="icon ni ni-forward-ios" />
                </span>
              </div>
            </div>
            {/* data-item */}
            <div
              className="data-item"
              onClick={() => setShowModal((prv) => !prv)}
            >
              <div className="data-col">
                <span className="data-label">Organization Website</span>
                <span className="data-value text-soft">{data?.organization?.website}</span>
              </div>
              <div className="data-col data-col-end">
                <span className="data-more">
                  <em className="icon ni ni-forward-ios" />
                </span>
              </div>
            </div>
            {/* data-item */}
            <div
              className="data-item"
              onClick={() => setShowModal((prv) => !prv)}
            >
              <div className="data-col">
                <span className="data-label">Administrator Assigned</span>
                <span className="data-value text-soft">{`${data?.admin?.fullNames?.firstname} ${data?.admin?.fullNames?.lastname}`}</span>
              </div>
              <div className="data-col data-col-end">
                <span className="data-more">
                  <em className="icon ni ni-forward-ios" />
                </span>
              </div>
            </div>
            {/* data-item */}
            {/* data-item */}
          </div>
          {/* data-list */}
        </div>
        {/* .nk-block */}
      </div>

      {showModal && (
        <Modal handleClose={handleClose} showModal={showModal} setShowModal={setShowModal}>
          <div className="modal-body modal-body-lg">
            <h5 className="title">Update Profile</h5>
            <ul className="nk-nav nav nav-tabs" role="tablist">
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link active"
                  data-bs-toggle="tab"
                  href="#personal"
                  aria-selected="true"
                  role="tab"
                >
                  Personal
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#address"
                  aria-selected="false"
                  tabIndex={-1}
                  role="tab"
                >
                  Organization
                </a>
              </li>
            </ul>
            {/* .nav-tabs */}
            <div className="tab-content">
              <div className="tab-pane active" id="personal" role="tabpanel">
                <div className="row gy-4">
                  <div className="col-md-6">
                    <InputNormal
                      value={upDateProfile.firstName}
					  handleChange={handleUpdateFirstName}
                      placeholder="Enter First Name"
                      type="text"
                      label="First Name"
                      id="firstName"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <InputNormal
                      value={upDateProfile.lastName}
					  handleChange={handleUpdateLastName}
                      placeholder="Enter Last Name"
                      type="text"
                      label="Last Name"
                      id="lastName"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <InputNormal
                      value={upDateProfile.phone}
					  handleChange={handleUpdatePhone}
                      placeholder="Enter Phone"
                      type="tel"
                      label="Phone"
                      id="phone"
                      required
                    />
                  </div>
                  {/* <div className="col-md-6">
                    <InputNormal
                      value={upDateProfile.password}
					  handleChange={handleUpdatePassword}
                      placeholder="Enter Password"
                      type="text"
                      label="Password"
                      id="firstNAme"
                      required
                    />
                  </div> */}
                  {/* <div className="col-12">
                    <div className="custom-control custom-switch">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="latest-sale"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="latest-sale"
                      >
                        Use full name to display{" "}
                      </label>
                    </div>
                  </div> */}
                  {/* <div className="col-12">
                    <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                      <li>
                        <a
                          href="#x"
                          data-bs-dismiss="modal"
                          className="btn btn-lg btn-primary"
                        >
                          Update Profile
                        </a>
                      </li>
                      <li>
                        <a
                          href="#x"
                          data-bs-dismiss="modal"
                          className="link link-light"
                        >
                          Cancel
                        </a>
                      </li>
                    </ul>
                  </div> */}
                </div>
              </div>
              {/* .tab-pane */}
              <div className="tab-pane" id="address" role="tabpanel">
                <div className="row gy-4">
                  <div className="col-md-6">
                    <InputNormal
                      value={upDateProfile.organisationName}
					  handleChange={handleUpdateOrganizationName}
                      placeholder="Enter Organization Name"
                      type="text"
                      label="Organization Name"
                      id="organizationName"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <InputNormal
                      value={upDateProfile.organisationWebsite}
					  handleChange={handleUpdateOrganizationWebsite}
                      placeholder="Enter Organization Website"
                      type="text"
                      label="Organization Website"
                      id="organizationWebsite"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label" htmlFor="default-06">
                        Assign Admin
                      </label>
                      <div className="form-control-wrap ">
                        <div className="form-control-select">
                          <select value={upDateProfile.admin} onChange={(e)=> handleUpdateadmin(e)} className="form-control" id="default-06">
                            <option hidden value=''> {loading ? 'Loading...' : 'select an Agent'}</option>
							{
								admin?.map((admin, index)=>{
									return (
										<option key={index} value={admin._id}>
										{`${admin.fullNames.firstname} ${admin.fullNames.lastname}`}
										</option>
									)
								})
							}
                          </select>
                        </div>
                      </div>
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
						{
							loadingUpdate ? <Spinnar /> : 'Update Profile'
						}
						
					</div>
					</li>
					<li>
					<div
						onClick={()=> setShowModal(prv=> !prv)}
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
