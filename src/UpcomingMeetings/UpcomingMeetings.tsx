import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { Typography } from 'antd'
import Skeleton from 'react-loading-skeleton'

import MeetingCard from './components/MeetingCard';
import { useAppSelector } from '../redux/hooks';
import { fetchMeetingsAsync, selectData } from './upcomingMeetingsSlice';
import theme from '../shared/utils/theme';


const UpcomingMeetings: FC = () => {

  const ucmState = useAppSelector(selectData);
  const dispatch = useDispatch()
  const isLoading = ucmState.status === 'loading'

  useEffect(() => {
    dispatch(fetchMeetingsAsync())
  }, [])
  
  return (
    <Container>
      <Typography.Title
        level={4}
        style={{ color: theme.copperBlue }}
      >
        Your upcoming sessions
      </Typography.Title>
      {isLoading? (
        <Skeleton
          width='50vw'
          height={60}
          borderRadius={15}
          count={3}
          baseColor={theme.copperBlue}
        />
      ): ucmState?.data.map((meeting, i) => (
          <MeetingCard key={i} {...{ ...meeting }} />
        ))
      }
      
    </Container>
  );
}

export default UpcomingMeetings;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
`;