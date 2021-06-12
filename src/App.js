import React from "react";
import "./App.css";
import EmailList from "./components/emailList/EmailList";
import Header from "./components/header/Header";
import Mail from "./components/mail/Mail";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <div className="app__body">
          <Sidebar />

          <Switch>
            <Route path="/mail">
              <Mail />
            </Route>
            <Route path="/">
              <EmailList />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
