import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { tarifSlice } from '../../store/reducers/tarifSlice';

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
  margin-top: 20px;
  font-size:20px;
`;


const marks = [
    {
        value: 0,
        label: 0,
      },
    {
      value: 25,
      label: 100,
    },
    {
      value: 50,
      label: 200,
    },
    {
      value: 75,
      label: 300,
    },
    {
      value: 100,
      label: 400,
    },
    
  ];

const MinuteRangeSlider = () => {
    const dispatch = useAppDispatch();
    const { tarifPrice } = useAppSelector((state) => state.tarifReducer);
  
    function valuetext(value: number) {
        const label = marks.find((mark) => mark.value === value)?.label;
        dispatch(tarifSlice.actions.setMinutePrice(label||0));
        dispatch(tarifSlice.actions.calculateTotalCount());
        return label;
      }
  

  return (
    <div>
    <Label htmlFor="phone">Минуты</Label>
      <Slider
  aria-label="Restricted values"
  defaultValue={0}
  valueLabelFormat={valuetext}
  step={null}
  valueLabelDisplay="off"
  marks={marks}
/>
    </div>
  );
};

export default MinuteRangeSlider;