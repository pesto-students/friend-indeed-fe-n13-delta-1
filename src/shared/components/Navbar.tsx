import React from 'react';
import styled from 'styled-components'
import { Menu, Avatar, Dropdown, Typography } from 'antd'
import theme from '../utils/theme';
import { greeter } from '../utils/helper';
import { ROUTES } from '../utils/constants';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();

  const loggedIn = true
  const logo_url = 'https://res.cloudinary.com/friendindeed/image/upload/v1642823421/FI_Logo.png'
  const profile_url = 'https://res.cloudinary.com/practicaldev/image/fetch/s--Lt6uKVNG--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/322705/1412670d-03f2-4342-bf66-483956dde97a.jpeg'
  const default_profile_url = 'https://avatars.dicebear.com/api/miniavs/username-happy.svg'

  const menuItems = [
    { title: 'My Profile', route: ROUTES.MY_PROFILE },
    { title: 'My Sessions', route: ROUTES.MY_SESSIONS },
    { title: 'Logout', route: ROUTES.HOME }
  ]

  const menu = (
    <Menu>
      {menuItems.map(item => (
        <StyledMenuItem key={item.title} onClick={() => navigate(item.route)} >
          {item.title}
        </StyledMenuItem>
      ))}
    </Menu>
  );

  return (
    <Container>
      <LogoArea
        href='/dashboard'
      >
        <StyledAvatar size={40} shape='circle' src={logo_url} />
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
          <Typography.Text>
            <StyledSpan>{greeter()}</StyledSpan>
            , Joel Vinay Kumar
          </Typography.Text>
          <StyledDropDown overlay={menu}>
            <Avatar size={40} shape='circle' src={profile_url || default_profile_url} />
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
  align-items: center;
  height: 100%;
  cursor: pointer;
  color: black;
`;

const StyledAvatar = styled(Avatar)`
  margin-right: 10px;
`;

const StyledMenu = styled(Menu)`  
  list-style-type: none;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const StyledSpan = styled.span`
  color: ${theme.secondaryText};
`;

const StyledDropDown = styled(Dropdown)`
  margin-left: 10px;
`;

const StyledMenuItem = styled(Menu.Item)`
  width: 150px;
  text-align: center;
  color: ${theme.copperBlue};
`;