import { Observable } from 'tns-core-modules/data/observable';
import { Wowzasdk } from 'nativescript-wowzasdk';
import * as app from "tns-core-modules/application";

declare var com: any;

export class HelloWorldModel extends Observable {
  private wowzasdk: Wowzasdk;
  private message: string;

  constructor() {
    super();
    this.wowzasdk = new Wowzasdk();    
    this.message = this.wowzasdk.message;
    // console.log(this.wowzasdk.getSimpleName());
    
    let context = app.android.context;
    let sonuc = this.wowzasdk.Init(context, "GOSK-4644-0103-24CB-E7E3-888D");
    let test = this.wowzasdk.toLabel(2);    
    console.log(test);    
  }
}
