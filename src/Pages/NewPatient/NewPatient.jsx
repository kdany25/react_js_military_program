import "./new.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Full Names</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Desease</label>
          <input type="text" placeholder="Malaria" />
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
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Hospitalised</label>
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