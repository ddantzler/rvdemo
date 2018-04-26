import React, { Component } from "react";
import _ from "lodash";
import { observable, action, computed } from "mobx";
import { observer, inject } from "mobx-react";
import { object } from "prop-types";

// Import api and config
import api from "./services/api/api";
import config from "./config/config";

// Import components
import Partners from "./components/Partners";
import Nav from "./components/Nav";
import ContactForm from "./components/ContactForm";
import Copyright from "./components/Copyright";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Content from "./components/Content";
import MenuIcon from "./components/MenuIcon";

@inject("store")
@observer
class App extends Component {
  static propTypes = {
    store: object.isRequired
  };

  // Fetch dealers from mock api when we load
  // NOTE: I wasn't sure how detailed to make this,
  // we only had one zip code of data. I didn't wire
  // up the Find a Pool Pro button, but basically I
  // would deploy navigator.geolocation hooks and also
  // provide the user with a zip code utility.
  // Then I likely would only fetch for those zip codes,
  // and it might happen based on user interaction and
  // not componentDidMount, or it might happen both places
  // depending on what I was going for.
  @action
  componentDidMount() {
    this.props.store.dealers = api.fetch("dealers");
    // Set the document title
    document.title = `${document.title}: Search Pool Pros`;
  }

  // Render our components
  render() {
    return (
      <div className="wrapper">
        <MenuIcon />
        <Partners />
        <Nav />
        <Content />
        <Footer />
        <Copyright />
        <Menu />
        <ContactForm />
      </div>
    );
  }
}

export default App;
