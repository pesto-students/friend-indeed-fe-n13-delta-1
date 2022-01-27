import React from 'react';
import styled from 'styled-components'
import { Layout, Typography, Row, Col } from 'antd'

import { Navbar, Footer } from '../shared/components'
import HabitProgress from '../HabitProgress';
import UpcomingMeetings from '../UpcomingMeetings';
import theme from '../shared/utils/theme'
import FilterBar from '../FilterBar';
import './index.css'
import TherapistInfoCard from '../TherapistInfoCard';

const { Header, Content } = Layout;

const Home = () => {

  const style = { background: '#0092ff', padding: '8px 0', width: '100%' };

  return (
    <>
      <StyledLayout>
        <StyledHeader>
          <Navbar />
        </StyledHeader>
        <Content>
          <Wrapper>
            <Greet level={3}>Good morning!</Greet>
            <HabitProgress />
            <UpcomingMeetings />
          </Wrapper>
          <FilterArea>
            <FilterBar />
            <StyledRow gutter={[16, 24]}>
              {Array(5).fill(0).map(() => (
                <Col span={6}>
                  <TherapistInfoCard />
                </Col>
              ))}
            </StyledRow>
          </FilterArea>
        </Content>
        {/* <Footer /> */}
      </StyledLayout>
    </>
  );
};

export default Home;

const StyledLayout = styled(Layout)`
  width: 100%;
`;

const StyledHeader = styled(Header)`
  background-color: ${theme.primary};
  width: 100%;
`;

const Greet = styled(Typography.Title)`
  text-align: center;
  color: ${theme.secondary} !important;
`;

const Wrapper = styled.div`
  background-color: ${theme.primary};
  height: 67vh;
`;

const FilterArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding-top: 50px;
`;

const StyledRow = styled(Row)`
  width: 80%;
  margin-top: 50px;
`;