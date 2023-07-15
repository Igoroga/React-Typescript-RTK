import React, { useState } from 'react';
import { tarifSlice } from '../store/reducers/tarifSlice';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  padding: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
  margin-top: 20px;
  font-size:20px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const OperatorForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const { dataClient } = useAppSelector(state => state.tarifReducer);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(tarifSlice.actions.setNumber(e.target.value));
  };

  const handleOperatorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(tarifSlice.actions.setOperator(e.target.value));
  };

  return (
    <FormContainer>
      <FormGroup>
        <Label htmlFor="phone">Телефон</Label>
        <Input
          type="text"
          id="phone"
          placeholder="+7(___) ___-__-__"
          value={dataClient.number}
          onChange={handlePhoneChange}
        />
      
        <Label htmlFor="operator">Оператор</Label>
        <Select id="operator" value={dataClient.operator} onChange={handleOperatorChange}>
          <option defaultValue="Оператор №1">Оператор №1</option>
          <option value="Оператор №2">Оператор №2</option>
          <option value="Оператор №3">Оператор №3</option>
        </Select>
      </FormGroup>
    </FormContainer>
  );
};

export default OperatorForm;