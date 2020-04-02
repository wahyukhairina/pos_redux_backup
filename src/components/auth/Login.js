import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../redux/actions/auth";
import bg from "../../images/bg.png";

require("dotenv").config();
class Login extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //     username: '',
    //     password: ''
    // };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = async e => {
    e.preventDefault();
    console.log(this.state);
    await this.props.dispatch(login(this.state));
    await this.props.history.push("/");
  };

  render() {
    return (
      <>
        <div className="container">
            
          <img
            style={{
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              position: 'absolute',
              maxWidth: "100%",
              maxHeight: "100%",
              marginLeft: "200px"
            }}
            src={bg}
            alt="background-login"
          />
           <h1>Login,</h1>
          <div className="row justify-content-md-center">
            <div className="col-md-11">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    style={{ width: "300px" }}
                    type="text"
                    className="form-control"
                    placeholder="Enter Username"
                    name="username"
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    style={{ width: "300px" }}
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    name="password"
                    onChange={this.onChange}
                  />
                </div>
                <button
                  style={{ background: "#DB7093" }}
                  type="submit"
                  className="btn btn"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Login);
