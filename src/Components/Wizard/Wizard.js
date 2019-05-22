import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';

import OneWizard from './OneWizard';
import TwoWizard from './TwoWizard';
import ThreeWizard from './ThreeWizard';


class Wizard extends Component {

    render() {
        
        return (
            <div>
                <Switch>
                    {/* <Route component={ OneWizard } path='/wizard/step1' /> */}
                    <Route component={ OneWizard } path={`${this.props.match.path}/step1`} />
                    <Route component={ TwoWizard } path={`${this.props.match.path}/step2`} />
                    <Route component={ ThreeWizard } path={`${this.props.match.path}/step3`}/>
                </Switch>
            </div>
        )
    }
};

export default Wizard;
