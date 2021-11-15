import "./Content.css";
import BigCities from "../../Components/BigCities/BigCities";
import { ListingCards } from "../../Components/ListingCards/ListingCards";
import { BtnPopular } from "../../Components/BtnPopular/BtnPopular";
import TwoCities from "../../Components/TwoCities/TwoCities";

const Content = () => {
  return (
    <>
      <BigCities />
      <BtnPopular />
      <div className="listings">
        <ListingCards />
      </div>
      <TwoCities />
    </>
  );
};

export default Content;
