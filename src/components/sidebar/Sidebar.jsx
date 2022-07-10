import "./sidebar.css";
import {
	LineStyle,
	PermIdentity,
	DynamicFeed,
	HouseTwoTone,
	HouseRounded,
	PermPhoneMsg,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { logOutUser } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function Sidebar() {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);

	const handleClick = (e) => {
		e.preventDefault();
		logOutUser(user, dispatch);
	};
	return (
		<div className="sidebar">
			<div className="sidebarWrapper">
				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Dashboard</h3>
					<ul className="sidebarList">
						<Link to="/" className="link">
							<li className="sidebarListItem active">
								<LineStyle className="sidebarIcon" />
								Home
							</li>
						</Link>
					</ul>
				</div>
				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Health</h3>
					<ul className="sidebarList">
						<Link to="/health-plan" className="link">
							<li className="sidebarListItem">
								<span class="material-icons-sharp">
									playlist_add_check_circle
								</span>
								Health Plans
							</li>
						</Link>
						<Link to="/newHealthPlan" className="link">
							<li className="sidebarListItem">
								<span class="material-icons-sharp">
									playlist_add_circle
								</span>
								New activity
							</li>
						</Link>
						<Link to="/patients" className="link">
							<li className="sidebarListItem">
								<PermIdentity className="sidebarIcon" />
								Patient
							</li>
						</Link>
					</ul>
				</div>
				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Building</h3>
					<ul className="sidebarList">
						<Link to="/house-plan" className="link">
							<li className="sidebarListItem">
								<span class="material-icons-sharp">
									playlist_add_check_circle
								</span>
								House Plans
							</li>
						</Link>
						<Link to="/newHousePlan" className="link">
							<li className="sidebarListItem">
								<span class="material-icons-sharp">
									playlist_add_circle
								</span>
								New activity
							</li>
						</Link>
						<Link to="/houses" className="link">
							<li className="sidebarListItem">
								<HouseTwoTone className="sidebarIcon" />
								House
							</li>
						</Link>
					</ul>
				</div>

				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Roads</h3>
					<ul className="sidebarList">
						<Link to="/road-plan" className="link">
							<li className="sidebarListItem">
								<span class="material-icons-sharp">
									playlist_add_check_circle
								</span>
								Roads Plans
							</li>
						</Link>
						<Link to="/newR" className="link">
							<li className="sidebarListItem">
								<span class="material-icons-sharp">
									playlist_add_circle
								</span>
								New activity
							</li>
						</Link>
						<Link to="/roads" className="link">
							<li className="sidebarListItem">
								<HouseRounded className="sidebarIcon" />
								Roads
							</li>
						</Link>
					</ul>
				</div>
				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Staff</h3>
					<ul className="sidebarList">
						<Link to="/newUSer" className="link">
							<li className="sidebarListItem">
								<PermIdentity className="sidebarIcon" />
								Add a User
							</li>
						</Link>
					</ul>
				</div>
				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Reach to Us</h3>
					<ul className="sidebarList">
						<Link to="/contact" className="link">
							<li className="sidebarListItem">
								<DynamicFeed className="sidebarIcon" />
								Contact-Us
							</li>
						</Link>
						<Link to="/feedback" className="link">
							<li className="sidebarListItem">
								<PermPhoneMsg className="sidebarIcon" />
								Feedback
							</li>
						</Link>
					</ul>
				</div>

				<div className="sidebarMenu">
					<ul className="sidebarList">
						<li className="sidebarListItem" onClick={handleClick}>
							<div className="sidebarIcon log">
								<span class="material-icons-sharp">logout</span>
							</div>
							Logout
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
