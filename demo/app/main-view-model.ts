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

    let context = app.android.context;
    let wzCameraView = this.wowzasdk.WZCameraView(context);
    // let bConfig = this.wowzasdk.getBroadcastConfig();
    // console.log(bConfig);
    // var sonuc = this.wowzasdk.prepareForBroadcast(bConfig);
    // console.log(sonuc);

    let broadCast = this.initBroadcast(context, "http://185.50.69.223", "live", "myStream", "GOSK-4644-0103-24CB-E7E3-888D", "doga", "q1w2e3", 3, wzCameraView);
    console.log(broadCast);
    // console.log(this.wowzasdk.getSimpleName());

    // let context = app.android.context;
    // let sonuc = this.wowzasdk.Init(context, "GOSK-4644-0103-24CB-E7E3-888D");
    // let config = this.wowzasdk.getBroadcastConfig();
    // config.setHostAddress("185.50.69.223");
    // // config.setPortNumber("1935");
    // config.setApplicationName("live");
    // config.setStreamName("myStream");
    // config.setUsername("doga");
    // config.setPassword("q1w2e3");
    // // console.log(config);
    // config.setVideoEnabled(true);

    // config.setAudioBitRate(22400);
    // config.setVideoFramerate(12);

    // var wzMediaConfig = this.wowzasdk.WZMediaConfig();

    // let wzCameraView = this.wowzasdk.WZCameraView(context);
    // // Update the active config
    // sonuc.setConfig(config);
    // sonuc.setCameraView(wzCameraView);
    // sonuc.getCameraView().getCamera().setTorchOn(true);
    // console.log(sonuc.getCameraView().getCamera().isTorchOn());
    // // let videoSource = config.getVideoSourceConfig();
    // // console.log(videoSource);

    // let isPreviewReady = this.wowzasdk.isPreviewReady(context);
    // // console.log(isPreviewReady);
    // console.log(config.validateForBroadcast());
    // // var startBroadcast = this.wowzasdk.isPreviewReady(context);
    // // console.log(startBroadcast);
  }

  public initBroadcast(context: android.content.Context, hostAddress: string, applicationName: string, broadcastName: string, sdkLicenseKey: string, username: string, password: string, sizePreset: number, cameraView: any) {
    let mGoCoder = this.wowzasdk.Init(context, "GOSK-4644-0103-24CB-E7E3-888D");
    let broadcastConfig = this.wowzasdk.WZBroadcastConfig();// getBroadcastConfig();

    // Update the active config to the defaults for 720p video

    broadcastConfig.setAudioBitRate(22400);
    broadcastConfig.setVideoFramerate(12);
    broadcastConfig.set(this.wowzasdk.getSizePresetWithInt(sizePreset));

    // Set the address for the Wowza Streaming Engine server or Wowza Cloud
    broadcastConfig.setHostAddress(hostAddress);
    broadcastConfig.setUsername(username);
    broadcastConfig.setPassword(password);
    broadcastConfig.setApplicationName(applicationName);
    // Set the name of the stream
    broadcastConfig.setStreamName(broadcastName);

    // Update the active config
    mGoCoder.setConfig(broadcastConfig);
    mGoCoder.setCameraView(cameraView);

    console.log(broadcastConfig.validateForBroadcast());

    return mGoCoder;
  }
}