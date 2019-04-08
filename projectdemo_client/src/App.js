import React, { Component } from 'react';
import Login from './components/Login';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
         <div className="App">
        <Login />
      </div>
      </div>
    );
  }
}

export default App;
