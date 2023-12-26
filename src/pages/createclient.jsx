// Dashboard for Admin
import { Link } from "react-router-dom";
import { useState } from "react";
import ProfileTab from "../components/client/profiletab";
import OrganizationTab from "../components/client/organizationtab";
// import _route from "../constant/routes";

export default function CreateClient() {
	const [formIndex, setFormIndex] = useState(0)
	const [clientData, setClientData] = useState({
	  firstName: '',
	  lastName: '',
	  email: '',
	  phone: '',
	  password: '',
	  admin: '',
	  organisationName: '',
	  organisationWebsite: '',
	})

	const handleSubmit = (e)=>{
		e.preventDefault()
		if(formIndex === 0){
			console.log(clientData)
			setFormIndex(1)
		}else{
			console.log(clientData)
		}
	}

	return (
    <div className="nk-content-body">
      <div className="nk-block-head nk-block-head-sm">
        <div className="nk-block nk-block-lg">
          <div className="nk-block-head">
            <div className="nk-block-head-content">
              <h4 className="title nk-block-title">Create Client</h4>
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
                    <li
                      className={`clipboard-init ${
                        formIndex === 1 && "current"
                      }`}
                      onClick={() => setFormIndex(1)}
                    >
                      <div>
                        {/* <span className="number">02</span> */}
                        <h5>Organisation Info</h5>
                      </div>
                    </li>
                  </ul>
                </div>
				{
					formIndex === 0 && <ProfileTab setFormIndex={setFormIndex} setClientData={setClientData} clientData={clientData} />
				}
				{
					formIndex === 1 && <OrganizationTab  setClientData={setClientData} clientData={clientData} setFormIndex={setFormIndex} />
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