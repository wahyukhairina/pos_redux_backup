import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Sidebar extends Component {
  
  render () {
    return (
      <ul className='nav flex-column'>
        <Link className='fa fa-book fa-2x' title='Menu' style={{ marginTop: '20px', marginLeft: '20px', color: 'grey' }} to='/' />
        <li className='nav-item'>
          <Link className='fa fa-list-alt fa-2x' title='Category' style={{ marginTop: '20px', marginLeft: '20px', color: 'grey' }} to='/category' />
        </li>
        <li className='nav-item'>
          <Link className='fa fa-user fa-2x' title='User' style={{ marginTop: '20px', marginLeft: '20px', color: 'grey' }} to='/user' />
        </li>
        <li className='nav-item'>
          <Link className='fa fa-file-text fa-2x' title='History' style={{ marginTop: '20px', marginLeft: '20px', color: 'grey' }} to='/history' />
        </li>
      </ul>
    )
  }
}

export default Sidebar
