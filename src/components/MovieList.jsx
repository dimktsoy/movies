import { Col, Row } from 'antd';
import MovieItem from './MovieItem';

function MovieList({ movies = [] }) {
  return (
    <Row gutter={[30, 30]}>
      {movies.map((movie) => (
        <Col span={6} key={movie.imdbID}>
          <MovieItem {...movie} />
        </Col>
      ))}
    </Row>
  );
}

export default MovieList;
