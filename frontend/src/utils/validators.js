// utils/validators.js
export const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
export const validatePassword = (pass) => /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,16}$/.test(pass);
