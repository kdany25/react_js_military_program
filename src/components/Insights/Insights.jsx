import "./insights.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function Insights() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <div className="fit">
        <span className="featuredTitle">Health</span>
        <div className="sp">
        <span class="material-icons-sharp">medical_services</span>
        </div>
        </div>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">786</span>
          <span className="featuredMoneyRate">
            +89 <ArrowUpward  className="featuredIcon "/>
          </span>
        </div>
        <span className="featuredSub">Compared to yesterday</span>
      </div>
      <div className="featuredItem">
      <div className="fit">
        <span className="featuredTitle">House</span>
        <div className=" house">
        <span class="material-icons-sharp">home_work</span>
        </div>
        </div>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">253</span>
          <span className="featuredMoneyRate">
            21 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last week</span>
      </div>
      <div className="featuredItem">
      <div className="fit">
        <span className="featuredTitle">Roads</span>
        <div className=" road">
        <span class="material-icons-sharp">add_road</span>
        </div></div>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">52Km</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last year</span>
      </div>
    </div>
  );
}