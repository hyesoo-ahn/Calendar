import React from 'react';
import DateItem from './DateItem';

const WeekLists = ({ data, getMoment }) => {
  return (
    <div>
      {data.map((week, idx) => (
        <DateItem data={week} key={idx} getMoment={getMoment} />
      ))}
    </div>
  );
};

export default WeekLists;
