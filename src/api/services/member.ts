import axios from '../axios';
import { handleError } from '../errorHandling';

export const getDataMember = async () => {
    try {
      const res = await axios.get('/profiles');
      return res.data.data.data;
    } catch(error) {
       handleError(error)
    }
  }

  export const getDataMemberDetail = async ( id : string | undefined  ) => {
    try {
      const res = await axios.get(`/profiles/${id}`);
      console.log('response', res)
      return res.data.data;
    } catch(error) {
        handleError(error)
    }
  }
