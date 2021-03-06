import  './daily.css'

export default function Daily() {
    return (
        <div className='lefts'>
         <div className="daily">
        <h2>Daily Analytics</h2>
        <div className="item patient">
          <div className="icon">
            <span class="material-icons-sharp">bloodtype</span>
          </div>
          <div className="right">
            <div className="info">
              <h3>Patients</h3>
              <small className="text-muted">Last 24hours</small>
            </div>
            <h5 className="success">+4%</h5>
            <h3>99</h3>
          </div>
        </div>
        <div className="item houses">
          <div className="icon">
            <span class="material-icons-sharp">gite</span>
          </div>
          <div className="right">
            <div className="info">
              <h3>House </h3>
              <small className="text-muted">Last 24hours</small>
            </div>
            <h5 className="success">+2%</h5>
            <h3>4</h3>
          </div>
        </div>
        
        <div className="item rod">
          <div className="icon">
            <span class="material-icons-sharp">edit_road</span>
          </div>
          <div className="right">
            <div className="info">
              <h3>Roads</h3>
              <small className="text-muted">Last 24hours</small>
            </div>
            <h5 className="success">+3%</h5>
            <h3>1.3Km</h3>
          </div>
        </div>
        
      </div>
      </div>
    )
}