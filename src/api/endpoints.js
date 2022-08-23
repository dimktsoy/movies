import fetchCustom from './fetch';

const endponts = {
  search: (params) => fetchCustom(params, 'GET'),
  getMovie: (params) => fetchCustom(params, 'GET'),
};

export default endponts;
