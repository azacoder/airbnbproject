import './ListcardView.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

export const ListCardView = () => {
    
        
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
    
    const {id} = useParams(); 
  
    let CardFilter = homeListings.filter((el)=>{
        return el.id == id
        
    })
    return CardFilter.map((el)=>{
      return(
        <div className="title">
            <div>{el.title}</div>
            <div>{el.adress}</div>
            <div><img src={el.image} alt="" /></div>
            <div></div>

        </div>
      )
    })
  
   

  

    
}