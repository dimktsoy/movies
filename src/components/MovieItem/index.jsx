import { Card, Space, Typography } from 'antd';

import './MovieItem.scss';

const { Text } = Typography;
const { Meta } = Card;

function Description({ Year, Type }) {
  return (
    <Space direction="vertical">
      <Text>Type: {Type}</Text>
      <Text type="secondary">Year: {Year}</Text>
    </Space>
  );
}

function MovieItem({ Title, Year, Type, Poster, imdbID }) {
  return (
    <Card
      className="movie-item"
      hoverable
      cover={<img alt={Title} src={Poster} />}
    >
      <Meta
        title={Title}
        description={<Description Year={Year} Type={Type} />}
      />
    </Card>
  );
}

export default MovieItem;
