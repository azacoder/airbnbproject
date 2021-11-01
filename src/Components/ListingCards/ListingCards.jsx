
import './ListingCard.css'
import {Card,Col,Container,Image, Row} from 'react-bootstrap'
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
      <Link to={`/product/${data.id}`} className="link">
             <Container >
               <Row>
                 <Col>
                 <Card class="card-apart">
                 <Card.Img variant="top" src={data.image} style={{ width: "15.4rem", 'height': '10rem'}}/>
                 <Card.Body>
                 <span className="price">${data.price}/day</span>
                <b><Card.Title class="card-title-house">{data.title}</Card.Title ></b>
                 <Card.Header class="card-header-adress">{data.adress}</Card.Header>
                 <Card.Footer class="card-footer">{data.guests}</Card.Footer>
                 </Card.Body>
                 </Card>
                 </Col>
               </Row>
             </Container>
        </Link>
    )
}


