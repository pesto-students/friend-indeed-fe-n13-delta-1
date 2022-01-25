import React, { FC } from 'react';
import styled from 'styled-components'
import { Typography } from 'antd'

import MeetingCard from './components/MeetingCard';
import { useAppSelector } from '../redux/hooks';
import { selectData } from './upcomingMeetingsSlice';

const UpcomingMeetings: FC = () => {

  const upcomingMeetings = useAppSelector(selectData);
  
  return (
    <Container>
      <Typography.Title level={3}>
        Your upcoming sessions
      </Typography.Title>
      {upcomingMeetings.map((meeting, i) => (
        <MeetingCard {...{ ...meeting, latest: i===0 }} />
      ))}
    </Container>
  );
}

export default UpcomingMeetings;


const Container = styled.div`
  display: flex;
  flexDirection: column;
  alignItems: center;
  paddingBottom: 30;
`;