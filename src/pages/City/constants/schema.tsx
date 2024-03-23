import { TableProps } from "antd";
import { City } from "../../../types/model/city";
import { ProvinceRender } from "../../../components/render/Province";

export const TABLE_SCHEMA: TableProps<City>["columns"] = [
    {
      title: "No",
      dataIndex: "id",
      key: "id",
      width: 80,
    },
    {
      title: "Nama Provinsi",
      dataIndex: "provinceName",
      key: "provinceName",
      render: (_,value) => <ProvinceRender provinceId={value.province_id} />,
    },
    {
      title: "Nama Kota",
      dataIndex: "name",
      key: "name",
      render: (_,value) => value.name,
    },
    // {
    //   title: "Action",
    //   key: "action",
    //   render: () => (
    //     <Space size="middle">
    //       <Button
    //         type="primary"
    //         shape="round"
    //         icon={<EditOutlined />}
    //         style={{ backgroundColor: "teal" }}
    //         // onClick={() => setDataEdit(true)}
    //       >
    //         {" "}
    //         Edit{" "}
    //       </Button>
    //       {/* <Modal
    //         title="Edit Kabupaten/Kota"
    //         centered
    //         width={"40vw"}
    //         mask={false}
    //         open={dataEdit}
    //         onOk={() => setDataEdit(false)}
    //         onCancel={() => setDataEdit(false)}
    //       >
    //         <Form layout="vertical">
    //           <Form.Item label="Provinsi">
    //             <Select placeholder="Nama Provinsi" defaultValue="Jawa Barat">
    //               <Option value="1">Jawa Barat</Option>
    //               <Option value="2">Banten</Option>
    //               <Option value="3">Aceh</Option>
    //             </Select>
    //           </Form.Item>
    //           <Form.Item label="Kabupaten/Kota">
    //             <Input defaultValue="Bandung" size="large" />
    //           </Form.Item>
    //         </Form>
    //       </Modal> */}
    //     </Space>
    //   ),
    // },
  ];