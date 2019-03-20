import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import House from '../House/House';


class Dashboard extends Component {





    render() {
        return (
            <div>
                <section className="hero">
                    <div className="hero-body">
                        <div className="container">
                        <h1 className="title">
                            Dashboard
                        </h1>
                        <Link to='/wizard' className="subtitle button is-small is-warning">
                            Add New Property
                        </Link>
                        </div>
                    </div>
                </section>
                <House />
            </div>
        )
    }
};

export default Dashboard;