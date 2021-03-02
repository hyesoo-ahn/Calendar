import React from 'react';
import styled from 'styled-components';
import { todayDate } from '../../lib/common';

const Day = ({ idx, item, holidayInfo, todoInfo, getMoment, onClickDay }) => {
  return (
    <Container
      key={idx}
      color={
        item.format('MM') !== getMoment.format('MM')
          ? 'lightgray'
          : idx === 0 || idx === 6
          ? '#9C9B9B'
          : '#686868'
      }
      onClick={() => onClickDay(item)}
      borderLeft={idx === 0 ? '#e6e6e6' : 'none'}
      backgroundColor={idx === 0 || idx === 6 ? '#F5F5F5' : '#FFFFFF'}>
      <DateDay
        color={todayDate(item) ? 'white' : ''}
        backgroundColor={todayDate(item) ? 'red' : ''}>
        {item.format('D')}
      </DateDay>
      일{holidayInfo && <HolidayInfo>{holidayInfo.dateName}</HolidayInfo>}
      {todoInfo && <TodoInfo>{todoInfo.dateName}</TodoInfo>}
    </Container>
  );
};
const Container = styled.div`
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
`;

const HolidayInfo = styled.div`
  background: #fccfcf;
`;

const TodoInfo = styled.div`
  display: flex;
  justify-content: space-between;
  background: #8dd0f5;
`;

export default Day;
