import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import {Navigation} from "./menu";
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Home} from "./links/Home";
import {About} from "./links/About";
import Contact from "./links/Contact";
import {Users} from "./links/Users";

class App extends Component {
    state = {
        data: []
    };

    addData = (content) => {
        this.setState({
            data: [...this.state.data, content],
        })
    }

    render() {
        return (
            <Router>
                <div>
                    <Navigation/>
                    <Route path="/home" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact us" render={()=> <Contact addDataHandler = {this.addData} data={this.state.data} />}/>
                    <Route path="/users" render={()=> <Users data={this.state.data}/>} />
                </div>
            </Router>


        );
    }
}

export default App;
