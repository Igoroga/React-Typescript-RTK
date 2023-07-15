import React from 'react';
import styled from 'styled-components';
import img1 from '../image/FB=off.png';
import img1on from '../image/FB=on.png';
import img2 from '../image/VK=off.png';
import img2on from '../image/VK=on.png';
import img3 from '../image/OK=off.png';
import img3on from '../image/OK=on.png';
import img4 from '../image/INST=off.png';
import img4on from '../image/INST=on.png';
import img5 from '../image/TikTok=off.png';
import img5on from '../image/TikTok=on.png';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { tarifSlice } from '../store/reducers/tarifSlice';


const Container = styled.div`
  width: 700px;
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom:20px;
`;

const FlexContainer = styled.div`
  width: 700px;
  display: flex;
  flex-direction: row;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
  margin-top: 20px;
  font-size: 20px;
`;

const Image = styled.img`
  max-width: 80px;
  margin-right: 5px;
  cursor: pointer;
`;

const SocialMediaTarif = () => {
    const dispatch = useAppDispatch();
    const { socialMedia } = useAppSelector((state) => state.tarifReducer);
  
    return (
      <Container>
        <Label>Соцсети</Label>
        <FlexContainer>
          <Image
            src={!socialMedia.facebook ? img1 : img1on}
            alt="Facebook"
            onClick={() => {
              dispatch(tarifSlice.actions.setFacebook(!socialMedia.facebook));
              dispatch(tarifSlice.actions.calculateTotalCount());
            }}
          />
          <Image
            src={!socialMedia.vk ? img2 : img2on}
            alt="Facebook"
            onClick={() => {
              dispatch(tarifSlice.actions.setVk(!socialMedia.vk));
              dispatch(tarifSlice.actions.calculateTotalCount());
            }}
          />
          <Image
            src={!socialMedia.odnoklassniki ? img3 : img3on}
            alt="Facebook"
            onClick={() => {
              dispatch(tarifSlice.actions.setOdnoklassniki(!socialMedia.odnoklassniki));
              dispatch(tarifSlice.actions.calculateTotalCount());
            }}
          />
          <Image
            src={!socialMedia.instagram ? img4 : img4on}
            alt="Facebook"
            onClick={() => {
              dispatch(tarifSlice.actions.setInstagram(!socialMedia.instagram));
              dispatch(tarifSlice.actions.calculateTotalCount());
            }}
          />
          <Image
            src={!socialMedia.tiktok ? img5 : img5on}
            alt="Facebook"
            onClick={() => {
              dispatch(tarifSlice.actions.setTiktok(!socialMedia.tiktok));
              dispatch(tarifSlice.actions.calculateTotalCount());
            }}
          />
        </FlexContainer>
      </Container>
    );
  };
  
  export default SocialMediaTarif;