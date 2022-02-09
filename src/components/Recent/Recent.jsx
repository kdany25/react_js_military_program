import "./recent.css";

export default function Recent() {
  return (
    <div className="rights">
      <div className="recent-updated">
        <h2>Recent Updates</h2>
        <div className="updates">
         
          <div className="update">
            <div className="profile-photo">
              <img
                src="https://i.ibb.co/NWGzRZW/recent1.png"
                alt=""
                className="topAvatar"
              />
            </div>
            <div className="message">
              <p>
                <b>RDF </b>It is a long established fact that a reader will be
                distracted
              </p>
              <small className="texted-muted">2 day ago</small>
            </div>
          </div>
          <div className="update">
            <div className="profile-photo">
              <img
                src="https://i.ibb.co/NWGzRZW/recent1.png"
                alt=""
                className="topAvatar"
              />
            </div>
            <div className="message">
              <p>
                <b>RDF </b>It is a long established fact that a reader will be
                distracted 
              </p>
              <small className="texted-muted">2 day ago</small>
            </div>
          </div>
          <div className="update">
            <div className="profile-photo">
              <img
                src="https://i.ibb.co/NWGzRZW/recent1.png"
                alt=""
                className="topAvatar"
              />
            </div>
            <div className="message">
              <p>
                <b>RDF </b>It is a long established fact that a reader will be
                distracted 
              </p>
              <small className="texted-muted">10 hours ago</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
