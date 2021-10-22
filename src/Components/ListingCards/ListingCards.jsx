import './ListingCard.css'
import {Card,Container,Image} from 'react-bootstrap'
import { useEffect, useState } from 'react';

export const ListingCards = () => {
    const [homeListings, setHomeListings] =  useState([]);

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
    
    return(
        <div className="myCards" >
                {
                    homeListings.map((el) => {
                        return <HouseCart data={el} key={el.id} />
                    })
                }
        </div>
    )
}

const HouseCart = ({data}) => {
    return (
            <Card>
            <Image src={data.image} className="img-card"/>
                   <Card.Body>
                   <span>{data.price}</span>
                <Card.Title>{data.title}</Card.Title>
                <Card.Header>{data.adress}</Card.Header>
                <Card.Footer>{data.guests}</Card.Footer>
                   </Card.Body>
             </Card>
    )
}