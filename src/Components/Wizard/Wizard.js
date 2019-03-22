import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



class Wizard extends Component {

    state = {
        name: '',
        address: '',
        city: '',
        state: '',
        zip: '',
    };

    handleInput = (name, value) => {
        this.setState({
            [name]: value,
        });
    };

    handlePost = () => {
        var { name, address, city, state, zip } = this.state
        var body = {
            name: name,
            address: address,
            city: city,
            state: state,
            zip: zip,
        }

        axios.post(`/api/addHouse`, body).then(() => {
            this.props.history.push('/')
        })
    }

    render() {
        console.log(this.props)
        return (
            <div className="container">
                <br></br>
                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                        <label className="label">Property Name</label>
                    </div>
                    <div className="field-body">
                        <div className="field">
                            <p className="control">
                                <input className="input"
                                    type="text"
                                    placeholder="e.g The Abode"
                                    value={this.state.name}
                                    name='name'
                                    onChange={(e) => this.handleInput(e.target.name, e.target.value)}
                                ></input>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                        <label className="label">Address</label>
                    </div>
                    <div className="field-body">
                        <div className="field">
                            <p className="control">
                                <input className="input"
                                    type="text"
                                    placeholder="e.g. 123 Sesame Street"
                                    value={this.state.address}
                                    name='address'
                                    onChange={(e) => this.handleInput(e.target.name, e.target.value)}
                                ></input>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                        <label className="label">City</label>
                    </div>
                    <div className="field-body">
                        <div className="field">
                            <p className="control">
                                <input className="input"
                                    type="text"
                                    placeholder="e.g. Somewhere"
                                    value={this.state.city}
                                    name='city'
                                    onChange={(e) => this.handleInput(e.target.name, e.target.value)}
                                ></input>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                        <label className="label">State</label>
                    </div>
                    <div className="field-body">
                        <div className="field">
                            <p className="control">
                                <input className="input"
                                    type="text"
                                    placeholder="e.g. Somewhere Else"
                                    value={this.state.state}
                                    name='state'
                                    onChange={(e) => this.handleInput(e.target.name, e.target.value)}
                                ></input>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                        <label className="label">Zip</label>
                    </div>
                    <div className="field-body">
                        <div className="field">
                            <p className="control">
                                <input className="input"
                                    type="text"
                                    placeholder="e.g. 12345"
                                    value={this.state.zip}
                                    name='zip'
                                    onChange={(e) => this.handleInput(e.target.name, e.target.value)}
                                ></input>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="buttons are-small">
                    <button className="button is-success " onClick={() => this.handlePost()}>
                        Add New House
                    </button>
                    <Link to='/' className="button is-danger">
                        Cancel
                    </Link>
                </div>
            </div>
        )
    }
};

export default Wizard;