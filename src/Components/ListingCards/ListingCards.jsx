
import './ListingCard.css'
import {Card,Image} from 'react-bootstrap'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'


export const ListingCards = () => {
    const [homeListings, setHomeListings] =  useState([]);
    const dispatch = useDispatch(); 

  const fetchData = () => {
    fetch('/fakeHost/data.json').then(response => {
        return response.json()
    }).then(({data}) => {
      setHomeListings(data)
    });
  }


  let getCards = (e) => {
    dispatch({type:"GET_IDCARD", cardId:e})
     
    
  }

  useEffect(() => {
     fetchData()
  }, []);
    
 
  
    return(
        <div  className="myCards" >
                {
                    homeListings.map((el) => {
                        return <HouseCart getCards={getCards} data={el} key={el.id} />
                    })
                }
        </div>
    )
}

const HouseCart = ({data}) => {
    return (
      <Link to={`/product/${data.id}`}>
               <Card id={data.id} >
            <Image src={data.image} className="img-card"/>
                   <Card.Body>
                   <span>{data.price}</span>
                <Card.Title>{data.title}</Card.Title>
                <Card.Header>{data.adress}</Card.Header>
                <Card.Footer>{data.guests}</Card.Footer>
                   </Card.Body>
             </Card>
        </Link>
    )
}


