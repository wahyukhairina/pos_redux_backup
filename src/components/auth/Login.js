import React, { Component } from 'react';
import { connect } from 'react-redux'
import { login } from '../redux/actions/auth'
require('dotenv').config()
class Login extends Component{
    constructor(props){
        super(props);

        // this.state = {
        //     username: '',
        //     password: ''
        // };
    }

    componentDidMount(){
       if(this.props.auth.isAuthenticated){
           this.props.history.push('/')
       }
    }

    onChange = (e) => {
        this.setState({ [e.target.name] : e.target.value })
    }

    onSubmit = async (e) => {
        e.preventDefault();
        console.log(this.state)
        await this.props.dispatch(login(this.state))
        await this.props.history.push('/')
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

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect (mapStateToProps)(Login)