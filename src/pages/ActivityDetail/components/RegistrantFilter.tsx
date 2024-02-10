import React from 'react';
import { Flex, Col, Row, Select, Card } from 'antd'

const RegistrantFilter: React.FC = () => {
  return (
    <Card style={{ height: 90 }}>
    <Flex vertical gap={12} style={{marginBottom:'16px'}}>
      <Row gutter={16}>
        <Col className="gutter-row" span={8}>
          <Select
            size="large"
            placeholder="Status"
            style={{ width: '100%' }}
            allowClear
            dropdownStyle={{ maxHeight: 150, overflow: 'auto' }}
            options={[
              { value: 'semua', label: 'Semua' },
              { value: 'jamaah', label: 'Jamaah' },
              { value: 'aktivis', label: 'Aktivis' },
              { value: 'kader', label: 'Kader' },
              { value: 'kader-lanjutan', label: 'Kader-lanjutan' },
              { value: 'aktivis-kk', label: 'Aktivis-KK' },
              { value: 'kader-inventra', label: 'Kader-inventra' },
              { value: 'kader-komprof', label: 'Kader-komprof' },
            ]}
          />
        </Col>
      </Row>
     </Flex>
    </Card>
  );
}

export default RegistrantFilter;