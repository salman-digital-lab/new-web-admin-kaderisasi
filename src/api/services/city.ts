import axios from '../axios';

export const getDataCity = async () => {
    try {
      const res = await axios.get('/cities');
      return res.data.data;
    } catch(error) {
        console.error('Error fetching data:', error);
        throw error;
    }
  }
