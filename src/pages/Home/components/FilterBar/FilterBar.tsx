import React from 'react';
import styled from 'styled-components'
import { Row, Col, Select, Input, Typography } from 'antd'
import { SearchOutlined, FilterFilled } from '@ant-design/icons'

import Button from '../../../../shared/components/Button';
import theme from '../../../../shared/utils/theme';
import { CategoryProps } from '../../HomeSlice';

type FilterBarProps = {
  categories: CategoryProps[]
}

function FilterBar({ categories }: FilterBarProps) {

  const { Option } = Select
  type OptionType = { code: string , name: string }

  const inputs = [
    {
      placholder: 'Issue',
      items: categories.map(c => ({ name: c.name, code: c.id }))
    },
    {
      placholder: 'Rating',
      items: [
        { name: '1', code: '1' },
        { name: '2', code: '2' },
        { name: '3', code: '3' },
        { name: '4', code: '4' },
        { name: '5', code: '5' },
      ]
    },
    {
      placholder: 'Experience',
      items: [
        { name: '< 5 years', code: '5' },
        { name: '< 8 years', code: '5' },
        { name: '< 10 years', code: '10' },
        { name: '< 15 years', code: '15' },
        { name: '< 20 years', code: '20' },
      ]
    },
    {
      placholder: 'Consultation Fee',
      items: [
        { name: '< 500', code: '500' },
        { name: '< 800', code: '800' },
        { name: '< 1000', code: '1000' },
        { name: '< 1500', code: '1500' },
      ]
    }
  ]

  return (
    <Container>
      <StyledRow gutter={[16, 24]}>
        {inputs.map(({ placholder, items }, index) => (
          <Col span={5} key={index}>
            <StyledSelect placeholder={placholder}>
              {items.map(({ code, name }: OptionType) => (
                <Option key={code}>
                  <T>{name}</T>
                </Option>
              ))}
            </StyledSelect>
          </Col>
        ))}
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
            onClick={() => null}
          />
        </Col>
      </StyledRow>
    </Container>
  );
}

export default FilterBar;

const Container = styled.div`
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