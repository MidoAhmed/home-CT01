
export class AbstractService {
  async delay(ms: number, result: any) : Promise<any> {
    let promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        resolve(result);
      }, ms);
    });
    return promise;
  }
}
