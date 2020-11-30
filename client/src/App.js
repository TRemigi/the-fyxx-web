import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ApolloProvider, InMemoryCache } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Admin from "./pages/Admin";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";

import Header from "./components/Header";
import Footer from "./components/Footer";

const client = new ApolloClient({
  // retrieves token from local storage
  request: (operation) => {
    const token = localStorage.getItem("id_token");

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "/graphql",
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <main className="container-fluid">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/profile:user?" component={Profile} />
            <Route component={NoMatch} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
