import React, { createContext, useState, ReactNode, useEffect } from 'react';
import { UserProfile } from '../interface/user'; 

interface UserProfileContextType {
  userProfile: UserProfile | null;
  setUserProfile: (profile: UserProfile) => void;
  clearUserProfile: () => void;
}

export const UserProfileContext = createContext<UserProfileContextType | null>(null);

interface UserProfileProviderProps {
  children: ReactNode;
}

export const UserProfileProvider: React.FC<UserProfileProviderProps> = ({ children }) => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    const storedProfile = localStorage.getItem('userProfile');
    if (storedProfile) {
      setUserProfile(JSON.parse(storedProfile));
    }
  }, []);

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
