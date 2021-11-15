import React, { useEffect, useState } from "react";
import "./BigCities.css";
import { Redirect } from "react-router";
import { Form, FormControl, Button, Image, Spinner } from "react-bootstrap";
import Fetch from "../../api/request";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { houseAction } from "../../store/action/action";
import { cityesAction } from "../../store/action/action";
import search1 from "../../assets/image/search3.svg";
import Bishkek from "../../assets/image/Bi.jpg";
import JalalAbad from "../../assets/image/jal.jpg";
import Talas from "../../assets/image/talas.jpg";
import YssykKul from "../../assets/image/kol.jpg";
import Osh from "../../assets/image/osh.jpg";
import Chuy from "../../assets/image/bu.jpg";
import Batken from "../../assets/image/aigul.jpg";
import Naryn from "../../assets/image/naryn.jpg";

const imgMass = [
  {
    id: 0,
    img: Bishkek,
  },
  {
    id: 1,
    img: JalalAbad,
  },
  {
    id: 2,
    img: Talas,
  },
  {
    id: 3,
    img: YssykKul,
  },
  {
    id: 5,
    img: Chuy,
  },
  {
    id: 4,
    img: Osh,
  },
  {
    id: 6,
    img: Batken,
  },
  {
    id: 7,
    img: Naryn,
  },
];

const BigCities = () => {
  const [inputValue, setInputValue] = useState("");
  const [uploadSearch, setUploadSearch] = useState(false);
  const cityesFromStore = useSelector((state) => state.cityData);
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(true);
  const [cityes, setCityes] = useState("");
  const [idCityes, setIdCityes] = useState("");
  const [successUploadCityes, setSuccessUploadCityes] = useState(false);

  useEffect(() => {
    fetch(
      "http://ec2-3-127-145-151.eu-central-1.compute.amazonaws.com:8000/api/cities/all",
      {
        method: "GET",
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("token is not correct");
        }
        return res.json();
      })
      .then((result) => {
        setCityes(result.data);
        setIsLoaded(false);
      })
      .catch((error) => {
        localStorage.removeItem("IdTokenGoogle");
        setIsLoaded(false);
      });
  }, []);

  const getSearch = () => {
    Fetch(`listing/search?value=${inputValue}`, { method: "GET" }).then(
      (response) => {
        console.log(response);
        dispatch(houseAction(response));
        setUploadSearch(true);
      }
    );
  };

  const handleChangeInput = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  if (uploadSearch) {
    return <Redirect to="/search" />;
  }

  const array3 = imgMass.map((item, index) => ({
    ...item,
    ...cityes[index],
  }));

  const getCityId = (e) => {
    let city = e.target.id;

    const getHouses = () => {
      Fetch(`listing/all?cityId=${city}`, {
        method: "GET",
      }).then((response) => {
        console.log(response);
        dispatch(cityesAction(response));
        setSuccessUploadCityes(true);
      });
    };
    getHouses(city);
  };
  console.log(idCityes);

  console.log(cityesFromStore);
  if (successUploadCityes) {
    return <Redirect to="/cityes" />;
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
                placeholder="Search 'Kyrgyzstan'"
                className="mr-2"
                aria-label="Search"
                onChange={handleChangeInput}
              />
              <Button onClick={getSearch}>
                <Image className="imgSearch" src={search1} />
              </Button>
            </Form>
            <div className="parentbox">
              {array3.map((el) => {
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
