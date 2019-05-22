import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { addHouseInfo } from '/Users/spencerallen/devmtn/houser/src/redux/wizardReducer.js';


class OneWizard extends Component {

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


    render() {
        console.log(this.props.match)
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
                <div className="buttons are-small is-right">
                    <span className='button is-warning'>
                        <Link to='/wizard/step2' onClick={() => this.props.addHouseInfo(this.state)}>
                            Next
                        </Link>
                    </span>
                    <span className="button is-danger">
                        <Link to='/'>
                            Cancel
                        </Link>
                    </span>
                </div>
            </div>
        )
    }
};

function mapStateToProps(state) {
    return state;
  }
  // ^ dispatcher

  export default connect(mapStateToProps, { addHouseInfo })(OneWizard);
