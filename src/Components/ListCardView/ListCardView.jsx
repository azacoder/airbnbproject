import "./ListcardView.css";
import DatePicker from "react-datepicker";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { ModalBooking } from "./ModalBooking/ModalBooking";
import homeIcon from "../../assets/image/homeIcon.svg";
import Fetch from "../../api/request";
import { useEffect } from "react";

export const ListCardView = () => {
  const { id } = useParams();
  const [homeListings, setHomeListings] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const startDay = Date.parse(startDate);
  const endDay = Date.parse(endDate);
  const milseconds = 86400000;
  const rentalDays = (endDay - startDay + milseconds) / milseconds;
  const btnStyle =
    endDate === null || startDate === null
      ? "btn disabled btn-secondary btn-mg "
      : "btn active btn-primary btn-mg";
  const endDateStatus = startDate === null ? true : false;

  const ModalStatus = () => {
    setModalShow(endDate === null || startDate === null ? false : true);
  };

  const linkServer =
    "http://ec2-3-127-145-151.eu-central-1.compute.amazonaws.com:8000/";

  useEffect(() => {

    Fetch("listing/all", { method: "GET" }).then((response) => {
      setHomeListings(response)
    });
  }, [])

  let CardFilter = homeListings.filter((el) => {
    return el.id == id;
  });

  return CardFilter.map((el) =>
  (
    <div className="title">
      <div className="adpage">
        <div className="cardbox">
          <div className="img-card">
            <img
              className="img-house"
              src={linkServer + el.image.path}
              alt="photo"
            />
          </div>
          <div className="span-div">
            <img className="homeicon" src={homeIcon} />
            <span className="cityname">{el.city.title}</span> <span>|</span>{" "}
            <span>{el.address}</span>
          </div>
          <p className="house-info">{el.title}</p>
          <hr />
          <p>User Name</p>
          <hr />
          <p className="about-this-space">About this space</p>
          <div className='buttons'>
            <button className="house-and-guest">{el.type}</button>
            <button className="house-and-guest">{el.numOfGuests} Guests</button>
          </div>
          <div className="description">{el.description}</div>
        </div>

        <div className="bookingbox">
          <div className="book-in">
            <p className="price">${el.price}<span>/day</span></p>
            <hr />
            <p className='check'>Check In</p>
            <DatePicker
              selected={startDate}
              onSelect={(date) => {
                setStartDate(date);
              }}
              dateFormat="yyyy/MM/dd"
              minDate={new Date()}
              maxDate={endDate}
              placeholderText="Select date"
            />
            <p className='check'>Check Out</p>
            <DatePicker
              selected={endDate}
              onSelect={(date) => {
                setEndDate(date);
              }}
              dateFormat="yyyy/MM/dd"
              disabled={endDateStatus}
              minDate={startDate}
              placeholderText="Select date"
            />
            <hr />
            <Button className={btnStyle} onClick={ModalStatus}>
              Request to book
            </Button>
            <p className="last-text">You won't be charged yet</p>
          </div>
        </div>
        <ModalBooking
          rentalDays={rentalDays}
          price={el.price}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </div>
  )
  );
};
