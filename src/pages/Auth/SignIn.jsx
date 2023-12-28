// Sign in page for App

import { useState } from "react";
import useLoginUser from '../../hooks/admin/auth/uselogin';
import { useNavigate } from "react-router-dom";
import _route from "../../constants/routes";
import Spinnar from "../../components/spinnar";
import logo from '../../assets/images/full-logo.png'
import logoDark from '../../assets/images/logo-dark.png'
import bga1 from '../../assets/images/bga1.png'

export default function SignIn() {
    const {loginUser, loading} = useLoginUser()
	const navigate = useNavigate()
	const [formData, setFormData] = useState({
		username: '',
		password: ''
	})

	const handleSubmit = async (e)=>{
		e.preventDefault()
		await loginUser(formData) && navigate(_route._admin_dashboard)
	}

	return (
		
		<div className="nk-app-root">
			{/* main @s */}
			<div className="nk-main ">
				{/* wrap @s */}
				<div className="nk-wrap nk-wrap-nosidebar">
					{/* content @s */}
					<div className="nk-content ">
						<div className="nk-split nk-split-page nk-split-md">
							<div className="nk-split-content nk-block-area nk-block-area-column nk-auth-container bg-white">
								<div className="nk-block nk-block-middle nk-auth-body">
									<div className="brand-logo pb-5">
										<a href={_route._admin_dashboard} className="logo-link">
											<img style={{'width': '8rem'}} className="logo-light logo-img logo-img-lg" src={logoDark} alt="logo" />
											<img className="logo-dark logo-img logo-img-lg" src={logo}  alt="logo-dark" />
										</a>
									</div>
									<div className="nk-block-head">
										<div className="nk-block-head-content">
											<h5 className="nk-block-title">Sign-In</h5>
											<div className="nk-block-des">
												<p>Access the Gorilla Metrics panel using your email and passcode.</p>
											</div>
										</div>
									</div>
									{/* .nk-block-head */}
									<form action="#X" onSubmit={handleSubmit}>
										{/* .form-group */}
										<div className="form-group">
											<div>
												<div className="form-label-group">
													<label className="form-label" htmlFor="default-01">Email</label>
													{/* <a className="link link-primary d-none link-sm" tabIndex={-1} href="#x">Need Help?</a> */}
												</div>
												<div className="form-control-wrap">
													<input type="email" className="form-control form-control-lg" id="default-01" name="username" value={formData.username} onChange={(e) => setFormData(prv => ({...prv, username: e.target.value}))} placeholder="Enter your email address or username" required={true} />
												</div>
											</div>
										</div>

										{/* .form-group */}
										<div className="form-group">
											<div className="form-label-group">
												<label className="form-label" htmlFor="password">Passcode</label>
												{/* <a className="link link-primary link-sm" tabIndex={-1} href="html/pages/auths/auth-reset-v3.html">Forgot Code?</a> */}
											</div>
											<div className="form-control-wrap">
												<a tabIndex={-1} href="#x" className="form-icon form-icon-right passcode-switch lg" data-target="password">
													<em className="passcode-icon icon-show icon ni ni-eye" />
													<em className="passcode-icon icon-hide icon ni ni-eye-off" />
												</a>
												<input type="password" className="form-control form-control-lg" id="password" name="password" value={formData.password} onChange={(e) => setFormData(prv => ({...prv, password: e.target.value}))}  placeholder="Enter your passcode" required={true} />
											</div>
										</div>
										{/* .form-group */}
										<div className="form-group">
											<button className="btn btn-lg btn-primary btn-block" type="submit">
												{
													loading ? <Spinnar /> : "Sign in"
												}
											</button>
										</div>
									</form>
									{/* form */}
								</div>
								{/* .nk-block */}
								<div className="nk-block nk-auth-footer d-none">
									<div className="nk-block-between d-none d-md-flex">
										<ul className="nav nav-sm">
											<li className="nav-item">
												<a className="link link-primary fw-normal py-2 px-3 fs-13px" href="#x">Terms &amp; Condition</a>
											</li>
											<li className="nav-item">
												<a className="link link-primary fw-normal py-2 px-3 fs-13px" href="#x">Privacy Policy</a>
											</li>
											<li className="nav-item">
												<a className="link link-primary fw-normal py-2 px-3 fs-13px" href="#x">Help</a>
											</li>
											<li className="nav-item dropup">
												<a href="#x" className="dropdown-toggle dropdown-indicator has-indicator link link-primary fw-normal py-2 px-3 fs-13px" data-bs-toggle="dropdown" data-offset="0,10"><small>English</small></a>
												<div className="dropdown-menu dropdown-menu-sm dropdown-menu-end">
													<ul className="language-list">
														<li>
															<a href="#x" className="language-item">
																<img src="/assets/images/flags/english.png" alt='' className="language-flag" />
																<span className="language-name">English</span>
															</a>
														</li>
														<li>
															<a href="#x" className="language-item">
																<img src="/assets/images/flags/spanish.png" alt='' className="language-flag" />
																<span className="language-name">Español</span>
															</a>
														</li>
														<li>
															<a href="#x" className="language-item">
																<img src="/assets/images/flags/french.png" alt='' className="language-flag" />
																<span className="language-name">Français</span>
															</a>
														</li>
														<li>
															<a href="#x" className="language-item">
																<img src="/assets/images/flags/turkey.png" alt='' className="language-flag" />
																<span className="language-name">Türkçe</span>
															</a>
														</li>
													</ul>
												</div>
											</li>
										</ul>
										{/* .nav */}
									</div>
									<div className="mt-3">
										<p>© 2023 Gorilla Metrics. All Rights Reserved.</p>
									</div>
								</div>
								{/* .nk-block */}
							</div>
							{/* .nk-split-content */}
							<div className="nk-split-content nk-split-stretch bg-dark d-none d-md-flex justify-center align-center flex-column">
								<img src={bga1} alt="bga" />
								<h2 className="ff-base fw-bold text-center text-light mt-5">
									WE PROVIDE <em className="text-primary">MARKETING</em> & DEVELOPMENT SERVICES
								</h2>
							</div>
							{/* .nk-split-content */}
						</div>
						{/* .nk-split */}
					</div>
					{/* wrap @e */}
				</div>
				{/* content @e */}
			</div>
			{/* main @e */}
		</div>
	);
}