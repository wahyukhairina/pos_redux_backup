import React, { Component } from 'react'
// import Product from '../product/Product'
import Product from '../aproduct/Product'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { logout } from '../redux/actions/auth'

class Home extends Component {

  componentDidMount () {
   
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push('/login')
    }
    
  }

  onLogout () {
    this.props.dispatch(logout())
    this.props.history.push('/login')
  }

  render () {
    return (
      <>
        <div className='row' />
        <div className='row'>
          <div className='col-md-7'>
            <Link to="#" style={{color: 'grey', marginLeft:'10px', marginTop:'20px'}} onClick={this.onLogout.bind(this)}>Logout</Link>
       
          </div>
          <div className='col-md-4'>
            <p> Hi, {this.props.auth.profile.status} </p>
       
          </div>
        </div>
        <Product />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Home)
