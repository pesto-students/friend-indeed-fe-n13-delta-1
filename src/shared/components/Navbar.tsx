import React from 'react';
import styled from 'styled-components'
import { Menu, Avatar, Dropdown } from 'antd'
import theme from '../utils/theme';
import { greeter } from '../utils/helper';

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
    <Container>
      <LogoArea
        href='/dashboard'
      >
        <Avatar size={40} shape='circle' src={logo_url} />
        <p className='logo_name'>Friend Indeed</p>
      </LogoArea>
      {!loggedIn ? (
        <StyledMenu mode='horizontal' theme='light'>
          <Menu.Item>For Therapists</Menu.Item>
          <Menu.Item>For Patients</Menu.Item>
          <Menu.Item>Contact Us</Menu.Item>
        </StyledMenu>
      ) : (
        <Profile>
          <p>
            <StyledSpan>{greeter()}</StyledSpan>
            , Joel Vinay Kumar
          </p>
          <StyledDropDown overlay={menu}>
            <Avatar size={40} shape='circle' src={profile_url} />
          </StyledDropDown>
        </Profile>
      )}
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-Items: center;
  font-Size: 20px;
  margin: 0;

  @media (max-width: 450px) {
    font-size: 15px;

    .logo_name {
      display: none;
    }
  }
`;

const LogoArea = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 180px;
  cursor: pointer;
  color: black;
`;

const StyledMenu = styled(Menu)`  
  list-style-type: none;
`;

const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const StyledSpan = styled.span`
  color: ${theme.secondaryText};
`;

const StyledDropDown = styled(Dropdown)`
  margin-left: 10px
`;