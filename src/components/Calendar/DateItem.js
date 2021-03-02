import React, { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { todayDate } from '../../lib/common';
import Day from '../Calendar/Day';

const DateItem = ({ data, getMoment, holiday, onClickDay, todos }) => {
  return (
    <Container>
      {data.map((item, idx) => {
        const locdate = Number(item.format('YYYYMMDD'));
        const holidayInfo = holiday.find(
          (holidayItem) => Number(holidayItem.locdate) === locdate
        );
        const todoInfo = todos.find(
          (todoItem) => Number(todoItem.locdate) === locdate
        );
        //find 객체 리턴

        return (
          <Day
            locdate={locdate}
            holidayInfo={holidayInfo}
            todoInfo={todoInfo}
            idx={idx}
            item={item}
            getMoment={getMoment}
            onClickDay={onClickDay}
          />
        );
      })}
    </Container>
  );
};

export default DateItem;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
