import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import House from '../House/House';
import axios from 'axios';


class Dashboard extends Component {

    state = {
        inventory: [],
        showModal: false,
    }

    componentDidMount() {
        this.handleGetHouses();
    }

    handleGetHouses = () => {
        axios.get(`/api/getHouse`).then((response) => {
            this.setState({
                inventory: response.data
            })
        })
    };

    handleDeleteHouse = (id) => {
        axios.delete(`/api/deleteHouse/${id}`).then((response) => {
            this.setState({
                inventory: response.data
            })
        })
    };

    handleToggleModal = (id) => {
        this.setState({
            showModal: !this.state.showModal
        })
    }


    render() {
        console.log(this.state.showModal)
        return (
            <div>
                <section className="hero">
                    <div className="hero-body">
                        <div className="container">
                        <h1 className="title">
                            Dashboard
                        </h1>
                        <Link to='/wizard/step1' className="subtitle button is-small is-warning">
                            Add New Property
                        </Link>
                        </div>
                    </div>
                </section>
                <House houses={this.state.inventory} 
                    remove={this.handleDeleteHouse} 
                    showModal={this.state.showModal} 
                    toggleModal={this.handleToggleModal}/>
            </div>
        )
    }
};

export default Dashboard;