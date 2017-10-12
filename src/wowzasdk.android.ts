import { Common } from './wowzasdk.common';

export class Wowzasdk extends Common {
    private wowzaSdkWrapper: any;
    constructor() {
        super();
        this.wowzaSdkWrapper = com.wowza.gocoder.sdk.api;
    }

    public Init(context: androidcontentContext, apiLicenseKey: string) {
        return this.wowzaSdkWrapper.WowzaGoCoder.init(context, apiLicenseKey);
    }

    public getSimpleName(): string {
        return this.wowzaSdkWrapper.WZPlatformInfo.getInstance().toString();
    }

    public getLastError() {
        return this.wowzaSdkWrapper.WowzaGoCoder.getLastError();
    }

    public WZBroadcastConfig() {
        return new com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig(WZMediaConfig.FRAME_SIZE_1920x1080);;
    }

    public getWZBroadCastStatus() {
        return new com.wowza.gocoder.sdk.api.broadcast.WZBroadcast().getStatus();
    }

    public startBroadcast(config: any): void {
        // return new com.wowza.gocoder.sdk.api.broadcast.WZBroadcast().startBroadcast(config);
    }

    public SDKVersion(): string {
        return this.wowzaSdkWrapper.WZVersionInfo.getInstance().toVerboseString();
    }

    public toLabel(state: number) {
        return com.wowza.gocoder.sdk.api.status.WZState.toLabel(state);
    }

    public getNumberOfDeviceCameras(): number {
        return this.wowzaSdkWrapper.devices.WZCamera.getNumberOfDeviceCameras();
    }

    public startPreview(context: android.content.Context): any {
        return new com.wowza.gocoder.sdk.api.devices.WZCameraView(context).startPreview();
    }

    public isPreviewReady(context: android.content.Context) {
        return new com.wowza.gocoder.sdk.api.devices.WZCameraView(context).isPreviewReady();
    }

    public isVideoEnabled(context: android.content.Context): boolean {
        return new com.wowza.gocoder.sdk.api.devices.WZCameraView(context).isVideoEnabled();
    }

    public prepareForBroadcast(config: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig) {
        let that = this;
        let Broadcaster = new com.wowza.gocoder.sdk.api.broadcast.WZBroadcastAPI.Broadcaster(
            {
                prepareForBroadcast(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig): com.wowza.gocoder.sdk.api.status.WZStatus { return new com.wowza.gocoder.sdk.support.b.a().prepareForBroadcast(config); },
                getBroadcastConfig(): com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig { return new com.wowza.gocoder.sdk.support.b.a().getBroadcastConfig(); },
                startBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus { return new com.wowza.gocoder.sdk.support.b.a().startBroadcasting(); },
                stopBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus { return new com.wowza.gocoder.sdk.support.b.a().stopBroadcasting(); },
                getBroadcasterStatus(): com.wowza.gocoder.sdk.api.status.WZStatus { return new com.wowza.gocoder.sdk.support.b.a().getBroadcasterStatus(); },
                getStatus(): com.wowza.gocoder.sdk.api.status.WZStatus { return new com.wowza.gocoder.sdk.support.b.a().getStatus(); }
            });
        return Broadcaster.prepareForBroadcast(config);
    }

    public getFrameRate() {
        // return com.wowza.gocoder.sdk.api.devices.WZCamera.getFramerate();
    }

    public WZCameraView(context: android.content.Context) {
        return new com.wowza.gocoder.sdk.api.devices.WZCameraView(context);//.WZCameraView(context);
    }

    public WZCamera(camera: number) {
        // return new com.wowza.gocoder.sdk.api.devices.WZCamera(camera);
    }

    public getBroadcastConfig(): com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig {
        return new com.wowza.gocoder.sdk.api.broadcast.WZBroadcast().getBroadcastConfig();
    }

    public WZAudioDevice() {
        // return new com.wowza.gocoder.sdk.api.devices.WZAudioDevice().WZAudioDevice();
    }

    public WZMediaConfig() {
        return new com.wowza.gocoder.sdk.api.configuration.WZMediaConfig();
    }

    public getSizePresetWithInt(sizePreset: number) {
        switch (sizePreset) {
            case 0: //FRAME_SIZE_176x144
                return com.wowza.gocoder.sdk.api.configuration.WZMediaConfig.FRAME_SIZE_176x144;
            case 1: //FRAME_SIZE_320x240
                return com.wowza.gocoder.sdk.api.configuration.WZMediaConfig.FRAME_SIZE_320x240;
            case 2: //FRAME_SIZE_352x288
                return com.wowza.gocoder.sdk.api.configuration.WZMediaConfig.FRAME_SIZE_352x288;
            case 3: //FRAME_SIZE_640x480
                return com.wowza.gocoder.sdk.api.configuration.WZMediaConfig.FRAME_SIZE_640x480;
            case 4: //FRAME_SIZE_960x540
                return com.wowza.gocoder.sdk.api.configuration.WZMediaConfig.FRAME_SIZE_960x540;
            case 5: //FRAME_SIZE_1280x720
                return com.wowza.gocoder.sdk.api.configuration.WZMediaConfig.FRAME_SIZE_1280x720;
            case 6: //FRAME_SIZE_1440x1080
                return com.wowza.gocoder.sdk.api.configuration.WZMediaConfig.FRAME_SIZE_1440x1080;
            case 7: //FRAME_SIZE_1920x1080
                return com.wowza.gocoder.sdk.api.configuration.WZMediaConfig.FRAME_SIZE_1920x1080;
            case 8: //FRAME_SIZE_3840x2160
                return com.wowza.gocoder.sdk.api.configuration.WZMediaConfig.FRAME_SIZE_3840x2160;
            default:
                return com.wowza.gocoder.sdk.api.configuration.WZMediaConfig.FRAME_SIZE_640x480;
        }
    }
}

export class WZMediaConfig extends Object {
    public static FRAME_SIZE_176x144;
    public static FRAME_SIZE_320x240;
    public static FRAME_SIZE_352x288;
    public static FRAME_SIZE_640x480;
    public static FRAME_SIZE_960x540;
    public static FRAME_SIZE_1280x720;
    public static FRAME_SIZE_1440x1080;
    public static FRAME_SIZE_1920x1080;
    public static FRAME_SIZE_3840x2160;
}