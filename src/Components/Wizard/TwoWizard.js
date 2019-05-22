import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import { addImage } from '/Users/spencerallen/devmtn/houser/src/redux/wizardReducer.js';

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
        console.log(this.props.match)

        return (
            <div className="container">
                <br/>
                <br/>
                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                        <label className="label">Property Image</label>
                    </div>
                    <div className="field-body">
                        <div className="field">
                            <p className="control">
                                <input className="input"
                                    type="text"
                                    placeholder="e.g Some URL"
                                    value={this.state.image}
                                    name='image'
                                    onChange={(e) => this.handleInput(e.target.name, e.target.value)}
                                ></input>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='buttons is-right'>
                    <span className='button is-small is-warning'>
                        <Link to='/wizard/step1'>
                            Previous
                        </Link>
                    </span>
                    <span className='button is-small is-warning'>
                        <Link to='/wizard/step3' onClick={() => this.props.addImage(this.state)}>
                            Next
                        </Link>
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

export default connect(mapStateToProps, { addImage })(TwoWizard);