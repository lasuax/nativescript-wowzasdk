import { Common } from './wowzasdk.common';
export declare class Wowzasdk extends Common {
  // define your typings manually
  // or..
  // take the ios or android .d.ts files and copy/paste them here
  public getSimpleName(): string;

}

export declare class WowzaGoCoder extends Common {
  public Init(context: androidcontentContext, apiLicenseKey: string);
}
