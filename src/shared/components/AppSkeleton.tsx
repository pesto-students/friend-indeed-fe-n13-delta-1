import React, { FC } from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';

import { Navbar, Footer } from '.';
import theme from '../utils/theme';
import { Outlet } from 'react-router-dom';

const { Content, Header } = Layout

const AppSkeleton: FC = () => {

  return (
    <StyledLayout>
      <StyledHeader>
        <Navbar />
      </StyledHeader>
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </StyledLayout>
  );
}

export default AppSkeleton;

const StyledLayout = styled(Layout)`
  width: 100%;
`;

const StyledHeader = styled(Header)`
  background-color: ${theme.primary};
  width: 100%;
`;