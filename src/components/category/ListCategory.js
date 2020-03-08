import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCategory } from '../redux/actions/category'
import Navbar from '../layout/Navbar'
import Sidebar from '../layout/Sidebar'

class ListCategory extends Component {
    state = {
        add: false
    }

  getCategory () {
    this.props.dispatch(getCategory())
  }

  componentDidMount () {
    if (localStorage.getItem('status') !== 'admin') {
      alert ('Sorry dear, you are not Admin :)')
      this.props.history.push('/')
    }
    this.getCategory()
  }

  showAdd (){
      this.setState ({
          add: true
      })
  }

  closeAdd (){
    this.setState ({
        add: false
    })
}
  render () {
    const { category } = this.props
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
          <a className='fa fa-plus fa-2x' onClick={this.showAdd} title='Add User' style={{ marginLeft: '1200px', marginTop: '15px', color: 'grey' }} href='#' />
         <div className='row'>
           <div className='col-md-11'>
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col'>CODE</th>
                  <th scope='col'>CATEGORY</th>
                  <th scope='col'>DATA_ADDED</th>
                  <th scope='col'>DATA_UPDATED</th>
                  <th scope='col'>ACTION</th>
                </tr>
              </thead>
              <tbody>

                {category.map((category) =>
                  <tr key={category.id}>
                    <td>{category.id}</td>
                    <td>{category.name}</td>
                    <td>{category.data_added}</td>
                    <td>{category.data_updated}</td>
                    <td><button>Edit</button>-<button>Delete</button></td>
                  </tr>
                )}
              </tbody>
            </table>
            </div>
         </div>
          </div>
        </div>

      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    category: state.category.category
  }
}
export default connect(mapStateToProps)(ListCategory)
