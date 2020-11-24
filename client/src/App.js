import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Gallery from "./pages/Gallery";
import Landing from "./pages/Landing";

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
});
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <main className="container-fluid">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/profile:username?" component={Profile} />
            <Route component={NoMatch} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
