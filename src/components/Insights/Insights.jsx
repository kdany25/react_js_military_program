import "./insights.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethod";

export default function Insights() {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);
  const [count, setCount] = useState();


  const [incomeH, setIncomeH] = useState([]);
  const [percH, setPercH] = useState(0);
  const [countH, setCountH] = useState();

  const [incomeR, setIncomeR] = useState([]);
  const [percR, setPercR] = useState(0);
  const [countR, setCountR] = useState();



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
        const res = await userRequest.get("Health/week/patient");
        const ress = res.data.sort((a, b) => (a._id < b._id) ? 1 : -1)
        setIncome(ress);
        setPerc((ress[0].total * 100) / ress[1].total - 100);
      } catch {}
    };
    getIncome();
  }, []);

  useEffect(() => {
    const getCountH = async () => {
      try {
        const count= await userRequest.get("house/count/all")
        setCountH(count.data);
      } catch {}
    };
    getCountH();
  }, []);


  
  useEffect(() => {
    const getIncomeH = async () => {
      try {
        const res = await userRequest.get("house/week/patient");
        const ress = res.data.sort((a, b) => (a._id < b._id) ? 1 : -1)
        setIncomeH(ress);
        setPercH((ress[0].total * 100) / ress[1].total - 100);
      } catch {}
    };
    getIncomeH();
  }, []);



  useEffect(() => {
    const getCountR = async () => {
      try {
        const count= await userRequest.get("roads/week/sum")
        setCountR(count.data[0].total);
      } catch {}
    };
    getCountR();
  }, []);

  
  useEffect(() => {
    const getIncomeR = async () => {
      try {
        const res = await userRequest.get("roads/week/patient");
        const ress = res.data.sort((a, b) => (a._id < b._id) ? 1 : -1)
        setIncomeR(ress);
        setPercR((ress[0].total * 100) / ress[1].total - 100); ;
    
      } catch {}
    };
    getIncomeR();
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
          {Math.floor(perc)}{"%"}
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
          <span className="featuredMoney">{countH}</span>
          <span className="featuredMoneyRate">
             {Math.floor(percH)}{"%"}
            {percH < 0 ? (
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
          <span className="featuredTitle">Roads</span>
          <div className=" road">
            <span class="material-icons-sharp">add_road</span>
          </div>
        </div>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{countR}Km</span>
          <span className="featuredMoneyRate">
          {Math.floor(percR)}{"%"}
            {percR < 0 ? (
              <ArrowDownward className="featuredIcon negative" />
            ) : (
              <ArrowUpward className="featuredIcon" />
            )}
          </span>
        </div>
        <span className="featuredSub">Compared to last week</span>
      </div>
    </div>
  );
}
