import styled from 'styled-components'
import { Row, Col, Spin } from 'antd'
import { useDispatch } from 'react-redux';
import Skeleton from 'react-loading-skeleton'

import { HabitProgress, FilterBar, TherapistInfoCard } from './components';

import theme from '../../shared/utils/theme'
import { useAppSelector } from '../../redux/hooks';
import { fetchTherapistsAsync, fetchCategoriesAsync, selectData } from './HomeSlice';

import './index.css'
import { useEffect } from 'react';
import { TherapistInfoCardProps } from './components/TherapistInfoCard/TherapistInfoCard';
import UpcomingMeetings from '../../UpcomingMeetings';

const Home = () => {

  const state = useAppSelector(selectData);
  const dispatch = useDispatch()
  const therapistsLoading = state.status === 'therapistsloading'
  const categoriesloading = state.status === 'categoriesloading'

  useEffect(() => {
    dispatch(fetchTherapistsAsync())
    dispatch(fetchCategoriesAsync())
  }, [])

  return (
    <>
      <Wrapper>
        <HabitProgress />
        <UpcomingMeetings />
      </Wrapper>
      <FilterArea>
        {categoriesloading
        ? <Skeleton width={1050} height={100} borderRadius={20} />
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
        <StyledRow gutter={[16, 24]}>
          {therapistsLoading
          ? (
            <LoaderDiv>
              {Array(3).fill(0).map(_ => (
                <Skeleton
                  width={250}
                  height={300}
                  borderRadius={15}
                />
              ))}
            </LoaderDiv>
          )
          : state.data.map((info: TherapistInfoCardProps) => (
            <StyledCol span={8}>
              <TherapistInfoCard {...info} categories={state.categories} />
            </StyledCol>
          ))}
        </StyledRow>
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

const StyledRow = styled(Row)`
  width: 80%;
  margin: 50px 0;
`;

const StyledCol = styled(Col)`
  display: flex;
  justify-content: center;
`;

const LoaderDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;