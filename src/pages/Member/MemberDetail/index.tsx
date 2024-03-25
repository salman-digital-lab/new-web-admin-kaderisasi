import {
  Form,
  Input,
  Col,
  Row,
  Button,
  Card,
  Descriptions,
  Space,
  Flex,
  Skeleton,
  InputNumber,
  Select,
} from "antd";
import { EditOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { Link, useParams } from "react-router-dom";
import { useRequest, useToggle } from "ahooks";

import { getProfile, putProfile } from "../../../api/services/member";
import { getUniversities } from "../../../api/services/university";
import { USER_LEVEL_OPTIONS } from "../../../constants/options";
import { getProvinces } from "../../../api/services/province";

type FormType = {
  gender?: "F" | "M";
  whatsapp?: string;
  line?: string;
  instagram?: string;
  province_id?: number;
  city_id?: string;
  university_id?: number;
  major?: string;
  intake_year?: number;
  level?: number;
};

const MemberDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [form] = Form.useForm<FormType>();

  const [isEdit, { toggle: toggleEdit }] = useToggle(false);

  const { data, loading } = useRequest(() => getProfile(id || ""), {
    onSuccess: (data) => {
      form.setFieldsValue({
        whatsapp: data?.profile[0].whatsapp,
        instagram: data?.profile[0].instagram,
        line: data?.profile[0].line,
        major: data?.profile[0].major,
        intake_year: data?.profile[0].intake_year
          ? Number(data?.profile[0].intake_year)
          : undefined,
        university_id: data?.profile[0].university_id,
        province_id: data?.profile[0].province_id,
        level: data?.profile[0].level,
      });
    },
  });

  const { loading: editLoading, runAsync } = useRequest(putProfile, {
    manual: true,
  });

  const { data: universities } = useRequest(() =>
    getUniversities({ per_page: "1000", page: "1" }),
  );

  const { data: provinces } = useRequest(() => getProvinces({}));

  if (loading) {
    return (
      <Card>
        <Skeleton />
      </Card>
    );
  }

  return (
    <Card>
      <Space direction="vertical">
        <Flex justify="space-between">
          <Button>
            <Link to="/member">
              <ArrowLeftOutlined /> Kembali
            </Link>
          </Button>
          <Space>
            {isEdit ? (
              <div>
                <Button
                  form="profile"
                  htmlType="submit"
                  loading={editLoading}
                  type="primary"
                >
                  Simpan
                </Button>
              </div>
            ) : (
              <Button
                type="primary"
                icon={<EditOutlined />}
                onClick={() => toggleEdit()}
              >
                Ubah
              </Button>
            )}
          </Space>
        </Flex>

        <Descriptions
          title="Informasi Pengguna"
          items={[
            {
              key: "1",
              label: "Nama Lengkap",
              children: data?.profile[0].name,
            },
            {
              key: "2",
              label: "Email",
              children: data?.userData.email,
            },
          ]}
        />

        <Form
          id="profile"
          layout="vertical"
          form={form}
          disabled={!isEdit}
          onFinish={async (value) => {
            await runAsync(id || "", {
              data: {
                ...value,
                intake_year: value.intake_year
                  ? String(value.intake_year)
                  : " ",
              },
            });
            toggleEdit();
          }}
        >
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item name="whatsapp" label="Whatsapp">
                <Input />
              </Form.Item>
              <Form.Item name="instagram" label="Instagram">
                <Input />
              </Form.Item>
              <Form.Item name="line" label="ID Line">
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="university_id" label="Perguruan Tinggi">
                <Select
                  style={{ width: "100%" }}
                  options={universities?.data.map((university) => ({
                    label: university.name,
                    value: university.id,
                  }))}
                />
              </Form.Item>
              <Form.Item name="major" label="Jurusan">
                <Input />
              </Form.Item>
              <Form.Item name="intake_year" label="Angkatan">
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="level" label="Jenjang">
                <Select
                  style={{ width: "100%" }}
                  options={USER_LEVEL_OPTIONS}
                />
              </Form.Item>
              <Form.Item name="province_id" label="Provinsi">
                <Select
                  style={{ width: "100%" }}
                  options={provinces?.data.map((province) => ({
                    label: province.name,
                    value: province.id,
                  }))}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Space>
    </Card>
  );
};

export default MemberDetailPage;
