// Dashboard for Admin
import partials from "./partials";
import DropdownBtn from "../components/Buttons/DropdownBtn";

export default function Dashboard() {
	return (
		<div className="nk-app-root">
			{/* main @s */}
			<div className="nk-main">
				{/* sidebar @s */}
				<partials._sidebar />
				{/* sidebar @e */}
				{/* wrap @s */}
				<div className="nk-wrap">
					{/* main header @s */}
					<partials._header />
					{/* main header @e */}
					{/* content @s */}
					<div className="nk-content">
						<div className="container-fluid">
							<div className="nk-content-inner">
								<div className="nk-content-body">
									<div className="nk-block-head nk-block-head-sm">
										<div className="nk-block-between">
											<div className="nk-block-head-content">
												<h3 className="nk-block-title page-title">
													<em className="icon ni ni-dashboard me-2" />
													Overview
												</h3>
											</div>
											{/* .nk-block-head-content */}
											<div className="nk-block-head-content">
												<div className="toggle-wrap nk-block-tools-toggle">
													<a href="#x" className="btn btn-icon btn-trigger toggle-expand me-n1" data-target="pageMenu"><em className="icon ni ni-more-v" /></a>
													<div className="toggle-expand-content" data-content="pageMenu">
														<ul className="nk-block-tools g-3">
															<li>
																<DropdownBtn />
															</li>
															<li className="nk-block-tools-opt"><a href="#x" className="btn btn-primary"><em className="icon ni ni-reports" /><span>Reports</span></a></li>
														</ul>
													</div>
												</div>
											</div>
											{/* .nk-block-head-content */}
										</div>
										{/* .nk-block-between */}
									</div>
									{/* .nk-block-head */}
									<div className="nk-block">
										<div className="row g-gs">
											<div className="col-xxl-3 col-sm-6">
												<div className="card">
													<div className="nk-ecwg nk-ecwg6">
														<div className="card-inner">
															<div className="card-title-group">
																<div className="">
																	<small className="fs-6">Active</small>
																	<div className="align-center card-title d-flex justify-center">
																		<em className="icon ni ni-users-fill me-1 fs-2"></em>
																		<h6 className="title">Client</h6>
																	</div>
																</div>
															</div>
															<div className="data">
																<div className="data-group">
																	<div className="amount">23<small className="fs-4">/68</small></div>
																	<div className="nk-ecwg6-ck">
																		<canvas className="ecommerce-line-chart-s3" id="todayCustomers" width={100} height={40} style={{ display: 'block', boxSizing: 'border-box', height: 40, width: 100 }} />
																	</div>
																</div>
															</div>
															<div class="info">
																<span class="change down text-danger">
																	<em class="icon ni ni-arrow-long-down" />2.34%
																</span>
																<span> Requests</span>
															</div>
														</div>
														{/* .card-inner */}
													</div>
													{/* .nk-ecwg */}
												</div>
												{/* .card */}
											</div>
											{/* .col */}
											<div className="col-xxl-3 col-sm-6">
												<div className="card">
													<div className="nk-ecwg nk-ecwg6">
														<div className="card-inner">
															<div className="card-title-group">
																<div className="">
																	<small className="fs-6">Active</small>
																	<div className="align-center card-title d-flex justify-center">
																		<em className="icon ni ni-users-fill me-1 fs-2"></em>
																		<h6 className="title">Administrators</h6>
																	</div>
																</div>
															</div>
															<div className="data">
																<div className="data-group">
																	<div className="amount">3<small className="fs-4">/13</small></div>
																	<div className="nk-ecwg6-ck">
																		<canvas className="ecommerce-line-chart-s3" id="todayCustomers" width={100} height={40} style={{ display: 'block', boxSizing: 'border-box', height: 40, width: 100 }} />
																	</div>
																</div>
															</div>
															<div class="info">
																<span class="change up">
																	<em class="icon ni ni-arrow-long-up" />3.97%
																</span>
																<span> Requests</span>
															</div>
														</div>
														{/* .card-inner */}
													</div>
													{/* .nk-ecwg */}
												</div>
												{/* .card */}
											</div>
											<div className="col-xxl-6">
												<div className="card card-full">
													<div className="nk-ecwg nk-ecwg8 h-100">
														<div className="card-inner">
															<div className="card-title-group mb-3">
																<div className="card-title">
																	<h6 className="title">Sales Statistics</h6>
																</div>
																<div className="card-tools">
																	<div className="dropdown">
																		<a href="#x" className="dropdown-toggle link link-light link-sm dropdown-indicator" data-bs-toggle="dropdown">Weekly</a>
																		<div className="dropdown-menu dropdown-menu-sm dropdown-menu-end">
																			<ul className="link-list-opt no-bdr">
																				<li><a href="#x"><span>Daily</span></a></li>
																				<li><a href="#x" className="active"><span>Weekly</span></a></li>
																				<li><a href="#x"><span>Monthly</span></a></li>
																			</ul>
																		</div>
																	</div>
																</div>
															</div>
															<ul className="nk-ecwg8-legends">
																<li>
																	<div className="title">
																		<span className="dot dot-lg sq" data-bg="#6576ff" />
																		<span>Total Order</span>
																	</div>
																</li>
																<li>
																	<div className="title">
																		<span className="dot dot-lg sq" data-bg="#eb6459" />
																		<span>Cancelled Order</span>
																	</div>
																</li>
															</ul>
															<div className="nk-ecwg8-ck">
																<canvas className="ecommerce-line-chart-s4" id="salesStatistics" />
															</div>
															<div className="chart-label-group ps-5">
																<div className="chart-label">01 Jul, 2020</div>
																<div className="chart-label">30 Jul, 2020</div>
															</div>
														</div>
														{/* .card-inner */}
													</div>
												</div>
												{/* .card */}
											</div>
											{/* .col */}
											<div className="col-xxl-3 col-md-6">
												<div className="card card-full overflow-hidden">
													<div className="nk-ecwg nk-ecwg7 h-100">
														<div className="card-inner flex-grow-1">
															<div className="card-title-group mb-4">
																<div className="card-title">
																	<h6 className="title">Order Statistics</h6>
																</div>
															</div>
															<div className="nk-ecwg7-ck">
																<canvas className="ecommerce-doughnut-s1" id="orderStatistics" />
															</div>
															<ul className="nk-ecwg7-legends">
																<li>
																	<div className="title">
																		<span className="dot dot-lg sq" data-bg="#816bff" />
																		<span>Completed</span>
																	</div>
																</li>
																<li>
																	<div className="title">
																		<span className="dot dot-lg sq" data-bg="#13c9f2" />
																		<span>Processing</span>
																	</div>
																</li>
																<li>
																	<div className="title">
																		<span className="dot dot-lg sq" data-bg="#ff82b7" />
																		<span>Cancelled</span>
																	</div>
																</li>
															</ul>
														</div>
														{/* .card-inner */}
													</div>
												</div>
												{/* .card */}
											</div>
											{/* .col */}
											<div className="col-xxl-3 col-md-6">
												<div className="card h-100">
													<div className="card-inner">
														<div className="card-title-group mb-2">
															<div className="card-title">
																<h6 className="title">Store Statistics</h6>
															</div>
														</div>
														<ul className="nk-store-statistics">
															<li className="item">
																<div className="info">
																	<div className="title">Orders</div>
																	<div className="count">1,795</div>
																</div>
																<em className="icon bg-primary-dim ni ni-bag" />
															</li>
															<li className="item">
																<div className="info">
																	<div className="title">Customers</div>
																	<div className="count">2,327</div>
																</div>
																<em className="icon bg-info-dim ni ni-users" />
															</li>
															<li className="item">
																<div className="info">
																	<div className="title">Products</div>
																	<div className="count">674</div>
																</div>
																<em className="icon bg-pink-dim ni ni-box" />
															</li>
															<li className="item">
																<div className="info">
																	<div className="title">Categories</div>
																	<div className="count">68</div>
																</div>
																<em className="icon bg-purple-dim ni ni-server" />
															</li>
														</ul>
													</div>
													{/* .card-inner */}
												</div>
												{/* .card */}
											</div>
											{/* .col */}
											<div className="col-xxl-8">
												<div className="card card-full">
													<div className="card-inner">
														<div className="card-title-group">
															<div className="card-title">
																<h6 className="title">Recent Orders</h6>
															</div>
														</div>
													</div>
													<div className="nk-tb-list mt-n2">
														<div className="nk-tb-item nk-tb-head">
															<div className="nk-tb-col"><span>Order No.</span></div>
															<div className="nk-tb-col tb-col-sm"><span>Customer</span></div>
															<div className="nk-tb-col tb-col-md"><span>Date</span></div>
															<div className="nk-tb-col"><span>Amount</span></div>
															<div className="nk-tb-col"><span className="d-none d-sm-inline">Status</span></div>
														</div>
														<div className="nk-tb-item">
															<div className="nk-tb-col">
																<span className="tb-lead"><a href="#x">#95954</a></span>
															</div>
															<div className="nk-tb-col tb-col-sm">
																<div className="user-card">
																	<div className="user-avatar sm bg-purple-dim">
																		<span>AB</span>
																	</div>
																	<div className="user-name">
																		<span className="tb-lead">Abu Bin Ishtiyak</span>
																	</div>
																</div>
															</div>
															<div className="nk-tb-col tb-col-md">
																<span className="tb-sub">02/11/2020</span>
															</div>
															<div className="nk-tb-col">
																<span className="tb-sub tb-amount">4,596.75 <span>USD</span></span>
															</div>
															<div className="nk-tb-col">
																<span className="badge badge-dot badge-dot-xs bg-success">Paid</span>
															</div>
														</div>
														<div className="nk-tb-item">
															<div className="nk-tb-col">
																<span className="tb-lead"><a href="#x">#95850</a></span>
															</div>
															<div className="nk-tb-col tb-col-sm">
																<div className="user-card">
																	<div className="user-avatar sm bg-azure-dim">
																		<span>DE</span>
																	</div>
																	<div className="user-name">
																		<span className="tb-lead">Desiree Edwards</span>
																	</div>
																</div>
															</div>
															<div className="nk-tb-col tb-col-md">
																<span className="tb-sub">02/02/2020</span>
															</div>
															<div className="nk-tb-col">
																<span className="tb-sub tb-amount">596.75 <span>USD</span></span>
															</div>
															<div className="nk-tb-col">
																<span className="badge badge-dot badge-dot-xs bg-danger">Cancelled</span>
															</div>
														</div>
														<div className="nk-tb-item">
															<div className="nk-tb-col">
																<span className="tb-lead"><a href="#x">#95812</a></span>
															</div>
															<div className="nk-tb-col tb-col-sm">
																<div className="user-card">
																	<div className="user-avatar sm bg-warning-dim">
																		<img src="/assets/images/avatar/b-sm.jpg" alt="" />
																	</div>
																	<div className="user-name">
																		<span className="tb-lead">Blanca Schultz</span>
																	</div>
																</div>
															</div>
															<div className="nk-tb-col tb-col-md">
																<span className="tb-sub">02/01/2020</span>
															</div>
															<div className="nk-tb-col">
																<span className="tb-sub tb-amount">199.99 <span>USD</span></span>
															</div>
															<div className="nk-tb-col">
																<span className="badge badge-dot badge-dot-xs bg-success">Paid</span>
															</div>
														</div>
														<div className="nk-tb-item">
															<div className="nk-tb-col">
																<span className="tb-lead"><a href="#x">#95256</a></span>
															</div>
															<div className="nk-tb-col tb-col-sm">
																<div className="user-card">
																	<div className="user-avatar sm bg-purple-dim">
																		<span>NL</span>
																	</div>
																	<div className="user-name">
																		<span className="tb-lead">Naomi Lawrence</span>
																	</div>
																</div>
															</div>
															<div className="nk-tb-col tb-col-md">
																<span className="tb-sub">01/29/2020</span>
															</div>
															<div className="nk-tb-col">
																<span className="tb-sub tb-amount">1099.99 <span>USD</span></span>
															</div>
															<div className="nk-tb-col">
																<span className="badge badge-dot badge-dot-xs bg-success">Paid</span>
															</div>
														</div>
														<div className="nk-tb-item">
															<div className="nk-tb-col">
																<span className="tb-lead"><a href="#x">#95135</a></span>
															</div>
															<div className="nk-tb-col tb-col-sm">
																<div className="user-card">
																	<div className="user-avatar sm bg-success-dim">
																		<span>CH</span>
																	</div>
																	<div className="user-name">
																		<span className="tb-lead">Cassandra Hogan</span>
																	</div>
																</div>
															</div>
															<div className="nk-tb-col tb-col-md">
																<span className="tb-sub">01/29/2020</span>
															</div>
															<div className="nk-tb-col">
																<span className="tb-sub tb-amount">1099.99 <span>USD</span></span>
															</div>
															<div className="nk-tb-col">
																<span className="badge badge-dot badge-dot-xs bg-warning">Due</span>
															</div>
														</div>
													</div>
												</div>
												{/* .card */}
											</div>
											<div className="col-xxl-4 col-md-8 col-lg-6">
												<div className="card h-100">
													<div className="card-inner">
														<div className="card-title-group mb-2">
															<div className="card-title">
																<h6 className="title">Top products</h6>
															</div>
															<div className="card-tools">
																<div className="dropdown">
																	<a href="#x" className="dropdown-toggle link link-light link-sm dropdown-indicator" data-bs-toggle="dropdown">Weekly</a>
																	<div className="dropdown-menu dropdown-menu-sm dropdown-menu-end">
																		<ul className="link-list-opt no-bdr">
																			<li><a href="#x"><span>Daily</span></a></li>
																			<li><a href="#x" className="active"><span>Weekly</span></a></li>
																			<li><a href="#x"><span>Monthly</span></a></li>
																		</ul>
																	</div>
																</div>
															</div>
														</div>
														<ul className="nk-top-products">
															<li className="item">
																<div className="thumb">
																	<img src="/assets/images/product/a.png" alt="" />
																</div>
																<div className="info">
																	<div className="title">Pink Fitness Tracker</div>
																	<div className="price">$99.00</div>
																</div>
																<div className="total">
																	<div className="amount">$990.00</div>
																	<div className="count">10 Sold</div>
																</div>
															</li>
															<li className="item">
																<div className="thumb">
																	<img src="/assets/images/product/b.png" alt="" />
																</div>
																<div className="info">
																	<div className="title">Purple Smartwatch</div>
																	<div className="price">$99.00</div>
																</div>
																<div className="total">
																	<div className="amount">$990.00</div>
																	<div className="count">10 Sold</div>
																</div>
															</li>
															<li className="item">
																<div className="thumb">
																	<img src="/assets/images/product/c.png" alt="" />
																</div>
																<div className="info">
																	<div className="title">Black Smartwatch</div>
																	<div className="price">$99.00</div>
																</div>
																<div className="total">
																	<div className="amount">$990.00</div>
																	<div className="count">10 Sold</div>
																</div>
															</li>
															<li className="item">
																<div className="thumb">
																	<img src="/assets/images/product/d.png" alt="" />
																</div>
																<div className="info">
																	<div className="title">Black Headphones</div>
																	<div className="price">$99.00</div>
																</div>
																<div className="total">
																	<div className="amount">$990.00</div>
																	<div className="count">10 Sold</div>
																</div>
															</li>
															<li className="item">
																<div className="thumb">
																	<img src="/assets/images/product/e.png" alt="" />
																</div>
																<div className="info">
																	<div className="title">iPhone 7 Headphones</div>
																	<div className="price">$99.00</div>
																</div>
																<div className="total">
																	<div className="amount">$990.00</div>
																	<div className="count">10 Sold</div>
																</div>
															</li>
														</ul>
													</div>
													{/* .card-inner */}
												</div>
												{/* .card */}
											</div>
											{/* .col */}
										</div>
										{/* .row */}
									</div>
									{/* .nk-block */}
								</div>
							</div>
						</div>
					</div>
					{/* content @e */}
					{/* footer @s */}
					<partials._footer />
					{/* footer @e */}
				</div>
				{/* wrap @e */}
			</div>
			{/* main @e */}
		</div>
	);
}