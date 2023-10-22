import { Injectable } from '@angular/core';

interface ISaveData {
  key: string;
  data: any;
}

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  getData(key: string): any {
    const rawData = localStorage.getItem(key);

    if (rawData) {
      const parsedData = JSON.parse(rawData);

      return parsedData;
    }
  }

  saveData({ key, data }: ISaveData) {
    if (data) {
      localStorage.setItem(key, JSON.stringify(data));
    }
  }
}
