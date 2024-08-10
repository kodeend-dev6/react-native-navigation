import * as Yup from 'yup';

// register schema ------------------>
export const registerSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
  phone: Yup.string().required('Phone is required'),
  address: Yup.string().required('Address is required'),
});

// login schema ------------------>
export const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});
