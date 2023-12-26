// Register in page for App

export default function Register() {
	return (
		<div className="nk-app-root">
			{/* main @s */}
			<div className="nk-main ">
				{/* wrap @s */}
				<div className="nk-wrap nk-wrap-nosidebar">
					{/* content @s */}
					<div className="nk-content ">
						<div className="nk-split nk-split-page nk-split-lg">
							<div className="nk-split-content nk-block-area nk-block-area-column nk-auth-container bg-white w-lg-45">
								<div className="absolute-top-right d-lg-none p-3 p-sm-5">
									<a href="#x" className="toggle btn btn-white btn-icon btn-light" data-target="athPromo"><em className="icon ni ni-info" /></a>
								</div>
								<div className="nk-block nk-block-middle nk-auth-body">
									<div className="brand-logo pb-5">
										<a href="html/index.html" className="logo-link">
											<img className="logo-light logo-img logo-img-lg" src="/assets/images/logo.png" srcSet="/assets/images/logo2x.png 2x" alt="logo" />
											<img className="logo-dark logo-img logo-img-lg" src="/assets/images/logo-dark.png" srcSet="/assets/images/logo-dark2x.png 2x" alt="logo-dark" />
										</a>
									</div>
									<div className="nk-block-head">
										<div className="nk-block-head-content">
											<h5 className="nk-block-title">Register</h5>
											<div className="nk-block-des">
												<p>Create New Dashlite Account</p>
											</div>
										</div>
									</div>
									{/* .nk-block-head */}
									<form action="html/pages/auths/auth-success.html">
										<div className="form-group">
											<label className="form-label" htmlFor="name">Name</label>
											<div className="form-control-wrap">
												<input type="text" className="form-control form-control-lg" id="name" placeholder="Enter your name" />
											</div>
										</div>
										<div className="form-group">
											<label className="form-label" htmlFor="email">Email or Username</label>
											<div className="form-control-wrap">
												<input type="text" className="form-control form-control-lg" id="email" placeholder="Enter your email address or username" />
											</div>
										</div>
										<div className="form-group">
											<label className="form-label" htmlFor="password">Passcode</label>
											<div className="form-control-wrap">
												<a tabIndex={-1} href="#x" className="form-icon form-icon-right passcode-switch lg" data-target="password">
													<em className="passcode-icon icon-show icon ni ni-eye" />
													<em className="passcode-icon icon-hide icon ni ni-eye-off" />
												</a>
												<input type="password" className="form-control form-control-lg" id="password" placeholder="Enter your passcode" />
											</div>
										</div>
										<div className="form-group">
											<div className="custom-control custom-control-xs custom-checkbox">
												<input type="checkbox" className="custom-control-input" id="checkbox" />
												<label className="custom-control-label" htmlFor="checkbox">I agree to Dashlite <a tabIndex={-1} href="#x">Privacy Policy</a> &amp; <a tabIndex={-1} href="#x"> Terms.</a></label>
											</div>
										</div>
										<div className="form-group">
											<button className="btn btn-lg btn-primary btn-block">Register</button>
										</div>
									</form>
									{/* form */}
									<div className="form-note-s2 pt-4"> Already have an account ? <a href="html/pages/auths/auth-login.html"><strong>Sign in instead</strong></a>
									</div>
									<div className="text-center pt-4 pb-3">
										<h6 className="overline-title overline-title-sap"><span>OR</span></h6>
									</div>
									<ul className="nav justify-center gx-8">
										<li className="nav-item"><a className="link link-primary fw-normal py-2 px-3 fs-13px" href="#x">Facebook</a></li>
										<li className="nav-item"><a className="link link-primary fw-normal py-2 px-3 fs-13px" href="#x">Google</a></li>
									</ul>
								</div>
								{/* .nk-block */}
								<div className="nk-block nk-auth-footer">
									<div className="nk-block-between">
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
																<img src="/assets/images/flags/english.png" alt="" className="language-flag" />
																<span className="language-name">English</span>
															</a>
														</li>
														<li>
															<a href="#x" className="language-item">
																<img src="/assets/images/flags/spanish.png" alt="" className="language-flag" />
																<span className="language-name">Español</span>
															</a>
														</li>
														<li>
															<a href="#x" className="language-item">
																<img src="/assets/images/flags/french.png" alt="" className="language-flag" />
																<span className="language-name">Français</span>
															</a>
														</li>
														<li>
															<a href="#x" className="language-item">
																<img src="/assets/images/flags/turkey.png" alt="" className="language-flag" />
																<span className="language-name">Türkçe</span>
															</a>
														</li>
													</ul>
												</div>
											</li>
										</ul>
										{/* nav */}
									</div>
									<div className="mt-3">
										<p>© 2023 DashLite. All Rights Reserved.</p>
									</div>
								</div>
								{/* nk-block */}
							</div>
							{/* nk-split-content */}
							<div className="nk-split-content nk-split-stretch bg-lighter d-flex toggle-break-lg toggle-slide toggle-slide-right toggle-screen-lg" data-toggle-body="true" data-content="athPromo" data-toggle-screen="lg" data-toggle-overlay="true">
								<div className="slider-wrap w-100 w-max-550px p-3 p-sm-5 m-auto">
									<div className="slider-init slick-initialized slick-slider slick-dotted" data-slick="{&quot;dots&quot;:true, &quot;arrows&quot;:false}">
										<div className="slick-list draggable"><div className="slick-track" style={{ opacity: 1, width: 3234, transform: 'translate3d(-462px, 0px, 0px)' }}><div className="slider-item slick-slide slick-cloned" data-slick-index={-1} aria-hidden="true" style={{ width: 462 }} tabIndex={-1}>
											<div className="nk-feature nk-feature-center">
												<div className="nk-feature-img">
													<img className="round" src="/assets/images/slides/promo-c.png" srcSet="/assets/images/slides/promo-c2x.png 2x" alt="" />
												</div>
												<div className="nk-feature-content py-4 p-sm-5">
													<h4>Dashlite</h4>
													<p>You can start to create your products easily with its user-friendly design &amp; most completed responsive layout.</p>
												</div>
											</div>
										</div><div className="slider-item slick-slide slick-current slick-active" data-slick-index={0} aria-hidden="false" style={{ width: 462 }} tabIndex={0} role="tabpanel" id="slick-slide00" aria-describedby="slick-slide-control00">
												<div className="nk-feature nk-feature-center">
													<div className="nk-feature-img">
														<img className="round" src="/assets/images/slides/promo-a.png" srcSet="/assets/images/slides/promo-a2x.png 2x" alt="" />
													</div>
													<div className="nk-feature-content py-4 p-sm-5">
														<h4>Dashlite</h4>
														<p>You can start to create your products easily with its user-friendly design &amp; most completed responsive layout.</p>
													</div>
												</div>
											</div><div className="slider-item slick-slide" data-slick-index={1} aria-hidden="true" style={{ width: 462 }} tabIndex={-1} role="tabpanel" id="slick-slide01" aria-describedby="slick-slide-control01">
												<div className="nk-feature nk-feature-center">
													<div className="nk-feature-img">
														<img className="round" src="/assets/images/slides/promo-b.png" srcSet="/assets/images/slides/promo-b2x.png 2x" alt="" />
													</div>
													<div className="nk-feature-content py-4 p-sm-5">
														<h4>Dashlite</h4>
														<p>You can start to create your products easily with its user-friendly design &amp; most completed responsive layout.</p>
													</div>
												</div>
											</div><div className="slider-item slick-slide" data-slick-index={2} aria-hidden="true" style={{ width: 462 }} tabIndex={-1} role="tabpanel" id="slick-slide02" aria-describedby="slick-slide-control02">
												<div className="nk-feature nk-feature-center">
													<div className="nk-feature-img">
														<img className="round" src="/assets/images/slides/promo-c.png" srcSet="/assets/images/slides/promo-c2x.png 2x" alt="" />
													</div>
													<div className="nk-feature-content py-4 p-sm-5">
														<h4>Dashlite</h4>
														<p>You can start to create your products easily with its user-friendly design &amp; most completed responsive layout.</p>
													</div>
												</div>
											</div><div className="slider-item slick-slide slick-cloned" data-slick-index={3} aria-hidden="true" style={{ width: 462 }} tabIndex={-1}>
												<div className="nk-feature nk-feature-center">
													<div className="nk-feature-img">
														<img className="round" src="/assets/images/slides/promo-a.png" srcSet="/assets/images/slides/promo-a2x.png 2x" alt="" />
													</div>
													<div className="nk-feature-content py-4 p-sm-5">
														<h4>Dashlite</h4>
														<p>You can start to create your products easily with its user-friendly design &amp; most completed responsive layout.</p>
													</div>
												</div>
											</div><div className="slider-item slick-slide slick-cloned" data-slick-index={4} aria-hidden="true" style={{ width: 462 }} tabIndex={-1}>
												<div className="nk-feature nk-feature-center">
													<div className="nk-feature-img">
														<img className="round" src="/assets/images/slides/promo-b.png" srcSet="/assets/images/slides/promo-b2x.png 2x" alt="" />
													</div>
													<div className="nk-feature-content py-4 p-sm-5">
														<h4>Dashlite</h4>
														<p>You can start to create your products easily with its user-friendly design &amp; most completed responsive layout.</p>
													</div>
												</div>
											</div><div className="slider-item slick-slide slick-cloned" data-slick-index={5} aria-hidden="true" style={{ width: 462 }} tabIndex={-1}>
												<div className="nk-feature nk-feature-center">
													<div className="nk-feature-img">
														<img className="round" src="/assets/images/slides/promo-c.png" srcSet="/assets/images/slides/promo-c2x.png 2x" alt="" />
													</div>
													<div className="nk-feature-content py-4 p-sm-5">
														<h4>Dashlite</h4>
														<p>You can start to create your products easily with its user-friendly design &amp; most completed responsive layout.</p>
													</div>
												</div>
											</div></div></div>
											{/* .slider-item */}
										{/* .slider-item */}
										{/* .slider-item */}
										<ul className="slick-dots" style={{}} role="tablist"><li className="slick-active" role="presentation"><button type="button" role="tab" id="slick-slide-control00" aria-controls="slick-slide00" aria-label="1 of 3" tabIndex={0} aria-selected="true">1</button></li><li role="presentation"><button type="button" role="tab" id="slick-slide-control01" aria-controls="slick-slide01" aria-label="2 of 3" tabIndex={-1}>2</button></li><li role="presentation"><button type="button" role="tab" id="slick-slide-control02" aria-controls="slick-slide02" aria-label="3 of 3" tabIndex={-1}>3</button></li></ul></div>
										{/* .slider-init */}
									<div className="slider-dots" />
									<div className="slider-arrows" />
								</div>
								{/* .slider-wrap */}
							</div>
							{/* nk-split-content */}
						</div>
						{/* nk-split */}
					</div>
					{/* wrap @e */}
				</div>
				{/* content @e */}
			</div>
			{/* main @e */}
		</div>
	);
}