import styled from "styled-components";
import {mobile} from "../../responsive";
// import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
// import { login } from "../redux/apiCalls";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: 
    url("https://i.ibb.co/tB819Kz/arton8.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  border-radius : 20px;
  ${mobile({ width: "75%" })}
  
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  align-items: center;
  text-align: center;
  
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  border: none;
  border-bottom: 1px solid rgb(136, 131, 131);
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  };
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius :8px;
  margin-left : 6rem
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
//   const dispatch = useDispatch();
//   const { isFetching, error } = useSelector((state) => state.user);

//   const handleClick = (e) => {
//     e.preventDefault();
//     login(dispatch, { username, password });
//   };
  return (
    <Container>
    <Wrapper>
      <Title>Login</Title>
      <Form>
        <Input
          placeholder="email"
        //   onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          placeholder="password"
          type="password"
        //   onChange={(e) => setPassword(e.target.value)}
        />
         <Button >
          LOGIN
        </Button>
        {/* {error && <Error>Something went wrong...</Error>} */}
      </Form>
    </Wrapper>
  </Container>
  );
};

export default Login;