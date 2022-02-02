import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'

import { HabitProgress, FilterBar } from './components';

import theme from '../../shared/utils/theme'
import { useAppSelector } from '../../redux/hooks';
import { selectData } from './HomeSlice';

import './index.css'
import UpcomingMeetings from './components/UpcomingMeetings';

const Home = () => {

  const state = useAppSelector(selectData);  
  const categoriesloading = state.status === 'categoriesloading'

  return (
    <>
      <Wrapper>
        <HabitProgress />
        <UpcomingMeetings />
      </Wrapper>
      <FilterArea>
        {categoriesloading
        ? <Skeleton width='80vw' height={100} borderRadius={20} />
        : <FilterBar categories={state.categories} />
        }
        {/* <PopupButton
          pageSettings={{
            backgroundColor: 'ffffff',
            hideEventTypeDetails: false,
            hideGdprBanner: true,
            hideLandingPageDetails: false,
            primaryColor: theme.primary,
            textColor: theme.copperBlue,
          }}
          styles={{
            borderRadius: 20,
            color: theme.neonGreen,
            backgroundColor: theme.copperBlue,
            padding: '5px 15px',
            border: 0
          }}
          prefill={{
            email: "joelvinaykumar@gmail.com",
            name: "John"
          }}
          text="Book Now @ 788"
          url="https://calendly.com/joelvinaykumar/15min"
        /> */}
        
      </FilterArea>
    </>
  );
};

export default Home;

const Wrapper = styled.div`
  background-color: ${theme.primary};
  height: 62vh;
`;

const FilterArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding-top: 30px;
`;