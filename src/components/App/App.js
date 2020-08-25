import React, { useState, useEffect } from "react";
import { Route, Switch, Router } from "react-router";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import Header from "../Header/header";
import Contacts from "../Contacts/contacts";
import ChangeContact from "../change-contact/change-contact";
import { useSelector, useDispatch } from "react-redux";
import { userAPI } from "../../redux/API";

const App = () => {
  const [data, setData] = useState([]);
  let listId;
  const getIdContact = (id) => {
    listId = id;
    console.log(listId);
  };

  useEffect(() => {
    userAPI.saveToStorage();
    setData(allData);
  });

  const allData = useSelector((item) => item.reducer1);

  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <div className="App">
        <Header className="header" />

        <div className="app-container">
          <Switch>
            <Route
              path={`/`}
              exact
              render={() => (
                <Contacts list={data} getIdContact={getIdContact} />
              )}
            />
            <Route
              path={`/change:${listId}`}
              exact
              render={() => (
                <ChangeContact changeId={listId} changeData={data} />
              )}
            />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
