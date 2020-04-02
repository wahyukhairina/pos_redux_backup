import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getProducts,
  searchProduct,
  sortProduct,
  paginationProduct
} from "../redux/actions/product";
import Sidebar from "../layout/Sidebar";
import Navbar from "../layout/Navbar";
import ProductItem from "./ProductItem";
import DeleteProduct from "../modals/DeleteProduct";
import EditProduct from "../modals/EditProduct";
import AddProduct from "../modals/AddProduct";
import Chart from "../product/CartItem";
import CartItem from "../product/CartItem";
import { withRouter } from "react-router-dom";
import querystring from "query-string";

class Product extends Component {
  state = {
    showDelete: false,
    dataDelete: null,
    showEdit: false,
    dataEdit: null,
    addshow: false,
    type: "",
    search: ""
  };

  componentDidMount() {
    var q = querystring.parse(this.props.location.search);

    if (q.sortType !== undefined) {
      const type = q.sortType;
      const { profile } = this.props.auth;
      const auth = {
        authorization: profile.token,
        "user-id": profile.user_id
      };
      console.log("ini type ", type);
      this.props.dispatch(sortProduct(auth, type));
    } else if (q.searchName !== undefined) {
      const search = q.searchName;
      this.setState({
        search: search
      });
      this.props.history.push(`/product/?searchName=${search}`);
      const { profile } = this.props.auth;
      const auth = {
        authorization: profile.token,
        "user-id": profile.user_id
      };
      this.props.dispatch(searchProduct(search, auth));
    } else {
      console.log("getall");
      this.getAllProducts();
    }
  }

  onChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmitSearch = async e => {
    e.preventDefault();

    const search = this.state.search;
    await this.props.history.push(`/product/?searchName=${search}`);
    const { profile } = this.props.auth;
    const auth = {
      authorization: profile.token,
      "user-id": profile.user_id
    };
    this.props.dispatch(searchProduct(search, auth));
  };

  getAllProducts = async () => {
    const { profile } = this.props.auth;
    const auth = {
      authorization: profile.token,
      "user-id": profile.user_id
    };
    await this.props.dispatch(getProducts(auth));
  };

  paginateProduct = async e => {
    const page = e.target.id;
    const { profile } = this.props.auth;
    const auth = {
      authorization: profile.token,
      "user-id": profile.user_id
    };
    this.props.dispatch(paginationProduct(auth, page));
  };

  onShowDelete = products => {
    this.setState({
      dataDelete: products,
      showDelete: true
    });
  };
  onShowEdit = products => {
    this.setState({
      dataEdit: products,
      showEdit: true
    });
  };

  onHandleClose = () => {
    this.setState({
      showDelete: false
    });
  };

  onEditClose = () => {
    this.setState({
      showEdit: false
    });
  };

  onClickSort = async e => {
    // console.log(e.target.value)

    await this.setState({
      type: e.target.value
    });

    const type = this.state.type;
    console.log(type);
    this.props.history.push(`/product/?sortType=${type}`);
    const { profile } = this.props.auth;
    const auth = {
      authorization: profile.token,
      "user-id": profile.user_id
    };
    this.props.dispatch(sortProduct(auth, type));
  };
  addShow = e => {
    this.setState({
      addshow: true
    });
  };

  addClose = () => {
    this.setState({
      addshow: false
    });
  };

  render() {
    const { products, pagination } = this.props;
    const ItemProduct = products.map(products => (
      <ProductItem
        products={products}
        key={products.id}
        onShowDelete={this.onShowDelete}
        onShowEdit={this.onShowEdit}
      />
    ));
    return (
      <>
        <div className="row">
          <div className="col-md-8">
            <div className="col-md-12">
              <Navbar />
            </div>

            <div className="row">
              <div className="col-md-1">
                <Sidebar />
              </div>
              <div className="col-md-11">
                <div className="row">
                  <div className="col-md-6">
                    <nav class="navbar navbar-light bg-light">
                      <form
                        className="form-inline"
                        onSubmit={this.onSubmitSearch}
                      >
                        <input
                          className="form-control mr-sm-2"
                          type="search"
                          placeholder="Search Product"
                          name="search"
                          onChange={this.onChange}
                          aria-label="Search"
                        />
                        <button
                          className="btn btn"
                          style={{ background: "#DB7093", color: "#e9e9e9" }}
                          type="submit"
                        >
                          Search
                        </button>
                      </form>
                    </nav>
                  </div>
                  <div className="col-md-5"></div>
                  <div className="col-md-1">
                    <a
                      onClick={this.addShow}
                      title="Add Product"
                      style={{
                        marginTop: "10px",
                        marginLeft: "8px",
                        color: "grey"
                      }}
                      className="fa fa-plus fa-2x"
                      href="#"
                    />
                  </div>
                </div>
                <div className="row">{ItemProduct}</div>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="pagination" style={{ marginTop: "10px" }}>
                      <li class="page-item">
                        <a class="page-link" style={{ color: "#848484" }}>
                          Previous
                        </a>
                      </li>
                      {pagination.map(pagination => (
                        <li class="page-item" key={pagination}>
                          <a
                            class="page-link"
                            onClick={this.paginateProduct}
                            id={pagination}
                          >
                            {pagination}
                          </a>
                        </li>
                      ))}
                      <li class="page-item">
                        <a
                          class="page-link"
                          style={{ color: "#848484" }}
                          href="#"
                        >
                          Next
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul style={{ marginTop: "10px", marginLeft: "60px" }}>
                      {" "}
                      <h7 style={{ color: "grey" }}>
                        SORT PRICE :{" "}
                        <button
                          className="btn btn"
                          style={{ background: "#DB7093", color: "#e9e9e9" }}
                          value="ASC"
                          onClick={this.onClickSort}
                        >
                          {" "}
                          Shortest
                        </button>{" "}
                        |{" "}
                        <button
                          className="btn btn"
                          style={{ background: "#DB7093", color: "white" }}
                          value="DESC"
                          onClick={this.onClickSort}
                        >
                          Highest
                        </button>{" "}
                      </h7>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <h2
              style={{ color: "grey", marginTop: "20px", marginBottom: "70px" }}
            >
              Cart
            </h2>
            <CartItem />
          </div>
        </div>
        <DeleteProduct
          show={this.state.showDelete}
          onHide={this.onHandleClose}
          products={this.state.dataDelete}
        />
        <EditProduct
          show={this.state.showEdit}
          onHide={this.onEditClose}
          products={this.state.dataEdit}
        />
        <AddProduct show={this.state.addshow} onHide={this.addClose} />
      </>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state.products.pagination)
  return {
    products: state.products.products,
    pagination: state.products.pagination,
    auth: state.auth
  };
};
export default withRouter(connect(mapStateToProps)(Product));
