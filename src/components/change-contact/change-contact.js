import React, { useState, useEffect } from "react";
import "./change-contact.css";
import preview from "../Contacts/img/photo-1542103749-8ef59b94f47e.png";
import heart from "./img/heart.svg";

const ChangeContact = (props) => {
  // const { id } = props.changeId;
  // let newId = data.filter((item) => item.id == id);
  // const [info, setInfo] = useState({});

  let newID = props.changeData.filter(
    (item) => item.id == props.changeId.match.params.id
  );
  // setInfo(newID);

  return newID.map((item) => {
    return (
      <div className="change-contact" key={item.id}>
        <div className="contact__preview">
          <img className="preview__photo" src={item.image} />
          <img src={heart} />
        </div>
        <form>
          <div className="first__block">
            <label>
              <p>First name:</p>
              <input className="change__input" defaultValue={item.firstName} />
            </label>
            <label>
              <p>City:</p>
              <input className="change__input" defaultValue={item.city} />
            </label>
            <label>
              <p>Phone Number:</p>
              <input
                className="change__input"
                defaultValue={item.phoneNumber}
              />
            </label>
            <label>
              <p>Website:</p>
              <input className="change__input" defaultValue={item.website} />
            </label>
          </div>
          <div className="second__block">
            <label>
              <p>Last name:</p>
              <input className="change__input" defaultValue={item.lastName} />
            </label>
            <label>
              <p>Country:</p>
              <input className="change__input" defaultValue={item.country} />
            </label>
            <label>
              <p>Email:</p>
              <input className="change__input" defaultValue={item.email} />
            </label>
            <label>
              <p>.</p>
              <input className="btn" type="submit" value="Save Contact" />
            </label>
          </div>
        </form>
      </div>
    );
  });
};

export default ChangeContact;
