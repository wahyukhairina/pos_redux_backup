/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Button } from 'react-bootstrap'

const ListCategory = ({ category, clickDelete } ) => {

  const onClickDelete = (e) => {
    e.preventDefault();
    clickDelete(category);
}

  return (
    <>
      <tr>
        <td>{category.id}</td>
        <td>{category.name}</td>
        <td>{category.data_added}</td>
        <td>{category.data_updated}</td>

        <td><a className='fa fa-pencil-square-o fa-2x' title='Edit User' data-toggle='modal' style={{ cursor: 'pointer' }} />  - <a className='fa fa-trash-o fa-2x' title='Delete User' onClick={onClickDelete} style={{ color: 'black', cursor: 'pointer' }} /></td>
      </tr>
    </>
  )
}

export default ListCategory
