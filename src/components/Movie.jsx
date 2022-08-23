import { HomeOutlined, StarFilled } from '@ant-design/icons';
import {
  Col,
  Empty,
  Image,
  Row,
  Typography,
  Descriptions,
  Space,
  Breadcrumb,
} from 'antd';

const { Title, Paragraph } = Typography;

function Movie({
  imdbID,
  Poster,
  Title: title,
  Plot,
  Released,
  Year,
  Country,
  Genre,
  imdbRating,
  Actors,
  Director,
  BoxOffice,
  Ratings,
  Runtime,
}) {
  if (typeof imdbID === 'undefined') {
    return <Empty description="Data empty" />;
  }

  return (
    <Row gutter={[30, 30]}>
      <Col span={24}>
        <Breadcrumb>
          <Breadcrumb.Item href="/">
            <HomeOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <span>Movie</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </Col>
      <Col span={6}>
        <Image src={Poster} width="100%" />
      </Col>
      <Col span={18}>
        <Title level={2}>
          {title} ({Year})
        </Title>
        <Paragraph>{Plot}</Paragraph>
        <Descriptions
          title="About"
          column={1}
          style={{ marginTop: '40px' }}
          size="middle"
        >
          <Descriptions.Item label="imdbRating">
            <Space>
              {imdbRating}
              <StarFilled style={{ color: 'orange' }} />
            </Space>
          </Descriptions.Item>
          <Descriptions.Item label="Released">{Released}</Descriptions.Item>
          <Descriptions.Item label="Country">{Country}</Descriptions.Item>
          <Descriptions.Item label="Runtime">{Runtime}</Descriptions.Item>
          <Descriptions.Item label="Genre">{Genre}</Descriptions.Item>
          <Descriptions.Item label="Director">{Director}</Descriptions.Item>
          <Descriptions.Item label="Actors">{Actors}</Descriptions.Item>
          {Ratings.map((rating) => (
            <Descriptions.Item label={rating.Source} key={rating.Source}>
              {rating.Value}
            </Descriptions.Item>
          ))}
          <Descriptions.Item label="BoxOffice">{BoxOffice}</Descriptions.Item>
        </Descriptions>
      </Col>
    </Row>
  );
}

export default Movie;
