import React, { createContext, useState, ReactNode } from 'react';

// Define the structure of the profile data
interface UserProfile {
  name: string;
  email: string;
  age?: number;
}

// Define the context state
interface UserProfileContextType {
  userProfile: UserProfile | null;
  setUserProfile: (profile: UserProfile) => void;
  clearUserProfile: () => void;
}

// Create the context with a default value of null
export const UserProfileContext = createContext<UserProfileContextType | null>(null);

// Define the type for the provider's children
interface UserProfileProviderProps {
  children: ReactNode;
}

// Create the UserProfileProvider component
export const UserProfileProvider: React.FC<UserProfileProviderProps> = ({ children }) => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  // Function to update the user profile
  const updateUserProfile = (profile: UserProfile) => {
    setUserProfile(profile);
    localStorage.setItem('userProfile', JSON.stringify(profile));
  };


  const clearUserProfile = () => {
    setUserProfile(null);
    localStorage.removeItem('userProfile');
  };

  return (
    <UserProfileContext.Provider value={{ userProfile, setUserProfile: updateUserProfile, clearUserProfile }}>
      {children}
    </UserProfileContext.Provider>
  );
};
