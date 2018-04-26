import React, { Component } from "react";
import { action, computed } from "mobx";
import { observer, inject } from "mobx-react";
import { object } from "prop-types";
import _ from "lodash";

@inject("store")
@observer
export default class Filter extends Component {
  static propTypes = {
    store: object.isRequired
  };

  // Display contact modal when user selects a dealer
  @action
  handleContact = data => {
    this.props.store.selected = data;
    this.props.store.showContact = true;
  };

  render() {
    return (
      <div className="cards">
        {this.props.store.filteredDealers.map(({ data }) => (
          <div className="card" key={data.companyID}>
            <div className="card-header">
              <h2>{data.name}</h2>
            </div>
            <div className="card-body">
              <hr className="hidden-phone" />
              <h3>
                <a href={`tel:${data.phone1}`}>
                  <i className="icon-phone-before phone-icon-bg" />
                  <span className="phone-cta visible-phone">Tap to call</span>
                  {_.replace(data.phone1, /-/g, ".")}
                </a>
              </h3>
              <h4>{"Can't"} talk now? Click below to send an e-mail.</h4>
              <button
                className="btn-primary icon-email-before"
                onClick={() => this.handleContact(data)}
              >
                Contact this Pro
              </button>
              <div className="hours">
                <strong>Business Hours</strong>
                <br />
                Weekdays {data.weekHours.mon}
                <br />
                Saturdays{" "}
                {data.weekHours.sat === "" ? "CLOSED" : data.weekHours.sat}
                <br />
                Sundays{" "}
                {data.weekHours.sun === "" ? "CLOSED" : data.weekHours.sun}
              </div>
            </div>
            <div className="card-footer">
              {_.includes(data.certifications, "Installation Pro") && (
                <div className="icon-star-before">Installation Pro</div>
              )}
              {_.includes(data.certifications, "Service Pro") && (
                <div className="icon-settings-before">Service Pro</div>
              )}
              {_.includes(data.certifications, "Residential Pro") && (
                <div className="icon-home-before">Residential Pro</div>
              )}
              {_.includes(data.certifications, "Commercial Pro") && (
                <div className="icon-users-before">Commercial Pro</div>
              )}
            </div>
          </div>
        ))}
        {this.props.store.filteredDealers.length === 0 && (
          <div className="empty">
            <h2>No results, please try again.</h2>
          </div>
        )}
      </div>
    );
  }
}
