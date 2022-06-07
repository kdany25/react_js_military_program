import "./styleH.css";
import { useState } from "react";
import { addHousePlan } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";

export default function NewHousePlan() {
	const [inputs, setInputs] = useState({});
	const dispatch = useDispatch();

	const handleChange = (e) => {
		setInputs((prev) => {
			return { ...prev, [e.target.name]: e.target.value };
		});
	};
	const handleClick = (e) => {
		e.preventDefault();

		const Hplan = { ...inputs };
		addHousePlan(Hplan, dispatch);
	};
	return (
		<div className="newUser">
			<h1 className="newUserTitle">New House Plan</h1>
			<form className="newUserForm">
				<div className="newUserItem">
					<label>location</label>
					<input
						name="location"
						type="text"
						placeholder="Huye"
						onChange={handleChange}
					/>
				</div>
				<div className="newUserItem">
					<label>Number</label>
					<input
						name="number"
						type="text"
						placeholder="256"
						onChange={handleChange}
					/>
				</div>

				<div className="newUserItem">
					<label>period</label>
					<input
						name="period"
						type="text"
						placeholder="august-march"
						onChange={handleChange}
					/>
				</div>

				<div className="newUserItem">
					<label>cost</label>
					<input
						name="cost"
						type="text"
						placeholder="245M"
						onChange={handleChange}
					/>
				</div>
				<div className="newUserItem">
					<label>Priority</label>
					<input
						name="priority"
						type="text"
						placeholder="5"
						onChange={handleChange}
					/>
				</div>
				<button onClick={handleClick} className="newUserButton">
					Add House Plan
				</button>
			</form>
		</div>
	);
}
