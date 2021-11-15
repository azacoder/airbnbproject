import "./Cities.css";
import { useSelector } from "react-redux";
import { HouseCart } from "../HouseCard/HouseCard";

export const Cities = () => {
  const CityesFromStore = useSelector(state => state.cityData);
  return (
    <div className="cityes-box">
      {CityesFromStore.map((el) => {
        return (
          <HouseCart data={el} />
        );
      })}
    </div>
  );
}