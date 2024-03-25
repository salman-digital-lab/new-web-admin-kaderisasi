import React, { useEffect } from "react";
import { Button, Col, Form, Input, Modal, Row } from "antd";

interface ProvinceFormProps {
  open: boolean;
  onClose: () => void;
  initialValues: { id: string; name: string };
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

  console.log("init", initialValues);

  // const { loading: addLoading, run: runAddUniversity} = useRequest(addUniversity, {
  //   manual: true,
  // });

  // const { loading: editLoading, run: runEditUniversity} = useRequest(putUniversity, {
  //   manual: true,
  // });

  // const onFinish = async (values: FormType) => {
  //   try {
  //     if (initialValues) {
  //       await runEditUniversity(initialValues?.id, {
  //         data: values,
  //       });
  //     } else {
  //       await runAddUniversity({
  //         data: values,
  //       });
  //     }
  //     form.resetFields();
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

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
            // loading={initialValues ? editLoading : addLoading}
            onClick={() => form.submit()}
          >
            Simpan
          </Button>,
        ]}
      >
        <Form layout="vertical" form={form}>
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
