import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/Insights/Insights";
import "./home.css";
import { userData } from "../../dummyData";
import Daily from "../../components/daily/Daily";
import Recent from "../../components/Recent/Recent";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <div className="homec">
      <Chart data={userData} title="Action Analytics" grid dataKey="Active User"/>
      <Daily/>
      </div>
        
        <Recent/>
      
    </div>
  );
}