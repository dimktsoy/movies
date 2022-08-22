import { Col, Empty, Row } from 'antd';
import MovieItem from './MovieItem';

function MovieList({ movies = [] }) {
  if (!movies.length) {
    return <Empty description="Nothing found" />;
  }

  return (
    <Row gutter={[30, 30]} style={{ marginBlock: '30px' }}>
      {movies.map((movie) => (
        <Col span={4} key={movie.imdbID}>
          <MovieItem {...movie} />
        </Col>
      ))}
    </Row>
  );
}

export default MovieList;
