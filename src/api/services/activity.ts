import axios from '../axios';

export const getDataActivity = async () => {
    try {
      const res = await axios.get('/activities');
      return res.data.data.data;
    } catch(error) {
        console.error('Error fetching data:', error);
        throw error;
    }
  }
