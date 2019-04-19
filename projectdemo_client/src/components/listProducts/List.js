import React, { Component } from 'react';
import '../../App.css';
export default class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isError: {
                res: false,
                message: ""
            },
            isEdit: false,
			isLogin: false
        };
        this._list = this._list.bind(this);
    }

    _list() {
        
    }

    onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        console.log('Start List');
        // let name = this.refs.name.value;
        // let tel = this.refs.phone.value;
        // let password= this.refs.password.value;
        // let address= this.refs.address.value;

        // const params = new URLSearchParams();
        // params.append('name', name);
        // params.append('tel', tel);
        // params.append('password', password);
        // params.append('address', address);

        // axios.get('http://localhost:9000/api/users', params,{
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded'
        //     }
        // })
        // .then(function (res) {
        //     console.log(res);
        // })
        // .catch(function (error) {
        //     // handle error
        //     console.log(error);
        // });    
    }

    render() {
        return (
            <div>
            <h1>aaaaaaaaaaaa</h1>
                {/* <div>
                    <tr className="info">
                    <td>
                        <span>{this.props.user_name}</span>
                    </td>
                    <td>
                        <input type="text" ref="tel" defaultValue={this.props.user_tel} className={this.state.isEdit ? '' : 'hidden'} />
                        <span className={this.state.isEdit ? 'hidden' : ''}>{this.props.user_tel}</span>
                    </td>
                    <td>
                        <input type="hidden" ref="id" value={this.props.user_id}/>
                        <button className="btn btn-info" onClick={this.edit}>{this.state.isEdit ? 'OK' : 'Sửa'}</button>
                        <button className={this.state.isEdit ? 'btn btn-info' : 'hidden'} onClick={this.cancel}>Hủy</button>
                        <button className="btn btn-danger" onClick={this.remove}>Xóa</button>
                    </td>
                    </tr>
			    </div> */}
            </div>
        );
    }
}