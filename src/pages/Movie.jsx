import React from 'react';
import { useParams } from 'react-router-dom';

function withParams(Component) {
  return function (props) {
    return <Component {...props} params={useParams()} />;
  };
}

class MoviePage extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return <p>1</p>;
  }
}
export default withParams(MoviePage);
