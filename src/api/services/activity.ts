import axios from '../axios';
import { handleError } from '../errorHandling';

export const getDataActivity = async () => {
    try {
      const res = await axios.get('/activities');
      return res.data.data.data;
    } catch(error) {
        handleError(error);
    }
  }

  export const getDataRegistrants = async (id : string | undefined ) => {
    try {
      const res = await axios.get(`/activities/${id}/registrations`);
      console.log('data', res)
      return res.data.data.data;
    } catch(error) {
        handleError(error);
    }
  }
