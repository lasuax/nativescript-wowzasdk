/// <reference path="typings.d.ts" />
import { Common } from './wowzasdk.common';
export declare class Wowzasdk extends Common {
    private wowzaSdkWrapper;
    constructor();
    Init(context: androidcontentContext, apiLicenseKey: string): any;
    getSimpleName(): string;
    getLastError(): any;
    WZBroadcastConfig(): com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig;
    getWZBroadCastStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
    startBroadcast(config: any): void;
    SDKVersion(): string;
    toLabel(state: number): string;
    getNumberOfDeviceCameras(): number;
    startPreview(context: android.content.Context): any;
    isPreviewReady(context: android.content.Context): boolean;
    isVideoEnabled(context: android.content.Context): boolean;
    prepareForBroadcast(config: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig): com.wowza.gocoder.sdk.api.status.WZStatus;
    getFrameRate(): void;
    WZCameraView(context: android.content.Context): com.wowza.gocoder.sdk.api.devices.WZCameraView;
    WZCamera(camera: number): void;
    getBroadcastConfig(): com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig;
    WZAudioDevice(): void;
    WZMediaConfig(): com.wowza.gocoder.sdk.api.configuration.WZMediaConfig;
    getSizePresetWithInt(sizePreset: number): com.wowza.gocoder.sdk.api.configuration.WZMediaConfig;
}
export declare class WZMediaConfig extends Object {
    static FRAME_SIZE_176x144: any;
    static FRAME_SIZE_320x240: any;
    static FRAME_SIZE_352x288: any;
    static FRAME_SIZE_640x480: any;
    static FRAME_SIZE_960x540: any;
    static FRAME_SIZE_1280x720: any;
    static FRAME_SIZE_1440x1080: any;
    static FRAME_SIZE_1920x1080: any;
    static FRAME_SIZE_3840x2160: any;
}
