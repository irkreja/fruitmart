import React from "react";

class EditFishForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleChange(event) {
        console.log(event.currentTarget.value);
        // update that fish
        // 1. Take a copy of the curernt fish
        const updatedFish = {
            ...this.props.fish,
            [event.currentTarget.name]: event.currentTarget.value
        };
        this.props.updateFish(this.props.index, updatedFish);
    }

    handleDelete(e) {
        // 1. Stop the button from submitting
        e.preventDefault();
        // 2. get the text from that input
        this.props.deleteFish(this.props.index);
    }

    render() {
        return (
            <div className="fish-edit">
                <input
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                    value={this.props.fish.name}
                />
                <input
                    type="text"
                    name="price"
                    onChange={this.handleChange}
                    value={this.props.fish.price}
                />
                <select
                    type="text"
                    name="status"
                    onChange={this.handleChange}
                    value={this.props.fish.status}
                >
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea
                    name="desc"
                    onChange={this.handleChange}
                    value={this.props.fish.desc}
                />
                <input
                    type="text"
                    name="image"
                    onChange={this.handleChange}
                    value={this.props.fish.image}
                />
                {/* <button onClick={() => this.props.deleteFish(this.props.index)}> */}
                <button onClick={this.handleDelete}>Remove Fish</button>
            </div>
        );
    }
}

export default EditFishForm;
