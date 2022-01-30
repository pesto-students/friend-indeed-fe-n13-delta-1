import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { Typography } from 'antd'
import Skeleton from 'react-loading-skeleton'

import theme from '../../../../shared/utils/theme'

const HabitProgress = () => {

  const P = Typography.Paragraph;
  const { dayCount, total } = { dayCount: 19, total: 30 }
  const [loading, setLoading] = useState(true)

  const width = 35

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <Container>
      <Typography.Title
        level={4}
        style={{ color: theme.copperBlue }}
      >
        Target to become better
      </Typography.Title>
      {loading ? (
        <Skeleton
          width='50vw'
          height={40}
          borderRadius={15}
          baseColor={theme.copperBlue}
          highlightColor={theme.neonGreen}
        />
      ) : (
        <>
          <ProgressBox>
            <ProgressBar width={width}>
              <Appreciation className='message'>
                <Emoji role="img" title='fire' >🔥</Emoji>
                Awesome
              </Appreciation>
              <P style={{ margin: '0 20px' }}>
                {width}%
              </P>
            </ProgressBar>
          </ProgressBox>
          <Message>
            {`${dayCount} out of ${total} days. Don't break the streak.`}
          </Message>
          <Link>View Full Progress</Link>
        </>
      )}
    </Container>
  );
};

export default HabitProgress;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0 20px 0;
`;

const ProgressBox = styled.div`
  height: 30px;
  border-radius: 15px;
  background-color: ${theme.copperBlue};
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 70%;
  }

`;

const ProgressBar = styled.div<{ width: number }>`
  height: 30px;
  border-radius: 15px;
  float: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ width }) => width < 50 ? theme.brightBlue : theme.neonGreen};
  animation: grow 1s ease 1s 1;
  width: ${({ width }) => `${width}%`};

  @keyframes grow {
    0% { width: 0; }
    100% { width: ${({ width }) => `${width}%`}; }
  }

  @media (max-width: 450px) {
    font-size: 14px;
    justify-content: center;
  }

`;

const Appreciation = styled.p`
  margin-left: 20px;
  animation: appear 0.5s linear 1s 1 alternate;

  @keyframes appear {
    0% { opacity: 0%; }
    100% { opacity: 100%; }
  }

  @media (max-width: 450px) {
    display: none;
  }
`;

const Emoji = styled.span`
  margin-right: 5px;
  animation: appear 0.5s linear 1s 1 alternate;

  @keyframes appear {
    0% { opacity: 0%; }
    100% { opacity: 100%; }
  }
`;

const Message = styled.p`
  fontSize: 20px;
  color: ${theme.secondaryText};
  margin-top: 5px;
`;

const Link = styled(Typography.Link)`
  font-dize: 14px;
  text-decoration: underline;
  color: ${theme.link};
  margin: 0;
`;