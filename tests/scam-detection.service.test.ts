import { BlacklistService } from '../src/services/blacklist.service';
import { QuotationService } from '../src/services/quotation.service';
import { ScamDetectionService } from '../src/services/scam-detection.service';
import { ad1 } from './mocks/ad-1.mock';
import { ad2 } from './mocks/ad-2.mock';

describe('ScamDetectionService', () => {
  let blacklistRegistrationSpy: any;
  let quotationServiceSpy: any;
  let blacklistService: BlacklistService;
  let quotationService: QuotationService;
  let scamDetectionService: ScamDetectionService = new ScamDetectionService();

  beforeEach(() => {
    blacklistService = scamDetectionService.blacklistService;
    quotationService = scamDetectionService.quotationService;

    blacklistRegistrationSpy = jest.spyOn(blacklistService, 'blacklistRegistration');
    quotationServiceSpy = jest.spyOn(quotationService, 'calculateCoast');
  });

  it('should call blacklistRegistration', async() => {
    await scamDetectionService.detectScam(ad1);

    expect(blacklistRegistrationSpy).toHaveBeenCalled();
  });

  it('should call calculateCoast', async() => {
    await scamDetectionService.detectScam(ad1);

    expect(quotationServiceSpy).toHaveBeenCalled();
  });

  it('should detect a scam', async() => {
    const result = await scamDetectionService.detectScam(ad1);
    expect(result.scam).toEqual(true);
  });

  it('should not detect a scam', async() => {
    const result = await scamDetectionService.detectScam(ad2);
    expect(result.scam).toEqual(false);
  });

  afterAll(async(done) => {
  });
});
