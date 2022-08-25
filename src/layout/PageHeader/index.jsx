import { Header } from 'antd/lib/layout/layout';
import { Link } from 'react-router-dom';
import './PageHeader.scss';

function PageHeader() {
  return (
    <Header className="page-header">
      <Link to="/">Header</Link>
    </Header>
  );
}

export default PageHeader;
