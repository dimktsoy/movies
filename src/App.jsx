import { Layout } from 'antd';
import PageHeader from './components/layout/PageHeader';
import PageFooter from './components/layout/PageFooter';
import PageContent from './components/layout/PageContent';

function App() {
  return (
    <Layout>
      <PageHeader />
      <PageContent>Content</PageContent>
      <PageFooter />
    </Layout>
  );
}

export default App;
