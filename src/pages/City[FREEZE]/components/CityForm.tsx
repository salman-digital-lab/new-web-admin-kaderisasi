import { Col, Form, Input, Modal, Row, Select } from "antd";

import { USER_LEVEL_OPTIONS } from "../../../constants/options";
import { USER_LEVEL_ENUM } from "../../../constants/enum/profile";

interface CityFormProps {
  open: boolean;
  onClose: () => void;
}

type FormType = {
  name: string;
  provinsi: USER_LEVEL_ENUM;
};

const CityForm = ({ open, onClose }: CityFormProps) => {
  const [form] = Form.useForm<FormType>();

  return (
    <>
      <Modal
        title="Tambah Kabupaten/Kota"
        width={720}
        open={open}
        onCancel={onClose}
      >
        <Form layout="vertical" form={form}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="provinsi" label="Provinsi" required>
                <Select
                  placeholder="Pilih Provinsi"
                  options={USER_LEVEL_OPTIONS}
                  defaultValue={0}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item name="name" label="Nama Kabupaten/Kota" required>
                <Input placeholder="Nama Kabupaten/Kota" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};

export default CityForm;
