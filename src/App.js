import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { Home } from "./Containers/Home/Home";
import { useSelector } from "react-redux";
import { userAction, tokenAction } from "./store/action/action";


export function App() {
  const dispatch = useDispatch(); 
  const tokenFromId = useSelector((state) => state);
  const UserFromStore = useSelector((state) => state);
  const [isLoaded, setIsLoaded] = useState(true);
  console.log(userAction);

  useEffect(() => {
    const tokenName = "IdTokenGoogle"
    const token = localStorage.getItem(tokenName); 
    fetch("http://ec2-3-127-145-151.eu-central-1.compute.amazonaws.com:8000/api/user/profile",
    {
      method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
      })
      .then(
        res => {
          if(!res.ok){
            throw new Error("token is not correct")
          }
          return res.json()
        })
      .then(
        (result) => {
          setIsLoaded(false);
          dispatch(userAction(result.data));
          dispatch(tokenAction(token));
          console.log(result);
        }
       
      )
      .catch((error)=>{
        console.log(error);
        setIsLoaded(false);
        localStorage.removeItem(tokenName)
      }) 

     
  }, [])
  console.log(tokenFromId);
  console.log(UserFromStore);
  

  return (
    <div>{
      isLoaded ? <p>Loading..</p> :  <Home />}
    </div>
  );
}
