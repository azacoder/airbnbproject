import "./SubmitAds.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Form,
  Button,
  ButtonGroup,
  Toast,
  Col,
  Row,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import Fetch from "../../api/request";
import { Redirect } from "react-router";

export const SubmitAds = () => {
  const [statusHouse, setStatusHouse] = useState(false);
  const [statusApart, setStatusApart] = useState(false);
  const [isLoaded, setIsLoaded] = useState(true);
  const [img, setImg] = useState("");
  const [cityes, setCityes] = useState(" ");
  // const [showToast, setShowToast] = useState(false);
  const [successAd, setSuccesAd] = useState(false);

  /* ************** */
  const [formValues, setFormValues] = useState({
    type: "",
    numOfGuests: "",
    title: "",
    description: "",
    address: "",
    cityId: "",
    imageId: "",
    price: "",
  });

  /* ************************* */

  const [blurStatus, setBlurStatus] = useState({
    type: false,
    numOfGuests: false,
    title: false,
    description: false,
    address: false,
    cityId: false,
    imageId: false,
    price: false,
  });
  /* ************************* */
  const btnStyle =
    formValues.type !== "" &&
    formValues.numOfGuests !== "" &&
    formValues.title !== "" &&
    formValues.description !== "" &&
    formValues.address !== "" &&
    formValues.cityId !== "" &&
    img !== "" &&
    formValues.price !== ""
      ? "btn active btn-primary btn-mg"
      : "btn disabled btn-secondary btn-mg ";
  /* ************************* */

  const messageType =
    formValues.numOfGuests !== "" && !blurStatus.type
      ? "Choose the type of House"
      : " ";
  const messageNumOfGuests =
    formValues.numOfGuests === 0 ||
    (formValues.numOfGuests === "" && blurStatus.numOfGuests)
      ? "Enter the number of guests"
      : " ";

  const messageTitle =
    formValues.title === "" && blurStatus.title ? "Enter title" : " ";
  const messageDescpiton =
    formValues.description === "" && blurStatus.description
      ? "Enter description"
      : " ";
  const messageAddress =
    formValues.address === "" && blurStatus.address ? "Enter the address" : " ";
  const messsagePrice =
    formValues.price === 0 || (formValues.price === "" && blurStatus.price)
      ? "Enter the price"
      : " ";

  const messageCityes =
    img !== "" && !blurStatus.cityId ? "Choose the city" : " ";
  const messageImage =
    formValues.price !== "" && !blurStatus.imageId ? "Choose the image" : " ";
  /* ************************ */
  const chancherBlurStatus = (e) => {
    setBlurStatus({
      ...blurStatus,
      [e.target.name]: true,
    });
  };

  /* ********************** */

  /* ********************* */
  const handleChange = (e) => {
    const value = e.target.value;
    setFormValues({
      ...formValues,
      [e.target.name]: value,
    });
  };

  const handleChangeNumber = (e) => {
    const value = e.target.value;
    setFormValues({
      ...formValues,
      [e.target.name]: Number(value),
    });
  };

  const houseFunc = (e) => {
    setStatusHouse(true);
    setStatusApart(false);
    const btnValue = e.target.outerText;
    setFormValues({
      ...formValues,
      [e.target.name]: btnValue,
    });
    setBlurStatus({
      ...blurStatus,
      [e.target.name]: true,
    });
  };
  const apartFunc = (e) => {
    setStatusApart(true);
    setStatusHouse(false);
    const btnValue = e.target.outerText;
    setFormValues({
      ...formValues,
      [e.target.name]: btnValue,
    });
    setBlurStatus({
      ...blurStatus,
      [e.target.name]: true,
    });
  };
  /* *************************** */
  const btnVarHouse = statusHouse === true ? "primary" : "outline-primary";
  const btnVarApart = statusApart === true ? "primary" : "outline-primary";

  /* *******************  */
  const imgFunc = (e) => {
    setImg(e.target.files[0]);
  };

  /* *************************************** */
  useEffect(() => {
    fetch(
      "http://ec2-3-127-145-151.eu-central-1.compute.amazonaws.com:8000/api/cities/all",
      {
        method: "GET",
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("token is not correct");
        }
        return res.json();
      })
      .then((result) => {
        setCityes(result);
        setIsLoaded(false);
      })
      .catch((error) => {
        localStorage.removeItem("IdTokenGoogle");
        setIsLoaded(false);
      });
  }, []);
  /*  **************************************************** */

  function uploadFile() {
    var formData = new FormData();

    formData.append(`image`, img);
    const token = localStorage.getItem("IdTokenGoogle");
    fetch(
      "http://ec2-3-127-145-151.eu-central-1.compute.amazonaws.com:8000/api/listing/upload/image",
      {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((success) => {
        const resultData = {
          ...formValues,
          imageId: success.imageId,
        };

        adPost(resultData);
      })
      .catch((error) => console.log(error));
  }

  async function adPost(dataToSave) {
    try {
      let data = await Fetch("listing/add", {
        method: "POST",
        body: dataToSave,
      });
      setSuccesAd(true);
    } catch (error) {}
  }

  /* ************Отправка формы на сервер****************** */
  if (successAd) {
    return <Redirect to="/successfullpage" />;
  }
  return (
    <>
      {isLoaded ? (
        <p>Loading....</p>
      ) : (
        <Container className="Submit--Ads">
          <Form>
            <h2 className="sub--text">
              Hi! Let's get started listing your place.
            </h2>
            <p className="sub-mini-text">
              In this form, we'll collect some basic and additional information
              about your listing.
            </p>
            <p>
              <span>*</span> Home type
            </p>
            <ButtonGroup aria-label="Basic example" className="mb-3">
              <Button variant={btnVarApart} onClick={apartFunc} name="type">
                APARTMENT
              </Button>
              <Button variant={btnVarHouse} onClick={houseFunc} name="type">
                HOUSE
              </Button>
            </ButtonGroup>
            <p className="messageWarn">{messageType}</p>
            <Form.Group className="mb-3" controlId="fornGroupGuest">
              <Form.Label>
                <span>*</span> Max # of Guests
              </Form.Label>
              <Form.Control
                style={{ width: "100px" }}
                type="number"
                placeholder="4"
                onChange={handleChangeNumber}
                name="numOfGuests"
                onBlur={chancherBlurStatus}
              />
              <p className="messageWarn">{messageNumOfGuests}</p>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupTitle">
              <Form.Label>
                <span>*</span> Title
              </Form.Label>
              <Form.Control
                style={{ width: "500px" }}
                type="text"
                placeholder="The iconic and luxurious Bel-Air mansion"
                onChange={handleChange}
                name="title"
                onBlur={chancherBlurStatus}
              />
              <p className="messageWarn">{messageTitle}</p>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupArea">
              <Form.Label>
                <span>*</span> Description of listing
              </Form.Label>
              <Form.Control
                as="textarea"
                placeholder="
              Modern, clean, and iconic home of the Fresh Prince.
              Situated in the heart of Bel-Air, Los Angeles.
            "
                style={{ height: "100px", width: "500px" }}
                onChange={handleChange}
                name="description"
                onBlur={chancherBlurStatus}
              />
              <p className="messageWarn">{messageDescpiton}</p>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupAddress">
              <Form.Label>
                <span>*</span> Address
              </Form.Label>
              <Form.Control
                style={{ width: "500px" }}
                type="text"
                placeholder="Address"
                onChange={handleChange}
                name="address"
                onBlur={chancherBlurStatus}
              />
              <p className="messageWarn">{messageAddress}</p>
            </Form.Group>
            <Form.Group controlId="formGridState">
              <Form.Label>
                <span>*</span> Town/Province
              </Form.Label>
              <Form.Control
                as="select"
                style={{ width: "500px" }}
                defaultValue="Choose..."
                onChange={handleChange}
                name="cityId"
                onClick={chancherBlurStatus}
              >
                {cityes.data.map((el) => {
                  return <option value={el.id}>{el.title}</option>;
                })}
              </Form.Control>
              <p className="messageWarn">{messageCityes}</p>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                <span>*</span>Image
              </Form.Label>
              <Form.File
                onChange={imgFunc}
                onBlur={chancherBlurStatus}
                name="imageId"
              />
              <p className="messageWarn">{messageImage}</p>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPrice">
              <Form.Label>
                <span>*</span> Price
              </Form.Label>
              <Form.Control
                className="formCont"
                type="number"
                placeholder="120"
                onChange={handleChangeNumber}
                name="price"
                onBlur={chancherBlurStatus}
              />
              <p className="messageWarn">{messsagePrice}</p>
            </Form.Group>
            <Button className={btnStyle} onClick={uploadFile}>
              Submit
            </Button>
          </Form>
        </Container>
      )}
    </>
  );
};
