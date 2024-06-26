import { Col, DatePicker, Form, Input, Modal, Row, Select } from "antd";

import { USER_LEVEL_OPTIONS } from "../../../../constants/options";
import { USER_LEVEL_ENUM } from "../../../../constants/enum/profile";
import { useRequest } from "ahooks";
import { postActivity } from "../../../../api/services/activity";

interface ActivityFormProps {
  open: boolean;
  onClose: () => void;
}

type FormType = {
  name: string;
  minimun_level: USER_LEVEL_ENUM;
  registration_date: Date[];
};

const ActivityForm = ({ open, onClose }: ActivityFormProps) => {
  const [form] = Form.useForm<FormType>();

  useRequest(postActivity, {
    manual: true,
  });

  return (
    <>
      <Modal
        title="Tambah Kegiatan Umum"
        width={720}
        open={open}
        onCancel={onClose}
        cancelText="Batal"
        okText="Simpan"
        okButtonProps={{ htmlType: "submit", form: "add-activity-form" }}
      >
        <Form
          id="add-activity-form"
          layout="vertical"
          form={form}
          onFinish={() => console.log("a")}
        >
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="name"
                label="Nama Kegiatan"
                rules={[
                  { required: true, message: "Tolong masukkan nama kegiatan" },
                ]}
              >
                <Input placeholder="Nama Kegiatan" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="minimum_level" label="Minimum Jenjang" required>
                <Select
                  placeholder="Pilih Minimum Jenjang"
                  options={USER_LEVEL_OPTIONS}
                  defaultValue={0}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="registration_date"
                label="Tanggal Mulai & Selesai Pendaftaran"
                required
              >
                <DatePicker.RangePicker
                  style={{ width: "100%" }}
                  getPopupContainer={(trigger) => trigger.parentElement!}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};

export default ActivityForm;
