import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/Insights/Insights";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/WidgetSm/Widgets";
import WidgetLg from "../../components/widgetLG/WidgetL";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}