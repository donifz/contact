import React, { useState } from "react";
import "./contacts.css";

import ContactsList from "./contacts-list";
import Filters from "../Filters/Filters";

const Contacts = (props) => {
  const takeId = (id) => {
    props.getIdContact(id);
  };
  let data = props.list;
  return (
    <>
      <Filters data={data} />
      <div className="contacts__container">
        {props.list.map((item) => {
          return <ContactsList card={item} key={item.id} giveId={takeId} />;
        })}
      </div>
    </>
  );
};

export default Contacts;
