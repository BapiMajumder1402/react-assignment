import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { deleteUserProfile } from '../../api/services'; 

interface DeleteProfileModalProps {
  isOpen: boolean;
  toggle: () => void;
  userId: string;
  onDeleteSuccess: () => void;
}

const DeleteProfileModal: React.FC<DeleteProfileModalProps> = ({ isOpen, toggle, userId, onDeleteSuccess }) => {
  
  const handleDelete = async () => {
    try {
      await deleteUserProfile(userId); 
      toast.success("Profile deleted successfully");
      onDeleteSuccess(); 
      toggle(); 
    } catch (error: any) {
      toast.error('Error deleting user profile');
    }
  };

  return (
    <Modal show={isOpen} onHide={toggle}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Deletion</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete this profile? This action cannot be undone.</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={toggle}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteProfileModal;
