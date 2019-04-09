import React, { Component } from 'react';
import axios from 'axios';
import './register.css';

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
            <div className="signup-form">
                <form>
                    <h2>Register</h2>
                    <div className="form-group">
                        <div className="form-control"><input type="text" className="form-control" name="name" ref="name" placeholder="Name" required="required"/> </div>  	
                    </div>
                    <div classNameass="form-group">
        	            <input type="text" className="form-control" name="tel" ref="phone" placeholder="Phone" required="required"/>
                    </div>
		            <div className="form-group">
                        <input type="password" className="form-control" name="password" ref="password" placeholder="Password" required="required"/>
                    </div>
		            <div className="form-group">
                        <input type="password" className="form-control" name="confirm_password" placeholder="Confirm Password" required="required"/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success btn-lg btn-block">Register Now</button>
                    </div>
                </form>
            </div>
        );
    }
}