import axios from '../axios';
import { handleError } from '../errorHandling';

export const getDataUniversity = async () => {
    try {
      const res = await axios.get('/universities');
      return res.data.data.data;
    } catch(error) {
        handleError(error)
    }
  }
