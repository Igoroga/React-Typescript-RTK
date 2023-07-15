import React from 'react';

import DataUser from './components/DataUser';
import RangeTarif from './components/RangeTarif';
import styled from 'styled-components';
import WifiChekBox from './components/WifiChekBox';
import SocialMediaTarif from './components/SocialMediaTarif';
import { useAppDispatch, useAppSelector } from './hooks/redux';

const Container = styled.div`
  display: flex;
  
  margin: 2vh auto 0;
  max-width: 1000px;
  background-color: #F8F8F8;
  border: 2px solid #00BFFF;
  border-radius: 10px;
`;

const H1 = styled.h1`
  font-size: 36px;
  margin-top: 20px;
  margin-left: 20px
`;

const Button = styled.button`
  background-color: #00BFFF;
  color: #FFFFFF;
  padding: 10px 20px;
  border: none;
  margin-left:20px;
  margin-bottom:30px;
  border-radius: 10px;
  font-size: 22px;
  cursor: pointer;
  margin-top: 20px;
`;


function App() {
  const dispatch = useAppDispatch();
  const { totalCount } = useAppSelector((state) => state.tarifReducer);
  const storeData = useAppSelector((state) => state);

  const handlePayment = () => {
    const jsonData = JSON.stringify(storeData);
    alert(jsonData);
  };

  return (
    <Container>
      <div className="App">
      <H1>Настройте Тариф</H1>
        <DataUser />
        <RangeTarif />
        <WifiChekBox/>
        <SocialMediaTarif/>
        <Button onClick={handlePayment}>Оплатить {totalCount} ₽</Button>
      </div>
    </Container>
  );
}

export default App;
