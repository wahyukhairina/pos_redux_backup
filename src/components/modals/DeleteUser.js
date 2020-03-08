import React from 'react'
import { deleteUser } from '../redux/actions/user'
import { connect } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'

const DeleteUser = (props) =>
{
  const { show, onHide, user, dispatch } = props
 
  const onDelete = async (e) => {
    e.preventDefault()
    await dispatch(deleteUser(user))
    onHide()
  }

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
            Are you sure want to delete this user?
        <img style={{ marginLeft: '100px' }} />
        <ul style={{ textAlign: 'center' }} />
      </Modal.Body>
      <Button variant='primary' onClick={onDelete}> Delete </Button>
    </Modal>
  )
}

export default connect()(DeleteUser)