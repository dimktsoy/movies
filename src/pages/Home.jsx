import React from 'react';
import Loader from '../components/Loader';
import MovieList from '../components/MovieList';
import PaginationPanel from '../components/PaginationPanel';
import SearchForm from '../components/SearchForm';

class HomePage extends React.Component {
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

      const apiKey = process.env.REACT_APP_API_KEY;

      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&s=${this.state.search.title}${
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
      <>
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
      </>
    );
  }
}

export default HomePage;
