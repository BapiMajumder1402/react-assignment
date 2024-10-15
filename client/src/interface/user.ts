export interface ProfileFormData {
    name: string;
    email: string;
    age?: number | '';
    general?: string; 
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