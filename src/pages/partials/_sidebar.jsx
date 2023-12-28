// Partial Sidebar for Dashboar

import { NavLink } from "react-router-dom";
import _route from "../../constants/routes";
import logo from '../../assets/images/full-logo.png'
import smallLogo from '../../assets/images/logo.png'
import logoDark from '../../assets/images/full-logo-dark.png'
import { useRef } from "react";

export default function _sidebar() {
	const sideRef = useRef()

	// const handleMenu = ()=>{
	// 	console.log('hey')
	// 	console.log(sideRef.current.classList.contains('is-compact'))
	// 	setTimeout(() => {
	// 		if(sideRef.current.classList.contains('is-compact') === false){
	// 			console.log('hey1')
	// 			sideRef.current.classList.add('is-compact')
	// 		}else{
	// 			console.log('hey2')
	// 			sideRef.current.classList.remove('is-compact')
	// 		}
			
	// 	}, 500);
	// }

	return (
		<div id="nk-sidebar" ref={sideRef} className="nk-sidebar nk-sidebar-fixed is-light " data-content="sidebarMenu">
			<div className="nk-sidebar-element nk-sidebar-head">
				<div className="nk-sidebar-brand">
					<a href={_route._admin_dashboard} className="logo-link nk-sidebar-logo">
						<img className="logo-light logo-img" src={logoDark} alt="logo" />
						<img className="logo-dark logo-img" src={logo} alt="logo-dark" />
						<img className="logo-small logo-img logo-img-small" src={smallLogo} alt="logo-small" />
					</a>
				</div>
				<div  className="nk-menu-trigger me-n2">
					<a href="#x" className="nk-nav-toggle nk-quick-nav-icon d-xl-none" data-target="sidebarMenu">
						<em className="icon ni ni-arrow-left" />
					</a>
					<span className="nk-nav-compact nk-quick-nav-icon d-none d-xl-inline-flex" data-target="sidebarMenu">
						<em className="icon ni ni-menu" />
					</span>
				</div>
			</div>
			{/* .nk-sidebar-element */}
			<div className="nk-sidebar-element">
				<div className="nk-sidebar-content">
					<div className="nk-sidebar-menu" data-simplebar>
						<ul className="nk-menu">
							{/* <li className="nk-menu-heading">
								<h6 className="overline-title text-primary-alt">Dashboards</h6>
							</li> */}
							{/* .nk-menu-item */}
							<li className="nk-menu-item">
								<NavLink to={_route._admin_dashboard} className={(isActive) => "nk-menu-link " + (isActive.isActive && " active-nav" )}>
									<span className="nk-menu-icon">
										<em className="icon ni ni-dashboard" />
									</span>
									<span className="nk-menu-text">Dashboards</span>
								</NavLink>
							</li>
							{/* .nk-menu-item */}
							<li className="nk-menu-item">
								<NavLink to={_route._admin_client} className={(isActive) => "nk-menu-link " + (isActive.isActive && " active-nav" )}>
									<span className="nk-menu-icon">
										<em className="icon ni ni-users"></em>
									</span>
									<span className="nk-menu-text">My Client</span>
								</NavLink>
							</li>
							{/* .nk-menu-item */}
							<li className="nk-menu-item">
								<NavLink to={_route._admin_administrator} className={(isActive) => "nk-menu-link " + (isActive.isActive && " active-nav" )}>
									<span className="nk-menu-icon">
										<em className="icon ni ni-user-list"></em>
									</span>
									<span className="nk-menu-text">Administrators</span>
								</NavLink>
							</li>

							{/* .nk-menu-item */}
							{/* <li className="nk-menu-item has-sub">
								<a href="#x" className="nk-menu-link nk-menu-toggle">
									<span className="nk-menu-icon">
										<em className="icon ni ni-users-fill" />
									</span>
									<span className="nk-menu-text">User Manage</span>
								</a>
								<ul className="nk-menu-sub">
									<li className="nk-menu-item">
										<a href="html/user-list-default.html" className="nk-menu-link"><span className="nk-menu-text">User List - Default</span></a>
									</li>
									<li className="nk-menu-item">
										<a href="html/user-list-regular.html" className="nk-menu-link"><span className="nk-menu-text">User List - Regular</span></a>
									</li>
									<li className="nk-menu-item">
										<a href="html/user-list-compact.html" className="nk-menu-link"><span className="nk-menu-text">User List - Compact</span></a>
									</li>
									<li className="nk-menu-item">
										<a href="html/user-details-regular.html" className="nk-menu-link"><span className="nk-menu-text">User Details - Regular</span></a>
									</li>
									<li className="nk-menu-item">
										<a href="html/user-profile-regular.html" className="nk-menu-link"><span className="nk-menu-text">User Profile - Regular</span></a>
									</li>
									<li className="nk-menu-item">
										<a href="html/user-card.html" className="nk-menu-link"><span className="nk-menu-text">User Contact - Card</span></a>
									</li>
								</ul>
							</li> */}
						</ul>
						{/* .nk-menu */}
					</div>
					{/* .nk-sidebar-menu */}
				</div>
				{/* .nk-sidebar-content */}
			</div>
			{/* .nk-sidebar-element */}
		</div>
	);
}
