import React, { Component } from 'react';
import { Link } from 'react-router-dom';



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
        console.log(this.state)
    };



    render() {
        return (
           <div className="container">
                <div className="field">
                    <label className="label">Property Name</label>
                    <div className="control">
                        <input  className="input" 
                                type="text" 
                                placeholder="e.g The Abode"
                                value={this.state.name}
                                name='name'
                                onChange={(e) => this.handleInput(e.target.name, e.target.value)}
                                ></input>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Address</label>
                    <div className="control">
                        <input  className="input" 
                                type="text" 
                                placeholder="e.g. 123 Sesame Street"
                                value={this.state.address}
                                name='address'
                                onChange={(e) => this.handleInput(e.target.name, e.target.value)}
                                ></input>
                    </div>
                </div>
                <div className="field">
                    <label className="label">City</label>
                    <div className="control">
                        <input  className="input" 
                                type="text" 
                                placeholder="e.g. Somewhere"
                                value={this.state.city}
                                name='city'
                                onChange={(e) => this.handleInput(e.target.name, e.target.value)}
                                ></input>
                    </div>
                </div>
                <div className="field">
                    <label className="label">State</label>
                    <div className="control">
                        <input  className="input" 
                                type="text" 
                                placeholder="e.g. Somewhere Else"
                                value={this.state.state}
                                name='state'
                                onChange={(e) => this.handleInput(e.target.name, e.target.value)}
                                ></input>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Zip</label>
                    <div className="control">
                        <input  className="input" 
                                type="text" 
                                placeholder="e.g. 12345"
                                value={this.state.zip}
                                name='zip'
                                onChange={(e) => this.handleInput(e.target.name, e.target.value)}
                                ></input>
                    </div>
                </div>
                <Link to='/' className="subtitle button is-small is-danger">
                    Cancel
                </Link>
            </div>
        )
    }
};

export default Wizard;