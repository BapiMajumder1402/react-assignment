import React, { useState, useContext } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { UserProfileContext } from '../../contexts/UserProfileContext';
import { ProfileDisplayFormData } from '../../interface/user';
import { UpdateProfileModalProps } from '../../interface/user';
import { toast } from 'react-hot-toast';
import { updateUserProfile } from '../../api/services';

const UpdateProfileModal: React.FC<UpdateProfileModalProps> = ({ isOpen, toggle, userId }) => {
  const userProfileContext = useContext(UserProfileContext);
  const [formData, setFormData] = useState<ProfileDisplayFormData>({
    name: userProfileContext?.userProfile?.name || '',
    email: userProfileContext?.userProfile?.email || '',
    age: userProfileContext?.userProfile?.age || undefined,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const updatedData = await updateUserProfile(userId, formData);
      toast.success("Update Successful");
      localStorage.setItem('userProfile', JSON.stringify(updatedData));
      if (userProfileContext) {
        userProfileContext.setUserProfile(updatedData);
      }
      toggle();
    } catch (error: any) {
      toast.error('Error updating user data');
    }
  };

  return (
    <Modal show={isOpen} onHide={toggle}>
      <Modal.Header closeButton>
        <Modal.Title>Update Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="age">
            <Form.Label>Age</Form.Label>
            <Form.Control 
              type="number" 
              name="age" 
              value={formData.age} 
              onChange={handleChange} 
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
        <Button variant="secondary" onClick={toggle}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default React.memo(UpdateProfileModal);
