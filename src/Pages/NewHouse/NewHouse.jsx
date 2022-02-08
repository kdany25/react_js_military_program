import "./newhouse.css";

export default function NewHouse() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Add a House</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Full Owner Names</label>
          <input type="text" placeholder="john" />
        </div>
        
        <div className="newUserItem">
          <label>People in House</label>
          <input type="text" placeholder="3" />
        </div>
        
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+250788730199" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="Kigali | Rwanda" />
        </div>
        
        <div className="newUserItem">
          <label>New House</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">True</option>
            <option value="no">False</option>
          </select>
        </div>
        <button className="newUserButton">Add patient</button>
      </form>
    </div>
  );
}