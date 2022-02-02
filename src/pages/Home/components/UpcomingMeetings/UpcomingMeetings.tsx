import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { Typography } from 'antd'
import Skeleton from 'react-loading-skeleton'

import { useAppSelector } from '../../../../redux/hooks';
import { fetchUpcomingMeetingsAsync, selectData } from '../../HomeSlice';
import theme from '../../../../shared/utils/theme';


const UpcomingMeetings: FC = () => {

  const state = useAppSelector(selectData);
  const dispatch = useDispatch()
  const isLoading = state.status === 'meetingsloading'

  useEffect(() => {
    dispatch(fetchUpcomingMeetingsAsync())
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
      ): state?.upcomingMeetings.map((meeting, i) => (
        <MeetingCard key={`meeting-card-${i}`}>
          <Timeslot>
            <p>{meeting.date}</p>
            <p>{meeting.time}</p>
          </Timeslot>
          <TitleCard>
            <Title>{meeting.title}</Title>
            <Link href={meeting.meetingLink} target='_blank'>Join Now</Link>
          </TitleCard>
        </MeetingCard>
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

const MeetingCard = styled.div`
  background-color: ${theme.copperBlue};
  height: 60px;
  width: 50%;
  border-radius: 15px;
  padding: 5px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  font-style: italic;
  transition: all 0.2s ease;
  cursor: default;

  &:hover {
    width: 55%;
  }

  @media (max-width: 450px) {
    width: 90%;

    &:hover {
      width: 95%;
    }
  }

  @media (min-width:451px and max-width: 768px) {
    width: 70%;

    &:hover {
      width: 75%;
    }
  }
`;

const Timeslot = styled.div`
  width: 90px;
  height: 50px;
  background-color: white;
  border-radius: 12px;
  text-align: center;
  color: ${theme.copperBlue};
`;

const TitleCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 20px;

  @media (max-width: 450px) {
    pading: 0 5px;
  }
`;

const Title = styled.p`
  color: white;
  font-style: 'italic';
  font-size: 18;
  letter-spacing: 0.2;
`;

const Link = styled(Typography.Link)`
  text-decoration: underline;
`;