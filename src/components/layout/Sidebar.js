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
            className="fa fa-book fa-2x sidebarIcon"
            title="Menu"
            to="/product"
          />
          <li className="nav-item">
            <Link
              className="fa fa-list-alt fa-2x sidebarIcon"
              title="Category"
              to="/category"
            />
          </li>
          <li className="nav-item">
            <Link
              className="fa fa-user fa-2x sidebarIcon"
              title="User"
              to="/user"
            />
          </li>
          <li className="nav-item">
            <Link
              className="fa fa-file-text fa-2x sidebarIcon"
              title="History"
              to="/history"
            />
          </li>
        </ul>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};
export default connect(mapStateToProps)(Sidebar);
