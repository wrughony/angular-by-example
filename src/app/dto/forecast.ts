export class Forecast {
  id: number;
  city: string;
  temperature: number;

  constructor() {
    this.id = 0;
    this.city = '';
    this.temperature = 0;
  }
}
