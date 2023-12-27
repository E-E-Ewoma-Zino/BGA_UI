import Modal from "../modal";
import { useState } from "react";
import InputNormal from '../input/inputnormal'
import { useParams } from "react-router-dom";
import useUpDateAdmin from '../../hooks/admin/admin/useupdateadmin';
import Spinnar from "../spinnar";

export default function ProfileDetails({data, fetch, upDateProfile, setUpDateProfile}) {
	const [showModal, setShowModal] = useState(false)
    const {id} = useParams()
    const {upDateAdmin, loading} = useUpDateAdmin()


	const handleSubmit = async ()=>{
		console.log(upDateProfile)
		const formData = {
		  fullNames: {
			firstname: upDateProfile.firstName,
			lastname: upDateProfile.lastName,
		  },
		  phone: upDateProfile.phone,
		}
		  
		await upDateAdmin(formData, id) && afterUpdate()
	}

	const afterUpdate = ()=>{
		setShowModal(false)
		fetch()
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
            <div
              className="data-item"
              onClick={() => setShowModal((prv) => !prv)}
            >
              <div className="data-col">
                <span className="data-label">Role</span>
                <span className="data-value text-soft">{data?.role}</span>
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
                 
                </div>
              </div>
            </div>
			<div className="col-12 mt-4">
				<ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
					<li>
					<div
						onClick={()=> handleSubmit()}
						className="btn btn-lg btn-primary"
					>
						{loading ? <Spinnar /> : 'Update Profile'}
						
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
