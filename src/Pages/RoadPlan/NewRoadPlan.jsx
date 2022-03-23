import "./style.css";
import { useState } from "react";
import { addRoadPlan } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";

export default function NewRoadPlan() {
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleClick = (e) => {
    e.preventDefault();

    const Rplan = { ...inputs };
    addRoadPlan(Rplan, dispatch);
  };
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New Road Plan</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>location</label>
          <input name="location" type="text" placeholder="Huye" onChange={handleChange} />
        </div>
        <div className="newUserItem">
          <label>Km reached</label>
          <input name="kmreached"  type="text" placeholder="256" onChange={handleChange}/>
        </div>
        <div className="newUserItem">
          <label>Desc</label>
          <input name="desc"  type="text" placeholder="....." onChange={handleChange}/>
        </div>
        <div className="newUserItem">
          <label>period</label>
          <input name="period"  type="text" placeholder="august-march" onChange={handleChange} />
        </div>
        <div className="newUserItem">
          <label>Engineer</label>
          <input  name="engineer"  type="text" placeholder="Eng karenzi"  onChange={handleChange}/>
        </div>
        <div className="newUserItem">
          <label>cost</label>
          <input name="cost"  type="text" placeholder="245M" onChange={handleChange} />
        </div>
        <div className="newUserItem">
          <label>Priority</label>
          <input name="priority"  type="text" placeholder="Kigali | Rwanda" onChange={handleChange}/>
        </div>
        <button onClick={handleClick}  className="newUserButton">Add Road Plan</button>
      </form>
    </div>
  );
}
