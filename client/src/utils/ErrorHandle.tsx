import { useState } from "react";

interface FormErrors {
  [key: string]: string | undefined;
}

const useFormErrors = () => {
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (formData: any): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name || formData.name.length < 3) {
      newErrors.name = "Name is required and should be at least 3 characters.";
    }

    if (
      !formData.email ||
      !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (
      formData.age &&
      (isNaN(Number(formData.age)) || Number(formData.age) < 0)
    ) {
      newErrors.age = "Age must be a valid number.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const resetErrors = () => {
    setErrors({});
  };

  return { errors, validate, resetErrors };
};

export default useFormErrors;
