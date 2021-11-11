import "./SubmitAds.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button, ButtonGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import Fetch from "../../api/request";

export const SubmitAds = () => {
  const [statusHouse, setStatusHouse] = useState(false);
  const [statusApart, setStatusApart] = useState(false);
  const [isLoaded, setIsLoaded] = useState(true);
  const [img, setImg] = useState(" ");
  const [cityes, setCityes] = useState(" ");

  /* ************** */
  const [formValues, setFormValues] = useState({
    type: "",
    numOfGuests: "",
    title: "",
    description: "",
    address: " ",
    cityId: "",
    imageId: " ",
    price: " ",
  });
  console.log(formValues);
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
  };
  const apartFunc = (e) => {
    setStatusApart(true);
    setStatusHouse(false);
    const btnValue = e.target.outerText;
    setFormValues({
      ...formValues,
      [e.target.name]: btnValue,
    });
  };
  /* *************************** */
  const btnVarHouse = statusHouse === true ? "primary" : "outline-primary";
  const btnVarApart = statusApart === true ? "primary" : "outline-primary";

  /* *******************  */
  const imgFunc = (e) => {
    console.log(e.target.files);
    setImg(e.target.files[0]);
  };

  console.log(img);
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
        console.log(error);
        localStorage.removeItem("IdTokenGoogle");
        setIsLoaded(false);
      });
  }, []);
  /*  **************************************************** */

  function uploadFile() {
    var formData = new FormData();

    formData.append(`image`, img);
    const token = localStorage.getItem("IdTokenGoogle");
    console.log(token);
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
        console.log(success);
        const resultData = {
          ...formValues,
          imageId: success.imageId,
        };

        adPost(resultData);
      })
      .catch((error) => console.log(error));
  }
  console.log(formValues);

  async function adPost(dataToSave) {
    const token = localStorage.getItem("IdTokenGoogle");
    console.log(dataToSave);
    try {
      let data = await Fetch("listing/add", {
        method: "POST",
        body: dataToSave,
      });

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  /* ************Отправка формы на сервер****************** */

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
              />
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
              />
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
              />
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
              />
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
              >
                {cityes.data.map((el) => {
                  return <option value={el.id}>{el.title}</option>;
                })}
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                <span>*</span>Image
              </Form.Label>
              <Form.File onChange={imgFunc} />
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
              />
            </Form.Group>
            <Button onClick={uploadFile} variant="primary">
              Submit
            </Button>
          </Form>
        </Container>
      )}
    </>
  );
};
