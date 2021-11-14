import "./ListcardView.css";
import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { ModalBooking } from "./ModalBooking/ModalBooking";
import homeIcon from "../../assets/image/homeIcon.svg";
import Fetch from "../../api/request";

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
    " http://ec2-3-127-145-151.eu-central-1.compute.amazonaws.com:8000/";

  useEffect(() => {
    Fetch("listing/all", { method: "GET" }).then((response) => {
      setHomeListings(response);
    });
  }, []);

  let CardFilter = homeListings.filter((el) => {
    return el.id == id;
  });
  /* ***************Booking code**************** */
  const startDateFromState = startDate === null ? new Date() : startDate;
  console.log(startDateFromState);
  const endDateFromState = endDate === null ? new Date() : endDate;
  console.log(endDateFromState);

  const startDateForServer = `${startDateFromState.getDate()}/${
    startDateFromState.getMonth() + 1
  }/${startDateFromState.getFullYear()}`;
  console.log(startDateForServer);

  const endDateForServer = `${endDateFromState.getDate()}/${
    endDateFromState.getMonth() + 1
  }/${endDateFromState.getFullYear()}`;
  console.log(endDateForServer);

  /* **************************************** */

  const postBooking = () => {
    Fetch(`listing/${CardFilter[0].id}/book`, {
      method: "POST",
      body: { checkIn: startDate, checkOut: endDate },
    });
  };

  /* ********************************* */
  return CardFilter.map((el) => {
    return (
      <div className="title">
        <div className="adpage">
          <div className="cardbox">
            <div className="img-div-card">
              <img
                className="imgAd"
                src={linkServer + el.image.path}
                alt="photo"
              />
            </div>
            <div className="span-div">
              <img className="homeicon" src={homeIcon} />
              <span className="cityname">{el.city.title}</span> <span>|</span>{" "}
              <span>{el.address}</span>
            </div>
            <p className="p-p-p">{el.title}</p>
            <hr />
            <p>User Name</p>
            <hr />
            <p className="p-p">About this space</p>
            <div>
              <button className="btn-listcard">{el.type}</button>
              <button className="btn-listcard">{el.numOfGuests} Guests</button>
            </div>
            <div className="div-dis">{el.description}</div>
          </div>
          <div className="bookingbox">
            <div className="bookpadding">
              <p className="price">${el.price}/day</p>
              <hr />
              <b>
                <p>Check In</p>
              </b>
              <DatePicker
                selected={startDate}
                onChange={(date) => {
                  setStartDate(date);
                }}
                dateFormat="yyyy/MM/dd"
                minDate={new Date()}
                maxDate={endDate}
                placeholderText="Select date"
              />
              <b>
                <p>Check Out</p>
              </b>
              <DatePicker
                selected={endDate}
                onChange={(date) => {
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
              <p className="p-button">You won't be charged yet</p>
            </div>
          </div>
          <ModalBooking
            rentalDays={rentalDays}
            price={el.price}
            show={modalShow}
            onHide={() => setModalShow(false)}
            postBooking={postBooking}
          />
        </div>
      </div>
    );
  });
};
