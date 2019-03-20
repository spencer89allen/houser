import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Wizard extends Component {




    render() {
        return (
           <div className="container">
                <div className="field">
                    <label className="label">Property Name</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="e.g The Abode"></input>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Address</label>
                    <div className="control">
                        <input className="input" type="email" placeholder="e.g. 123 Sesame Street"></input>
                    </div>
                </div>
                <div className="field">
                    <label className="label">City</label>
                    <div className="control">
                        <input className="input" type="email" placeholder="e.g. Somewhere"></input>
                    </div>
                </div>
                <div className="field">
                    <label className="label">State</label>
                    <div className="control">
                        <input className="input" type="email" placeholder="e.g. Somewhere Else"></input>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Zip</label>
                    <div className="control">
                        <input className="input" type="email" placeholder="e.g. 12345"></input>
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