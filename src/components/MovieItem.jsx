import { Card, Space, Typography } from 'antd';

const { Text } = Typography;
const { Meta } = Card;

function Description({ Year, Type }) {
  return (
    <Space size={15} wrap>
      <Text>{Type}</Text>
      <Text type="secondary">{Year}</Text>
    </Space>
  );
}

function MovieItem({ Title, Year, Type, Poster, imdbID }) {
  return (
    <Card
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
