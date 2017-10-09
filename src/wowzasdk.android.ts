import { Common } from './wowzasdk.common';

declare const com: any;

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

    public WZBroadcast() {
        return this.wowzaSdkWrapper.broadcast.WZBroadcast.getBroadcasterStatus();
    }

    public WZBroadcastConfig() {
        return this.wowzaSdkWrapper.broadcast.WZBroadcastConfig();
    }

    public SDKVersion(): string {
        return this.wowzaSdkWrapper.WZVersionInfo.getInstance().toVerboseString();
    }

    public toLabel(state: number) {
        return this.wowzaSdkWrapper.status.WZState.toLabel(state);
    }
}
