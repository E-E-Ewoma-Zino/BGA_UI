import Input from "../input/input"

export default function OrganizationTab({setFormIndex, loading, admin, setClientData, clientData}) {
	
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
				{admin.length > 0 &&
					<div className="col-md-6">
						<div className="form-group">
							<label className="form-label" htmlFor="default-06">
								Assign Admin
							</label>
							<div className="form-control-wrap ">
								<div className="form-control-select">
								<select value={clientData.admin} onChange={(e)=>handleAdmin(e)} className="form-control" id="default-06">
									<option hidden value=''> select an Agent</option>
									{
										admin.map((admin, index)=>{
											return <option key={index} value={admin._id}>{`${admin.fullNames.firstname} ${admin.fullNames.lastname}`}</option>
										})
									}
								</select>
								</div>
							</div>
						</div>
					</div>
				}
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
				
				{loading ? <>
							<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
							<span class="visually-hidden">Loading...</span>
						</> : 'Submit'
					}
			</button>
		</div>
    </>
  )
}
