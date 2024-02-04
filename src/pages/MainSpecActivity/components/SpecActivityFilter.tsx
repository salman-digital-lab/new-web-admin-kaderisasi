import React, { useState } from 'react';
import { Input, Flex, Col, Row, Select, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { PlusCircleFilled } from '@ant-design/icons';
import SpecActivityForm from './SpecActivityForm';
interface FilterProps{
    onSearch : (searchText: string) => void;
}

const SpecActivityFilter: React.FC<FilterProps>= ({ onSearch }) => {
  const [searchText, setSearchText] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <>
    <Flex vertical gap={12} style={{marginBottom:'16px'}}>
      <Row gutter={16}>
        <Col className="gutter-row" span={10}>
            <Input 
              size="large"
              placeholder="nama kegiatan" 
              prefix={<SearchOutlined />}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onPressEnter={handleSearch}
            />
        </Col>
        <Col className="gutter-row" span={8}>
          <Select
            size="large"
            placeholder="Min Jenjang"
            style={{ width: '100%' }}
            allowClear
            dropdownStyle={{ maxHeight: 150, overflowY: 'auto' }}
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
        <Col className="gutter-row" span={2} offset={2}>
            <Button type='primary' size='large' icon={<PlusCircleFilled />} onClick={handleOpen}>
               Tambah Kegiatan
            </Button>
        </Col>
      </Row>
  </Flex>
  <SpecActivityForm open={open} onClose={handleClose}/>
  </>
  );
}

export default SpecActivityFilter;