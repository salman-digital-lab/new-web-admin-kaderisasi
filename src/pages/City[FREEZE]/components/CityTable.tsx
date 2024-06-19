import React from "react";
import { Card, Table } from "antd";
import { TABLE_SCHEMA } from "../constants/schema";
import { City } from "../../../types/model/city";

interface DataTypeProps {
  data?: {
    data: City[];
  };
  loading: boolean;
  setParameter: React.Dispatch<
    React.SetStateAction<{
      name: string;
    }>
  >;
}

const CityTable: React.FC<DataTypeProps> = ({
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
  );
};

export default CityTable;
