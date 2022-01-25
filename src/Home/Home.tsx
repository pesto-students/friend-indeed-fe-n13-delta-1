import React from 'react';
import { Layout, Typography } from 'antd'

import { Navbar, Footer } from '../shared/components'
import HabitProgress from '../HabitProgress';
import UpcomingMeetings from '../UpcomingMeetings';
import theme from '../shared/utils/theme'
import './index.css'

const Home = () => {

  const { Header, Content } = Layout;
  
  return (
    <>
      <Layout style={{ backgroundColor: theme.primary }}>
        <Header style={{ backgroundColor: 'transparent', width: '100%' }}>
          <Navbar />
        </Header>
        <Content>
          <div style={{ backgroundColor: theme.primary }}>
            <Typography.Title level={3} style={{ textAlign: 'center' }}>Good morning!</Typography.Title>
            <HabitProgress />
            <UpcomingMeetings />
          </div>
        </Content>
        {/* <Footer /> */}
      </Layout>
    </>
  );
};

export default Home;