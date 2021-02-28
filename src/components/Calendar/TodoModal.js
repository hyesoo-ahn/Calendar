import React, { useState } from 'react';
import { Modal } from 'antd';
import styled from 'styled-components';
import 'antd/dist/antd.css';

const TodoModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <Button onClick={showModal}></Button>
      <ModalContainer
        title='일정을 입력해 주세요!'
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}>
        <InputBox
          placeholder='여기에 일정을 입력해 주세요!'
          value={inputValue}
          onChange={handleInputChange}></InputBox>
      </ModalContainer>
    </>
  );
};

export default TodoModal;

const ModalContainer = styled(Modal)``;

const Button = styled.div`
  height: 15px;
  border: 1px solid red;
`;

const InputBox = styled.input`
  width: 470px;
  height: 30px;
  border: 1px solid lightgray;
  padding: 5px;
`;
