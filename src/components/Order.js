import React from "react";
import { formatPrice } from "../helpers";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.renderOrder = this.renderOrder.bind(this);
  }
  renderOrder(key) {
    const fruit = this.props.fruits[key];
    const count = this.props.order[key];
    const isAvailable = fruit && fruit.status === "available";
    const transitionOptions = {
      classNames: "order",
      key,
      timeout: { enter: 500, exit: 500 }
    };
    // Make sure the fruit is loaded before we continue!
    if (!fruit) return null;

    if (!isAvailable) {
      return (
        <CSSTransition {...transitionOptions}>
          <li key={key}>
            Sorry {fruit ? fruit.name : "fruit"} is no longer available
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
            lbs {fruit.name}{" "}
            <button onClick={() => this.props.removeFromOrder(key)}>
              &times;
            </button>
          </span>
          <span className="price">{formatPrice(count * fruit.price)}</span>
        </li>
      </CSSTransition>
    );
  }
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const fruit = this.props.fruits[key];
      const count = this.props.order[key];
      const isAvailable = fruit && fruit.status === "available";
      if (isAvailable) {
        return prevTotal + count * fruit.price;
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
