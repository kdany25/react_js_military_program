import "./newroad.css";
import { useState } from "react";
import { addRoad } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";

export default function NewRoad() {
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleClick = (e) => {
    e.preventDefault();

    const road = { ...inputs };
    addRoad(road, dispatch);
  };
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New Road</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Place</label>
          <input name="place" type="text" placeholder="Kibagabaga" onChange={handleChange} />
        </div>
        <div className="newUserItem">
          <label>km</label>
          <input name="kmreached"  type="email" placeholder="5" onChange={handleChange}/>
        </div>
        <div className="newUserItem">
          <label>Description</label>
          <input name="desc"  type="text" placeholder="......." onChange={handleChange}/>
        </div>
       
        <button onClick={handleClick}  className="newUserButton">Add record</button>
      </form>
    </div>
  );
}
