import { Observable } from 'tns-core-modules/data/observable';
import { Wowzasdk, WowzaGoCoder } from 'nativescript-wowzasdk';
import * as app from "tns-core-modules/application";

export class HelloWorldModel extends Observable {
  public message: string;
  private wowzasdk: Wowzasdk;
  private wowzaGoCoder: WowzaGoCoder;

  constructor() {
    super();

    let context = app.android.context;
    let sonuc = this.wowzaGoCoder.Init(context, "ET1E4-tT3ex-7NVhU-9vzQQ-J7XCN-3X3Qk-RMcYZEA8h47");
    console.log(sonuc);
    this.wowzasdk = new Wowzasdk();
    this.message = this.wowzasdk.message;
    
  }
}
