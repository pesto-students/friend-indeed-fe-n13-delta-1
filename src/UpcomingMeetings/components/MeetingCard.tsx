import React from 'react';
import styled from 'styled-components'
import { Typography } from 'antd'

import theme from '../../shared/utils/theme';


interface MeetingCardProps {
  latest: boolean;
  date: string;
  time: string;
  title: string;
  meetingLink: string;
}

function MeetingCard({ latest= false, date, time, title, meetingLink }: MeetingCardProps) {

  return (
    <div
      style={{
        backgroundColor: latest? theme.copperBlue: 'white',
        height: 80,
        width: latest? '55%': '50%',
        borderRadius: 15,
        border: `${latest? 0: 1}px solid ${latest ? theme.copperBlue: 'none'}`,
        padding: 5,
        marginBottom: 5,
        display: 'flex',
        alignItems: 'center',
        fontStyle: 'italic'
      }}
    >
      <TimeSlot latest>
        <p>{date}</p>
        <p>{time}</p>
      </TimeSlot>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingRight: 20,
      }}>
        <p style={{ color: latest? 'white': theme.copperBlue, fontStyle: 'italic', fontSize: 18, letterSpacing: 0.2 }}>
          {title}
        </p>
        <Link href={meetingLink} target='_blank'>Join Now</Link>
      </div>
    </div>
  );
}

export default MeetingCard;

const Link = styled(Typography.Link)`
  text-decoration: underline;
`;

const TimeSlot = styled.div`
  width: 70;
  height: 70;
  backgroundColor: ${(props) => props.latest? 'white': theme.copperBlue};
  borderRadius: 12;
  marginRight: 10;
  textAlign: 'center';
  padding: '10px 0';
  color: latest? theme.copperBlue: 'white';
`;