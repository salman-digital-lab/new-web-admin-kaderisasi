import axios from './axios';

type FieldType = {
    email?: string;
    password?: string;
  };

export const loginUser = async (values : FieldType) => {
  try {
    const res = await axios.post('/auth/login', values);
    const user = res.data.data;
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', user.token.token);
    return res.data.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const logout = async () => {
  try {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  } catch (error) {
    console.error('Error logging out:', error);
    throw error;
  }
};
