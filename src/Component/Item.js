import React, { Component } from "react";

class Item extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {productName, unitPrice, thumbnail} = this.props.product;
        return (
            <div className="col-md-4 col-sm-5">
                <img className="img-fluid img-thumbnail" src={thumbnail} />
                <h5 className="mt-4">{productName}</h5>
                <p className="title text-right" >{unitPrice} THB</p>
                <button className="btn btn-primary btn-lg" onClick={() => this.props.onAddOrder(this.props.product)} >
                    ซื้อ
                </button>
                <hr />
            </div>
        )
    }
}

export default Item;