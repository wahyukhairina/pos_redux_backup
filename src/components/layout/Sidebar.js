import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
class Sidebar extends Component {
  render() {
    if (this.props.auth.profile.status !== "admin") {
      return <></>;
    } else {
      return (
        <ul className="nav flex-column">
          <Link
            className="fa fa-book fa-2x"
            title="Menu"
            style={{ marginTop: "20px", marginLeft: "20px", color: "grey" }}
            to="/product"
          />
          <li className="nav-item">
            <Link
              className="fa fa-list-alt fa-2x"
              title="Category"
              style={{ marginTop: "20px", marginLeft: "20px", color: "grey" }}
              to="/category"
            />
          </li>
          <li className="nav-item">
            <Link
              className="fa fa-user fa-2x"
              title="User"
              style={{ marginTop: "20px", marginLeft: "20px", color: "grey" }}
              to="/user"
            />
          </li>
          <li className="nav-item">
            <Link
              className="fa fa-file-text fa-2x"
              title="History"
              style={{ marginTop: "20px", marginLeft: "20px", color: "grey" }}
              to="/history"
            />
          </li>
        </ul>
      );
    }
  }
}

const mapStateToProps = state => {
  // console.log(state.products.pagination)
  return {
    auth: state.auth
  };
};
export default connect(mapStateToProps)(Sidebar);
