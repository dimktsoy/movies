import React from 'react';
import { notification } from 'antd';

import api from '../api';

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

      const paramsObj = {
        s: this.state.search.title,
        type: this.state.search.type === 'all' ? '' : this.state.search.type,
        page,
      };

      const searchParams = new URLSearchParams(paramsObj);

      const response = await api.endponts.search(searchParams);

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
      notification.info({
        message: 'Error',
        description: error.message,
        placement: 'top',
      });
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
