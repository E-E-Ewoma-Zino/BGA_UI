// Dashboard for Admin
import { useState } from "react";
import ProfileTab from "../components/admin/profiletab";
import useCreateAdmin from '../hooks/admin/admin/usecreateadmin';
import {  useNavigate } from 'react-router-dom';
import _route from "../constants/routes";

export default function CreateAdmin() {
	const navigate = useNavigate()
	const [formIndex, setFormIndex] = useState(0)
	const {createAdmin, loading} = useCreateAdmin()
	const [clientData, setClientData] = useState({
	  firstName: '',
	  lastName: '',
	  email: '',
	  phone: '',
	  password: '',
	})

	const handleSubmit = async (e)=>{
		e.preventDefault()
		const formData = {
		  fullNames: {
			firstname: clientData.firstName,
			lastname: clientData.lastName,
		  },
		  role: 'ADMINISTRATOR',
		  phone: clientData.phone,
		  password: clientData.password,
		  username: clientData.email,
		  
		}
		console.log(formData)
		await createAdmin(formData) && navigate(_route._admin_administrator)
	}

	return (
    <div className="nk-content-body">
      <div className="nk-block-head nk-block-head-sm">
        {/* .nk-block-between */}
        <div className="nk-block nk-block-lg">
          <div className="nk-block-head">
            <div className="nk-block-head-content">
              <h4 className="title nk-block-title">Create Administrator</h4>
              <div className="nk-block-des">
                <p>A basic demostration of wizard form.</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-inner">
              <form onSubmit={handleSubmit} className="nk-wizard nk-wizard-simple is-alter wizard clearfix">
                <div className="steps clearfix">
                  <ul role="tablist">
                    <li
                      className={`first clipboard-init ${
                        formIndex === 0 && "current"
                      }`}
                      onClick={() => setFormIndex(0)}
                    >
                      <div>
                        <span className="current-info audible"></span>
                        {/* <span className="number">01</span> */}
                        <h5>Profile Info</h5>
                      </div>
                    </li>
                  </ul>
                </div>
				{
					formIndex === 0 && <ProfileTab loading={loading} setFormIndex={setFormIndex} setClientData={setClientData} clientData={clientData} />
				}
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* .nk-block-head */}

      {/* .nk-block */}
    </div>
  );
}