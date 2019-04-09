import React, { Component } from 'react';
import axios from 'axios';
import './login.css';
import { Link } from "react-router-dom";

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
            <div className="login-form">
                <div className="content">
                    <form onSubmit={this.onSubmit}>
                        {(this.state.isError.res) ? <strong className="error">{this.state.isError.message}</strong> : null}
                        <h2 className="title">ĐĂNG NHẬP</h2>
                        <div className="form-group">
                            <input className="form-control" type="text" name="phone" ref="phone" placeholder="Nhập số điện thoại" required="required"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="password" name="password" ref="password" placeholder="Nhập mật khẩu" required="required"/>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block">Đăng nhập</button>
                        </div>
                    </form>
                    
                    <p className="text-center"><Link to="/register">Create an Account</Link></p>
                    
                </div>
            </div>
        );
    }
}



  