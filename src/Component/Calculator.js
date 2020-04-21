import React, { Component } from "react";

class Calculator extends Component {

    showOrders (orders) {
        if(!orders || orders.length == 0) {
            return <li className="text-right text-muted title">ยังไม่มีรายการสินค้า</li>
        } else {
            return orders.map(order => {
                return (
                    <li className="text-right text-success title">
                        {order.product.productName} x {order.quantity} = {order.product.unitPrice * order.quantity}
                        <button className="btn btn-light btn-sm" onClick={() => this.props.onDelOrder(order.product)} >X</button>
                    </li>
                    )
            })
        }
    }

    render() {
        const { totalPrice, orders } = this.props;
        return (
            <div>
                
                
                <ul className="list-unstyled ">
                    {this.showOrders(orders)}
                </ul>
                <hr/>
                <h1 className="text-right"> {totalPrice} THB</h1>
                <hr />
                <button className="btn btn-success" >ยืนยัน</button>
                <nbsp>  </nbsp>
                <button className="btn btn-danger" >ยกเลิก</button>
            </div>
        );
    }
}

export default Calculator;