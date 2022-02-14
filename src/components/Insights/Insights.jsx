import "./insights.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethod";

export default function Insights() {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);
  const [count, setCount] = useState();

  useEffect(() => {
    const getCount = async () => {
      try {
        const count = await userRequest.get("Health/count/all")
        setCount(count.data);
      } catch {}
    };
    getCount();
  }, []);


  
  useEffect(() => {
    const getIncome = async () => {
      try {
        const count = await userRequest.get("Health/count/all")
        const res = await userRequest.get("Health/week/patient");
        setIncome(res.data);
        setPerc((res.data[1].total * 100) / res.data[0].total - 100);
      } catch {}
    };
    getIncome();
  }, []);


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
          <span className="featuredMoney">{count}</span>
          <span className="featuredMoneyRate">
          %{Math.floor(perc)}{" "}
            {perc < 0 ? (
              <ArrowDownward className="featuredIcon negative" />
            ) : (
              <ArrowUpward className="featuredIcon" />
            )}
          </span>
        </div>
        <span className="featuredSub">Compared to last week</span>
      </div>
      <div className="featuredItem">
        <div className="fit">
          <span className="featuredTitle">House</span>
          <div className=" house">
            <span class="material-icons-sharp">home_work</span>
          </div>
        </div>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">24</span>
          <span className="featuredMoneyRate">
            -2 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last week</span>
      </div>
      <div className="featuredItem">
        <div className="fit">
          <span className="featuredTitle">Roads</span>
          <div className=" road">
            <span class="material-icons-sharp">add_road</span>
          </div>
        </div>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">18Km</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last week</span>
      </div>
    </div>
  );
}
