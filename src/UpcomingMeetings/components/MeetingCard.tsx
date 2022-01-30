import React from 'react';
import styled from 'styled-components'
import { Typography } from 'antd'

import theme from '../../shared/utils/theme';

interface MeetingCardProps {
  date: string;
  time: string;
  title: string;
  meetingLink: string;
}

function MeetingCard({ date, time, title, meetingLink }: MeetingCardProps) {

  return (
    <Container>
      <Timeslot>
        <p>{date}</p>
        <p>{time}</p>
      </Timeslot>
      <TitleCard>
        <Title>{title}</Title>
        <Link href={meetingLink} target='_blank'>Join Now</Link>
      </TitleCard>
    </Container>
  );
}

export default MeetingCard;

const Container = styled.div`
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
