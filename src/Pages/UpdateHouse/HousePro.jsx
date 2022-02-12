import {
    LocationSearching,
    PermIdentity,
    PhoneAndroid,
    Publish,
    CalendarToday
  } from "@material-ui/icons";
  import "./housepro.css";
  import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
  
  export default function HousePro() {
    const location = useLocation();
    const houseId = location.pathname.split("/")[2];
  
    const house= useSelector((state) =>
    state.house.houses.find((house) => house._id === houseId)
    );
    return (
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle"> Edit House details</h1>
          
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img
                src="https://i.ibb.co/2sGkcvZ/homesmall.png"
                alt=""
                className="userShowImg"
              />
              <div className="userShowTopTitle">
                <span className="userShowUsername">{house.owner}</span>
                
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle"> Details</span>
              <div className="userShowInfo">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">{house.peopleInhouse} people in House</span>
              </div>
              <div className="userShowInfo">
                <CalendarToday className="userShowIcon" />
                <span className="userShowInfoTitle">{house.createdAt}</span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">{house?.phone}</span>
              </div>
              {/* <div className="userShowInfo">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">kabadany99@gmail.com</span>
              </div> */}
              <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">{house.address}</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                
                <div className="userUpdateItem">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder={house.owner}
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>People In House</label>
                  <input
                    type="text"
                    placeholder={house.peopleInhouse}
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder={house.phone}
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder={house.address}
                    className="userUpdateInput"
                  />
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img
                    className="userUpdateImg"
                    src="https://i.ibb.co/2sGkcvZ/homesmall.png"
                    alt=""
                  />
                  <label htmlFor="file">
                    <Publish className="userUpdateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="userUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }