import React from 'react';
import { useParams } from 'react-router-dom';
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

  componentDidMount() {
    const apiKey = process.env.REACT_APP_API_KEY;
    const { movieID } = this.props.params;

    this.setState({ isLoading: true });

    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${movieID}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
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
