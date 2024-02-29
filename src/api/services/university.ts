import axios from '../axios';

export const getDataUniversity = async () => {
    try {
      const res = await axios.get('/universities');
      return res.data.data.data;
    } catch(error) {
        console.error('Error fetching data:', error);
        throw error;
    }
  }
