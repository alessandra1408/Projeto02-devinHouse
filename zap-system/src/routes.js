import React from "react";
import DashboardPage from "./pages/DashboardPage"
import MessagePage from "./pages/MessagePage"
import NewMessage from "./pages/NewMessage";
import {BrowserRouter, Switch, Route} from "react-router-dom";


export default function Routes() {

    return (

      <BrowserRouter>
  
          <Switch>
            
            <Route exact path="/">
              <MessagePage />
            </Route>

            <Route exact path="/dashboardPage">
              <DashboardPage />
            </Route>

            <Route exact path="/newmessagepage">
              <NewMessage />
            </Route>
    
          </Switch>
      </BrowserRouter>
    );
  }