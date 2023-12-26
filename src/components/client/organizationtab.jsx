import Input from "../input/input"

export default function OrganizationTab({setFormIndex, setClientData, clientData}) {
	
	const handleOrganizationName = (e)=>{
		setClientData(prv => ({...prv, organisationName: e.target.value}))
	}
	const handleOrganizationWebSite = (e)=>{
		setClientData(prv => ({...prv, organisationWebsite: e.target.value}))
	}
	const handleAdmin = (e)=>{
		setClientData(prv => ({...prv, admin: e.target.value}))
	}
  return (
    <>
		
		<div className="content clearfix">
			<div
			className="nk-wizard-content body current"
			id="wizard-01-p-0"
			>
			<div className="row gy-3">
				<div className="col-md-6">
				<Input 
					type='text'
					value={clientData.organisationName}
					handleChange={handleOrganizationName}
					label='Organization Name'
					id='organizationName'
					required
				/>
				</div>
				<div className="col-md-6">
				<Input 
					type='url'
					value={clientData.organisationWebsite}
					handleChange={handleOrganizationWebSite}
					label='Organization Website'
					id='organizationwebsite'
					required
				/>
				</div>
				<div className="col-md-6">
				<Input 
					type='text'
					value={clientData.admin}
					handleChange={handleAdmin}
					label='Choose Admin'
					id='admin'
					required
				/>
				</div>
				{/* .col */}
			</div>
			</div>
		</div>
		<div className="actions next-container clearfix">
			{/* <ul role="menu" aria-label="Pagination"> */}
			<div onClick={()=> setFormIndex(0)} disabled className="btn btn-primary">
				Prev
			</div>
			<button type="submit" className="btn btn-primary">
				Submit
			</button>
		</div>
    </>
  )
}
