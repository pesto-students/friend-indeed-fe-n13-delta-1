import React from 'react';
import styled from 'styled-components';
import { Avatar } from 'antd'

import theme from '../shared/utils/theme';

function TherapistInfoCard() {
  return (
    <Card style={{margin: 0}}>
      <PictureDiv>
        <Avatar size={80}>J</Avatar>
      </PictureDiv>
      <InfoDiv>
        <Info>
          <p>Dr. Satish Khanna</p>
          <p>M.A, M.Phil, Psycology</p>
          <p>{`${15} years of experience`}</p>
        </Info>
        <p>4/5</p>
      </InfoDiv>
    </Card>
  );
}

export default TherapistInfoCard;

const Card = styled.div`  
  border-radius: 15px;
  background-color: ${theme.lightblue};
  width: 250px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;  
`;

const PictureDiv = styled.div`
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoDiv = styled.div`
  height: 40%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Chip = styled.span`
  background-color: ${theme.secondaryText};
  color: ${theme.copperBlue};
  padding: 5px 10px;
`;