import "./MyContent.css";
import BigCities from "../../Components/BigCities/BigCities";
import { ListingCards } from "../../Components/ListingCards/ListingCards";
import CompTwoCities from "../../Components/CompTwoCities/CompTwoCities";
import { BtnPopular } from "../../Components/BtnPopular/BtnPopular";

const MyContent = () => {
  return (
    <>
      <BigCities />
      <BtnPopular />
      <div className="list">
        <ListingCards />
      </div>
      <CompTwoCities />
    </>
  );
};

export default MyContent;
