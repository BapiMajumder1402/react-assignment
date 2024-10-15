import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserProfileContext } from '../../contexts/UserProfileContext'; 
import { ProfileFormData } from '../../interface/user';

const ProfileFormPage: React.FC = () => {
  const [formData, setFormData] = useState<ProfileFormData>({
    name: '',
    email: '',
    age: '',
  });
  const [errors, setErrors] = useState<{ name?: string; email?: string; age?: string; general?: string }>({});
  const userProfileContext = useContext(UserProfileContext);
  const navigate = useNavigate();

  if (!userProfileContext) {
    return <p>Error: UserProfileContext is not available.</p>;
  }

  const { setUserProfile } = userProfileContext;

  const validate = (): boolean => {
    const newErrors: { name?: string; email?: string; age?: string } = {};

    if (!formData.name || formData.name.length < 3) {
      newErrors.name = 'Name is required and should be at least 3 characters.';
    }

    if (!formData.email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (formData.age && (isNaN(Number(formData.age)) || Number(formData.age) < 0)) {
      newErrors.age = 'Age must be a valid number.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'age' ? value.replace(/\D/g, '') : value, 
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const profileData = {
        ...formData,
        age: formData.age ? Number(formData.age) : undefined,
      };
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', profileData);
      setUserProfile(response.data);
      navigate('/profile');
    } catch (error) {
      console.error('Failed to save profile:', error);
      setErrors({ ...errors, general: 'Failed to save profile. Please try again.' });
    }
  };

  return (
    <div className="profile-form">
      <h2>Create or Update Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        
        <div>
          <label htmlFor="age">Age (optional):</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            min="0"/>
          {errors.age && <p className="error">{errors.age}</p>}
        </div>

        {errors.general && <p className="error">{errors.general}</p>}

        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
};

export default ProfileFormPage;
