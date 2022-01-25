import React from 'react';
import { Menu, Avatar, Dropdown } from 'antd'
import theme from '../utils/theme';

const Navbar = () => {

  const loggedIn = true
  const logo_url = 'https://res.cloudinary.com/friendindeed/image/upload/v1642823421/FI_Logo.png'
  const profile_url = 'https://res.cloudinary.com/practicaldev/image/fetch/s--Lt6uKVNG--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/322705/1412670d-03f2-4342-bf66-483956dde97a.jpeg'

  const menuItems = [
    { title: 'My Profile' },
    { title: 'My Sessions' },
    { title: 'Logout' }
  ]

  const menu = (
    <Menu>
      {menuItems.map(item => (
        <Menu.Item key={item.title} style={{ width: '150px', textAlign: 'center', color: theme.copperBlue }} >
          {item.title}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div
      style={{
        width: '100%',
        height: '80px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '20px'
      }}
    >
      <a
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '100%',
          width: '180px',
          cursor: 'pointer',
          color: 'black'
        }}
        href='/'
      >
        <Avatar size={40} shape='circle' src={logo_url} />
        <p>Friend Indeed</p>
      </a>
      {!loggedIn ? (
        <Menu mode='horizontal' theme='light' style={{ listStyleType: 'none' }}>
          <Menu.Item>For Therapists</Menu.Item>
          <Menu.Item>For Patients</Menu.Item>
          <Menu.Item>Contact Us</Menu.Item>
        </Menu>
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '100%',
            width: '210px'
          }}
        >
            <p>Joel Vinay Kumar</p>
          <Dropdown overlay={menu}>
            <Avatar size={40} shape='circle' src={profile_url} />
          </Dropdown>
        </div>
      )}
    </div>
  );
};

export default Navbar;
