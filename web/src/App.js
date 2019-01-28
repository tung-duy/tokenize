import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SnackbarProvider, withSnackbar } from "notistack";

import Container from "./components/container";
import { Header, Footer, Sidebar } from "./components/layouts";
import { MainShop, Cart, CheckOut, Confirmed, Login } from "./components/pages";
import "./App.css";
import { checkToken, getToken, removeToken } from "./redux/auth/helper";
import { receiveLogin } from "./redux/auth/action";
import store from "./redux/store";
import Notifier from "./redux/notification/Notifier";

function checkAuthenticate() {
  const _token = getToken();
  const isAuthenticate = checkToken(_token);
  store.dispatch(receiveLogin({ isAuthenticate }));
}
checkAuthenticate();

function Logout(props) {
  removeToken();
  window.location.href = "/";
  return "";
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <main className="main_page">
            <SnackbarProvider>
              <Container>
                <Notifier />
                <Header />
                <div id="wrapper" className="my-5">
                  <div className="pts-inner container">
                    <div className="row-inner row-level-1">
                      <div className="row clearfix">
                        <Switch>
                          <Route exact path="/" component={MainShop} />
                          <Route path="/carts" component={Cart} />
                          <Route path="/checkout" component={CheckOut} />
                          <Route path="/confirmed" component={Confirmed} />
                          <Route path="/login" component={Login} />
                          <Route path="/logout" component={Logout} />
                        </Switch>
                      </div>
                    </div>
                  </div>
                </div>
                <Footer />
              </Container>
            </SnackbarProvider>
          </main>
        </Router>
      </Provider>
    );
  }
}

export default App;
