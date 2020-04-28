import { IFinalResult } from '../interfaces/final-result.interface';
import { RULES, mapNamePattern } from './rules';
import { IRule } from '../interfaces/rule.interface';
import { BlacklistService } from './blacklist.service';
import { QuotationService } from './quotation.service';

export class ScamDetectionService {
  blacklistService: BlacklistService;
  quotationService: QuotationService;

  constructor() {
    this.blacklistService = new BlacklistService();
    this.quotationService = new QuotationService();
  }

  async detectScam(ad: any): Promise<IFinalResult> {
    const detectedrules: string[] = [];
    let isScam = !ad.contacts.firstName.match(RULES[0].pattern) ||
                 !ad.contacts.lastName.match(RULES[1].pattern) ||
                 !ad.contacts.email.match(RULES[2].pattern) ||
                 !ad.contacts.email.match(RULES[3].pattern) ||
                 !await this.isInQuotationInterval(ad.price, ad.vehicle) ||
                 await this.blacklistService.blacklistRegistration(ad.vehicle.registerNumber);

    if (!ad.contacts.firstName.match(RULES[0].pattern)) {
      detectedrules.push(RULES[0].name);
    }

    if (!ad.contacts.lastName.match(RULES[1].pattern)) {
      detectedrules.push(RULES[1].name);
    }

    if (!ad.contacts.email.match(RULES[2].pattern)) {
      detectedrules.push(RULES[2].name);
    }

    if (!ad.contacts.email.match(RULES[3].pattern)) {
      detectedrules.push(RULES[3].name);
    }

    if (!await this.isInQuotationInterval(ad.price, ad.vehicle)) {
      detectedrules.push(RULES[4].name);
    }

    if (await this.blacklistService.blacklistRegistration(ad.vehicle.registerNumber)) {
      detectedrules.push(RULES[5].name);
    }

    return {
      reference: ad.reference,
      scam: isScam,
      rules: detectedrules,
    };
  }

  async isInQuotationInterval(adPrice: number, vehicle: any) {
    let calculatedCoast = await this.quotationService.calculateCoast(vehicle);
    calculatedCoast = calculatedCoast * 20 / 100;
    return adPrice <= calculatedCoast;
  }
}
