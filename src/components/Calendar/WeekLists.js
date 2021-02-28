import React from 'react';
import DateItem from './DateItem';

const WeekLists = ({ data, getMoment, holiday, onClickDay, todos }) => {
  return (
    <div>
      {data.map((week, idx) => (
        <DateItem
          data={week}
          key={idx}
          getMoment={getMoment}
          holiday={holiday}
          onClickDay={onClickDay}
          todos={todos}
        />
      ))}
    </div>
  );
};

export default WeekLists;
