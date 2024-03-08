import React, { useState } from "react";
import {
  Button,
  Space,
  Table,
  TableProps,
  Modal,
  Input,
  Form,
  Select,
  Card,
} from "antd";
import { DataMaster } from "../../../types";
import { EditOutlined } from "@ant-design/icons";

interface DataTypeProps {
  data: DataMaster[];
  loading: boolean;
}

const { Option } = Select;

const CityTable: React.FC<DataTypeProps> = ({ data, loading }) => {
  const [dataEdit, setDataEdit] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState<number>(10);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (_current: number, size: number) => {
    setPageSize(size);
  };

  const columns: TableProps<DataMaster>["columns"] = [
    {
      title: "No",
      dataIndex: "no",
      render: (_, _record, index) => (currentPage - 1) * pageSize + index + 1,
      width: 80,
    },
    {
      title: "Nama Provinsi",
      dataIndex: "provinceName",
      key: "provinceName",
    },
    {
      title: "Nama Kota",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle">
          <Button
            type="primary"
            size="large"
            shape="round"
            icon={<EditOutlined />}
            style={{ backgroundColor: "teal" }}
            onClick={() => setDataEdit(true)}
          >
            {" "}
            Edit{" "}
          </Button>
          <Modal
            title="Edit Kabupaten/Kota"
            centered
            width={"40vw"}
            mask={false}
            open={dataEdit}
            onOk={() => setDataEdit(false)}
            onCancel={() => setDataEdit(false)}
          >
            <Form layout="vertical">
              <Form.Item label="Provinsi">
                <Select placeholder="Nama Provinsi" defaultValue="Jawa Barat">
                  <Option value="1">Jawa Barat</Option>
                  <Option value="2">Banten</Option>
                  <Option value="3">Aceh</Option>
                </Select>
              </Form.Item>
              <Form.Item label="Kabupaten/Kota">
                <Input defaultValue="Bandung" size="large" />
              </Form.Item>
            </Form>
          </Modal>
        </Space>
      ),
    },
  ];

  return (
    <Card>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          current: currentPage,
          pageSize: pageSize,
          onChange: handlePageChange,
          onShowSizeChange: handlePageSizeChange,
          showSizeChanger: true,
        }}
        scroll={{ x: 500, y: 500 }}
        loading={loading}
      />
    </Card>
  );
};

export default CityTable;
