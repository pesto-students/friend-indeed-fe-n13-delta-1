import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { Row, Col, Select, Input, Typography, Empty } from 'antd'
import { SearchOutlined, FilterFilled } from '@ant-design/icons'
import Skeleton from 'react-loading-skeleton'

import { Button } from '../../../../shared/components';
import { TherapistInfoCard } from '..'
import theme from '../../../../shared/utils/theme';
import {
  CategoryProps,
  selectData,
  setFilters,
  fetchCategoriesAsync,
  fetchTherapistsAsync
} from '../../HomeSlice';
import { useAppSelector } from '../../../../redux/hooks';
import { TherapistInfoCardProps } from '../TherapistInfoCard/TherapistInfoCard';
import { experiencesOptions, feesOptions, ratingsOptions } from '../../../../shared/utils/constants';

type FilterBarProps = {
  categories: CategoryProps[]
}

function FilterBar({ categories }: FilterBarProps) {

  const dispatch = useDispatch()
  const state = useAppSelector(selectData)
  const { Option } = Select
  type OptionType = { code: string, name: string, label: string | number }
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
          <Col span={5}>
            <StyledSelect
              placeholder='Issue'
              onChange={value => setCategory(value)}
            >
              {categories.map(({ name }) => (
                <Option value={name}>
                  <T>{name}</T>
                </Option>
              ))}
            </StyledSelect>
          </Col>
          <Col span={5}>
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
          <Col span={5}>
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
          <Col span={5}>
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
        <StyledRow>
          <Col span={15}>
            <Input placeholder='Search therapists by name...' suffix={<SearchIcon />} />
          </Col>
          <Col span={6}>
            <Button
              width={100}
              icon={<FilterIcon />}
              name='Apply Filters'
              onClick={() => dispatch(setFilters({
                category,
                rating,
                experience,
                fee
              }))}
            />
          </Col>
        </StyledRow>
      </FilterContainer>
      <TherapistGrid gutter={[16, 24]}>
        {therapistsLoading
          ? (
            <LoaderDiv>
              {Array(3).fill(0).map((_, i) => (
                <Skeleton
                  key={i}
                  width={250}
                  height={300}
                  borderRadius={15}
                />
              ))}
            </LoaderDiv>
          )
          : (state.data.length === 0 
            ? <StyledEmpty description='Sorry, no therapists found. Try again.' />
            : state.data.map((info: TherapistInfoCardProps) => (
              <StyledCol key={info.id} span={8}>
                <TherapistInfoCard {...info} categories={state.categories} />
              </StyledCol>
            )
          )
        )}
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
  margin: 20px 0 30px 0;
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

const TherapistGrid = styled(Row)`
  width: 80%;
  margin: 50px 0;
  display: flex;
  justify-content: center;
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