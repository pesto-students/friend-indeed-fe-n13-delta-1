import { useContext } from 'react';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { Menu, Avatar, Dropdown, Typography, Button } from 'antd'

import theme from '../utils/theme';
import { greeter } from '../utils/helper';
import { LOGO_URL, ROUTES, STORAGE_KEY_CONSTANT, STORAGE_USER_CONSTANT } from '../utils/constants';
import AuthContext from '../context/AuthContext';

const Navbar = () => {

  const navigate = useNavigate();
  const { authenticated } = useContext(AuthContext)
  const currentUser = JSON.parse(String(localStorage.getItem(STORAGE_USER_CONSTANT)))  
  const default_profile_url = 'https://avatars.dicebear.com/api/miniavs/username-happy.svg'

  const routeToLoginPage = () => navigate('/login')


  const menuItems = [
    { title: 'My Profile', route: () => navigate(ROUTES.MY_PROFILE) },
    { title: 'My Sessions', route: () => navigate(ROUTES.MY_SESSIONS) },
    { title: 'Logout',
      route: () => {
        localStorage.removeItem(STORAGE_USER_CONSTANT)
        localStorage.removeItem(STORAGE_KEY_CONSTANT)
        window.location.reload()
      }
    }
  ]

  const menu = (
    <Menu>
      {menuItems.map(item => (
        <StyledMenuItem key={item.title} onClick={item.route} >
          {item.title}
        </StyledMenuItem>
      ))}
    </Menu>
  );

  return (
    <Container>
      <LogoArea
        href={authenticated? '/dashboard': '/'}
      >
        <StyledAvatar size={40} shape='circle' src={LOGO_URL} />
        <p className='logo_name'>Friend Indeed</p>
      </LogoArea>
      {authenticated ? (
        <Profile>
          <Typography.Text>
            <StyledSpan>{greeter()}</StyledSpan>
            , {currentUser?.name}
          </Typography.Text>
          <StyledDropDown overlay={menu}>
            <Avatar size={40} shape='circle' src={currentUser?.imageUrl || default_profile_url} />
          </StyledDropDown>
        </Profile>
      ): (
        <>
          <StyledMenu mode='horizontal' theme='light'>
            <Menu.Item>For Therapists</Menu.Item>
            <Menu.Item>For Patients</Menu.Item>
            <Menu.Item>Contact Us</Menu.Item>
            <Menu.Item><StyledButton onClick={routeToLoginPage}>Login</StyledButton></Menu.Item>
          </StyledMenu>
        </>
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
  background-color: transparent;
  width: 40%;
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

const StyledButton = styled(Button)`
  background-color: ${theme.neonGreen};
  color: ${theme.copperBlue};
  border: 0;
  border-radius: 30px;
`;

const StyledMenuItem = styled(Menu.Item)`
  width: 150px;
  text-align: center;
  color: ${theme.copperBlue};
`;