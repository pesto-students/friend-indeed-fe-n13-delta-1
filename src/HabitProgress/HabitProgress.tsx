import React from 'react';
import { Typography } from 'antd'

import theme from '../shared/utils/theme'

const HabitProgress = () => {

  const P = Typography.Paragraph;
  const { dayCount, total } = { dayCount: 19, total: 30 }

  return (
    <div
      className='container'
    >
      <Typography.Title
        level={4}
        style={{ color: theme.copperBlue }}
      >
        Target to become better
      </Typography.Title>
      <div
        className='progress-box'
        style={{
          backgroundColor: theme.copperBlue,
          width: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <div
          className='progress-box'
          style={{
            width: "40%",
            float: 'left',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: theme.neonGreen,
          }}
        >
          <P style={{ margin: 0, marginLeft: '20px' }}>
            <span role="img" title='fire' style={{ marginRight: '5px' }} >🔥</span>
            Awesome
          </P>
          <P style={{ margin: '0 20px' }}>
            40%
          </P>
        </div>
      </div>
      <P
        style={{ fontSize: '20px', color: theme.secondaryText, marginTop: '5px' }}
      >
        {`${dayCount} out of ${total} days. Don't break the streak.`}
      </P>
      <Typography.Link
        style={{
          fontSize: '14px',
          textDecoration: 'underline',
          color: theme.link,
          margin: 0
        }}
      >
        View Full Progress
      </Typography.Link>
    </div>
  );
};

export default HabitProgress;