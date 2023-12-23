// Componet for a button dropdown

export default function DropdownBtn() {
	return (
		<div className="drodown">
			<a href="#x" className="dropdown-toggle btn btn-white btn-dim btn-outline-light" data-bs-toggle="dropdown">
				<em className="d-none d-sm-inline icon ni ni-calender-date" />
				<span>
					<span className="d-none d-md-inline">Last</span>
					30 Days
				</span>
				<em className="dd-indc icon ni ni-chevron-right" />
			</a>
			<div className="dropdown-menu dropdown-menu-end">
				<ul className="link-list-opt no-bdr">
					<li><a href="#x"><span>Last 30 Days</span></a></li>
					<li><a href="#x"><span>Last 6 Months</span></a></li>
					<li><a href="#x"><span>Last 1 Years</span></a></li>
				</ul>
			</div>
		</div>
	);
}