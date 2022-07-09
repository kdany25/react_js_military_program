import {
	LocationSearching,
	PermIdentity,
	PhoneAndroid,
	Publish,
	CalendarToday,
} from "@material-ui/icons";
import "./UpdateHealthPlan.css";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function HealthPlanPro() {
	const location = useLocation();
	const healthPlanId = location.pathname.split("/")[2];

	const healthplan = useSelector((state) =>
		state.healthplan.healthPlans.find(
			(healthplan) => healthplan._id === healthPlanId
		)
	);
	return (
		<div className="user">
			<div className="userTitleContainer">
				<h1 className="userTitle"> Edit Health plan details</h1>
			</div>
			<div className="userContainer">
				<div className="userShow">
					<div className="userShowTop">
						<img
							src="https://i.ibb.co/xqFwFwx/plan.jpg"
							alt=""
							className="userShowImg"
						/>
						<div className="userShowTopTitle">
							<span className="userShowUsername">
								{healthplan.location}
							</span>
						</div>
					</div>
					<div className="userShowBottom">
						<span className="userShowTitle"> Details</span>
						<div className="userShowInfo">
							<PermIdentity className="userShowIcon" />
							<span className="userShowInfoTitle">
								{healthplan.doctor}
							</span>
						</div>
						<div className="userShowInfo">
							<CalendarToday className="userShowIcon" />
							<span className="userShowInfoTitle">
								{healthplan.createdAt}
							</span>
						</div>
						<span className="userShowTitle">Plan Details</span>
						<div className="userShowInfo">
							<PhoneAndroid className="userShowIcon" />
							<span className="userShowInfoTitle">
								{healthplan?.cost}
							</span>
						</div>
						{/* <div className="userShowInfo">
                    <MailOutline className="userShowIcon" />
                    <span className="userShowInfoTitle">kabadany99@gmail.com</span>
                  </div> */}
						<div className="userShowInfo">
							<LocationSearching className="userShowIcon" />
							<span className="userShowInfoTitle">
								{healthplan.priority}
							</span>
						</div>
					</div>
				</div>
				<div className="userUpdate">
					<span className="userUpdateTitle">Edit</span>
					<form className="userUpdateForm">
						<div className="userUpdateLeft">
							<div className="userUpdateItem">
								<label>Location</label>
								<input
									type="text"
									placeholder={healthplan.location}
									className="userUpdateInput"
								/>
							</div>
							<div className="userUpdateItem">
								<label>Doctor </label>
								<input
									type="text"
									placeholder={healthplan.doctor}
									className="userUpdateInput"
								/>
							</div>
							<div className="userUpdateItem">
								<label>priority</label>
								<input
									type="text"
									placeholder={healthplan.priority}
									className="userUpdateInput"
								/>
							</div>
							<div className="userUpdateItem">
								<label>Address</label>
								<input
									type="text"
									placeholder={healthplan.number}
									className="userUpdateInput"
								/>
							</div>
						</div>
						<div className="userUpdateRight">
							<div className="userUpdateUpload">
								<img
									className="userUpdateImg"
									src="https://i.ibb.co/xqFwFwx/plan.jpg"
									alt=""
								/>
								<label htmlFor="file">
									<Publish className="userUpdateIcon" />
								</label>
								<input
									type="file"
									id="file"
									style={{ display: "none" }}
								/>
							</div>
							<button className="userUpdateButton">Update</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
