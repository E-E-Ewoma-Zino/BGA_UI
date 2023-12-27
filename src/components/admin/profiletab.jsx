import Input from "../input/input"
import Spinnar from "../spinnar"

export default function ProfileTab({loading, setClientData, clientData}) {

	const handleFirstName = (e)=>{
		setClientData(prv => ({...prv, firstName: e.target.value}))
	}
	const handleLastName = (e)=>{
		setClientData(prv => ({...prv, lastName: e.target.value}))
	}
	const handleEmail = (e)=>{
		setClientData(prv => ({...prv, email: e.target.value}))
	}
	const handlePhone = (e)=>{
		setClientData(prv => ({...prv, phone: e.target.value}))
	}
	const handlePassword = (e)=>{
		setClientData(prv => ({...prv, password: e.target.value}))
	}
	
  return (
    <>
		
		<div className="content clearfix">
			<div
			className="nk-wizard-content body current"
			id="wizard-01-p-0"
			role="tabpanel"
			aria-labelledby="wizard-01-h-0"
			aria-hidden="false"
			>
			<div className="row gy-3">
				<div className="col-md-6">
				<Input 
					type='text'
					value={clientData.firstName}
					handleChange={handleFirstName}
					label='Enter First Name'
					id='firstName'
					required
				/>
				</div>
				<div className="col-md-6">
				<Input 
					type='text'
					value={clientData.lastName}
					handleChange={handleLastName}
					label='Enter Last Name'
					id='lastName'
					required
				/>
				</div>
				<div className="col-md-6">
				<Input 
					type='email'
					value={clientData.email}
					handleChange={handleEmail}
					label='Enter Email'
					id='email'
					required
				/>
				</div>
				<div className="col-md-6">
				<Input 
					type='tel'
					value={clientData.phone}
					handleChange={handlePhone}
					label='Enter Phone'
					id='phone'
					required
				/>
				</div>
				<div className="col-md-6">
				<Input 
					type='text'
					value={clientData.password}
					handleChange={handlePassword}
					label='Enter password'
					id='password'
					required
				/>
				</div>
				{/* .col */}
			</div>
			</div>
		</div>
		<div className="actions next-container clearfix">
			{/* <ul role="menu" aria-label="Pagination"> */}
			
			<button type="submit" className="btn btn-primary">
				{loading ? <Spinnar/> : 'Submit'}
				
			</button>
		</div>
    </>
  )
}
