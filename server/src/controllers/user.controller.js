import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiErrorHandler.js";
import { User } from "../modals/user.model.js";
import { ApiResponse } from "../utils/apiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, age } = req.body;
    console.log(req.body);
    if (!name || !email) {
        throw new ApiError(400, "Name and email are required");
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new ApiError(409, "User already exists");
    }

    const createdUser = await User.create({ name, email, age });

    return res.status(201).json(
        new ApiResponse(201, createdUser, "Successfully registered")
    );
});


const logInUser = asyncHandler(async (req, res) => {
    const { email } = req.body;

    if (!email) {
        throw new ApiError(400, "Email is required");
    }

    const user = await User.findOne({ email });
    if (!user) {
        throw new ApiError(401, "Account not found");
    }

    return res.status(200).json(
        new ApiResponse(200, user, "Successfully logged in")
    );
});

const updateUser = asyncHandler(async (req, res) => {
    const { userId } = req.params;
    const { name, email, age } = req.body;

    if (!userId) {
        throw new ApiError(400, "User ID is required");
    }

    const updateData = {};
    if (name) updateData.name = name;
    if (email) updateData.email = email;
    if (age) updateData.age = age;

    const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true });
    if (!updatedUser) {
        throw new ApiError(404, "User not found");
    }

    return res.status(200).json(
        new ApiResponse(200, updatedUser, "User updated successfully")
    );
});

const deleteUser = asyncHandler(async (req, res) => {
    const { userId } = req.params;

    if (!userId) {
        throw new ApiError(400, "User ID is required");
    }

    const user = await User.findByIdAndDelete(userId);
    if (!user) {
        throw new ApiError(404, "User not found");
    }

    return res.status(200).json(
        new ApiResponse(200, null, "User deleted successfully")
    );
});

const getUser = asyncHandler(async (req, res) => {
    const { userId } = req.params;

    if (!userId) {
        throw new ApiError(400, "User ID is required");
    }

    const user = await User.findById(userId);
    if (!user) {
        throw new ApiError(404, "User not found");
    }

    return res.status(200).json(
        new ApiResponse(200, user, "User retrieved successfully")
    );
});


export { registerUser, logInUser, updateUser, deleteUser , getUser };
