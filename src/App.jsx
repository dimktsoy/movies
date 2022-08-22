import React from 'react';

import Page from './layout/Page';
import PageHeader from './layout/PageHeader';
import PageFooter from './layout/PageFooter';
import PageContent from './layout/PageContent';
import MovieList from './components/MovieList';
import SearchForm from './components/SearchForm';
import Loader from './components/Loader';
import PaginationPanel from './components/PaginationPanel';

class App extends React.Component {
  state = {
    movies: [],
    isLoading: true,
    totalResults: 0,
    search: {
      type: 'all',
      title: 'Matrix',
    },
  };

  searchMovie = async (page = 1) => {
    try {
      this.setState({ isLoading: true });

      const response = await fetch(
        `http://www.omdbapi.com/?apikey=fded1e22&s=${this.state.search.title}${
          this.state.search.type === 'all'
            ? ''
            : `&type=${this.state.search.type}`
        }&page=${page}`
      );

      const {
        Search,
        Response,
        totalResults,
        Error: errorMessage,
      } = await response.json();

      if (Response === 'False') {
        throw Error(errorMessage);
      }

      this.setState({
        movies: Search,
        totalResults: parseInt(totalResults, 10),
      });
    } catch (error) {
      this.setState({ movies: [], totalResults: 0 });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleChangeTitle = (event) =>
    this.setState({
      search: {
        ...this.state.search,
        title: event.target.value,
      },
    });

  handleChangeType = (event) =>
    this.setState({
      search: { ...this.state.search, type: event.target.value },
    });

  async componentDidMount() {
    await this.searchMovie();
  }

  render() {
    const { movies, isLoading, totalResults, search } = this.state;

    return (
      <Page>
        <PageHeader />
        <PageContent>
          <SearchForm
            onSearchMovie={this.searchMovie}
            onChangeTitle={this.handleChangeTitle}
            onChangeType={this.handleChangeType}
            isLoading={isLoading}
            title={search.title}
            type={search.type}
          />
          {isLoading ? <Loader /> : <MovieList movies={movies} />}
          <PaginationPanel
            total={totalResults}
            onSearchMovie={this.searchMovie}
          />
        </PageContent>
        <PageFooter />
      </Page>
    );
  }
}

export default App;
