import "./sidebar.css";
import { PermPhoneMsg } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebarr() {
	return (
		<div className="sidebar">
			<div className="sidebarWrapper">
				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Feedback</h3>
					<ul className="sidebarList">
						<Link to="/" className="link">
							<li className="sidebarListItem">
								<PermPhoneMsg className="sidebarIcon" />
								Give feedback
							</li>
						</Link>
					</ul>
				</div>

				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Login</h3>
					<ul className="sidebarList">
						<Link to="/login" className="link">
							<li className="sidebarListItem">
								<PermPhoneMsg className="sidebarIcon" />
								Login
							</li>
						</Link>
					</ul>
				</div>
			</div>
		</div>
	);
}
