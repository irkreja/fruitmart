import React from "react";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
    render() {
        // if (!this.props.details) return;
        const { image, name, price, desc, status } = this.props.details;
        const isAvailable = status === "available";
        return (
            <li className="menu-fish">
                <img src={image} alt={name} />
                <div className="right">
                    <h4 className="fish-name">
                        {name}
                        <span className="price">{formatPrice(price)}</span>
                    </h4>
                    <p>{desc}</p>
                    <button
                        disabled={!isAvailable}
                        onClick={() => this.props.addToOrder(this.props.index)}
                    >
                        {isAvailable ? "Add To Order" : "Sold Out!"}
                    </button>
                </div>
            </li>
        );
    }
}

export default Fish;
