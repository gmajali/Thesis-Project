import React, { Component } from 'react'

class Signup extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target)
    //TODO..
  }

  render() {
    return (
      <div className="container">
        <h3 className='row grey-text'>Sign Up</h3>
        <div className="row ">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s6">
                <input placeholder="First Name" id="first_name" type="text" className="validate" />
                <label className="active" htmlFor="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input placeholder="Last Name" id="last_name" type="text" className="validate" />
                <label className="active" htmlFor="last_name">Last Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input placeholder="Email" id="email" type="email" className="validate" />
                <label className="active" htmlFor="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input placeholder="Phone Number" type="text" className="validate" />
                <label className="active" htmlFor="phone_number">Phone Number</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input placeholder="Password" id="password" type="password" className="validate" />
                <label className="active" htmlFor="password">Password</label>
              </div>
            </div>
            <button className=" btn grey" >Sign Up</button>
          </form >
        </div>
      </div>
    )
  }
}
export default Signup;