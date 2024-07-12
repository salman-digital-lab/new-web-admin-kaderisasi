import { useState } from "react";
import { Col, Row, Button, Card, Typography, notification } from "antd";
import { useParams } from "react-router-dom";

import QuillEditor from "../../../../components/common/RichTextEditor";
import { getActivity, putActivity } from "../../../../api/services/activity";
import { useRequest } from "ahooks";

const { Title } = Typography;

const ActivityDescription = () => {
  const { id } = useParams<{ id: string }>();

  const [description, setDescription] = useState("");

  const { loading } = useRequest(() => getActivity(Number(id)), {
    cacheKey: `activity-${id}`,
    onSuccess: (data) => {
      setDescription(data?.description || "");
    },
  });

  const { loading: editLoading, runAsync } = useRequest(putActivity, {
    manual: true,
  });

  return (
    <Card loading={loading}>
      <Row>
        <Col span={24}>
          <Row justify="center" align="middle">
            <Col span={24} style={{ position: "absolute", top: 0, right: 0 }}>
              <Button
                type="primary"
                loading={editLoading}
                onClick={async () => {
                  await runAsync(Number(id), { description: description });
                  notification.success({
                    message: "Berhasil",
                    description: "Data berhasil diubah",
                  });
                }}
              >
                Simpan
              </Button>
            </Col>
          </Row>
          <Col style={{ marginTop: 20 }}>
            <Title level={3}>Deskripsi</Title>
            <QuillEditor
              style={{ minHeight: "calc(100vh - 320px)" }}
              value={description}
              onChange={(value) => setDescription(value)}
            />
          </Col>
        </Col>
      </Row>
    </Card>
  );
};

export default ActivityDescription;
