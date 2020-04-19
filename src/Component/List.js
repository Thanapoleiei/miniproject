import React, { Component } from "react";
import Item from "./Item";

class List extends Component {
  showProducts() {
    return (
      this.props.products &&
      this.props.products.map(product => (
        <Item key={product.productId} product={product} onAddOrder={this.props.onAddOrder} />
      ))
    );
  }

  render() {
    return <div className="row">{this.showProducts()}</div>;
  }
}

export default List;