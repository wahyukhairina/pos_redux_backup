import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component{
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: ''
        };
    }

    componentDidMount(){
        if(localStorage.getItem('token')){
            this.props.history.push('/');
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name] : e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        

        axios
            .post("http://localhost:8006/user/login", this.state)
            .then(res => {
                console.log(res.data);
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('user-id', res.data.user_id);
                localStorage.setItem('isAuth', true);
                localStorage.setItem('name', res.data.username);
                localStorage.setItem('status', res.data.status)
                this.props.history.push('/');
            })
            .catch(err => {
                console.log(err);
            })
    }

    render(){
        return(
            <div className="container">
                <h2 style={{ marginTop: '10px' }}>Welcome, </h2>
                <h4 style={{ marginTop: '10px' }}>would you mind to login first?</h4>
                <div className="row justify-content-md-center">
                    <div className="col-md-8">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" className="form-control" placeholder="Enter Username" name="username" onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={this.onChange} />
                            </div>
                            <button style={{background:"#DB7093"}}  type="submit" className="btn btn">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;