import "./searchPage.css";
import { useSelector } from "react-redux";
import { HouseCart } from "../HouseCard/HouseCard";

export const Search = () => {
  const stateCard = useSelector((state) => state.userHouse);
  return (
    <div className="search-box">
      {stateCard.map((el) => {
        return (
          <HouseCart data={el} />
        );
      })}
    </div>
  );
};
