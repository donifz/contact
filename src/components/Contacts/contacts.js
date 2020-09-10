import React, { useState } from "react";
import "./contacts.css";

import ContactsList from "./contacts-list";
import Filters from "../Filters/Filters";

const Contacts = (props) => {
  let data = props.list;
  console.log(data);
  // debugger;
  return (
    <>
      <Filters data={data} />
      <div className="contacts__container">
        {data.map((item) => {
          return <ContactsList card={item} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default Contacts;
