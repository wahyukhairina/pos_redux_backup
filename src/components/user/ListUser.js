import React from 'react'
import { Button } from 'react-bootstrap'

const ListUser = ({ user, onSelectDelete } ) => {

  const onClickDelete = (id) => {
    onSelectDelete(id)
  }

  return (
    <>
      <tr>
        <td>{user.user_id}</td>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>********</td>
        <td>{user.status}</td>
        <td>{user.data_added}</td>
        <td>{user.data_updated}</td>

        <td><a className='fa fa-pencil-square-o fa-2x' title='Edit User' data-toggle='modal' style={{ cursor: 'pointer' }} />  - <a className='fa fa-trash-o fa-2x' title='Delete User' onClick={() => (onClickDelete(user.user_id))} style={{ color: 'black', cursor: 'pointer' }} /></td>
      </tr>
    </>
  )
}

export default ListUser
