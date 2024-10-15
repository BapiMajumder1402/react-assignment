export interface ProfileFormData {
    name: string;
    email: string;
    age?: number | string;
    general?: string; 
}
export interface ProfileDisplayFormData {
    name: string;
    email: string;
    age?: number;
    message?:string
}

export interface UserResponseData {
    _id: string;
    name: string;
    email: string;
    age?: number; 
    createdAt: string; 
    updatedAt: string;
    __v: number;
}

export interface ApiResponse {
    response:any;
    statusCode: boolean;
    data: UserResponseData;
    message: string;
    success: boolean;
}

export interface UpdateProfileModalProps {
    isOpen: boolean;
    toggle: () => void;
    userId: string;
  }

export interface FeatureCardProps {
    title: string;
    description: string;
  }

export interface UserProfile {
    name: string;
    email: string;
    age?: number;
    _id?: string
  }