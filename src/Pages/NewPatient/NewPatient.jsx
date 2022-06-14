import "./new.css";
import { useState } from "react";
import { addPatient } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";

export default function NewPatient() {
	const [inputs, setInputs] = useState({});
	const dispatch = useDispatch();

	const handleChange = (e) => {
		setInputs((prev) => {
			return { ...prev, [e.target.name]: e.target.value };
		});
	};
	const handleClick = (e) => {
		e.preventDefault();

		const patient = { ...inputs };
		addPatient(patient, dispatch);
	};
	return (
		<div className="newUser">
			<h1 className="newUserTitle">New Patient</h1>
			<form className="newUserForm">
				<div className="newUserItem">
					<label>Full Names</label>
					<input
						name="pname"
						type="text"
						placeholder="john"
						onChange={handleChange}
					/>
				</div>
				<div className="newUserItem">
					<label>Email</label>
					<input
						name="email"
						type="email"
						placeholder="john@gmail.com"
						onChange={handleChange}
					/>
				</div>
				<div className="newUserItem">
					<label>Desease</label>
					<input
						name="desease"
						type="text"
						placeholder="Malaria"
						onChange={handleChange}
					/>
				</div>
				<div className="newUserItem">
					<label>Age</label>
					<input
						name="age"
						type="text"
						placeholder="30"
						onChange={handleChange}
					/>
				</div>
				<div className="newUserItem">
					<label>Hospital</label>
					<input type="text" placeholder="Kibagabaga" />
				</div>
				<div className="newUserItem">
					<label>Phone</label>
					<input
						name="phone"
						type="text"
						placeholder="+250788730199"
						onChange={handleChange}
					/>
				</div>
				<div className="newUserItem">
					<label>Address</label>
					<input
						name="address"
						type="text"
						placeholder="Kigali | Rwanda"
						onChange={handleChange}
					/>
				</div>
				<div className="newUserItem">
					<label>Gender</label>
					<div className="newUserGender">
						<input
							type="radio"
							name="gender"
							id="male"
							value="male"
						/>
						<label for="male">Male</label>
						<input
							type="radio"
							name="gender"
							id="female"
							value="female"
						/>
						<label for="female">Female</label>
						<input
							type="radio"
							name="gender"
							id="other"
							value="other"
						/>
						<label for="other">Other</label>
					</div>
				</div>
				<div className="newUserItem">
					<label>Hospitalised</label>
					<select
						className="newUserSelect"
						name="hospitalised"
						id="active"
					>
						<option value="true">True</option>
						<option value="false">False</option>
						onChange={handleChange}
					</select>
				</div>
				<button onClick={handleClick} className="newUserButton">
					Add patient
				</button>
			</form>
		</div>
	);
}
