import React, { Component } from "react";
import { action, computed } from "mobx";
import { observer, inject } from "mobx-react";
import { object } from "prop-types";

@inject("store")
@observer
export default class Filter extends Component {
  static propTypes = {
    store: object.isRequired
  };

  // Declare filters for mapping
  filters = ["Service", "Installation", "Residential", "Commercial"];

  // Set filters when user interacts
  @action
  handleChange = event => {
    this.props.store.filters[event.target.id] = event.target.checked;
  };

  // Toggle filters in mobile
  @action
  toggleFilters = () => {
    this.props.store.showFilters = !this.props.store.showFilters;
  };

  render() {
    const { filteredDealers, showFilters, filters } = this.props.store;
    return (
      <div className="filter">
        <div className="status">{filteredDealers.length} dealers in 28205</div>
        <div onClick={this.toggleFilters} className="options-button">
          Filter Results <span className="icon-dropdown-after icon-dropdown" />
        </div>
        <div className={`options ${showFilters ? "" : "hidden-phone"}`}>
          <span className="title">Filter Results</span>
          {this.filters.map(filter => {
            return (
              <div className="checkbox" key={filter}>
                <input
                  type="checkbox"
                  id={`is${filter}`}
                  name={`is${filter}`}
                  defaultChecked={filters[`is${filter}`]}
                  value={filters[`is${filter}`]}
                  onChange={this.handleChange}
                />
                <label htmlFor={`is${filter}`}>{filter}</label>
                {filter === "Commercial" && (
                  <span className="tooltip">
                    ?
                    <span className="tooltip-text">We love B2B!</span>
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
