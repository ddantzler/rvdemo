import React, { Component } from "react";
import { action, computed } from "mobx";
import { observer, inject } from "mobx-react";
import { object } from "prop-types";

import config from "../config/config";

// Icon that toggles the modal menu
@inject("store")
@observer
export default class MenuIcon extends Component {
  static propTypes = {
    store: object.isRequired
  };

  @action
  toggleMenu = () => {
    this.props.store.showMenu = !this.props.store.showMenu;
  };

  render() {
    return <button onClick={this.toggleMenu} className="menu-icon" />;
  }
}
