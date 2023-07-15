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
    checkbox: number;
    socialMedia: {
      facebook: boolean;
      vk: boolean;
      odnoklassniki: boolean;
      instagram: boolean;
      tiktok: boolean;
    };
  }