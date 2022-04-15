import { Typography } from 'antd';
import styled from 'styled-components';

import theme from '../../shared/utils/theme';
import { Button } from '../../shared/components';
import { useNavigate } from 'react-router-dom';
import { HowToBook, ForTherapists, ForPatients } from './components';

function LandingPage() {

  const navigate = useNavigate()

  const routeToLoginPage = () => navigate('/login')

  return (
    <>
      <Container>
        <Info>
          <CenterWrap>
            <Typography.Title level={1} style={{ fontSize: 50 }}>
              Make your <br/>mental health<br/>top priority
            </Typography.Title>
            <Typography.Title mark level={3} type='secondary' style={{ marginBottom: 30, width: '60%' }}>
              Consult experienced therapists from your home at ease.
            </Typography.Title>
            <ButtonGroup>
              <Button name='Learn More' onClick={() => null} width={45} height={30} />
              <Button name='Join Now' onClick={routeToLoginPage} width={45} height={30} />
            </ButtonGroup>
          </CenterWrap>
        </Info>
        <Hero src={require( '../../shared/assets/Home-Hero.png')} alt='Hero image' />
      </Container>
      <HowToBook />
      <ForTherapists />
      <ForPatients />
    </>
  );
}

export default LandingPage;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 100px 20px 150px;
  background-color: ${theme.primary};

  @media (max-width: 450px) {
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  }

  @media (max-width: 768px) {
    padding: 20px 50px;
  }
  
`;

const CenterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 90%;

  @media (max-width: 450px) {
    width: 100%;
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  transition: all 0.5s ease;
  animation: land 3s ease 1s 1;

  @media (max-width: 450px) {
    width: 80%;
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 50%;
  }

  @keyframes land {
    0% { translate: -10px; opacity: 0%;  }
    100% { translate: 0; opacity: 100%;  }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 55%;

  @media (max-width: 450px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Hero = styled.img`
  width: 50%;
  animation: land 3s ease 1s 1;

  @media (max-width: 451px) {
    width: 100%;
  }

  @keyframes fade {
    0% { opacity: 0%;  }
    100% { opacity: 100%;  }
  }
`;