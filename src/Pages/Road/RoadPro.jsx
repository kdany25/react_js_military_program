import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
  } from "@material-ui/icons";
  import "./roadpro.css";
  import { useLocation } from "react-router-dom";
  import { useSelector } from "react-redux";
  
  export default function Road() {
    const location = useLocation();
    const roadId = location.pathname.split("/")[2];
  
    const road= useSelector((state) =>
    state.road.roads.find((road) => road._id === roadId)
    );
    return (
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle"> Roads details</h1>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img
                src="https://i.ibb.co/Yyt2P4b/Capture.png"
                alt=""
                className="userShowImg"
              />
              <div className="userShowTopTitle">
                <span className="userShowUsername">{road.place}</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle"> Details</span>
              <div className="userShowInfo">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">{road.kmreached}</span>
              </div>
            
              <span className="userShowTitle">Details</span>
              <div className="userShowInfo">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">{road.desc}</span>
              </div>
              <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">{road.createdAt}</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Place</label>
                  <input
                    type="text"
                    placeholder={road.place}
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Km</label>
                  <input
                    type="text"
                    placeholder={road.kmreached}
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>description</label>
                  <input
                    type="text"
                    placeholder={road.desc}
                    className="userUpdateInput"
                  />
                </div>
                
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img
                    className="userUpdateImg"
                    src="https://i.ibb.co/Yyt2P4b/Capture.png"
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
  