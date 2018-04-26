import React, { Component } from "react";
import { action, computed } from "mobx";
import { observer, inject } from "mobx-react";
import { object } from "prop-types";

import config from "../config/config";

@inject("store")
@observer
export default class Menu extends Component {
  static propTypes = {
    store: object.isRequired
  };

  // Toggle the mobile menu
  @action
  toggleMenu = () => {
    this.props.store.showMenu = !this.props.store.showMenu;
  };

  render() {
    if (this.props.store.showMenu) {
      return (
        <div className="menu-wrapper">
          <div className="menu-modal">
            <div className="menu-header">
              <button onClick={this.toggleMenu} className="menu-close">
                close
              </button>
              MENU
            </div>
            {config.nav.map(item => {
              return (
                <a href={item.href} key={item.desc}>
                  {item.desc}
                </a>
              );
            })}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
