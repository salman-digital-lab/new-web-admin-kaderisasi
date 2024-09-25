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
import {
  EditOutlined,
  ArrowLeftOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import { Link, useParams } from "react-router-dom";
import { useRequest, useToggle } from "ahooks";

import { getProfile, putProfile } from "../../../api/services/member";
import { getUniversities } from "../../../api/services/university";
import { GENDER_OPTION, USER_LEVEL_OPTIONS } from "../../../constants/options";
import { getProvinces } from "../../../api/services/province";

type FormType = {
  name?: string;
  gender?: "F" | "M";
  personal_id: string;
  tiktok: string;
  linkedin: string;
  whatsapp?: string;
  line?: string;
  instagram?: string;
  province_id?: number;
  city_id?: number;
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
        name: data?.profile[0].name,
        personal_id: data?.profile[0].personal_id,
        whatsapp: data?.profile[0].whatsapp,
        instagram: data?.profile[0].instagram,
        linkedin: data?.profile[0].linkedin,
        tiktok: data?.profile[0].instagram,
        line: data?.profile[0].line,
        major: data?.profile[0].major,
        intake_year: data?.profile[0].intake_year
          ? Number(data?.profile[0].intake_year)
          : undefined,
        university_id: data?.profile[0].university_id,
        province_id: data?.profile[0].province_id,
        level: data?.profile[0].level,
        gender: data?.profile[0].gender,
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
    <Space direction="vertical">
      <Button>
        <Link to="/member">
          <ArrowLeftOutlined /> Kembali
        </Link>
      </Button>
      <Card>
        <Space direction="vertical">
          <Flex justify="flex-end">
            {isEdit ? (
              <div>
                <Button
                  form="profile"
                  htmlType="submit"
                  loading={editLoading}
                  icon={<SaveOutlined />}
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
          </Flex>

          <Descriptions
            title="Informasi Pengguna"
            items={[
              {
                key: "1",
                label: "Email",
                children: data?.profile[0]?.publicUser?.email,
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
                  gender: value.gender,
                  whatsapp: value.whatsapp,
                  line: value.line,
                  instagram: value.instagram,
                  province_id: value.province_id,
                  city_id: value.city_id,
                  university_id: value.university_id,
                  major: value.major,
                  level: value.level,
                  intake_year: value.intake_year
                    ? String(value.intake_year)
                    : undefined,
                },
              });
              toggleEdit();
            }}
          >
            <Row gutter={16}>
              <Col span={8}>
                <Form.Item name="name" label="Nama Lengkap">
                  <Input />
                </Form.Item>
                <Form.Item name="personal_id" label="Nomor Identitas">
                  <Input />
                </Form.Item>
                <Form.Item name="level" label="Jenjang">
                  <Select
                    style={{ width: "100%" }}
                    options={USER_LEVEL_OPTIONS}
                  />
                </Form.Item>
                <Form.Item name="gender" label="Jenis Kelamin">
                  <Select style={{ width: "100%" }} options={GENDER_OPTION} />
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
                <Form.Item name="whatsapp" label="Whatsapp">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item name="instagram" label="Instagram">
                  <Input />
                </Form.Item>
                <Form.Item name="line" label="ID Line">
                  <Input />
                </Form.Item>
                <Form.Item name="tiktok" label="Tiktok">
                  <Input />
                </Form.Item>
                <Form.Item name="linkedin" label="LinkedIn">
                  <Input />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Space>
      </Card>
    </Space>
  );
};

export default MemberDetailPage;
