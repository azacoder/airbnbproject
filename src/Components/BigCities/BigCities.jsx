import React from "react";
import "./BigCities.css";
import {
  Form,
  FormControl,
  Button,
  Image,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import search1 from "../../assets/image/search3.svg";
import Bishkek from '../../assets/image/bishkek.jpg'
import JalalAbad from '../../assets/image/jalalabad.jpg';
import Talas from '../../assets/image/talas.jpg'
import YssykKul from '../../assets/image/YssykKol2.jpg';
import Osh from '../../assets/image/osh.jpg'
import Chuy from '../../assets/image/towers.jpeg';
import Batken from '../../assets/image/aigul.jpg'
import Naryn from '../../assets/image/naryn2.jpg'

const BigCities = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [cityes, setCityes] = useState(" ");

  const imgMass = [
    {
      id: 0,
      img: Bishkek
    },
    {
      id: 1,
      img: JalalAbad
    },
    {
      id: 2,
      img: Talas
    },
    {
      id: 3,
      img: YssykKul
    },
    {
      id: 5,
      img: Chuy,
    },
    {
      id: 4,
      img: Osh
    },
    {
      id: 6,
      img: Batken,
    },
    {
      id: 7,
      img: Naryn,
    }
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

  console.log(array3);

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
                    <img className="imgCityes" src={el.img} alt="" />
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