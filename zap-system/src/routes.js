import React from "react";
import DashboardPage from "./pages/DashboardPage"
import MessagePage from "./pages/MessagePage"
import NewMessage from "./pages/MessagePage/NewMessage";
import Search from "./pages/MessagePage/Search";
import {BrowserRouter, Switch, Route} from "react-router-dom";


export default function Routes() {

    return (

      <BrowserRouter>
  
          <Switch>
            
            <Route exact path="/messagePage">
              <MessagePage />
            </Route>

            <Route exact path="/dashboardPage">
              <DashboardPage />
            </Route>

            <Route exact path="/newmessagepage">
              <NewMessage />
            </Route>

            <Route exact path="/searchpage">
              <Search />
            </Route>
    
          </Switch>
      </BrowserRouter>
    );
  }