import React, { Component } from 'react';
import axios from 'axios';

class ThreeWizard extends Component {
    state = {
        mortgage: '',
        rent: '',
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
        return (
            <div className="container">
                <br></br>
                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                        <label className="label">Monthly Mortgage Amount</label>
                    </div>
                    <div className="field-body">
                        <div className="field">
                            <p className="control">
                                <input className="input"
                                    type="text"
                                    placeholder="e.g Some Number"
                                    value={this.state.mortgage}
                                    name='mortgage'
                                    onChange={(e) => this.handleInput(e.target.name, e.target.value)}
                                ></input>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                        <label className="label">Desired Monthly Rent</label>
                    </div>
                    <div className="field-body">
                        <div className="field">
                            <p className="control">
                                <input className="input"
                                    type="text"
                                    placeholder="e.g. Some Other Number"
                                    value={this.state.rent}
                                    name='rent'
                                    onChange={(e) => this.handleInput(e.target.name, e.target.value)}
                                ></input>
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="field is-group buttons are-small is-centered">
                        <button className="button is-success is-centered" onClick={() => this.handlePost()}>
                            Add New House
                    </button>
                    </div>
                </div>
            </div>
        )
    }
};

export default ThreeWizard;