import React, { useCallback, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UpdateProfileModal from '../../components/updateModal/UpdateModal';
import DeleteProfileModal from '../../components/deleteModal/DeleteModal'; 
import { Spinner, Button, Card, Alert } from 'react-bootstrap';
import useFetchUserProfile from '../../hooks/UseFetchProfile';
import { UserProfileContext } from '../../contexts/UserProfileContext';

const ProfileDisplayPage: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const userProfileContext = React.useContext(UserProfileContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); 
  const navigate = useNavigate()

  const toggleModal = useCallback(() => {
    setIsModalOpen((prevState) => !prevState);
  }, []);

  const toggleDeleteModal = useCallback(() => {
    setIsDeleteModalOpen((prevState) => !prevState);
  }, []);

  const { loading, error } = useFetchUserProfile(userId || "");

  const userProfileDisplay = useMemo(() => {
    return (
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Name: {userProfileContext?.userProfile?.name}</Card.Title>
          <Card.Text>Email: {userProfileContext?.userProfile?.email}</Card.Text>
          <Card.Text>Age: {userProfileContext?.userProfile?.age}</Card.Text>
          <div className='d-flex align-items-center justify-content-between'>
          <Button variant="primary" onClick={toggleModal} aria-label="Edit Profile">
            Edit Profile
          </Button>
          <Button variant="danger" onClick={toggleDeleteModal} aria-label="Delete Profile">
            Delete Profile
          </Button>
          </div>
        </Card.Body>
      </Card>
    );
  }, [userProfileContext?.userProfile, toggleModal, toggleDeleteModal]);

  const handleDeleteSuccess = () => {
    localStorage.removeItem('userProfile');
    userProfileContext?.clearUserProfile();
    navigate('/')
  };

  return (
    <div className='page profileDisplay'>
      <h2 className='text-center mb-4'>User Profile</h2>
      {loading ? (
        <div className='d-flex justify-content-center align-items-center'>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        </div>
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        userProfileContext?.userProfile ? userProfileDisplay : <p>No user data available.</p>
      )}
      <UpdateProfileModal
        isOpen={isModalOpen}
        toggle={toggleModal}
        userId={userId as string}
      />
      <DeleteProfileModal
        isOpen={isDeleteModalOpen}
        toggle={toggleDeleteModal}
        userId={userId as string}
        onDeleteSuccess={handleDeleteSuccess} 
      />
    </div>
  );
};

export default React.memo(ProfileDisplayPage);
