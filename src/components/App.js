import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import Fruit from "./Fruit";
import samplefruits from "../sample-fruits";
// import base from "../base";

class App extends React.Component {
  // state = {
  //   fruits: {},
  //   order: {}
  // };
  constructor(props) {
    super(props);
    this.state = {
      fruits: {},
      order: {}
    };
    this.addFruit = this.addFruit.bind(this);
    this.updateFruit = this.updateFruit.bind(this);
    this.deleteFruit = this.deleteFruit.bind(this);
    this.loadSampleFruits = this.loadSampleFruits.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    this.removeFromOrder = this.removeFromOrder.bind(this);
  }
  /*
  componentDidMount() {
    const { params } = this.props.match;
    const localStorageRef = localStorage.getItem(params.storeId);

    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
      // Since localstorange value is string we need to parse as JSON
    }

    this.ref = base.syncState(`${this.props.match.params.storeId}/fruits`, {
      context: this,
      state: "fruits"
    });
    //this.ref is different than react input ref it is just for reference a piece of data in firebase db
  }
*/
  // componentWillUnmount() {
  //   base.removeBinding(this.ref);
  // }

  /*   componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
  } */

  addFruit(fruit) {
    // 1. Take a copy of the existing state
    const fruits = { ...this.state.fruits };
    // 2. Add our new fruit to that fruits variable
    fruits[`fruit${Date.now()}`] = fruit;
    // 3. Set the new fruits object to state
    this.setState({ fruits });
  }

  updateFruit(key, updatedFruit) {
    // 1. Take a copy of the current state
    const fruits = { ...this.state.fruits };
    // 2. Update that state
    fruits[key] = updatedFruit;
    // 3. Set that to state
    this.setState({ fruits });
  }

  deleteFruit(key) {
    // 1. take a copy of state
    const fruits = { ...this.state.fruits };
    // 2. update the state
    // delete fruits[key];
    // fruits[key] = null;
    delete fruits[key];
    // 3.  update state
    this.setState({ fruits });
  }

  loadSampleFruits() {
    this.setState({ fruits: samplefruits });
  }

  addToOrder(key) {
    // 1. take a copy of state
    const order = { ...this.state.order };
    // 2. Either add to the order, or update the number in our order
    order[key] = order[key] + 1 || 1;
    // 3. Call setState to update our state object
    this.setState({ order });
  }

  removeFromOrder(key) {
    // 1. take a copy of state
    const order = { ...this.state.order };
    // 2. remove that itemf from order
    delete order[key];
    // 3. Call setState to update our state object
    this.setState({ order });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Fruits Market" />

          <ul className="fruits">
            {Object.keys(this.state.fruits).map(key => (
              <Fruit
                key={key}
                index={key}
                details={this.state.fruits[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>

        <Order
          fruits={this.state.fruits}
          order={this.state.order}
          removeFromOrder={this.removeFromOrder}
        />

        <Inventory
          addFruit={this.addFruit}
          updateFruit={this.updateFruit}
          deleteFruit={this.deleteFruit}
          loadSampleFruits={this.loadSampleFruits}
          fruits={this.state.fruits}
          storeId={this.props.match.params.storeId}
        />
      </div>
    );
  }
}

export default App;
