import React from 'react';
import { notification } from 'antd';
import { useParams } from 'react-router-dom';

import api from '../api';

import Loader from '../components/Loader';
import Movie from '../components/Movie';

function withParams(Component) {
  return function (props) {
    return <Component {...props} params={useParams()} />;
  };
}

class MoviePage extends React.Component {
  state = {
    data: null,
    isLoading: true,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });

      const { movieID } = this.props.params;

      const paramsObj = {
        i: movieID,
        plot: 'full',
      };

      const searchParams = new URLSearchParams(paramsObj);

      const response = await api.endponts.getMovie(searchParams);

      const { Response, Error: errorMessage, ...data } = await response.json();

      if (Response === 'False') {
        throw new Error(errorMessage);
      }

      this.setState({ data });
    } catch (error) {
      notification.info({
        message: 'Error',
        description: error.message,
        placement: 'top',
      });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { data, isLoading } = this.state;

    return (
      <div className="movie-page">
        {isLoading ? <Loader /> : <Movie {...data} />}
      </div>
    );
  }
}
export default withParams(MoviePage);
