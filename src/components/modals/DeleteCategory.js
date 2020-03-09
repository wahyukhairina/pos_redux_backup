import React from 'react'
import { deleteCategory } from '../redux/actions/category'
import { connect } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'

const DeleteCategory = (props) => {
  const { show, onHide, category, dispatch } = props

  const onDelete = async (e) => {
    e.preventDefault()
    await dispatch(deleteCategory(category.id))
    
    onHide()
    
  }

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
            Are you sure want to delete this category?
        <img style={{ marginLeft: '100px' }} />
        <ul style={{ textAlign: 'center' }} />
      </Modal.Body>
      <Button variant='primary' onClick={onDelete}> Delete </Button>
    </Modal>
  )
}

export default connect()(DeleteCategory)
