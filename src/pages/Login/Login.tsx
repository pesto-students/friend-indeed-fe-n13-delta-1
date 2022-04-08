import { Button, Typography, Select, notification } from 'antd';
import styled from 'styled-components';
import { GoogleLogin } from 'react-google-login'

import theme from '../../shared/utils/theme';
import GoogleSvg from '../../shared/assets/google.svg'
import { useDispatch } from 'react-redux';
import { selectData, User, changeLoginPersona, userLoginAsync } from './Login.slice';
import { useAppSelector } from '../../redux/hooks';
import { GOOGLE_CLIENTID } from '../../shared/utils/constants';

function Login() {

  const dispatch = useDispatch()
  const state = useAppSelector(selectData)

  const loginAction = (googleData: any) => {
    dispatch(userLoginAsync({ role: state.persona, profileObj: googleData}))
  }

  return (
    <Container>
      <Info>
        <CenterWrap>
          <Select
            placeholder='Choose a role'
            style={{ width: '70%', marginBottom: 50 }}
            onChange={(value) => dispatch(changeLoginPersona(value))}
          >
            <Select.Option value={User.patient}>{User.patient}</Select.Option>
            <Select.Option value={User.therapist}>{User.therapist}</Select.Option>
          </Select>
          <GoogleLogin
            clientId={String(GOOGLE_CLIENTID)}
            cookiePolicy='single_host_origin'
            disabled={state.persona === ''}
            render={(renderProps) => (
              <StyledButton
                type='text'
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                Login with Google
                <GoogleIcon src={GoogleSvg} alt='google login' />
              </StyledButton>
            )}
            onSuccess={(googleData) => loginAction(googleData)}
          onFailure={() => notification.error({ message: "Error logging in!" })}
          />
          <Quote type='secondary' italic>
            “What mental health needs is more sunlight, more candor, and more unashamed conversation.”
            <br />– Glenn Close
          </Quote>
        </CenterWrap>
      </Info>
      <Hero src={require('../../shared/assets/Login-Hero.png')} alt='Login Hero image' />
    </Container>
  );
}

export default Login;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80vh;
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
    min-height: 50vh;
  }
`;

const CenterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
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

const StyledButton = styled(Button)`
  background -color: transparent;
  border: 2px solid ${theme.copperBlue};
  border-radius: 30px;
  color: ${theme.copperBlue};
  width: 300px;
  height: 40px;
  font-family: DM Sans;

  @media (max-width: 768px) {
    width: 200px;
    height: 40px;
  }
`;

const GoogleIcon = styled.img`
  width: 20px;
  margin-left: 10px;
`;

const Quote = styled(Typography.Paragraph)`
  margin-top: 20px;
  text-align: center;
  width: 70%;

  @media (max-width: 451px) {
    width: 100%;
  }
`;

const Hero = styled.img`
  width: 45%;
  animation: land 3s ease 1s 1;

  @media (max-width: 451px) {
    width: 100%;
  }

  @keyframes fade {
    0% { opacity: 0%;  }
    50% { opacity: 50%;  }
    100% { opacity: 100%;  }
  }
`;