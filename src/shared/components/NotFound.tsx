import { Result } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';

import { Button } from '../components'
import AuthContext from '../context/AuthContext';

function NotFound() {
  
  const navigate = useNavigate()
  const { authenticated } = useContext(AuthContext)
  const [buttonWidth, setButtonWidth] = useState<number>(10)

  const goBack = () => navigate(authenticated? '/dashboard': '/')

  useEffect(() => {
    if(window.innerWidth < 450) {
      setButtonWidth(80)
    } else if(window.innerWidth > 450 && window.innerWidth < 768) {
      setButtonWidth(40)
    } else {
      setButtonWidth(10)
    }
  }, [window.innerWidth])
  
  return <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={(
      <ButtonDiv>
        <Button width={buttonWidth} name='Go Home' onClick={goBack} />
      </ButtonDiv>
    )}
  />
}

export default NotFound;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;