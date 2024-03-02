import axios from '../axios';
import { handleError } from '../errorHandling';

export const getDataCity = async () => {
    try {
      const res = await axios.get('/cities');
      return res.data.data;
    } catch(error) {
        handleError(error)
    }
  }
