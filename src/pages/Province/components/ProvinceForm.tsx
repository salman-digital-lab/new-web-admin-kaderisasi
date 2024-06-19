import React, { useEffect } from "react";
import { Button, Col, Form, Input, Modal, Row } from "antd";
import { useRequest } from "ahooks";
import { addProvince, updateProvince } from "../../../api/services/province";

interface ProvinceFormProps {
  open: boolean;
  onClose: () => void;
  initialValues: { id: number; name: string };
}

type FormType = {
  name: string;
};

const ProvinceForm: React.FC<ProvinceFormProps> = ({
  open,
  onClose,
  initialValues,
}) => {
  const [form] = Form.useForm<FormType>();

  useEffect(() => {
    form.setFieldsValue(initialValues);
  }, [initialValues]);

  const { loading: addLoading, runAsync: runAddProvince } = useRequest(
    addProvince,
    {
      manual: true,
    },
  );

  const { loading: editLoading, runAsync: runUpdateProvince } = useRequest(
    updateProvince,
    {
      manual: true,
    },
  );

  const onFinish = async (values: FormType) => {
    try {
      if (initialValues) {
        await runUpdateProvince(initialValues?.id, {
          ...values,
        });
      } else {
        await runAddProvince({
          ...values,
        });
      }
      form.resetFields();
      onClose();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Modal
        title={initialValues ? "Edit Provinsi" : "Tambah Provinsi"}
        width={720}
        open={open}
        onCancel={onClose}
        footer={[
          <Button key="back" onClick={onClose}>
            Batal
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={initialValues ? editLoading : addLoading}
            onClick={() => form.submit()}
          >
            Simpan
          </Button>,
        ]}
      >
        <Form layout="vertical" form={form} onFinish={onFinish}>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item name="name" label="Nama Provinsi" required>
                <Input placeholder="Nama Provinsi" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};

export default ProvinceForm;
