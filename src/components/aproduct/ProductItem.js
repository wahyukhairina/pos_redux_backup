/* eslint-disable no-unused-vars */
import React from "react";
import { connect } from "react-redux";
import { addCart } from "../redux/actions/cart";

const ProductItem = ({
  auth,
  products,
  onShowDelete,
  onShowEdit,
  dispatch,
  total,
  cart,
}) => {
  const onClickDelete = (e) => {
    e.preventDefault();
    onShowDelete(products);
  };
  const onClickEdit = (e) => {
    e.preventDefault();
    onShowEdit(products);
  };
  const convertToRupiah = (angka) => {
    var rupiah = "";
    var angkarev = angka.toString().split("").reverse().join("");
    for (var i = 0; i < angkarev.length; i++)
      if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + ".";
    return (
      "Rp. " +
      rupiah
        .split("", rupiah.length - 1)
        .reverse()
        .join("") +
      ",-"
    );
  };

  const onAddCart = (e) => {
    let i;
    cart.map((cart) => {
      if (cart.id === products.id) {
        i = 0;
        return alert("Product have been added");
      }
      return products;
    });

    if (i !== 0) {
      const InitialTotal = total;
      e.preventDefault();
      const product = products;
      product.qty = 1;
      product.total = InitialTotal + product.price;
      dispatch(addCart(product));
    }
  };

  let button;
  let a = 1;
  if (auth.profile.status !== "admin") {
    button = <></>;
  } else {
    button = (
      <>
        {" "}
        <div className="col-md-4">
          <a
            className="fa fa-trash-o fa-2x icons"
            onClick={onClickDelete}
            data-toggle="modal"
          />
        </div>
        <div className="col-md-4">
          <span
            className="fa fa-pencil-square-o fa-2x icons"
            onClick={onClickEdit}
          />
        </div>
      </>
    );
  }

  return (
    <div className="col-md-4" key={products.id}>
      <div className="card cardStyle" id="card_posts">
        <ul className="card-header">
          <div className="bold">{products.name}</div>
        </ul>
        <img className="rounded mx-auto d-block image" src={products.image} />
        <div className="card-body">
          <h5 className="card-title">{convertToRupiah(products.price)}</h5>

          <div className="row">
            {button}
            <div className="col-md-4">
              <span
                className="fa fa-shopping-cart fa-2x icons"
                onClick={onAddCart}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    total: state.cart.total,
    cart: state.cart.cart,
    auth: state.auth,
  };
};
export default connect(mapStateToProps)(ProductItem);
