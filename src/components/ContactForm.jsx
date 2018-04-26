import React, { Component } from "react";
import { observable, action, computed } from "mobx";
import { observer, inject } from "mobx-react";
import { object } from "prop-types";

@inject("store")
@observer
export default class ContactForm extends Component {
  static propTypes = {
    store: object.isRequired
  };

  // Declare form field state
  @observable name = "";
  @observable email = "";
  @observable comments = "";
  @observable phone = "";
  @observable isOwner = false;

  // Computed validation, could be fleshed out to include regex.
  @computed
  get validName() {
    return this.name !== "";
  }

  @computed
  get validEmail() {
    return this.email !== "";
  }

  @computed
  get validComments() {
    return this.comments !== "";
  }

  @computed
  get validPhone() {
    return this.phone !== "";
  }

  // Handle form field changes
  @action
  handleChange = event => {
    this[event.target.id] = event.target.value;
  };

  // Radio button idea using real buttons.
  // Set the state to true or false depending on the Yes/No
  // then, based on that state we display active or inactive class
  @action
  handleRadio = isOwner => {
    this.isOwner = isOwner;
  };

  // Toggle the modal display
  @action
  toggleContact = () => {
    this.props.store.showContact = !this.props.store.showContact;
  };

  render() {
    if (this.props.store.showContact) {
      return (
        <div className="modal-wrapper">
          <div className="modal">
            <div className="modal-header">
              <button onClick={this.toggleContact} className="modal-close">
                close
              </button>
              <span className="modal-type">EMAIL</span>
              <h2>{this.props.store.selected.name}</h2>
            </div>
            <div className="modal-body">
              <p>
                Fill out the form below and {this.props.store.selected.name}{" "}
                will get in touch.
              </p>
              <form>
                <fieldset>
                  <div className="form-label">
                    <label htmlFor="name">First and last name</label>
                    <span className={this.validName ? "valid" : "invalid"} />
                  </div>
                  <div className="form-input">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="name"
                      value={this.name}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="form-label">
                    <label htmlFor="name">Phone number</label>
                    <span className={this.validPhone ? "valid" : "invalid"} />
                  </div>
                  <div className="form-input">
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      autoComplete="tel"
                      value={this.phone}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="form-label">
                    <label htmlFor="name">Email address</label>
                    <span className={this.validEmail ? "valid" : "invalid"} />
                  </div>
                  <div className="form-input">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      autoComplete="email"
                      value={this.email}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="form-label">
                    <label htmlFor="name">Comments or questions</label>
                    <span
                      className={this.validComments ? "valid" : "invalid"}
                    />
                  </div>
                  <div className="form-input">
                    <textarea
                      id="comments"
                      name="comments"
                      value={this.comments}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <label>Do you currently own a pool or spa?</label>
                  <button
                    type="button"
                    className={`radio-${this.isOwner ? "active" : "inactive"}`}
                    onClick={() => this.handleRadio(true)}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    className={`radio-${this.isOwner ? "inactive" : "active"}`}
                    onClick={() => this.handleRadio(false)}
                  >
                    No
                  </button>
                  <hr />
                  <div className="form-send">
                    <button className="send-email">
                      Send <span className="hidden-phone">my email</span>
                    </button>
                  </div>
                </fieldset>
              </form>
            </div>
            <div className="modal-footer">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                iaculis congue libero a consequat.
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
