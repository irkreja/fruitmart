import React from "react";
import { formatPrice } from "../helpers";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Order extends React.Component {
    constructor(props) {
        super(props);
        this.renderOrder = this.renderOrder.bind(this);
    }
    renderOrder(key) {
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        const isAvailable = fish && fish.status === "available";
        const transitionOptions = {
            classNames: "order",
            key,
            timeout: { enter: 500, exit: 500 }
        };
        // Make sure the fish is loaded before we continue!
        if (!fish) return null;

        if (!isAvailable) {
            return (
                <CSSTransition {...transitionOptions}>
                    <li key={key}>
                        Sorry {fish ? fish.name : "fish"} is no longer available
                    </li>
                </CSSTransition>
            );
        }
        return (
            <CSSTransition {...transitionOptions}>
                <li key={key}>
                    <span>
                        <TransitionGroup component="span" className="count">
                            <CSSTransition
                                classNames="count"
                                key={count}
                                timeout={{ enter: 500, exit: 500 }}
                            >
                                <span>{count}</span>
                            </CSSTransition>
                        </TransitionGroup>
                        lbs {fish.name}{" "}
                        <button onClick={() => this.props.removeFromOrder(key)}>
                            &times;
                        </button>
                    </span>
                    <span className="price">
                        {formatPrice(count * fish.price)}
                    </span>
                </li>
            </CSSTransition>
        );
    }
    render() {
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, key) => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvailable = fish && fish.status === "available";
            if (isAvailable) {
                return prevTotal + count * fish.price;
            }
            return prevTotal;
        }, 0);
        return (
            <div className="order-wrap">
                <h2>Order</h2>
                <TransitionGroup component="ul" className="order">
                    {orderIds.map(this.renderOrder)}
                    <CSSTransition timeout={{ enter: 500, exit: 500 }}>
                        <li className="total">
                            Total:
                            <strong>{formatPrice(total)}</strong>
                        </li>
                    </CSSTransition>
                    {/* <li className="total">
            Total:
            <strong>{formatPrice(total)}</strong>
          </li> */}
                </TransitionGroup>
            </div>
        );
    }
}

export default Order;
