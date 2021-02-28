import React from 'react';
import styled from 'styled-components';

const WeekDay = () => {
  return (
    <Container>
      <div>
        <span>일</span>
      </div>
      <div>
        <span>월</span>
      </div>
      <div>
        <span>화</span>
      </div>
      <div>
        <span>수</span>
      </div>
      <div>
        <span>목</span>
      </div>
      <div>
        <span>금</span>
      </div>
      <div>
        <span>토</span>
      </div>
    </Container>
  );
};

export default WeekDay;

const Container = styled.div`
  width: 770px;
  display: flex;
  justify-content: space-around;
  text-align: right;
  border-bottom: 1.5px solid #cdcdd2;
  div {
    width: 109px;
    height: 30px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 10px;
    font-size: 14px;
    color: #4e4e62;
    &:first-child {
      color: #bbbbbb;
    }
    &:last-child {
      color: #bbbbbb;
    }
  }
`;
