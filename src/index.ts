import { ScamDetectionService } from './services/scam-detection.service';
import { ad } from './data/ad.model';

const scamDetectionService = new ScamDetectionService();
scamDetectionService.detectScam(ad).then((value) => console.log(value));
