import  './daily.css'

export default function Daily() {
    return (
        <div className='lefts'>
         <div className="daily">
        <h2>Daily Analytics</h2>
        <div className="item houses">
          <div className="icon">
            <span class="material-icons-sharp">gite</span>
          </div>
          <div className="right">
            <div className="info">
              <h3>House Built</h3>
              <small className="text-muted">Last 24hours</small>
            </div>
            <h5 className="success">+39%</h5>
            <h3>324</h3>
          </div>
        </div>
        <div className="item patient">
          <div className="icon">
            <span class="material-icons-sharp">bloodtype</span>
          </div>
          <div className="right">
            <div className="info">
              <h3>Patient</h3>
              <small className="text-muted">Last 24hours</small>
            </div>
            <h5 className="success">+54%</h5>
            <h3>675</h3>
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
            <h5 className="success">+39%</h5>
            <h3>45Km</h3>
          </div>
        </div>
        <div className="item add-record">
          <div>
            <span class="material-icons-sharp">add_circle_outline</span>
            <h3> Add record</h3>
          </div>
        </div>
      </div>
      </div>
    )
}