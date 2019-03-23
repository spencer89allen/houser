import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

class TwoWizard extends Component {
    state = {
        image: '',
    };

    handleInput = (name, value) => {
        this.setState({
            [name]: value,
        });
    };



    render() {
        return (
            <div className="container">
                <br></br>
                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                        <label className="label">Property Image</label>
                    </div>
                    <div className="field-body">
                        <div className="field">
                            <p className="control">
                                <input className="input"
                                    type="text"
                                    placeholder="e.g The Some URL"
                                    value={this.state.image}
                                    name='image'
                                    onChange={(e) => this.handleInput(e.target.name, e.target.value)}
                                ></input>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="buttons are-small is-right">
                    <Link to='/wizard/step3' className="button is-warning">
                        Next
                    </Link>
                </div>
            </div>
        )
    }
};

export default TwoWizard;