import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

function WikiLayout(props) {
  return (
    <Layout>
      <Header>{props.Header}</Header>
      <Layout>
        <Sider>{props.Sider}</Sider>
        <Content>{props.Content}</Content>
      </Layout>
      <Footer>{props.Footer}</Footer>
    </Layout>
  )
}

export default WikiLayout;