import React, { useEffect } from 'react';
import styled from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import WeekLists from '../components/Calendar/WeekLists';
import { useState } from 'react';
import moment from 'moment';
import axios from 'axios';
import WeekDay from '../components/Calendar/WeekDay';
import Modal from "../components/Modal";
import AddTodo from "../components/Todo/AddTodo";

const Main = () => {
  const [getMoment, setMoment] = useState(moment());
  const [getAnniversaryData, setgetAnniversaryData] = useState({});
  const today = getMoment;

  const getCalendarDays = () => {
    const firstWeek = today.clone().startOf('month').week();
    const lastWeek =
      today.clone().endOf('month').week() === 1
        ? 53
        : today.clone().endOf('month').week();

    let weeks = [];
    for (let week = firstWeek; week <= lastWeek; week++) {
      weeks = [...weeks, week];
    }
    // [6, 7, 8, 9, 10]
    return weeks.reduce((acc, week) => {
      let newarr = new Array(7);
      //newarr = [31, 1, 2, 3, 4, 5, 6]
      for (let i = 0; i < newarr.length; i++) {
        newarr[i] = today
          .clone()
          .startOf('year')
          .week(week)
          .startOf('week')
          .add(i, 'day');
      }
      return [...acc, newarr];
    }, []);

    // [
    //6 [31,1,2,3,4,5,6],  //newarr
    //7 [0,0,0,0,0,0,0],  //newarr
    //8 [0,0,0,0,0,0,0],
    //9 [0,0,0,0,0,0,0],
    //10 [0,0,0,0,0,0,0],
    // ]
  };



  const [addTodoDate, setaddTodoDate] = useState('');
  const [todos, setTodos] = useState([]);

  const [holiday, setHoliday] = useState([]);

  useEffect(() => {
    getData();
  }, [today]);

  const year = today.format('YYYY');
  const month = today.format('MM');

  const getData = async () => {
    const result = await axios({
      url:
        'http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getHoliDeInfo?serviceKey=DLS874m%2FPm%2B3DZ9GyK5ub9%2F3kH%2BDGkq8%2B1xq0i3RzNBAXFlelppS6cln7c%2F1yRqSQ3pwR1t9xos1klkXGn3zWQ%3D%3D',

      method: 'get',
      params: {
        solYear: year,
        solMonth: month,
        numOfRows: '20',
      },
    });
    const data = result.data.response.body.items?.item || [];
    if(Array.isArray(data)) {
      setHoliday(data);
    } else {
      setHoliday([data]);
    }
  };

  console.log('dd', holiday);

  const onClickDay = (item) => {
    setaddTodoDate(item);
  }


  return (
    <CalendarContainer>

      <CalendarTop>
        <Calendar>{today.format('YYYY 년 MM 월')}</Calendar>
        <ButtonGroup>
          <PrevBtn>
            <IoIosArrowBack
              onClick={() => {
                setMoment(getMoment.clone().subtract(1, 'month'));
              }}
            />
          </PrevBtn>
          <TodayBtn
            onClick={() => {
              window.location.reload();
            }}>
            오늘
          </TodayBtn>
          <NextBtn>
            <IoIosArrowForward
              onClick={() => {
                setMoment(getMoment.clone().add(1, 'month'));
              }}
            />
          </NextBtn>
        </ButtonGroup>
      </CalendarTop>
      <WeekDay />
      <WeekLists
        data={getCalendarDays()}
        getMoment={getMoment}
        holiday={holiday}
        onClickDay={onClickDay}
        todos={todos}
      />
      {
        addTodoDate &&
        <Modal onClose={() => setaddTodoDate('')}>
          <AddTodo setTodos={setTodos} addTodoDate={addTodoDate} onClose={() => setaddTodoDate('')}/>
        </Modal>
      }


    </CalendarContainer>
  );
};

export default Main;

const CalendarContainer = styled.header`
  width: 772px;
  height: 620px;
  margin: 0 auto;
`;

const CalendarTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 10px;
`;

const Calendar = styled.h2`
  font-weight: 700;
`;

const ButtonGroup = styled.div`
  width: 100px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PrevBtn = styled.button`
  width: 30px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TodayBtn = styled.button`
  /* width: 30px; */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
`;

const NextBtn = styled.button`
  width: 30px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
