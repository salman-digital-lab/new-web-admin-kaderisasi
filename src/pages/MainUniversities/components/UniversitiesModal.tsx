import React, { useState } from 'react';
import { Input, Modal } from 'antd';
import { DataMaster } from '../../../types';
import { addUniversity, editUniversity } from '../../../api/services/university';

interface FilterProps{
    open: boolean;
    onCancel : () => void;
    data? : DataMaster;
}

const UniversitiesModal: React.FC<FilterProps>= ({ open, onCancel, data }) => {

 const [state, setState] = useState<DataMaster>({ name: '' });

  const handleSubmit = async (event : React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    data?.id ?
    await editUniversity(data?.id, {name : state.name} ) :
    await addUniversity({ name: state.name });
    setState({name : ''})
    onCancel()
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, key: keyof DataMaster) => {
    setState({ ...state, [key]: e.target.value });
  };


  return (
            <Modal
            title={data?.id ? "Edit Universitas" :"Tambah Universitas"}
            centered
            width={'40vw'}
            mask={false}
            open={open}
            onOk={handleSubmit}
            onCancel={onCancel}
          >
            <Input 
             key={data?.id}
              placeholder="Nama Universitas*" 
              size='large' 
              defaultValue={data?.id ? data?.name : state.name}
              style={{margin:'20px 0px 20px'}}
              onChange={(e) => handleChange(e, 'name')}
              />
          </Modal>
  );
}

export default UniversitiesModal;