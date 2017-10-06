import { Observable } from 'tns-core-modules/data/observable';
import { Wowzasdk } from 'nativescript-wowzasdk';

export class HelloWorldModel extends Observable {
  public message: string;
  private wowzasdk: Wowzasdk;

  constructor() {
    super();

    this.wowzasdk = new Wowzasdk();
    this.message = this.wowzasdk.message;
  }
}
