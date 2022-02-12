import "./newhouse.css";

import { useState } from "react";
import { addHouse } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";

export default function NewHouse() {
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleClick = (e) => {
    e.preventDefault();

    const house = { ...inputs };
    addHouse(house, dispatch);
  };
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Add a House</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Full Owner Names</label>
          <input name="owner" type="text" placeholder="john"  onChange={handleChange} />
        </div>
        
        <div className="newUserItem">
          <label>People in House</label>
          <input name="peopleInhouse" type="text" placeholder="3"  onChange={handleChange}/>
        </div>
        
        <div className="newUserItem">
          <label>Phone</label>
          <input name="phone" type="text" placeholder="+250788730199"  onChange={handleChange} />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input name="address" type="text" placeholder="Kigali | Rwanda"  onChange={handleChange}/>
        </div>
        
        <div className="newUserItem">
          <label>New House</label>
          <select name="newHouse" className="newUserSelect" id="active">
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>
        <button  onClick={handleClick} className="newUserButton">Add patient</button>
      </form>
    </div>
  );
}