import "./style.css";
import { useState } from "react";
import { addHealthPlan } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";

export default function NewHealthPlan() {
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
    addHealthPlan(Hplan, dispatch);
  };
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New Health Plan</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>location</label>
          <input name="location" type="text" placeholder="Huye" onChange={handleChange} />
        </div>
        <div className="newUserItem">
          <label>Number</label>
          <input name="number"  type="text" placeholder="256" onChange={handleChange}/>
        </div>
        <div className="newUserItem">
          <label>Desease</label>
          <input name="desease"  type="text" placeholder="Malaria" onChange={handleChange}/>
        </div>
        <div className="newUserItem">
          <label>period</label>
          <input name="period"  type="text" placeholder="august-march" onChange={handleChange} />
        </div>
        <div className="newUserItem">
          <label>doctor</label>
          <input  name="doctor"  type="text" placeholder="Dr karenzi"  onChange={handleChange}/>
        </div>
        <div className="newUserItem">
          <label>cost</label>
          <input name="cost"  type="text" placeholder="245M" onChange={handleChange} />
        </div>
        <div className="newUserItem">
          <label>Priority</label>
          <input name="priority"  type="text" placeholder="5" onChange={handleChange}/>
        </div>
        <button onClick={handleClick}  className="newUserButton">Add Health Plan</button>
      </form>
    </div>
  );
}
