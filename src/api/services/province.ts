import axios from '../axios';
import { handleError } from '../errorHandling';

export const getDataProvince = async () => {
    try {
      const res = await axios.get('/provinces');
      return res.data.data;
    } catch(error) {
        handleError(error)
    }
  }

  export const getDataProvinceId = async ( id : string | undefined) => {
    try {
      const res = await axios.get(`/provinces/${id}/cities`);
      console.log('hasil', res.data.data)
      return res.data.data;
    } catch(error) {
        handleError(error)
    }
  }
