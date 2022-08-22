import { Content } from 'antd/lib/layout/layout';
import './PageContent.scss';

function PageContent({ children }) {
  return <Content className="page-content">{children}</Content>;
}

export default PageContent;
