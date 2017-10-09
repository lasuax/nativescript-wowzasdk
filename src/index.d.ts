import { Common } from './wowzasdk.common';
export declare class Wowzasdk extends Common {
  private wowzaSdkWrapper;
  constructor();
  Init(context: androidcontentContext, apiLicenseKey: string): any;
  getSimpleName(): string;
  getLastError(): any;
  WZBroadcast(): any;
  WZBroadcastConfig(): any;
  SDKVersion(): string;
  toLabel(state: number);
}
