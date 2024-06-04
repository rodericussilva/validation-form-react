export const validateForm = (formElements) => {
  let isValid = true;
  const errors = {};

  const validateField = (field, fieldName) => {
    if (!field.checkValidity()) {
      return field.validationMessage;
    }
    return "";
  };

  for (const [key, element] of Object.entries(formElements)) {
    const error = validateField(element, key);
    if (error) {
      errors[key] = error;
      isValid = false;
    }
  }

  return { isValid, errors };
};
