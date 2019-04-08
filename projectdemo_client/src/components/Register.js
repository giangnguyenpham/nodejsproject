import React, { Component } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';

export default class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isError: {
                res: false,
                message: ""
            }
        };
        this._register = this._register.bind(this);
    }

    _register() {
        
    }

    onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        console.log('Start register');
        let name = this.refs.name.value;
        let tel = this.refs.phone.value;
        let password= this.refs.password.value;
        let address= this.refs.address.value;

        const params = new URLSearchParams();
        params.append('name', name);
        params.append('tel', tel);
        params.append('password', password);
        params.append('address', address);

        axios.post('http://localhost:9000/api/user', params,{
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
            <div className="form-login-content">
                <Header />
                <div>
                    <h1 className="title">ĐĂNG KÝ</h1>
                    <div className="form-group">
                        <label htmlFor="name">Tên:</label>
                        <input type="text" ref="tel" className="form-control" id="name" name="name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="tel">Số điện thoại:</label>
                        <input type="text" ref="email" className="form-control" id="tel" name="tel"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Mật khẩu:</label>
                        <input type="password" ref="password" className="form-control" id="pwd" name="password"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Địa chỉ:</label>
                        <input type="text" ref="address" className="form-control" id="address" name="address"/>
                    </div>
                    <button type="submit" className="btn btn-default" onClick={this.summit}>Đăng Ký</button>
			    </div>
                <Footer />
            </div>
        );
    }
}