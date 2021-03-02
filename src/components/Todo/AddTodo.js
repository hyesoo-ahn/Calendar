import React, { useState } from 'react';
import styled from 'styled-components';

function AddTodo({ addTodoDate, setTodos, onClose }) {
  const [newTodo, setNewTodo] = useState({});

  const onChange = (e) => {
    setNewTodo({
      dateName: e.target.value,
      locdate: addTodoDate.format('YYYYMMDD'),
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setTodos((todos) => [...todos, newTodo]);
    onClose();
  };

  return (
    <Container
      onClick={(e) => {
        e.stopPropagation();
      }}>
      <Contents>
        <Form onSubmit={onSubmit}>
          <label>
            <input
              type='text'
              placeholder={'할 일을 입력해 주세요'}
              onChange={onChange}
            />
          </label>
          <button>확인</button>
        </Form>
      </Contents>
    </Container>
  );
}

const Container = styled.div``;

const Contents = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 9px;
  width: 100%;
  max-width: 600px;
`;

const Form = styled.form`
  display: flex;
  label {
    display: flex;
    flex: 1;
    input {
      display: block;
      width: 100%;
    }
  }
`;

export default AddTodo;
