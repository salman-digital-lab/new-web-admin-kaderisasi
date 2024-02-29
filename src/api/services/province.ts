import axios from '../axios';

export const getDataProvince = async () => {
    try {
      const res = await axios.get('/provinces');
      return res.data.data;
    } catch(error) {
        console.error('Error fetching data:', error);
        throw error;
    }
  }

  export const getDataProvinceId = async ( id : string | undefined) => {
    try {
      const res = await axios.get(`/provinces/${id}/cities`);
      console.log('hasil', res.data.data)
      return res.data.data;
    } catch(error) {
        console.error('Error fetching data:', error);
        throw error;
    }
  }
