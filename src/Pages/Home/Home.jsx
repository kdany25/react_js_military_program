import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/Insights/Insights";
import "./home.css";
import { userData } from "../../dummyData";
import Daily from "../../components/daily/Daily";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethod";
import Recent from "../../components/Recent/Recent"

export default function Home() {
  const [userStats, setUserStats] = useState([]);

  const WEEKS = useMemo(
    () => [
     
      "week 6",
      "week 7",
     
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/Health/week/patient");
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name:WEEKS[item._id - 1], "Active User": item.total },
          ])
        );
      } catch {}
    };
    getStats();
  }, [WEEKS]);
  return (
    <div className="home">
      <FeaturedInfo />
      <div className="homec">
      <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <Daily/>
      </div>
    </div>
  );
}