import React from 'react';
import { Button, Col, Input, Radio, Row } from 'antd';

function SearchForm({
  isLoading = false,
  title,
  type,
  onChangeType = (f) => f,
  onChangeTitle = (f) => f,
  onSearchMovie = (f) => f,
}) {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSearchMovie();
    }
  };

  return (
    <Row gutter={[15, 15]} style={{ marginBottom: '30px' }}>
      <Col xs={24} lg={12}>
        <Input.Group compact>
          <Input
            style={{ width: 'calc(100% - 100px)' }}
            onChange={onChangeTitle}
            onKeyDown={handleKeyDown}
            value={title}
          />
          <Button type="primary" onClick={onSearchMovie} loading={isLoading}>
            Search
          </Button>
        </Input.Group>
      </Col>
      <Col span={24}>
        <Radio.Group defaultValue={type} onChange={onChangeType}>
          <Radio value="all">all</Radio>
          <Radio value="movie">movie</Radio>
          <Radio value="series">series</Radio>
        </Radio.Group>
      </Col>
    </Row>
  );
}

export default SearchForm;
