import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Home } from "./Containers/Home/Home";
import { useSelector } from "react-redux";
import { userAction, tokenAction } from "./store/action/action";
import { Spinner } from "react-bootstrap";
import Fetch from "./api/request";

export function App() {
  const dispatch = useDispatch();
  const tokenFromId = useSelector((state) => state.userToken);
  const UserFromStore = useSelector((state) => state.userData);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    const tokenName = "IdTokenGoogle";
    const token = localStorage.getItem(tokenName);
    Fetch("user/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((data) => {
        if (localStorage.getItem(tokenName)) {
          console.log(data);
          dispatch(userAction(data));
          dispatch(tokenAction(localStorage.getItem(tokenName)));
          setIsLoaded(false);
        } else {
          throw new Error("token is not correct");
        }
      })
      .catch((error) => {
        console.log(error);
        setIsLoaded(false);
        localStorage.removeItem("IdTokenGoogle");
      });
  }, []);

  return <div>{isLoaded ? <Spinner animation="border" /> : <Home />}</div>;
}
