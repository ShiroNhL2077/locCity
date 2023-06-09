import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/footer";
import Rate from "../Rate/Rate";
import "./ConfirmationPage.css";
import {
  faBowlFood,
  faCar,
  faParking,
  faShirt,
  faToolbox,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function PaymentPage() {
  const [rating, setRating] = useState(0);

  /**GET ALL ITEMS FROM LOCAL STORAGE */
  const apartment = JSON.parse(localStorage.getItem("apartment"));
  const servicesPrice = JSON.parse(localStorage.getItem("servicesPrice"));
  const apartmentPrice = JSON.parse(localStorage.getItem("apartmentPrice"));
  const totalPrice = JSON.parse(localStorage.getItem("totalPrice"));
  const startDate = JSON.parse(localStorage.getItem("startDate"));
  const endDate = JSON.parse(localStorage.getItem("endDate"));
  const serviceNames = JSON.parse(localStorage.getItem("serviceNames"));
  const diffInDays = JSON.parse(localStorage.getItem("diffInDays"));

  /**DISPLAY ICONS ACCORDING TO THE SERVICES */
  const serviceIcons = {
    Car: <FontAwesomeIcon icon={faCar} />,
    Food: <FontAwesomeIcon icon={faBowlFood} />,
    Utilities: <FontAwesomeIcon icon={faToolbox} />,
    Maintenance: <FontAwesomeIcon icon={faTools} />,
    Parking: <FontAwesomeIcon icon={faParking} />,
    Laundry: <FontAwesomeIcon icon={faShirt} />,
  };

  return (
    <div className="payment_page">
      <Navbar />
      <div className="upper__space"></div>
      <div className="payment__body">
        <div className="payment__content">
          <div className="payment_title">
            <h3>CONFIRM YOUR PAYMENT</h3>
          </div>
          <div className="row row_props ">
            <div className="col payment_col">
              <div className="card__body__payment">
                <h4>RESERVATION DETAILS</h4>
                <h5>NIGHTS :{diffInDays}</h5>
                <h5>
                  FROM <strong>{startDate}</strong> TO{" "}
                  <strong>{endDate}</strong>.
                </h5>
                <hr />
                <h4>SERVICES</h4>
                <div className="row services">
                  {serviceNames.map((serviceName) => (
                    <div className="col col-sm-2" key={serviceName}>
                      {serviceIcons[serviceName]}
                      <br />
                      <p className="service_title">{serviceName}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div
              className="col content_col_payment"
              style={{ backgroundColor: "white" }}
            >
              <div className="card_infos_payment">
                <div className="card__body">
                  <h4>{apartment.name}</h4>
                  <strong style={{ marginBottom: "7%" }}>
                    {apartment.description}
                  </strong>
                  <Rate rating={rating} onRating={(rate) => setRating(rate)} />
                  <img
                    alt="apartment_picture"
                    className="apartment_picture"
                    src="./interior-design-ga22c634af_19201.png"
                  />
                  <h4>PAYMENT DETAILS:</h4>
                  <p>NIGHTS FEES: €{apartmentPrice}</p>
                  <p>SERVICES FEES: €{servicesPrice}</p>
                  <p>TOTAL PRICE: €{totalPrice}</p>
                  <button className="btn btn-dark custom-confirm-button">
                    <Link to={"/paystate"} className="text-light">SEND REQUEST</Link>
                  </button>
                  <a href="/">
                    <button
                      type="reset"
                      className="btn btn-dark custom-confirm-button"
                    >
                      CANCEL
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PaymentPage;
