// Email validation function
export const isValidEmail = (email: string): boolean => {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
};

// Phone validation function
export const isValidPhone = (phone: string): boolean => {
  return /^(\+?0?[1-9]([-. ]?[0-9]){8,13})$/.test(phone);
};
