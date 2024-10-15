import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { UserProfileContext } from '../contexts/UserProfileContext';
import { ProfileDisplayFormData } from '../interface/user';
import { useNavigate } from 'react-router-dom';

const useFetchUserProfile = (userId: string) => {
  const userProfileContext = useContext(UserProfileContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate()
  useEffect(() => {
    const storedUserProfile = localStorage.getItem('userProfile');
    
    if (storedUserProfile) {
      const userData: ProfileDisplayFormData = JSON.parse(storedUserProfile);
      if (userProfileContext) {
        userProfileContext.setUserProfile(userData);
        setLoading(false);
      }
    } else {
      const fetchUserData = async () => {
        try {
          const response = await axios.get<{ data: ProfileDisplayFormData }>(
            `${import.meta.env.VITE_API_BASE_URL}/user/${userId}`
          );
          const userData = response.data.data;
          localStorage.setItem('userProfile', JSON.stringify(userData));
          if (userProfileContext) {
            userProfileContext.setUserProfile(userData);
          }
        } catch (error: any) {
          console.error('Error fetching user data:', error);
          navigate("/404")
          setError('Failed to fetch user data.');
        } finally {
          setLoading(false);
        }
      };
      fetchUserData();
    }
  }, [userId, userProfileContext]);

  return { loading, error };
};

export default useFetchUserProfile;
