import { Header } from 'antd/lib/layout/layout';
import { NavLink } from 'react-router-dom';
import './PageHeader.scss';

function PageHeader() {
  return (
    <Header className="page-header">
      <NavLink to="/">Header</NavLink>
    </Header>
  );
}

export default PageHeader;
