import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../store/actions/index";

class Signup extends Component {
  // state = {
  //   email: '',
  //   password: '',
  //   firstName: '',
  //   lastName: ''
  // }
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="container">
        <h3 className="row black-text">Sign Up</h3>
        <div className="row ">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="first_name"
                  type="text"
                  className="validate"
                  onChange={this.handleChange}
                />
                <label htmlFor="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input
                  id="last_name"
                  type="text"
                  className="validate"
                  onChange={this.handleChange}
                />
                <label htmlFor="last_name">Last Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="email"
                  type="email"
                  className="validate"
                  onChange={this.handleChange}
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  type="text"
                  className="validate"
                  onChange={this.handleChange}
                />
                <label htmlFor="tel">Phone Number</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="password"
                  type="password"
                  className="validate"
                  onChange={this.handleChange}
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <div className="input-field">
              <button className="btn purple lighten-1 z-depth-0">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state, "state");
  return { state: state.articles };
};
const mapDispatchToProps = dispatch => {
  return {
    signUp: payload => dispatch(signUp(payload))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
