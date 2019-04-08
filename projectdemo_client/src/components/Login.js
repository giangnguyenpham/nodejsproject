import React, { Component } from 'react';
import { Button, Form} from "react-bootstrap";
//import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import {Container, Col, FormGroup, Label, Input} from 'reactstrap';
import axios from 'axios';
import '../App.css';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isError: {
                res: false,
                message: ""
            }
        };
        this._login = this._login.bind(this);
    }

    _login() {
        
    }

    onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        console.log('Start login');
        let tel = this.refs.phone.value;
        let password= this.refs.password.value;

        const params = new URLSearchParams();
        params.append('tel', tel);
        params.append('password', password);

        axios.post('http://localhost:9000/api/login', params,{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(function (res) {
            console.log(res);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });       
    }

    render() {
        return (
            
            // <div className="form-login-content">
            //     <div className="content">
            //         <form onSubmit={this.onSubmit}>
            //             {(this.state.isError.res) ? <strong className="error">{this.state.isError.message}</strong> : null}
            //             <h1 className="title">ĐĂNG NHẬP</h1>
            //             <div className="form-group">
            //                 <label htmlFor="phone">Số điện thoại:</label>
            //                 <input type="text" ref="phone" className="form-control" id="phone" name="phone"/>
            //             </div>
            //             <div className="form-group">
			//                 <label htmlFor="password">Mật khẩu:</label>
			//                 <input type="password" ref="password" className="form-control" id="password" name="password"/>
			//             </div>	
            //             <input type="password" name="phone" ref="password" placeholder="Nhập mật khẩu"/>
            //             <button type="submit">Đăng nhập</button>
            //         </form>
            //     </div>
            // </div>
                <Container className="App">
                    <h2>Sign In</h2>
                    <Form className="form">
                    <Col>
                        <FormGroup>
                        <Label>Email</Label>
                        <Input
                            type="email"
                            name="email"
                            id="exampleEmail"
                            placeholder="myemail@email.com"
                        />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="examplePassword"
                            placeholder="********"
                        />
                        </FormGroup>
                    </Col>
                    <Button>Submit</Button>
                    </Form>
                </Container>
        );
    }
}