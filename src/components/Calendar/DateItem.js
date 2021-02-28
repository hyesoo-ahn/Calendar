import React, { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import TodoModal from '../Calendar/TodoModal';
import { todayDate } from '../../lib/common';
import Day from '../Calendar/Day';

const DateItem = ({ data, getMoment, holiday, onClickDay, todos }) => {
  const [getDate, setDate] = useState('');
  const [monthData, setMonthData] = useState(data);

  return (
    <Container>
      {data.map((item, idx) => {
        const locdate = Number(item.format('YYYYMMDD'));
        const holidayInfo = holiday.find((holidayItem) => Number(holidayItem.locdate) === locdate);
        const todoInfo = todos.find((todoItem) => Number(todoItem.locdate) === locdate);

        //find 객체 리턴

        return (
          <Day
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
