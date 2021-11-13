import React from "react";
import "./BigCities.css";
import {
  Form,
  FormControl,
  Button,
  Image,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";
import search1 from "../../assets/image/search3.svg";
import Bishkek from '../../assets/image/bishkek.jpg'
import JalalAbad from '../../assets/image/jalal-abad.jpg';
import Talas from '../../assets/image/talas.jpg'
import YssykKul from '../../assets/image/yssykkol.jpg';
import Osh from '../../assets/image/osh1.jpg'
import Chuy from '../../assets/image/chuy.jpg';
import Batken from '../../assets/image/aigul1.jpg'
import Naryn from '../../assets/image/naryn2.jpg'
import Fetch from "../../api/request";
import { useSelector } from "react-redux";
import { cityesAction } from "../../store/action/action";

const BigCities = () => {
  const cityesFromStore = useSelector((state) => state.cityData);
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(true);
  const [cityes, setCityes] = useState("");
  const [idCityes, setIdCityes] = useState("");
  const [successUploadCityes, setSuccessUploadCityes] = useState(false);

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
        <p>Loading....</p>
      ) : (
        <div className="main-div">
          <div className="div1">
            <h1>Find a place you'll love to stay at</h1>
            <Form className="containerSearch">
              <FormControl
                type="search"
                placeholder="Search 'San Fransisco'"
                className="mr-2"
                aria-label="Search"
              />
              <Button>
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