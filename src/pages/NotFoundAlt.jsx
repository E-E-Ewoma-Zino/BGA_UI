// 404 dashboard page
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import _route from "../constants/routes";

export default function NotFoundAlt() {
	return (
		<div className="nk-main ">
			<Helmet>
				<title>404 Page Not Found</title>
			</Helmet>
			{/* wrap @s */}
			<div className="nk-wrap nk-wrap-nosidebar">
				{/* content @s */}
				<div className="nk-content ">
					<div className="nk-block nk-block-middle wide-md mx-auto">
						<div className="nk-block-content nk-error-ld text-center">
							<img className="nk-error-gfx" src="/assets/images/gfx/error-404.svg" alt='' />
							<div className="wide-xs mx-auto">
								<h3 className="nk-error-title">Oops! Why you're here?</h3>
								<p className="nk-error-text">We are very sorry for inconvenience. It looks like you're try to access a page that either has been deleted or never existed.</p>
								<Link to={_route._admin_dashboard} className="btn btn-lg btn-primary mt-2">Back To Home</Link>
							</div>
						</div>
					</div>{/* .nk-block */}
				</div>
				{/* wrap @e */}
			</div>
			{/* content @e */}
		</div>
	);
}