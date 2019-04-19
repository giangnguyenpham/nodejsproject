import React, { Component } from 'react';
import axios from 'axios';
import './login.css';
import { Link, Redirect } from "react-router-dom";

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isError: {
                res: false,
                message: ""
            },
            redirect: false
        };
        this._login = this._login.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async _login() {
        let tel = this.refs.phone.value;
        let password= this.refs.password.value;
        const params = new URLSearchParams();
        let result = 0;
        params.append('tel', tel);
        params.append('password', password);
        await axios.post('http://localhost:9000/api/login', params,{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(function (res) {
           result = 1;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
        if (result == 1) {
            this.setState({redirect: true});
        } else {
            alert('error');
        }
    }

    handleSubmit() {
        // get our form data out of state
        console.log('Start login');

        // e.preventDefault();  
    }

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/list'/>;
        }

        return (
            <div className="login-form">
                <div className="content">
                    <form>
                        {(this.state.isError.res) ? <strong className="error">{this.state.isError.message}</strong> : null}
                        <h2 className="title">ĐĂNG NHẬP</h2>
                        <div className="form-group">
                            <input className="form-control" type="text" name="phone" ref="phone" placeholder="Nhập số điện thoại" required="required"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="password" name="password" ref="password" placeholder="Nhập mật khẩu" required="required"/>
                        </div>
                        <div className="form-group">
                            <button type="button" onClick={this._login} className="btn btn-primary btn-block">Đăng nhập</button>
                        </div>
                    </form>
                    
                    <p className="text-center"><Link to="/register">Create an Account</Link></p>
                    
                </div>
            </div>
        );
    }
}



  