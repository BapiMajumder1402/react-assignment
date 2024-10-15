import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserProfileContext } from "../../contexts/UserProfileContext";
import { ProfileFormData } from "../../interface/user";
import useFormErrors from "../../utils/ErrorHandle";
import { Form, Button, Alert } from "react-bootstrap"; 
import { registerUserProfile } from "../../api/services"; 
import toast from "react-hot-toast";

const ProfileFormPage: React.FC = () => {
  const [formData, setFormData] = useState<ProfileFormData>({
    name: "",
    email: "",
    age: "",
  });

  const [generalError, setGeneralError] = useState<string | null>(null);
  const userProfileContext = useContext(UserProfileContext);
  const navigate = useNavigate();

  if (!userProfileContext) {
    return <p>Error: UserProfileContext is not available.</p>;
  }

  const { errors, validate, resetErrors } = useFormErrors();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "age" ? value.replace(/\D/g, "") : value,
    });
    resetErrors();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate(formData)) return;

    try {
      const profileData = {
        ...formData,
        age: formData.age ? Number(formData.age) : undefined,
      };
      await registerUserProfile(profileData);
      toast.success("You have successfully created a new profile")
      navigate("/login");
    } catch (error: any) {
      setGeneralError(error.message);
    }
  };

  return (
    <div className="profile-form page">
      <h2 className="text-center mb-5">Create or Update Your Profile</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Name Here"
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email Here"
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="age">
          <Form.Label>Age (optional):</Form.Label>
          <Form.Control
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter Age Here"
            min="0"
            isInvalid={!!errors.age}
          />
          <Form.Control.Feedback type="invalid">
            {errors.age}
          </Form.Control.Feedback>
        </Form.Group>

        {generalError && <Alert variant="danger">{generalError}</Alert>}
        <Button type="submit" variant="primary" className="mt-5">Add Profile</Button>
      </Form>
    </div>
  );
};

export default ProfileFormPage;
