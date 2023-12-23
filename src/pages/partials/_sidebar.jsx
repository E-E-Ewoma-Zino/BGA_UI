// Partial Sidebar for Dashboar

export default function _sidebar() {
	return (
		<div className="nk-sidebar nk-sidebar-fixed is-light " data-content="sidebarMenu">
			<div className="nk-sidebar-element nk-sidebar-head">
				<div className="nk-sidebar-brand">
					<a href="html/index.html" className="logo-link nk-sidebar-logo">
						<img className="logo-light logo-img" src="/assets/images/logo.png" srcSet="/assets/images/logo2x.png 2x" alt="logo" />
						<img className="logo-dark logo-img" src="/assets/images/logo-dark.png" srcSet="/assets/images/logo-dark2x.png 2x" alt="logo-dark" />
						<img className="logo-small logo-img logo-img-small" src="/assets/images/logo-small.png" srcSet="/assets/images/logo-small2x.png 2x" alt="logo-small" />
					</a>
				</div>
				<div className="nk-menu-trigger me-n2">
					<a href="#x" className="nk-nav-toggle nk-quick-nav-icon d-xl-none" data-target="sidebarMenu">
						<em className="icon ni ni-arrow-left" />
					</a>
					<a href="#x" className="nk-nav-compact nk-quick-nav-icon d-none d-xl-inline-flex" data-target="sidebarMenu">
						<em className="icon ni ni-menu" />
					</a>
				</div>
			</div>
			{/* .nk-sidebar-element */}
			<div className="nk-sidebar-element">
				<div className="nk-sidebar-content">
					<div className="nk-sidebar-menu" data-simplebar>
						<ul className="nk-menu">
							<li className="nk-menu-heading">
								<h6 className="overline-title text-primary-alt">Dashboards</h6>
							</li>
							{/* .nk-menu-item */}
							<li className="nk-menu-item">
								<a href="html/index.html" className="nk-menu-link">
									<span className="nk-menu-icon">
										<em className="icon ni ni-dashboard" />
									</span>
									<span className="nk-menu-text">Overview</span>
								</a>
							</li>
							{/* .nk-menu-item */}
							<li className="nk-menu-item">
								<a href="html/index-sales.html" className="nk-menu-link">
									<span className="nk-menu-icon">
										<em className="icon ni ni-users"></em>
									</span>
									<span className="nk-menu-text">My Client</span>
								</a>
							</li>
							{/* .nk-menu-item */}
							<li className="nk-menu-item">
								<a href="html/index-analytics.html" className="nk-menu-link">
									<span className="nk-menu-icon">
										<em className="icon ni ni-user-list"></em>
									</span>
									<span className="nk-menu-text">Administrators</span>
								</a>
							</li>

							{/* .nk-menu-item */}
							<li className="nk-menu-item has-sub">
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
								{/* .nk-menu-sub */}
							</li>
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
