import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { Route, Switch } from 'react-router-dom';

import OneWizard from './OneWizard';
import TwoWizard from './TwoWizard';
import ThreeWizard from './ThreeWizard';


class Wizard extends Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route component={ OneWizard } path='/wizard/step1' />
                    <Route component={ TwoWizard } path='/wizard/step2' />
                    <Route component={ ThreeWizard } path='/wizard/step3'/>
                </Switch>
                <br />
                <div className="buttons are-small is-centered">
                    <Link to='/' className="button is-danger">
                        Cancel
                    </Link>
                </div>
            </div>
        )
    }
};

export default Wizard;