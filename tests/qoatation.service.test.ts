import { QuotationService } from '../src/services/quotation.service';

describe('QuotationService', () => {
  it('should calculateCoast returns coast = 35000', async() => {
    const quotationService: QuotationService = new QuotationService();
    const coast = 35000;

    const result = await quotationService.calculateCoast({});
    expect(result).toEqual(coast);
  });

  afterAll(async(done) => {
  });
});
