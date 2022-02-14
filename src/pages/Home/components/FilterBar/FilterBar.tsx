import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { Row, Col, Select, Input, Typography, Empty, Divider, List, Spin } from 'antd'
import { SearchOutlined, FilterFilled } from '@ant-design/icons'
import Skeleton from 'react-loading-skeleton'
import InfiniteScroll from 'react-infinite-scroll-component'

import { Button } from '../../../../shared/components';
import { TherapistInfoCard } from '..'
import theme from '../../../../shared/utils/theme';
import {
  CategoryProps,
  selectData,
  setFilters,
  fetchCategoriesAsync,
  fetchTherapistsAsync,
  incrementPage
} from '../../Home.slice';
import { useAppSelector } from '../../../../redux/hooks';
import { TherapistInfoCardProps } from '../TherapistInfoCard/TherapistInfoCard';
import { experiencesOptions, feesOptions, ratingsOptions } from '../../../../shared/utils/constants';


function FilterBar() {

  const dispatch = useDispatch()
  const state = useAppSelector(selectData)
  const { Option } = Select
  const therapistsLoading = state.status === 'therapistsloading'

  const [category, setCategory] = useState<any>('');
  const [rating, setRating] = useState<any>('');
  const [fee, setFee] = useState<any>('');
  const [experience, setExperience] = useState<any>('');

  useEffect(() => {
    dispatch(fetchCategoriesAsync())
  }, [])

  useEffect(() => {
    dispatch(fetchTherapistsAsync(state.filters))
  }, [state.filters])

  return (
    <Container>
      <FilterContainer>
        <StyledRow gutter={[16, 24]}>
          <Col xs={12} md={5} lg={6}>
            <StyledSelect
              placeholder='Issue'
              onChange={value => setCategory(value)}
            >
              {state.categories.map(({ name }) => (
                <Option value={name}>
                  <T>{name}</T>
                </Option>
              ))}
            </StyledSelect>
          </Col>
          <Col xs={12} md={5} lg={6}>
            <StyledSelect
              placeholder='Rating'
              onChange={value => setRating(value)}
            >
              {ratingsOptions.map(({ label, value }) => (
                <Option value={value}>
                  <T>{label}</T>
                </Option>
              ))}
            </StyledSelect>
          </Col>
          <Col xs={12} md={5} lg={6}>
            <StyledSelect
              placeholder='Experience'
              onChange={value => setExperience(value)}
            >
              {experiencesOptions.map(({ label, value }) => (
                <Option value={value}>
                  <T>{label}</T>
                </Option>
              ))}
            </StyledSelect>
          </Col>
          <Col xs={12} md={5} lg={6}>
            <StyledSelect
              placeholder='Consultation Fee'
              onChange={value => setFee(value)}
            >
              {feesOptions.map(({ label, value }) => (
                <Option value={value}>
                  <T>{label}</T>
                </Option>
              ))}
            </StyledSelect>
          </Col>
        </StyledRow>
        <StyledRow gutter={[16, 24]}>
          <Col xs={24} lg={15}>
            <Input placeholder='Search therapists by name...' suffix={<SearchIcon />} />
          </Col>
          <Col xs={24} lg={6}>
            <Button
              width={100}
              icon={<FilterIcon />}
              name='Apply Filters'
              onClick={() => dispatch(setFilters({
                category,
                rating,
                experience,
                fee,
                page: 1
              }))}
            />
          </Col>
        </StyledRow>
      </FilterContainer>
      <TherapistGrid id="scrollableDiv">
        <InfiniteScroll
          style={{ overflow: 'hidden' }}
          dataLength={state.dataCount}
          next={() => {
            dispatch(fetchTherapistsAsync({ page: state.filters.page+1 }))
            dispatch(incrementPage())
          }}
          hasMore={state.data?.length < state.dataCount}
          loader={<Spin />}
          endMessage={<Divider plain>End of list 🤐</Divider>}
          scrollableTarget="scrollableDiv"
        >
          <List
            grid={{
              gutter: 24,
              xs: 1,
              sm: 1,
              md: 2,
              lg: 3
            }}
            style={{ flexWrap: 'wrap' }}
            dataSource={state.data}
            loading={therapistsLoading}
            renderItem={(info: TherapistInfoCardProps) => (
              <List.Item key={info.id} style={{ display: 'flex', justifyContent: 'center' }}>
                <TherapistInfoCard {...info} />
              </List.Item>
            )}
          />
        </InfiniteScroll>
      </TherapistGrid>
    </Container>
  );
}

export default FilterBar;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FilterContainer = styled.div`
  width: 80%;
  border-radius: 15px;
  margin: 20px 0;
  padding: 5px;
  background-color: rgba(7, 48, 66, 0.2);
  margin: 0 auto;
  font-family: DM Sans;
  font-weight: medium;
`;

const StyledRow = styled(Row)`
  display: flex;
  justify-content: space-between;
  padding: 0 70px;
  margin: 20px 0;

  @media (max-width: 950px) {
    padding: 0 10px;
  }
`;

const StyledSelect = styled(Select)`
  width: 100%;
  font-family: DM Sans;
`;

const T = styled(Typography.Text)`
  color: ${theme.copperBlue};
  text-align: center;
`;

const SearchIcon = styled(SearchOutlined)`
  color: ${theme.secondaryText}
`;

const FilterIcon = styled(FilterFilled)`
  color: ${theme.neonGreen}
`;

const TherapistGrid = styled.div`
  width: 80%;
  margin: 50px 0;

  @media (max-width: 450px) {
    width: 90%;
  }

`;

const StyledCol = styled(Col)`
  display: flex;
  justify-content: center;
`;

const LoaderDiv = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: center;
`;

const StyledEmpty = styled(Empty)`
  height: 300px;
  width: 100%;
`;