import "bootstrap/dist/css/bootstrap.css";
import { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
import { userAction, tokenAction } from "./store/action/action";
import { Home } from "./Containers/Home/Home";
import { Spinner } from "react-bootstrap";
import Fetch from "./api/request";

export function App() {
  const dispatch = useDispatch();
 
  const [isLoaded, setIsLoaded] = useState(true);
 
  useEffect(() => {
    const tokenName = "IdTokenGoogle";
    const token = localStorage.getItem(tokenName);
    Fetch("user/profile",{method: "GET" ,headers: {
      Authorization: `Bearer ${token}`,
    }}).then((data)=>{
      dispatch(userAction(data));
      dispatch(tokenAction(localStorage.getItem(tokenName)));
      setIsLoaded(false);
    })
    .catch((error) => {
      setIsLoaded(false);
      localStorage.removeItem("IdTokenGoogle");
    });
  }, []);

  return <div>{isLoaded ? <Spinner animation="border" /> : <Home />}</div>;
}