import React from "react";
import "./contacts.css";
import photo from "./img/photo-1542103749-8ef59b94f47e.png";
import heart from "./img/heart.svg";
import geo from "./img/geog.svg";
import tel from "./img/tel.svg";
import web from "./img/internet.svg";
import mail from "./img/mail.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { favor } from "../../redux/actions";

const ContactsList = (props) => {
  // const [heart, setheart] = React.useState(false);
  const dispatch = useDispatch();
  const favoriteBtn = (id) => {
    dispatch(favor(id));
  };

  const {
    id,
    phoneNumber,
    firstName,
    lastName,
    city,
    country,
    email,
    website,
    image,
  } = props.card;

  return (
    <div className="card" key={id}>
      <img className="card__photo" src={image} />
      <div className="card__wrap">
        <div className="card__body">
          <div className="card__header">
            <span className="card__name">
              {firstName} {lastName} {id}
            </span>
            <svg
              onClick={() => favoriteBtn(id)}
              width="18"
              height="17"
              viewBox="0 0 70 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M35 65.2L30.1 60.3C11.9 44.2 0 33.35 0 20.05C0 9.19996 8.4 0.799957 19.25 0.799957C25.2 0.799957 31.15 3.59996 35 8.14996C38.85 3.59996 44.8 0.799957 50.75 0.799957C61.6 0.799957 70 9.19996 70 20.05C70 33.35 58.1 44.2 39.9 60.3L35 65.2Z" />
            </svg>
          </div>
          <ul className="card__info">
            <li>
              <img src={geo} />
              <span>
                {city}, {country}
              </span>
            </li>
            <li>
              <img src={tel} />
              <span>{phoneNumber}</span>
            </li>
            <li>
              <img src={web} />
              <span>{website}</span>
            </li>
            <li>
              <img src={mail} />
              <span>{email}</span>
            </li>
          </ul>
          <Link to={`/change/${id}`}>
            <button className="btn card__btn">show</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactsList;
