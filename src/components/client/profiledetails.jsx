import Modal from "../modal";
import { useState } from "react";
import InputNormal from '../input/inputnormal'

export default function ProfileDetails() {
	const [showModal, setShowModal] = useState(false)
	const [upDateProfile, setUpDateProfile] = useState({
		firstName: 'Robert',
		lastName: 'Godwin',
		phone: '082877874',
		password: 'hohohdo23e',
		admin: "Zino",
		organisationName: 'Foundation Center',
		organisationWebsite: 'http://foundation.url',
	})


	const handleSubmit = ()=>{
		console.log(upDateProfile)
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
	const handleUpdatePassword = (e)=>{
		setUpDateProfile(prv=> ({...prv, password: e.target.value}))
	}
	const handleUpdateOrganizationName = (e)=>{
		setUpDateProfile(prv=> ({...prv, organisationName: e.target.value}))
	}
	const handleUpdateOrganizationWebsite = (e)=>{
		setUpDateProfile(prv=> ({...prv, organisationWebsite: e.target.value}))
	}

	
	const handleClose = ()=>{
		setShowModal(false)
	}
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
                <span className="data-value">Abu Bin Ishtiyak</span>
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
                <span className="data-value">info@softnio.com</span>
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
                <span className="data-value">0813948393</span>
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
                <span className="data-label">Password</span>
                <span className="data-value text-soft">Not add yet</span>
              </div>
              <div className="data-col data-col-end">
                <span className="data-more">
                  <em className="icon ni ni-forward-ios" />
                </span>
              </div>
            </div>
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
                <span className="data-value text-soft">Not add yet</span>
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
                <span className="data-value text-soft">Not add yet</span>
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
                <span className="data-value text-soft">Not add yet</span>
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
                  Address
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
                  <div className="col-md-6">
                    <InputNormal
                      value={upDateProfile.password}
					  handleChange={handleUpdatePassword}
                      placeholder="Enter Password"
                      type="text"
                      label="Password"
                      id="firstNAme"
                      required
                    />
                  </div>
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
                          <select className="form-control" id="default-06">
                            <option hidden selected> select an Agent</option>
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
						Update Profile
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
