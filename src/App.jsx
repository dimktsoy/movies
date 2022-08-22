import React from 'react';
import { Layout } from 'antd';

import PageHeader from './layout/PageHeader';
import PageFooter from './layout/PageFooter';
import PageContent from './layout/PageContent';
import MovieList from './components/MovieList';
import SearchForm from './components/SearchForm';

class App extends React.Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    try {
      const response = await fetch(
        'http://www.omdbapi.com/?apikey=fded1e22&s=Naruto'
      );
      console.log(response, 'response');
      const { Search, Response, Error: errorMessage } = await response.json();

      if (Response === 'False') {
        throw Error(errorMessage);
      }

      this.setState({ movies: Search });
    } catch (error) {
      console.log(error, 'error');
    } finally {
    }
  }

  render() {
    const { movies } = this.state;

    return (
      <Layout>
        <PageHeader />
        <PageContent>
          <SearchForm />
          <MovieList movies={movies} />
        </PageContent>
        <PageFooter />
      </Layout>
    );
  }
}

export default App;
