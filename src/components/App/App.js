import React, { useState, useEffect } from "react";
import { Route, Switch, Router } from "react-router";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import Header from "../Header/header";
import Contacts from "../Contacts/contacts";
import ChangeContact from "../change-contact/change-contact";
import { useSelector, useDispatch } from "react-redux";
import { userAPI } from "../../redux/API";
import { setAllData } from "../../redux/actions";

const App = () => {
  // const [data, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    userAPI.saveToStorage();
    const allData = JSON.parse(localStorage.getItem("userStorage"));
    dispatch(setAllData(allData));
    console.log(allData);
  }, []);

  const data = useSelector((item) => item.reducer1.items);
  console.log(data);
  return (
    <BrowserRouter>
      <div className="App">
        <Header className="header" />

        <div className="app-container">
          <Switch>
            <Route
              path={`/contact`}
              exact
              render={() => <Contacts list={data} />}
            />
            <Route
              path={`/change/:id`}
              exact
              render={(props) => (
                <ChangeContact changeId={props} changeData={data} />
              )}
            />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
