import axios from 'axios'
import {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import {Menu, Layout} from 'antd';
import {AppstoreOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';
import BodyData from './body_data'
import ClassicPlan from './classic_plan'
import ContactInfo from './contact_info'
import DIYPlan from './diy_plan'
import UserPlan from './user_plan'
import DefaultProfile from './default_profile'

const baseURL =  "http://127.0.0.1:5000";
const { Header, Footer, Sider, Content } = Layout;
const items = [
  getItem('Profile', 'profile', <UserOutlined />, [
    getItem('Body Data', 'body_data'),
    getItem('Contact Info', 'contact_info'),
  ]),
  getItem('Plans', 'plans', <AppstoreOutlined />, [
    getItem('Your Plans', 'user_plan'),
    getItem('Classic Plans', 'provided_plan'), 
    getItem('DIY Plan', 'diy_plan')
  ]),
  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Option 9'),
    getItem('Option 10'),
    getItem('Option 11'),
    getItem('Option 12'),
  ]),
];

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const rootSubmenuKeys = ['profile', 'plans', 'sub4'];

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