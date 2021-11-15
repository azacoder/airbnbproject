import "./ListingCard.css";
import Fetch from "../../api/request";
import React, { useEffect, useState } from "react";
import { HouseCart } from "../HouseCard/HouseCard";

export const ListingCards = () => {
  const [homeListings, setHomeListings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Fetch("listing/all", { method: "GET" }).then((response) => {
      setHomeListings(response);
      setIsLoading(false)
    });
  }, []);

  const sliceListings = homeListings.slice(Math.max(homeListings.length - 8, 0))

  return (
    <>{isLoading ? <p>Loading...</p> :
      <div className="listings-box">
        {sliceListings.map((el) => {
          return <HouseCart data={el} />
        })}
      </div>}</>
  );
};

