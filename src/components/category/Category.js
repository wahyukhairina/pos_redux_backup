/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategory } from '../redux/actions/category'
import Sidebar from '../layout/Sidebar'
import Navbar from '../layout/Navbar'
import ListCategory from './ListCategory'
import AddCategory from '../modals/AddCategory'
import DeleteCategory from '../modals/DeleteCategory'

class Category extends Component {
state = {
    addshow: false,
    deletedata: null
}
    componentDidMount() {
        this.getCategory()
    }
    getCategory = async() => {
        await this.props.dispatch(getCategory())
    }

    addShow = () => {
        this.setState({
            addshow: true
        })
    }

    addClose = () => {
        this.setState({
            addshow: false
        })
    }

    deleteShow = (data) => {
        this.setState({
            deleteshow: true,
            deletedata: data
        })
    }
    
    deleteClose = (data) => {
        this.setState ({
            deleteshow: false
        })
    }

    render() {
        const { category } = this.props
        const listCategory = category.category.map((category) => <ListCategory category={ category } key={ category.id} clickDelete={this.deleteShow} />)
        return (
            <>
            <div className='col-md-12'>
            <Navbar />
            </div>
           
            <div className='row'>
                <div className='col-md-1'>
                    <Sidebar />
                </div>
                <div className='col-md-11'>
                <div className='row'>
                        <div className='col-md-4'>
                            <h2 style={{color:'#848484', marginTop:'10px'}}>List Category</h2>
                        </div>
                        <div className='col-md-6'>
                        <a className='fa fa-plus fa-2x' title='Add User' onClick={this.addShow} style={{ marginLeft: '750px', marginTop: '15px', color: 'grey' }} href='#' />
                        </div>
                        </div>
                <div className='row'>
                        <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Data Added</th>
                                <th scope="col">Data Updated</th>
                                <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listCategory}
                            </tbody>
                        </table>
                </div>
                </div>
            </div>
           
           <AddCategory show={this.state.addshow} onHide={this.addClose} />
           <DeleteCategory show={this.state.deleteshow} onHide={this.deleteClose} category={this.state.deletedata} />
            </>
        )
    }
}

const mapStateToProps = ( state ) => {
    return {
        category: state.category
    }
}

export default connect(mapStateToProps)(Category)