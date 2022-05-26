import axios from 'axios'
import {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import {Menu} from 'antd';
import {AppstoreOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';
const baseURL =  "http://127.0.0.1:5000";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Profile', 'profile', <UserOutlined />, [
    getItem('Body Data', '1'),
    getItem('Contact Info', '2'),
  ]),
  getItem('Plans', 'plans', <AppstoreOutlined />, [
    getItem('Your Plans', '3'),
    getItem('Classic Plans', '4'), 
    getItem('DIY Plan', '5')
  ]),
  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '6'),
    getItem('Option 10', '7'),
    getItem('Option 11', '8'),
    getItem('Option 12', '9'),
  ]),
];

const rootSubmenuKeys = ['profile', 'plans', 'sub4'];

const Profile = (props) => {  
  const id = useLocation().state.id
  const [user, setUser]=useState('')
  const [openKeys, setOpenKeys] = useState(['profile']);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);

    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  useEffect(() => {
    const fetchUser = async() => {
      try {
        const resp = await axios.get(`${baseURL}/user/${id}`);
        setUser(resp.data)
      } catch (err) {
        console.error(err)
        return false;
      }
    }
    fetchUser()}, [id]);

  return (
    <div>
      <h3>Welcome {user.first_name} {user.last_name} !</h3>
      <Menu
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        style={{
          width: 256,
        }}
        items={items}
      />
    </div>
  );
};
export default Profile