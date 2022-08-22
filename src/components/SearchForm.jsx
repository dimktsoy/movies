import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

class SearchForm extends React.Component {
  render() {
    return (
      <Search placeholder="input search text" onSearch={() => {}} enterButton />
    );
  }
}

export default SearchForm;
