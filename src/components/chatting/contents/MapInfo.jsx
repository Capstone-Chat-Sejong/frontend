import { useEffect, useState } from "react";
import { QUICK_API } from "../../../services/api/quick";

function MapInfo() {
  const [data, setData] = useState(null);

  useEffect(() => {
    QUICK_API.getButtonClick("교내 지도").then((res) => console.log(res));
  }, []);
  return <div>지도</div>;
}
export default MapInfo;
