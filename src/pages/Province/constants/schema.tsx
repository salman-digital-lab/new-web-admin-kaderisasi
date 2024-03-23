import {
    TableProps,
  } from "antd";
import { Province } from "../../../types/model/province";

  export const TABLE_SCHEMA : TableProps<Province>["columns"] = [
    {
      title: "No",
      dataIndex: "id", 
      key: "id",
      width: 80,
    },
    {
      title: "Nama",
      dataIndex: "name",
      key: "name",
    },
    // {
    //   title: "Action",
    //   key: "action",
    //   render: (_, record) => (
    //     <Space size="middle">
    //       <Button
    //           type='primary'
    //           shape='round'
    //           icon={ <EditOutlined /> }
    //           style={{ backgroundColor:'teal' }}
    //           onClick={() => openModal(record.id, record.name)}
    //       > Edit </Button>
    //     </Space>
    //   ),
    // },
  ];
