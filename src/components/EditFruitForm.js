import React from "react";

class EditFruitForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(event) {
    console.log(event.currentTarget.value);
    // update that fruit
    // 1. Take a copy of the curernt fruit
    const updatedFruit = {
      ...this.props.fruit,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateFruit(this.props.index, updatedFruit);
  }

  handleDelete(e) {
    // 1. Stop the button from submitting
    e.preventDefault();
    // 2. get the text from that input
    this.props.deleteFruit(this.props.index);
  }

  render() {
    return (
      <div className="fruit-edit">
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.props.fruit.name}
        />
        <input
          type="text"
          name="price"
          onChange={this.handleChange}
          value={this.props.fruit.price}
        />
        <select
          type="text"
          name="status"
          onChange={this.handleChange}
          value={this.props.fruit.status}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          onChange={this.handleChange}
          value={this.props.fruit.desc}
        />
        <input
          type="text"
          name="image"
          onChange={this.handleChange}
          value={this.props.fruit.image}
        />
        {/* <button onClick={() => this.props.deletefruit(this.props.index)}> */}
        <button onClick={this.handleDelete}>Remove fruit</button>
      </div>
    );
  }
}

export default EditFruitForm;
