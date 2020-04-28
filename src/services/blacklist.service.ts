import { AbstractService } from './abstract.service';

export class BlacklistService extends AbstractService {
  async blacklistRegistration(registration: string): Promise<boolean> {
    const result = await this.delay(50, registration === 'AA123AA');
    return result;
  }
}
