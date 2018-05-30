import React from "react";
import { storeNames } from "../helpers";
import slugify from "slugify";

class StoreSelector extends React.Component {
    constructor(props) {
        super(props);
        this.storeNameRef = React.createRef();
        this.goToStore = this.goToStore.bind(this);
    }

    goToStore(event) {
        // 1. Stop the form from submitting
        event.preventDefault();
        // 2. get the text from that input
        const storeName = slugify(this.storeNameRef.current.value, {
            lower: true
        });

        // 3. Change the page to /store/whatever-they-entered
        this.props.history.push(`/store/${storeName}`);
    }

    render() {
        return (
            <React.Fragment>
                <h2>Please Enter a Store</h2>
                <form className="store-selector" onSubmit={this.goToStore}>
                    {/* <input
            type="text"
            defaultValue={getStoreName()}
            placeholder="Store Name"
            required
          /> */}
                    <select ref={this.storeNameRef}>
                        {storeNames.map((name, i) => (
                            <option key={i} value={name}>
                                {name}
                            </option>
                        ))}
                    </select>
                    <button type="submit">Visit Store →</button>
                </form>
            </React.Fragment>
        );
    }
}

export default StoreSelector;
