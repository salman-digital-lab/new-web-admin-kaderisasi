import React from "react";
import { Card, Col, Row, Statistic } from "antd";
import { useRequest } from "ahooks";
import { UserOutlined } from "@ant-design/icons";
import { getProfiles } from "../../api/services/member";

const DashboardPage: React.FC = () => {
  const { data: profileData, loading: profileLoading } = useRequest(() =>
    getProfiles({ page: "1", per_page: "10" })
  );

  return (
    <Row gutter={16}>
      <Col span={12}>
        <Card bordered={false}>
          <Statistic
            title="Jumlah Pengguna"
            value={profileData?.meta.total}
            loading={profileLoading}
            prefix={<UserOutlined />}
          />
        </Card>
      </Col>
      <Col span={12}>
        <Card bordered={false}>
          <Statistic title="Jumlah Kegiatan" value={9.3} />
        </Card>
      </Col>
    </Row>
  );
};

export default DashboardPage;
