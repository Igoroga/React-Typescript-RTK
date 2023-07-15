import React from 'react';
import styled from 'styled-components';

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
  return (
    <Container>
      <Label>WI-FI роутер</Label>
      <CheckboxContainer>
        <CheckboxInput type="checkbox" id="rent" />
        <CheckboxLabel htmlFor="rent">Аренда 99 ₽/мес</CheckboxLabel>
      </CheckboxContainer>
      <CheckboxContainer>
        <CheckboxInput type="checkbox" id="buy" />
        <CheckboxLabel htmlFor="buy">Выкупить 2600 ₽</CheckboxLabel>
      </CheckboxContainer>
    </Container>
  );
};

export default WifiChekBox;
