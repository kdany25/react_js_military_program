import styled from "styled-components";
import { mobile } from "../../responsive";
import { useState } from "react";
import { addUser } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";

const Container = styled.div`
	width: 80%;
	height: 70vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Wrapper = styled.div`
	width: 70%;
	padding: 40px;
	background-color: white;
	border-radius: 20px;
	${mobile({ width: "75%" })}
`;

const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
	align-items: center;
	text-align: center;
`;

const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
`;

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 20px 10px 0px 0px;
	padding: 10px;
`;

const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 20px;
	background-color: teal;
	color: white;
	cursor: pointer;
	margin: 20px 0px;
	margin-left: 12rem;
	border-radius: 8px;
`;

const SignUp = () => {
	const [inputs, setInputs] = useState({});
	const dispatch = useDispatch();

	const handleChange = (e) => {
		setInputs((prev) => {
			return { ...prev, [e.target.name]: e.target.value };
		});
	};
	const handleClick = (e) => {
		e.preventDefault();

		const user = { ...inputs };
		addUser(user, dispatch);
	};
	return (
		<Container>
			<Wrapper>
				<Title>Add admin</Title>
				<Form>
					<Input
						placeholder="First name"
						name="firstName"
						type="text"
						onChange={handleChange}
					/>
					<Input
						placeholder="last name"
						name="lastName"
						type="text"
						onChange={handleChange}
					/>
					<Input placeholder="username" name="username" type="text" />
					<Input
						placeholder="email"
						name="email"
						type="text"
						onChange={handleChange}
					/>
					<Input
						placeholder="password"
						name="password"
						type="text"
						onChange={handleChange}
					/>
					<Input
						placeholder="phone"
						name="phone"
						type="text"
						onChange={handleChange}
					/>

					<Button onClick={handleClick}>CREATE</Button>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default SignUp;
