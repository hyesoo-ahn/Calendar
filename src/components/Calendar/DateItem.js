import React, { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import TodoModal from '../Calendar/TodoModal';

const DateItem = ({ data, getMoment }) => {
  const todayDate = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  };

  const [getDate, setDate] = useState('');

  return (
    <Container>
      {data.map((item, idx) => (
        <DateContainer
          key={idx}
          onClick={() => setDate(item._d)}
          color={
            item.format('MM') !== getMoment.format('MM')
              ? 'lightgray'
              : idx === 0 || idx === 6
              ? '#9C9B9B'
              : '#686868'
          }
          borderLeft={idx === 0 ? '#e6e6e6' : 'none'}
          backgroundColor={idx === 0 || idx === 6 ? '#F5F5F5' : '#FFFFFF'}>
          <DateDay
            color={
              todayDate(Date.now() + 32400000) === item.format('YYYY-MM-DD')
                ? 'white'
                : ''
            }
            backgroundColor={
              todayDate(Date.now() + 32400000) === item.format('YYYY-MM-DD')
                ? 'red'
                : ''
            }>
            {item.format('D')}
          </DateDay>
          일
          <ModalContainer>
            <TodoModal date={getDate} />
          </ModalContainer>
        </DateContainer>
      ))}
    </Container>
  );
};

export default DateItem;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const DateContainer = styled.div`
  width: 110px;
  height: 92px;
  padding: 7px 8px 0 0;
  border-bottom: 1.5px solid #e6e6e6;
  border-right: 1.5px solid #e6e6e6;
  border-left: 1.5px solid ${({ borderLeft }) => borderLeft};
  font-size: 14px;
  text-align: right;
  font-weight: 600;
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
  box-sizing: border-box;
`;

const DateDay = styled.span`
  padding: 3px;
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 50%;
`;

const ModalContainer = styled.div`
  position: relative;
  top: -15px;
  left: 2px;
`;
