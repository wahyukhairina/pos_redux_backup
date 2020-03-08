import React, { Component } from 'react'
// import Product from '../product/Product'
import Product from '../aproduct/Product'
import { Link } from 'react-router-dom';

class Home extends Component {

  componentDidMount () {
    if (!localStorage.getItem('isAuth')) {
      this.props.history.push('/login')
    }
    // if (localStorage.getItem('status') !== 'admin') {
    //   this.onLogout()
     
    // }
  }

  onLogout () {
    localStorage.removeItem('user-id')
    localStorage.removeItem('token')
    localStorage.removeItem('isAuth')
    localStorage.removeItem('name')
    localStorage.removeItem('status')
    this.props.history.push('/login')
  }

  render () {
    console.log('render')
    return (
      <>
        <div className='row'>
           </div>
        <div className='row'>
          <div className='col-md-7'>
          <Link to="#" style={{color:'grey', marginLeft:'10px', marginTop:'20px'}} onClick={this.onLogout.bind(this)}>Logout</Link>
       
          </div>
          <div className='col-md-4'>
          <p> Hi, {localStorage.getItem('status')} </p>
       
          </div>
        </div>
         <Product />
      </>
    )
  }
}

export default Home
