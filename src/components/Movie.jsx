import { Col, Empty, Image, Row } from 'antd';

function Movie({ Poster, imdbID }) {
  if (typeof imdbID === 'undefined') {
    return <Empty description="Data empty" />;
  }

  return (
    <Row gutter={[30, 30]}>
      <Col span={6}>
        <Image src={Poster} width="100%" />
      </Col>
      <Col span={18}></Col>
    </Row>
  );
}

export default Movie;
