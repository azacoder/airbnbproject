import "./BigCities.css";
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { Form, FormControl, Button, Image, Spinner } from "react-bootstrap";
import Fetch from "../../api/request";
import { useDispatch } from "react-redux";
import { houseAction, cityesAction } from "../../store/action/action";
import search1 from "../../assets/image/search3.svg";

import Bishkek from "../../assets/image/bishkek.jpg";
import JalalAbad from "../../assets/image/sary.jpg";
import Talas from "../../assets/image/talas.jpg";
import YssykKul from "../../assets/image/yssykkol.jpg";
import Osh from "../../assets/image/osh1.jpg";
import Chuy from "../../assets/image/chuy.jpg";
import Batken from "../../assets/image/aigul1.jpg";
import Naryn from "../../assets/image/naryn2.jpg";

const imgMass = [
  {
    img: Bishkek
  },
  {
    img: JalalAbad
  },
  {
    img: Talas
  },
  {
    img: YssykKul
  },
  {
    img: Chuy
  },
  {
    img: Osh
  },
  {
    img: Batken
  },
  {
    img: Naryn,
  },
];

const BigCities = () => {
  const dispatch = useDispatch();

  const [inputSearch, setinputSearch] = useState("");
  const [uploadSearch, setUploadSearch] = useState(false);
  const [cityes, setCityes] = useState("");
  const [successUploadCityes, setSuccessUploadCityes] = useState(false);
  const [isLoaded, setIsLoaded] = useState(true);


  useEffect(() => {
    Fetch("cities/all", { method: "GET" }).then((result) => {
      setCityes(result);
      setIsLoaded(false);
    })
  }, []);

  const getSearch = () => {
    Fetch(`listing/search?value=${inputSearch}`, { method: "GET" }).then(
      (response) => {
        console.log(response);
        dispatch(houseAction(response));
        setUploadSearch(true);
      }
    );
  };
  const getHouses = (city) => {
    Fetch(`listing/all?cityId=${city}`, {
      method: "GET",
    }).then((response) => {
      console.log(response);
      dispatch(cityesAction(response));
      setSuccessUploadCityes(true);
    });
  };

  const getCityId = (e) => {
    let city = e.target.id;
    getHouses(city);
  };



  const handleChangeSearch = (e) => {
    const value = e.target.value;
    setinputSearch(value);
  };


  const concatArray = imgMass.map((item, index) => ({
    ...item,
    ...cityes[index],
  }));



  if (successUploadCityes) {
    return <Redirect to="/cityes" />;
  }
  else if (uploadSearch) {
    return <Redirect to="/search" />;
  }

  return (
    <>
      {isLoaded ? (
        <Spinner animation="border" />
      ) : (
        <div className="main-div">
          <div className="div1">
            <h1>Find a place you'll love to stay at</h1>
            <Form className="containerSearch">
              <FormControl
                type="search"
                placeholder="Search in 'Kyrgyzstan'"
                className="mr-2"
                aria-label="Search"
                onChange={handleChangeSearch}
              />
              <Button onClick={getSearch}>
                <Image className="imgSearch" src={search1} />
              </Button>
            </Form>
            <div className="parentbox">
              {concatArray.map((el) => {
                return (
                  <div className="box">
                    <img
                      onClick={getCityId}
                      className="imgCityes"
                      id={el.id}
                      src={el.img}
                      alt=""
                    />
                    <p class="imgText">{el.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BigCities;
