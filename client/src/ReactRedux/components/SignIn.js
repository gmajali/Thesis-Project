import React, { Component } from 'react'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
  }
  render() {
    return (
      <div className="container ">
      <h3 className='row black-text'>Sign In</h3>
        <div className="row  ">
          <form className="col s12 " id="reg-form" onSubmit={this.handleSubmit}>
            <div className="row ">
              <div className="input-field  col s6">
                <input id="email" type="email" className="validate" required onChange={this.handleChange} />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input id="password" type="password" className="validate " minLength="6" required onChange={this.handleChange} />
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <div className="input-field ">
              <button className="btn btn-register purple waves-light" type="submit" name="action">Sign In
              </button>
            </div>
          </form>
        </div>
      </div>

    )
  }
}
export default SignIn;