import React from 'react';
import { Table, Card } from 'antd';
import { Province } from '../../../types/model/province';
import { TABLE_SCHEMA } from '../constants/schema';

interface DataTypeProps { 
  data?: {
    data: Province[];
  };
  loading: boolean;
  setParameter: React.Dispatch<
    React.SetStateAction<{
      name: string;
    }>
  >;
}

const ProvinceTable: React.FC<DataTypeProps>  = ({ 
  data, 
  loading,
  setParameter,
 }) => {
  return (
    <Card>
      <Table
        columns={TABLE_SCHEMA}
        dataSource={data?.data}
        // pagination={{
        //   current: data?.meta?.current_page,
        //   pageSize: data?.meta?.per_page,
        //   showSizeChanger: true,
        //   total: data?.meta?.total,
        // }}
        loading={loading}
        onChange={() =>
          setParameter((prev) => ({
            ...prev,
          }))
        }
        scroll={{ x: 1200 }}
      />
    </Card>
  )
}

export default ProvinceTable;