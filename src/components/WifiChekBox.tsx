import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { tarifSlice } from '../store/reducers/tarifSlice';

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
  margin-top: 20px;
  font-size: 20px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const CheckboxLabel = styled.label`
  margin-left: 10px;
`;

const CheckboxInput = styled.input`
  transform: scale(1.3);
`;

const Container = styled.div`
  margin-top: 20px;
  width: 700px;
  margin-left: 20px;
`;

const WifiChekBox = () => {
    const dispatch = useAppDispatch();
    const { checkbox } = useAppSelector((state) => state.tarifReducer);


    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const checkboxId = event.target.id;
        let checkboxValue = 0;
    
        if (checkboxId === 'rent') {
          checkboxValue = 99;
        } else if (checkboxId === 'buy') {
          checkboxValue = 2700;
        }
    
        dispatch(tarifSlice.actions.setCheckbox(checkboxValue));
        dispatch(tarifSlice.actions.calculateTotalCount());
        console.log(checkbox);
        
      };
    
      return (
        <Container>
          <Label>WI-FI роутер</Label>
          <CheckboxContainer>
            <CheckboxInput
              type="checkbox"
              id="rent"
              checked={checkbox === 99}
              onChange={handleCheckboxChange}
            />
            <CheckboxLabel htmlFor="rent">Аренда 99 ₽/мес</CheckboxLabel>
          </CheckboxContainer>
          <CheckboxContainer>
            <CheckboxInput
              type="checkbox"
              id="buy"
              checked={checkbox === 2700}
              onChange={handleCheckboxChange}
            />
            <CheckboxLabel htmlFor="buy">Выкупить 2600 ₽</CheckboxLabel>
          </CheckboxContainer>
        </Container>
      );
    };
    
    export default WifiChekBox;
