import "./home.css";
import { MdHouse, MdLocalHospital } from "react-icons/md";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { GiRoad } from "react-icons/gi";
import React, { useEffect, useState } from "react";
import { userRequest } from "../../requestMethod";
import { useDispatch, useSelector } from "react-redux";
import { getHealthPlan, getHousePlan, getRoadPlan } from "../../redux/apiCalls";
import { DataGrid } from "@material-ui/data-grid";
import { BASE_URL } from "../../requestMethod";

const FeebackView = ({ data, sector }) => {
	const [show, setShow] = useState(false);

	return (
		<div
			onClick={() => setShow((prev) => !prev)}
			className={`feedback ${show ? "expanded" : ""}`}
		>
			<h4>{sector}</h4>
			<ul>
				{React.Children.toArray(
					Object.entries(data).map(([question, answer]) => (
						<li>
							{" "}
							{question} : <strong>{answer}</strong>{" "}
						</li>
					))
				)}
			</ul>
			{show ? (
				<BiChevronUp size={30} className="Qbtn" />
			) : (
				<BiChevronDown size={30} className="Qbtn" />
			)}
			{!show && <div className="overlay" />}
		</div>
	);
};

export default function Home() {
	const dispatch = useDispatch();
	const [data, setData] = useState({ content: [], status: "" });
	const [Feedbacks, setFeedback] = useState([]);
	// Percentages
	const [healthPerc, setHealthPerc] = useState(0);
	const [housePerc, setHousePerc] = useState(0);
	const [roadPerc, setRoadPerc] = useState(0);
	// Totals
	const [healthTotal, setHealthTotal] = useState(0);
	const [houseTotal, setHouseTotal] = useState(0);
	const [roadTotal, setRoadTotal] = useState(0);
	// Actions
	const healthplans = useSelector((state) => state.healthplan.healthPlans);
	const housePlans = useSelector((state) => state.houseplan.housePlans);
	const roadPlans = useSelector((state) => state.roadplan.roadPlans);

	useEffect(() => {
		getHealthPlan(dispatch);
		getHousePlan(dispatch);
		getRoadPlan(dispatch);
		//
		const url = `${BASE_URL}/feedback`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				if (res.status === 200) {
					setFeedback(res.data);
				}
			});
	}, [dispatch]);

	useEffect(() => {
		if (healthplans[0] && !healthTotal) {
			let sum = 0;

			for (const one of healthplans) {
				sum += Number(one.cost);
			}

			setHealthTotal(sum);
			setData({ content: healthplans, status: "health" });
		}

		if (roadPlans[0] && !roadTotal) {
			let sum = 0;

			for (const one of roadPlans) {
				sum += Number(one.cost);
			}

			setRoadTotal(sum);
		}

		if (housePlans[0] && !houseTotal) {
			let sum = 0;

			for (const one of housePlans) {
				sum += Number(one.cost);
			}

			setHouseTotal(sum);
		}
	}, [healthplans, housePlans, roadPlans]);

	useEffect(() => {
		// (async () => {
		//     const res = await userRequest.get("/Health/week/patient");
		//
		//     if(res && !userStats[0])
		//     for(const one of res.data){
		//       setUserStats((prev) => [
		//         ...prev,
		//         { name: WEEKS[one._id - 6], "Active User": one.total },
		//       ])
		//     }

		// })()
		// ================
		(async () => {
			//
			const requests = [
				userRequest.get("Health/count/all"), // health N
				userRequest.get("Health/week/patient"), // Health $
				userRequest.get("house/count/all"), // House N
				userRequest.get("house/week/patient"), // House $
				userRequest.get("roads/week/sum"), // Road #Km
				userRequest.get("roads/week/patient"), // Roads $
			];

			const calculator = (data) =>
				Math.floor((data[0].total * 100) / data[1].total - 100);
			const [health, healthIncome, house, houseIncome, Road, RoadIcome] =
				await Promise.all(requests);

			// Health
			let data = healthIncome.data.sort((a, b) =>
				a._id < b._id ? 1 : -1
			);
			setHealthPerc(calculator(data));

			// House
			data = houseIncome.data.sort((a, b) => (a._id < b._id ? 1 : -1));
			// setHousePerc(calculator(data));

			// Roads
			data = RoadIcome.data.sort((a, b) => (a._id < b._id ? 1 : -1));
			setRoadPerc(calculator(data));
		})();
	}, []);

	const columns = [
		{
			field: "location",
			headerName: "District",
			width: 150,
		},
		{
			field: "number",
			headerName: "Number",
			width: 130,
		},
		{
			field: "period",
			headerName: "Period",
			width: 120,
		},
		{
			field: "cost",
			headerName: "Cost",
			width: 110,
		},
	];

	const RoadColumns = [
		{
			field: "location",
			headerName: "District",
			width: 150,
		},
		{
			field: "kmreached",
			headerName: "Distance in KM",
			width: 120,
		},
		{
			field: "engineer",
			headerName: "engineer",
			width: 160,
		},
		{
			field: "period",
			headerName: "period",
			width: 120,
		},
		{
			field: "cost",
			headerName: "Cost",
			width: 110,
		},
	];

	return (
		<div className="dashboard">
			{/* <FeaturedInfo />
      <div className="homec">
        <Chart
          data={userStats}
          title="User Analytics"
          grid
          dataKey="Active User"
        />
        <Daily/>
      </div> */}
			<div className="parent">
				<div className="header-wrapper">
					<img src={require("./rdf.ico")} alt="" className="icon" />
					<section>
						<div>
							<h1>Budget planning</h1>
							<p className="label">Jan 1, 2022 - Dec 31,2022</p>
							<div className="content">
								<strong>
									Total Amount <span>+9.78%</span>{" "}
								</strong>
								<h2>
									{(
										healthTotal +
										roadTotal +
										houseTotal
									).toLocaleString()}{" "}
									RWF
								</h2>
								{/* <p className="label">Increased {( housePerc + healthTotal + roadPerc )}% compared to last month</p> */}
							</div>
						</div>
					</section>
					<hr />
					<section>
						<div className="sector_wrapper">
							<h5> Health Sector </h5>
							<h3>{healthTotal.toLocaleString()} RWF</h3>
							<p className="label">234 Patients Treated</p>
						</div>
						<div className="divider" />
						<div className="sector_wrapper">
							<h5> Housing Sector </h5>
							<h3>{houseTotal.toLocaleString()} RWF</h3>
							<p className="label">31 House Built</p>
						</div>
						<div className="divider" />
						<div className="sector_wrapper">
							<h5> Roads Sector </h5>
							<h3>{roadTotal.toLocaleString()} RWF</h3>
							<p className="label">12.3 Km Road Built</p>
						</div>
					</section>
				</div>
				<div className="events">
					<h2>Upcoming events</h2>
					<div className="spacer" />
					<div className="event">
						<div className="icon_wrapper">
							<MdLocalHospital className="icon" />
						</div>
						<div className="content">
							<h4>Health Out-Reach </h4>
							<label>Sunday, 15th May</label>
						</div>
						<label>08:30 AM</label>
					</div>
					<div className="event">
						<div className="icon_wrapper">
							<MdHouse className="icon" />
						</div>
						<div className="content">
							<h4>Housing Out-Reach </h4>
							<label>Tuesday, 17th May</label>
						</div>
						<label>08:30 AM</label>
					</div>
					<div className="event">
						<div className="icon_wrapper">
							<GiRoad className="icon" />
						</div>
						<div className="content">
							<h4>Roads Out-Reach </h4>
							<label>Friday, 20th May</label>
						</div>
						<label>08:30 AM</label>
					</div>
					<button onClick={() => alert("Coming Soon")}>
						See all activities
					</button>
				</div>
			</div>
			<div className="spacer" />
			<div className="parent" style={{ justifyContent: "space-between" }}>
				<div className="table">
					<div className="navs">
						<h6>Activities</h6>
						<h6
							className={` ${
								data.status === "health" ? "active" : ""
							} `}
							onClick={() =>
								setData({
									content: healthplans,
									status: "health",
								})
							}
						>
							Health
						</h6>
						<h6
							className={` ${
								data.status === "house" ? "active" : ""
							} `}
							onClick={() =>
								setData({
									content: housePlans,
									status: "house",
								})
							}
						>
							Housing
						</h6>
						<h6
							className={` ${
								data.status === "roads" ? "active" : ""
							} `}
							onClick={() =>
								setData({ content: roadPlans, status: "roads" })
							}
						>
							Road
						</h6>
					</div>
					<DataGrid
						columns={
							data.status === "roads" ? RoadColumns : columns
						}
						rows={data.content}
						getRowId={(row) => row._id}
					/>
				</div>
				<div className="feedback-wrapper">
					<h3>User Feedbacks</h3>
					{Feedbacks[0] ? (
						React.Children.toArray(
							Feedbacks.map((one) => (
								<FeebackView
									sector={one.title}
									data={JSON.parse(one.data)}
								/>
							))
						)
					) : (
						<strong style={{ textAlign: "center" }}>
							Loading...
						</strong>
					)}
				</div>
			</div>
		</div>
	);
}
