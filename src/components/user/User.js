import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getUser } from '../redux/actions/user'
import ListUser from './ListUser'
import Navbar from '../layout/Navbar'
import Sidebar from '../layout/Sidebar'
import AddUser from '../modals/AddUser'
import DeleteUser from '../modals/DeleteUser'
import { Container, Row, Col, Button, Table } from 'react-bootstrap'


class User extends Component {
   

    state = {
        show : false,
        showDelete: false,
        selectDelete: null
    }

onGetUser = async() => {
    await this.props.dispatch(getUser())
}

componentDidMount(){
    if (localStorage.getItem('status') !== 'admin') {
        alert ('Sorry dear, you are not Admin :)')
        this.props.history.push('/')
      }
    this.onGetUser()
}

addShow = () => {
    
    this.setState({
        show: true,
        user: null
    })
} 

  addClose = () => {
    this.setState({
        show: false
    })
} 

closeDelete = () => {
    this.setState({
        showDelete: false
    })
}


onSelectDelete = (id) => {
    this.setState({
        selectDelete : id,
        showDelete : true
    })
}


    render(){
        const { user } = this.props
        // console.log(user)
        const listUser = user.user.map((user) =>  <ListUser user = {user} key={user.user_id} onSelectDelete={this.onSelectDelete}/> )
        return (
           <>
                
                    <div className='col-md-12'>
                    <Navbar />
                    </div>
               
                <div className="row">
                    <div className='col-md-1'>
                        <Sidebar />
                    </div>
                    <div className='col-md-11'>
                        <div className='row'>
                        <div className='col-md-4'>
                            <h2 style={{color:'#848484', marginTop:'10px'}}>List User</h2>
                        </div>
                        <div className='col-md-6'>
                        <a className='fa fa-plus fa-2x' onClick={this.addShow} title='Add User' style={{ marginLeft: '750px', marginTop: '15px', color: 'grey' }} href='#' />
                        </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-11'>
                       <table className='table' style={{marginTop: '20px'}} striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">UserName</th>
                                    <th scope="col">Password</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Date Added</th>
                                    <th scope="col">Data Updated</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listUser}
                            </tbody>
                        </table>
                        </div>
                        </div>
                    </div>
                </div>
                <AddUser show={this.state.show} onHide={this.addClose} />
                <DeleteUser show={this.state.showDelete} onHide={this.closeDelete} user={this.state.selectDelete}/>
                </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(User)