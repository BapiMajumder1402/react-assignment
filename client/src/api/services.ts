import { ProfileFormData, ApiResponse } from '../interface/user';
import { ProfileDisplayFormData } from '../interface/user';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const loginUser = async (email: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/user/login`, { email });
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Login failed. Please try again.');
    }
    throw new Error('An unexpected error occurred. Please try again.');
  }
};


export const registerUserProfile = async (profileData: ProfileFormData): Promise<ApiResponse> => {
  try {
    const response = await axios.post<ApiResponse>(
      `${API_BASE_URL}/user/register`,
      profileData
    );
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Registration failed. Please try again.');
    }
    throw new Error('An unexpected error occurred. Please try again.');
  }
};


export const updateUserProfile = async (userId: string, formData: ProfileDisplayFormData) => {
  const response = await axios.put<{ data: ProfileDisplayFormData }>(
    `${API_BASE_URL}/user/update/${userId}`,
    formData
  );
  return response.data.data;
};

export const deleteUserProfile = async (userId: string) => {
    await axios.delete(`${API_BASE_URL}/user/delete/${userId}`);
  };
  