
import { useSelector } from "react-redux";// Partial Header for dashboard
import useLogOutUser from '../../hooks/admin/auth/uselogout'
import logo from '../../assets/images/full-logo.png'
import logoDark from '../../assets/images/full-logo-dark.png'
import _route from "../../constants/routes";


export default function _header() {
	const user = useSelector((state) => state.auth.user)
	const {logOutUser} = useLogOutUser()
	

	const handleLogOut = async ()=>{
		await logOutUser()
	}

	const handleClick = ()=>{
		document.getElementById('nk-sidebar')?.classList.add('nk-sidebar-active')
		document.body.classList.add('nav-shown')
		
	}

	return (
		<div className="nk-header nk-header-fixed is-light">
			<div className="container-fluid">
				<div className="nk-header-wrap">
					<div onClick={() => handleClick()} className="nk-menu-trigger d-xl-none ms-n1">
						<a href="#x" className="nk-nav-toggle nk-quick-nav-icon" data-target="sidebarMenu"><em className="icon ni ni-menu" /></a>
					</div>
					<div className="nk-header-brand d-xl-none">
						<a href={_route._admin_dashboard} className="logo-link">
							<img className="logo-light logo-img" src={logoDark}  alt="logo" />
							<img className="logo-dark logo-img" src={logo}  alt="logo-dark" />
						</a>
					</div>{/* .nk-header-brand */}
					{/* <div className="nk-header-search ms-3 ms-xl-0">
						<em className="icon ni ni-search" />
						<input type="text" className="form-control border-transparent form-focus-none" placeholder="Search anything" />
					</div> */}
					<div className="nk-header-tools">
						<ul className="nk-quick-nav">
							{/* <li className="dropdown language-dropdown d-none d-sm-block me-n1">
								<a href="#x" className="dropdown-toggle nk-quick-nav-icon" data-bs-toggle="dropdown">
									<div className="quick-icon border border-light">
										<img className="icon" src="/assets/images/flags/english-sq.png" alt="" />
									</div>
								</a>
								<div className="dropdown-menu dropdown-menu-end dropdown-menu-s1">
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
							</li> */}
							{/* <li className="dropdown chats-dropdown hide-mb-xs">
								<a href="#x" className="dropdown-toggle nk-quick-nav-icon" data-bs-toggle="dropdown">
									<div className="icon-status icon-status-na"><em className="icon ni ni-comments" /></div>
								</a>
								<div className="dropdown-menu dropdown-menu-xl dropdown-menu-end">
									<div className="dropdown-head">
										<span className="sub-title nk-dropdown-title">Recent Chats</span>
										<a href="#x">Setting</a>
									</div>
									<div className="dropdown-body">
										<ul className="chat-list">
											<li className="chat-item">
												<a className="chat-link" href="html/apps-chats.html">
													<div className="chat-media user-avatar">
														<span>IH</span>
														<span className="status dot dot-lg dot-gray" />
													</div>
													<div className="chat-info">
														<div className="chat-from">
															<div className="name">Iliash Hossain</div>
															<span className="time">Now</span>
														</div>
														<div className="chat-context">
															<div className="text">You: Please confrim if you got my last messages.</div>
															<div className="status delivered">
																<em className="icon ni ni-check-circle-fill" />
															</div>
														</div>
													</div>
												</a>
											</li>
											<li className="chat-item is-unread">
												<a className="chat-link" href="html/apps-chats.html">
													<div className="chat-media user-avatar bg-pink">
														<span>AB</span>
														<span className="status dot dot-lg dot-success" />
													</div>
													<div className="chat-info">
														<div className="chat-from">
															<div className="name">Abu Bin Ishtiyak</div>
															<span className="time">4:49 AM</span>
														</div>
														<div className="chat-context">
															<div className="text">Hi, I am Ishtiyak, can you help me with this problem ?</div>
															<div className="status unread">
																<em className="icon ni ni-bullet-fill" />
															</div>
														</div>
													</div>
												</a>
											</li>
											<li className="chat-item">
												<a className="chat-link" href="html/apps-chats.html">
													<div className="chat-media user-avatar">
														<img src="/assets/images/avatar/b-sm.jpg" alt="" />
													</div>
													<div className="chat-info">
														<div className="chat-from">
															<div className="name">George Philips</div>
															<span className="time">6 Apr</span>
														</div>
														<div className="chat-context">
															<div className="text">Have you seens the claim from Rose?</div>
														</div>
													</div>
												</a>
											</li>
											<li className="chat-item">
												<a className="chat-link" href="html/apps-chats.html">
													<div className="chat-media user-avatar user-avatar-multiple">
														<div className="user-avatar">
															<img src="/assets/images/avatar/c-sm.jpg" alt="" />
														</div>
														<div className="user-avatar">
															<span>AB</span>
														</div>
													</div>
													<div className="chat-info">
														<div className="chat-from">
															<div className="name">Softnio Group</div>
															<span className="time">27 Mar</span>
														</div>
														<div className="chat-context">
															<div className="text">You: I just bought a new computer but i am having some problem</div>
															<div className="status sent">
																<em className="icon ni ni-check-circle" />
															</div>
														</div>
													</div>
												</a>
											</li>
											<li className="chat-item">
												<a className="chat-link" href="html/apps-chats.html">
													<div className="chat-media user-avatar">
														<img src="/assets/images/avatar/a-sm.jpg" alt="" />
														<span className="status dot dot-lg dot-success" />
													</div>
													<div className="chat-info">
														<div className="chat-from">
															<div className="name">Larry Hughes</div>
															<span className="time">3 Apr</span>
														</div>
														<div className="chat-context">
															<div className="text">Hi Frank! How is you doing?</div>
														</div>
													</div>
												</a>
											</li>
											<li className="chat-item">
												<a className="chat-link" href="html/apps-chats.html">
													<div className="chat-media user-avatar bg-purple">
														<span>TW</span>
													</div>
													<div className="chat-info">
														<div className="chat-from">
															<div className="name">Tammy Wilson</div>
															<span className="time">27 Mar</span>
														</div>
														<div className="chat-context">
															<div className="text">You: I just bought a new computer but i am having some problem</div>
															<div className="status sent">
																<em className="icon ni ni-check-circle" />
															</div>
														</div>
													</div>
												</a>
											</li>
										</ul>
									</div>
									<div className="dropdown-foot center">
										<a href="html/apps-chats.html">View All</a>
									</div>
								</div>
							</li> */}
							{/* <li className="dropdown notification-dropdown">
								<a href="#x" className="dropdown-toggle nk-quick-nav-icon" data-bs-toggle="dropdown">
									<div className="icon-status icon-status-info"><em className="icon ni ni-bell" /></div>
								</a>
								<div className="dropdown-menu dropdown-menu-xl dropdown-menu-end">
									<div className="dropdown-head">
										<span className="sub-title nk-dropdown-title">Notifications</span>
										<a href="#x">Mark All as Read</a>
									</div>
									<div className="dropdown-body">
										<div className="nk-notification">
											<div className="nk-notification-item dropdown-inner">
												<div className="nk-notification-icon">
													<em className="icon icon-circle bg-warning-dim ni ni-curve-down-right" />
												</div>
												<div className="nk-notification-content">
													<div className="nk-notification-text">You have requested to <span>Widthdrawl</span></div>
													<div className="nk-notification-time">2 hrs ago</div>
												</div>
											</div>
											<div className="nk-notification-item dropdown-inner">
												<div className="nk-notification-icon">
													<em className="icon icon-circle bg-success-dim ni ni-curve-down-left" />
												</div>
												<div className="nk-notification-content">
													<div className="nk-notification-text">Your <span>Deposit Order</span> is placed</div>
													<div className="nk-notification-time">2 hrs ago</div>
												</div>
											</div>
											<div className="nk-notification-item dropdown-inner">
												<div className="nk-notification-icon">
													<em className="icon icon-circle bg-warning-dim ni ni-curve-down-right" />
												</div>
												<div className="nk-notification-content">
													<div className="nk-notification-text">You have requested to <span>Widthdrawl</span></div>
													<div className="nk-notification-time">2 hrs ago</div>
												</div>
											</div>
											<div className="nk-notification-item dropdown-inner">
												<div className="nk-notification-icon">
													<em className="icon icon-circle bg-success-dim ni ni-curve-down-left" />
												</div>
												<div className="nk-notification-content">
													<div className="nk-notification-text">Your <span>Deposit Order</span> is placed</div>
													<div className="nk-notification-time">2 hrs ago</div>
												</div>
											</div>
											<div className="nk-notification-item dropdown-inner">
												<div className="nk-notification-icon">
													<em className="icon icon-circle bg-warning-dim ni ni-curve-down-right" />
												</div>
												<div className="nk-notification-content">
													<div className="nk-notification-text">You have requested to <span>Widthdrawl</span></div>
													<div className="nk-notification-time">2 hrs ago</div>
												</div>
											</div>
											<div className="nk-notification-item dropdown-inner">
												<div className="nk-notification-icon">
													<em className="icon icon-circle bg-success-dim ni ni-curve-down-left" />
												</div>
												<div className="nk-notification-content">
													<div className="nk-notification-text">Your <span>Deposit Order</span> is placed</div>
													<div className="nk-notification-time">2 hrs ago</div>
												</div>
											</div>
										</div>
									</div>
									<div className="dropdown-foot center">
										<a href="#x">View All</a>
									</div>
								</div>
							</li> */}
							<li className="dropdown user-dropdown">
								<a href="#x" className="dropdown-toggle me-n1" data-bs-toggle="dropdown">
									<div className="user-toggle">
										<div className="user-avatar sm">
											<em className="icon ni ni-user-alt" />
										</div>
										<div className="user-info d-none d-xl-block">
											{/* <div className="user-status user-status-unverified">Unverified</div> */}
											<div className="user-name dropdown-indicator">{`${user.firstname} ${user.lastname}`}</div>
										</div>
									</div>
								</a>
								<div className="dropdown-menu dropdown-menu-md dropdown-menu-end">
									<div className="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
										<div className="user-card">
											<div className="user-avatar">
												<span>{`${user.firstname} ${user.lastname}`.match(/\b(\w)/g).join('').toUpperCase().substring(0, 2)}</span>
											</div>
											<div className="user-info">
												<span className="lead-text">{`${user.firstname} ${user.lastname}`}</span>
												<span className="sub-text">{user.username}</span>
											</div>
										</div>
									</div>
									<div className="dropdown-inner">
										<ul className="link-list">
											{/* <li><a href="html/user-profile-regular.html"><em className="icon ni ni-user-alt" /><span>View Profile</span></a></li> */}
											{/* <li><a href="html/user-profile-setting.html"><em className="icon ni ni-setting-alt" /><span>Account Setting</span></a></li> */}
											{/* <li><a href="html/user-profile-activity.html"><em className="icon ni ni-activity-alt" /><span>Login Activity</span></a></li> */}
											<li><a className="dark-switch" href="#x"><em className="icon ni ni-moon" /><span>Dark Mode</span></a></li>
										</ul>
									</div>
									<div className="dropdown-inner">
										<ul className="link-list">
											<li onClick={() => handleLogOut()}><a href="#x"><em className="icon ni ni-signout" /><span>Sign out</span></a></li>
										</ul>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>{/* .nk-header-wrap */}
			</div>{/* .container-fliud */}
		</div>
	);
}