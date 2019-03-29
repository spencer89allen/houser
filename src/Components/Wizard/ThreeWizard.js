import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { addPayment } from '/Users/spencerallen/devmtn/houser/src/redux/wizardReducer.js';

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
        this.props.addPayment(this.state)
        
        const { name, address, city, state, zip, image, mortgage, rent } = this.props
        const body = {
            name: name,
            address: address,
            city: city,
            state: state,
            zip: zip,
            image: image,
            mortgage: mortgage,
            rent: rent,
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
                <div className='buttons is-right'>
                    <span className='button is-small is-warning'>
                        <Link to='/wizard/step2'>
                            Previous
                        </Link>
                    </span>
                    <span className='button is-small is-success' onClick={() => this.handlePost()}>
                        Add New House
                    </span>
                    <span className="button is-small is-danger">
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
    return state
}

export default connect(mapStateToProps, { addPayment })(ThreeWizard);