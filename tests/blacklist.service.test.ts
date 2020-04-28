import { BlacklistService } from '../src/services/blacklist.service';

describe('BlacklistService', () => {
  it('should blacklist registration AA123AA', async() => {
    const blacklistService: BlacklistService = new BlacklistService();

    const result = await blacklistService.blacklistRegistration('AA123AA');
    expect(result).toEqual(true);
  });

  it('should not blacklist registration BB55CC', async() => {
    const blacklistService: BlacklistService = new BlacklistService();

    const result = await blacklistService.blacklistRegistration('BB55CC');
    expect(result).toEqual(false);
  });

  afterAll(async(done) => {
  });
});
