import { Col, Row } from 'antd';
import MovieItem from './MovieItem';

function MovieList({ movies = [] }) {
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
