import React, { Component } from "react";
import { Modal, Button, Alert } from "react-bootstrap";

import { connect } from "react-redux";
import { postOrder } from "../redux/actions/checkout";
import { removeCart } from '../redux/actions/cart'

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  convertToRupiah(angka) {
    var rupiah = "";
    var angkarev = angka
      .toString()
      .split("")
      .reverse()
      .join("");
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
  }

  onChangeValue = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  async onCheckout(cart) {
    const data = {
      product: this.props.cart,
      total: this.props.total
    };

    await this.props.dispatch(postOrder(data));
    await this.props.dispatch(removeCart(cart))
    this.props.onHide();
  }

  render() {
    const { cart } = this.props;
    const { total } = this.props;
    const ppn = (total * 10) / 100;
    const totalppn = total + ppn;
    return (
      <Modal show={this.props.show} onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Receipt</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cart.map(cart => (
            <div className="row">
              <div className="col-md-4">
                <ul style={{ fontWeight: "bold" }}> {cart.name} </ul>
              </div>
              <div className="col-md-4">{cart.qty}</div>
              <div>{this.convertToRupiah(cart.price * cart.qty)}</div>
            </div>
          ))}

          <div>
            <div className="row">
              <div className="row" style={{ paddingLeft: "60px" }}>
                <div className="col-md-4">PPN</div>
                <div className="col-md-4" style={{ paddingLeft: "50px" }}>
                  10%
                </div>

                <div className="col-md-4">{this.convertToRupiah(ppn)}</div>
              </div>
              <p style={{ paddingLeft: "50px" }}>
                --------------------------------------------------------------
              </p>
              <div className="col-md-7">
                <ul style={{ fontWeight: "bold" }}>Total</ul>
              </div>
              <div className="col-md-4">
                <ul style={{ fontWeight: "bold" }}>
                  {this.convertToRupiah(totalppn)}
                </ul>
              </div>
              <Button onClick={() => this.onCheckout(cart)}>Checkout</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

export default connect()(Checkout);
