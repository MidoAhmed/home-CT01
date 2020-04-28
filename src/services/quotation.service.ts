import { AbstractService } from './abstract.service';

export class QuotationService extends AbstractService {
  async calculateCoast(vehicle: any) : Promise<number> {
    const coast = 35000;
    const result = await this.delay(50, coast);
    return result;
  }
}
