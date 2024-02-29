import axios from '../axios';

export const getDataMember = async () => {
    try {
      const res = await axios.get('/profiles');
      return res.data.data.data;
    } catch(error) {
        console.error('Error fetching data:', error);
        throw error;
    }
  }

  export const getDataMemberDetail = async ( id : string | undefined  ) => {
    try {
      const res = await axios.get(`/profiles/${id}`);
      console.log('response', res)
      return res.data.data;
    } catch(error) {
        console.error('Error fetching data:', error);
        throw error;
    }
  }
