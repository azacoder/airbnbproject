import './ListcardView.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import DatePicker from "react-datepicker";
import { Button} from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import { ModalBooking } from './ModalBooking/ModalBooking';

export const ListCardView = () => {
    
        
    const [homeListings, setHomeListings] =  useState([]);
    const [startDate, setStartDate] = useState(null); 
    const [endDate, setEndDate] = useState(null); 
    const [modalShow, setModalShow] = useState(false);
    let startDay = Date.parse(startDate); 
    let endDay = Date.parse(endDate); 
    let milseconds = 86400000; 
    let rentalDays = (endDay - startDay + milseconds) /milseconds; 
    

    
      const fetchData = () => {
        fetch('/fakeHost/data.json').then(response => {
            return response.json()
        }).then(({data}) => {
          setHomeListings(data)
        });
      }
    
      useEffect(() => {
        fetchData()
        
        
     }, []);
    
    const {id} = useParams(); 

    let CardFilter = homeListings.filter((el)=>{
        return el.id == id
        
    })
    return CardFilter.map((el)=>{
      return(
        <div className="title">
            <div className="adpage">
               <div className="cardbox">
               <div className="img-div-card"><img src={el.image} alt="photo" /></div>
                <div className="span-div"><span>{el.city}</span> | | <span>{el.adress}</span></div>
                <p className="p-p-p">{el.title}</p>
                <hr />
                <p>User Name</p>
                <hr />
                <p className='p-p'>About this space</p>
                <div>
                  <button className="btn-listcard">{el.hometype}</button>
                  <button className="btn-listcard1">{el.guests} Guests</button>
                </div>
                <div className="div-dis">{el.description}</div>

               </div>

                <div className="bookingbox">
                  <div className="bookpadding">
                  <p className="price">${el.price}/day</p>
                  <hr />
                  <b><p>Check In</p></b>
                  <DatePicker 
                      selected={startDate} 
                      onChange={(date)=>{setStartDate(date)}}
                      dateFormat='yyyy/MM/dd'
                      minDate={new Date} 
                      maxDate={endDate}
                      placeholderText="Select date"/> 
                      
                  <b><p>Check Out</p></b>
                  <DatePicker 
                      selected={endDate} 
                      onChange={(date)=>{setEndDate(date)}}
                      dateFormat='yyyy/MM/dd'
                      disabled ={startDate === null ? true : false}
                      minDate={startDate}
                      placeholderText="Select date"/> 
                  <hr />
                  <Button className ={endDate === null || startDate === null ? "btn disabled btn-secondary btn-mg ": "btn active btn-primary btn-mg"} 
                          onClick={() => setModalShow(endDate === null || startDate === null ? false : true)} 
                          >Request to book</Button>
                  <p className="p-button">You won't be charged yet</p>
                  </div>
                </div>
                <ModalBooking rentalDays = {rentalDays} price={el.price} show={modalShow} onHide={() => setModalShow(false)}/>
            </div>
        </div>
      )
    })
  
   

  

    
}