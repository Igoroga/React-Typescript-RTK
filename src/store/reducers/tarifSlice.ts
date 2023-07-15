import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ClientTarif } from '../../models/ClientTarif';


const initialState: ClientTarif = {
    totalCount: 0,
    dataClient: {
      number: '',
      operator: '',
    },
    tarifPrice: {
      minute: 0,
      internet: 0,
      sms: 0,
    },
    checkbox: 0,
    socialMedia: {
      facebook: false,
      vk: false,
      odnoklassniki: false,
      instagram: false,
      tiktok: false,
    },
  };

export const tarifSlice = createSlice({
    name: 'tarifSlice',
    initialState,
    reducers: {
        setNumber(state, action: PayloadAction<string>) {
          state.dataClient.number = action.payload;
        },
        setOperator(state, action: PayloadAction<string>) {
            state.dataClient.operator = action.payload;
          },
        setMinutePrice(state, action: PayloadAction<number>) {
          state.tarifPrice.minute = action.payload;
        },
        setInternetPrice(state, action: PayloadAction<number>) {
          state.tarifPrice.internet = action.payload;
        },
        setSmsPrice(state, action: PayloadAction<number>) {
          state.tarifPrice.sms = action.payload;
        },
        setCheckbox(state, action: PayloadAction<0 | 99 | 2600>) {
          state.checkbox = action.payload;
        },
        setFacebook(state, action: PayloadAction<boolean>) {
          state.socialMedia.facebook = action.payload;
        },
        setVk(state, action: PayloadAction<boolean>) {
          state.socialMedia.vk = action.payload;
        },
        setOdnoklassniki(state, action: PayloadAction<boolean>) {
          state.socialMedia.odnoklassniki = action.payload;
        },
        setInstagram(state, action: PayloadAction<boolean>) {
          state.socialMedia.instagram = action.payload;
        },
        setTiktok(state, action: PayloadAction<boolean>) {
          state.socialMedia.tiktok = action.payload;
        },
        calculateTotalCount(state) {
            const { minute, internet, sms } = state.tarifPrice;
            let totalCount = minute + internet + sms;
          
            if (state.socialMedia.facebook) {
              totalCount += 20;
            }
          
            if (state.socialMedia.vk) {
              totalCount += 20;
            }
          
            if (state.socialMedia.odnoklassniki) {
              totalCount += 20;
            }
          
            if (state.socialMedia.instagram) {
              totalCount += 60;
            }
          
            if (state.socialMedia.tiktok) {
              totalCount += 60;
            }
          
            state.totalCount = totalCount;
          },
    },
    });
    
    
    export default tarifSlice.reducer;