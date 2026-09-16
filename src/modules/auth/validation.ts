export type FieldErrors = Partial<Record<"email" | "password" | "confirmPassword", string>>;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export function validateSignup(values: { email: string; password: string; confirmPassword: string }): FieldErrors {
  const errors: FieldErrors = {};
  if (!values.email.trim()) errors.email = "Enter your email address.";
  else if (!emailPattern.test(values.email)) errors.email = "Enter a valid email address.";
  if (!values.password) errors.password = "Create a password.";
  else if (values.password.length < 8 || !/[A-Za-z]/.test(values.password) || !/\d/.test(values.password)) errors.password = "Use at least 8 characters, including a letter and a number.";
  if (!values.confirmPassword) errors.confirmPassword = "Confirm your password.";
  else if (values.password !== values.confirmPassword) errors.confirmPassword = "Passwords do not match.";
  return errors;
}
export function validateLogin(values: { email: string; password: string }): FieldErrors {
  const errors: FieldErrors = {};
  if (!emailPattern.test(values.email)) errors.email = "Enter a valid email address.";
  if (!values.password) errors.password = "Enter your password.";
  return errors;
}
