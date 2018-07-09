import React from "react";
import AddFruitForm from "./AddFruitForm";
import EditFruitForm from "./EditFruitForm";
// import firebase from "firebase";
// import Login from "./Login";
// import base, { firebaseApp } from "../base";

class Inventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: null,
      owner: null
    };
    // this.authHandler = this.authHandler.bind(this);
    // this.authenticate = this.authenticate.bind(this);
    // this.logout = this.logout.bind(this);
  }

  /* componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user });
      }
    });
  }

  async authHandler(authData) {
    // 1 .Look up the current store in the firebase database
    const store = await base.fetch(this.props.storeId, { context: this });
    console.log(store);
    // 2. Claim it if there is no owner
    if (!store.owner) {
      // save it as our own
      await base.post(`${this.props.storeId}/owner`, {
        data: authData.user.uid
      });
    }
    // 3. Set the state of the inventory component to reflect the current user
    this.setState({
      uid: authData.user.uid,
      owner: store.owner || authData.user.uid
    });
  }

  authenticate(provider) {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  }

  async logout() {
    console.log("Logging out!");
    await firebase.auth().signOut();
    this.setState({ uid: null });
  } */

  render() {
    /*     const logout = <button onClick={this.logout}>Log Out!</button>;

    // 1. Check if they are logged in
    if (!this.state.uid) {
      return (
        <React.Fragment>
          <Login authenticate={this.authenticate} />
        </React.Fragment>
      );
    }

    // 2. check if they are not the owner of the store
    if (this.state.uid !== this.state.owner) {
      return (
        <div>
          <p>Sorry you are not the owner!</p>
          {logout}
        </div>
      );
    } */

    // 3. They must be the owner, just render the inventory
    return (
      <div className="inventory">
        {/* <div className="logout">{logout}</div> */}
        <h1>Inventory</h1>
        {Object.keys(this.props.fruits).map(key => (
          <EditFruitForm
            key={key}
            index={key}
            fruit={this.props.fruits[key]}
            updateFruit={this.props.updateFruit}
            deleteFruit={this.props.deleteFruit}
          />
        ))}
        <AddFruitForm addFruit={this.props.addFruit} />

        <button onClick={this.props.loadSampleFruits}>
          Load Sample Fruits
        </button>
      </div>
    );
  }
}

export default Inventory;
