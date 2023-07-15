export interface ClientTarif {
    totalCount:number;
    dataClient: {
      number: string;
      operator: string;
    };
    tarifPrice: {
      minute: number;
      internet: number;
      sms: number;
    };
    checkbox: 0 | 99 | 2600;
    socialMedia: {
      facebook: boolean;
      vk: boolean;
      odnoklassniki: boolean;
      instagram: boolean;
      tiktok: boolean;
    };
  }