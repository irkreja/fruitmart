import React from "react";

class AddFruitForm extends React.Component {
  constructor(props) {
    super(props);
    this.nameRef = React.createRef();
    this.priceRef = React.createRef();
    this.statusRef = React.createRef();
    this.descRef = React.createRef();
    this.imageRef = React.createRef();
    this.createFruit = this.createFruit.bind(this);
  }

  createFruit(e) {
    //   1. Prevent From Submitting
    e.preventDefault();

    // 2. Get Form Data
    const fruit = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value
    };

    // 3. Pass Form data to State Component
    this.props.addFruit(fruit);

    // 4. Reset the input field aka current event target
    e.currentTarget.reset();
  }

  render() {
    return (
      <form className="fruit-edit" onSubmit={this.createFruit}>
        <input
          type="text"
          name="name"
          ref={this.nameRef}
          required
          placeholder="Name"
        />
        <input
          type="text"
          name="price"
          ref={this.priceRef}
          required
          placeholder="Price"
        />
        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" ref={this.descRef} placeholder="Desc" />
        <input
          type="text"
          name="image"
          ref={this.imageRef}
          required
          placeholder="Image"
        />
        <button type="submit">+ Add Fruit</button>
      </form>
    );
  }
}

export default AddFruitForm;
