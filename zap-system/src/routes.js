import React from "react";
import Homepage from "./pages/HomePage"
import DashboardPage from "./pages/DashboardPage"
import MessagePage from "./pages/MessagePage"
import {BrowserRouter, Switch, Route} from "react-router-dom";



export default function Routes() {

    return (

      <BrowserRouter>
  
          <Switch>
  
            <Route exact path="/">
              <Homepage />
            </Route>
            
            <Route exact path="/messagePage">
              <MessagePage />
            </Route>

            <Route exact path="/dashboardPage">
              <DashboardPage />
            </Route>
    
          </Switch>
      </BrowserRouter>
    );
  }