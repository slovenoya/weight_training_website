import {useState} from 'react'
import {useLocation} from 'react-router-dom'
import {Menu, Layout} from 'antd';
import {AppstoreOutlined, UserOutlined} from '@ant-design/icons';
import BodyData from './user_page_components/body_data'
import ClassicPlan from './user_page_components/classic_plan'
import ContactInfo from './user_page_components/contact_info'
import DIYPlan from './user_page_components/diy_plan'
import UserPlan from './user_page_components/user_plan'
import DefaultProfile from './user_page_components/default_profile'

const { Header, Footer, Sider, Content } = Layout;

//helper function to create items
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

//items for menu bar
const items = [
  getItem('Profile', 'profile', <UserOutlined />, [
    getItem('Body Stat', 'body_data'),
    getItem('Contact Info', 'contact_info'),
  ]),
  getItem('Plans', 'plans', <AppstoreOutlined />, [
    getItem('Your Plans', 'user_plan'),
    getItem('Classic Plans', 'provided_plan'), 
    getItem('DIY Plan', 'diy_plan')
  ]),
];

const rootSubmenuKeys = ['profile', 'plans'];

const Profile = (props) => {  
  const id = useLocation().state.id
  const [openKeys, setOpenKeys] = useState(['profile']);
  const [content, setContent] = useState(<DefaultProfile id={id} />)

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);

    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const handleSelect = (key) => {
    if (key.key === 'body_data') {
      setContent(<BodyData id={id}/>)
    } else if (key.key === 'contact_info') {
      setContent(<ContactInfo id={id}/>)
    }else if (key.key === 'user_plan') {
      setContent(<UserPlan id={id}/>)
    }else if (key.key === 'provided_plan') {
      setContent(<ClassicPlan id={id}/>)
    }else if (key.key === 'diy_plan') {
      setContent(<DIYPlan id={id}/>)
    }
  }

  return (
    <Layout>
      <Header>
      </Header>
      <Layout
        style={{
          padding: '0 24px 24px',
        }}>
        <Sider>
          <Menu
            mode="inline"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            style={{
              height: '100%',
              border:0 }}
            items={items}
            onSelect={handleSelect}
          />
        </Sider>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}>
          {content}
        </Content>
      </Layout>
      <Footer>
      </Footer>
    </Layout>
  );
};

export default Profile