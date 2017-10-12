/// <reference path="./_helpers.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module android {
					export class a {
						public static a: boolean;
						public static b: string;
						public static c: string;
						public static d: string;
						public static e: number;
						public static f: string;
						public constructor();
					}
				}
			}
		}
	}
}

import androidcontentContext = android.content.Context;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.data.WZDataMap.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export class WZPlatformInfo {
						public static manufacturer: string;
						public static brand: string;
						public static model: string;
						public static device: string;
						public static androidSDK: number;
						public static androidRelease: string;
						public static getEncoderInfo(): string;
						public constructor();
						public static displayInfoDataMap(param0: androidcontentContext): com.wowza.gocoder.sdk.api.data.WZDataMap;
						public toDataMap(): com.wowza.gocoder.sdk.api.data.WZDataMap;
						public static getEglInfo(): string;
						public static getInstance(): com.wowza.gocoder.sdk.api.WZPlatformInfo;
						public toString(): string;
						public static displayInfo(param0: androidcontentContext): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.api.data.WZDataMap.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export class WZVersionInfo {
						public getBuildNumber(): number;
						public getPreRelease(): string;
						public getMinorVersion(): number;
						public getMajorVersion(): number;
						public getRevision(): number;
						public toVerboseString(): string;
						public static getInstance(): com.wowza.gocoder.sdk.api.WZVersionInfo;
						public toDataMap(): com.wowza.gocoder.sdk.api.data.WZDataMap;
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.WZVersionInfo.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.configuration.WZMediaConfig.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.configuration.WowzaConfig.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.devices.WZAudioDevice.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.devices.WZCameraView.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.errors.WZError.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.status.WZStatus.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.status.WZStatusCallback.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export class WowzaGoCoder {
						public static SDK_VERSION: string;
						public static PLATFORM_INFO: string;
						public static OPENGLES_INFO: string;
						public static ENCODER_INFO: string;
						public getDefaultAudioDevice(): com.wowza.gocoder.sdk.api.devices.WZAudioDevice;
						public startStreaming(param0: com.wowza.gocoder.sdk.api.configuration.WowzaConfig, param1: com.wowza.gocoder.sdk.api.status.WZStatusCallback): void;
						public unmuteAudio(): void;
						public static isInitialized(): boolean;
						public isMuted(): boolean;
						public setConfig(param0: com.wowza.gocoder.sdk.api.configuration.WowzaConfig, param1: boolean): void;
						public setConfig(param0: com.wowza.gocoder.sdk.api.configuration.WZMediaConfig, param1: boolean): void;
						public setConfig(param0: com.wowza.gocoder.sdk.api.configuration.WZMediaConfig): void;
						public endStreaming(param0: com.wowza.gocoder.sdk.api.status.WZStatusCallback): void;
						public getAudioDevice(): com.wowza.gocoder.sdk.api.devices.WZAudioDevice;
						public muteAudio(): void;
						public static getInstance(): com.wowza.gocoder.sdk.api.WowzaGoCoder;
						public static hasPermission(param0: androidcontentContext, param1: string): boolean;
						public getStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
						public static init(param0: androidcontentContext, param1: string): com.wowza.gocoder.sdk.api.WowzaGoCoder;
						public getCameraView(): com.wowza.gocoder.sdk.api.devices.WZCameraView;
						public startStreaming(param0: com.wowza.gocoder.sdk.api.status.WZStatusCallback): void;
						public startCameraPreview(): void;
						public setConfig(param0: com.wowza.gocoder.sdk.api.configuration.WowzaConfig): void;
						public endStreaming(): void;
						public isStreaming(): boolean;
						public stopCameraPreview(): void;
						public startCameraPreview(param0: com.wowza.gocoder.sdk.api.configuration.WZMediaConfig): void;
						public startStreaming(param0: com.wowza.gocoder.sdk.api.configuration.WZMediaConfig, param1: com.wowza.gocoder.sdk.api.status.WZStatusCallback): void;
						public static getVersionInfo(): com.wowza.gocoder.sdk.api.WZVersionInfo;
						public static hasPermissions(param0: androidcontentContext, param1: native.Array<string>): boolean;
						public setCameraView(param0: com.wowza.gocoder.sdk.api.devices.WZCameraView): void;
						public getDefaultBroadcastConfig(): com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig;
						public static getLastError(): com.wowza.gocoder.sdk.api.errors.WZError;
						public getConfig(): com.wowza.gocoder.sdk.api.configuration.WowzaConfig;
					}
				}
			}
		}
	}
}

import androidhardwareCameraSize = android.hardware.Camera.Size;
import androidgraphicsPoint = android.graphics.Point;
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.geometry.WZPoint.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.geometry.WZSize.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.graphics.WZColor.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module android {
						export class WZAndroid {
							public constructor();
							public static CameraSizeToWZSize(param0: androidhardwareCameraSize): com.wowza.gocoder.sdk.api.geometry.WZSize;
							public static WZPointToPoint(param0: com.wowza.gocoder.sdk.api.geometry.WZPoint): androidgraphicsPoint;
							public static WZColorToColor(param0: com.wowza.gocoder.sdk.api.graphics.WZColor): number;
							public static PointToWZPoint(param0: androidgraphicsPoint): com.wowza.gocoder.sdk.api.geometry.WZSize;
							public static ColorToWZColor(param0: number): com.wowza.gocoder.sdk.api.graphics.WZColor;
						}
					}
				}
			}
		}
	}
}

import androidgraphicsBitmap = android.graphics.Bitmap;
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.geometry.WZPoint.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.geometry.WZSize.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module android {
						export module graphics {
							export class WZBitmap {
								public static CENTER: number;
								public static LEFT: number;
								public static RIGHT: number;
								public static TOP: number;
								public static BOTTOM: number;
								public static FRAME_WIDTH: number;
								public static FRAME_HEIGHT: number;
								public static SURFACE_WIDTH: number;
								public static SURFACE_HEIGHT: number;
								public static ORIGINAL_SIZE: number;
								public static CURRENT_SIZE: number;
								public mBitmap: androidgraphicsBitmap;
								public mSourceSize: com.wowza.gocoder.sdk.api.geometry.WZSize;
								public mDisplaySize: com.wowza.gocoder.sdk.api.geometry.WZSize;
								public mScaleBasis: number;
								public mScale: number;
								public mPosition: com.wowza.gocoder.sdk.api.geometry.WZPoint;
								public mRotationAngle: number;
								public mViewMatrixReady: boolean;
								public mDisplayProjectionMatrix: native.Array<number>;
								public mTextures: native.Array<number>;
								public mVisible: boolean;
								public onWZVideoFrameRendererDraw(param0: com.wowza.gocoder.sdk.api.android.opengl.WZGLES.EglEnv, param1: com.wowza.gocoder.sdk.api.geometry.WZSize, param2: number): void;
								public getScaleBasis(): number;
								public setScale(param0: number): void;
								public getSourceSize(): com.wowza.gocoder.sdk.api.geometry.WZSize;
								public setPosition(param0: com.wowza.gocoder.sdk.api.geometry.WZPoint): void;
								public constructor(param0: androidgraphicsBitmap);
								public setWidth(param0: number): void;
								public constructor();
								public getDisplaySize(): com.wowza.gocoder.sdk.api.geometry.WZSize;
								public setScale(param0: number, param1: number): void;
								public constructor(param0: native.Array<number>);
								public onWZVideoFrameRendererInit(param0: com.wowza.gocoder.sdk.api.android.opengl.WZGLES.EglEnv): void;
								public getRotationAngle(): number;
								public getPosition(): com.wowza.gocoder.sdk.api.geometry.WZPoint;
								public isWZVideoFrameRendererActive(): boolean;
								public onWZVideoFrameRendererRelease(param0: com.wowza.gocoder.sdk.api.android.opengl.WZGLES.EglEnv): void;
								public setHeight(param0: number): void;
								public setVisible(param0: boolean): void;
								public getScale(): number;
								public init(): void;
								public setBitmap(param0: androidgraphicsBitmap): void;
								public setRotation(param0: number): void;
								public setPosition(param0: number, param1: number): void;
								public isVisible(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

import javautilUUID = java.util.UUID;
/// <reference path="./com.wowza.gocoder.sdk.api.geometry.WZPoint.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.geometry.WZSize.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.graphics.WZColor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.UUID.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module android {
						export module graphics {
							export class WZText {
								public static CENTER: number;
								public static LEFT: number;
								public static RIGHT: number;
								public static TOP: number;
								public static BOTTOM: number;
								public mFontId: javautilUUID;
								public mText: string;
								public mColor: com.wowza.gocoder.sdk.api.graphics.WZColor;
								public mFrameSize: com.wowza.gocoder.sdk.api.geometry.WZSize;
								public mBaseSize: com.wowza.gocoder.sdk.api.geometry.WZSize;
								public mScaleBasis: number;
								public mScale: number;
								public mAlignment: number;
								public mSpacing: number;
								public mPosition: com.wowza.gocoder.sdk.api.geometry.WZPoint;
								public mRotationAngle: number;
								public mVisible: boolean;
								public constructor(param0: javautilUUID, param1: string);
								public getScaleBasis(): number;
								public constructor(param0: javautilUUID, param1: string, param2: com.wowza.gocoder.sdk.api.graphics.WZColor);
								public getSpacing(): number;
								public setColor(param0: number, param1: number, param2: number): void;
								public setPosition(param0: com.wowza.gocoder.sdk.api.geometry.WZPoint): void;
								public setColor(param0: number, param1: number, param2: number, param3: number): void;
								public init(param0: javautilUUID, param1: string): void;
								public getDescent(): number;
								public setText(param0: string): void;
								public getFontId(): javautilUUID;
								public getHeight(): number;
								public setRotationAngle(param0: number): void;
								public getWidth(): number;
								public getText(): string;
								public setVisible(param0: boolean): void;
								public getScale(): number;
								public getCharHeight(): number;
								public constructor(param0: javautilUUID, param1: string, param2: number, param3: number, param4: number, param5: number);
								public setFrameSize(param0: com.wowza.gocoder.sdk.api.geometry.WZSize): void;
								public isVisible(): boolean;
								public getAscent(): number;
								public setScale(param0: number): void;
								public setSpacing(param0: number): void;
								public setFontId(param0: javautilUUID): void;
								public setAlignment(param0: number): void;
								public setScale(param0: number, param1: number): void;
								public getRotationAngle(): number;
								public getPosition(): com.wowza.gocoder.sdk.api.geometry.WZPoint;
								public constructor(param0: javautilUUID);
								public setColor(param0: com.wowza.gocoder.sdk.api.graphics.WZColor): void;
								public getColor(): com.wowza.gocoder.sdk.api.graphics.WZColor;
								public getBaseSize(): com.wowza.gocoder.sdk.api.geometry.WZSize;
								public getAlignment(): number;
								public getCharWidthMax(): number;
								public getCharWidth(param0: string): number;
								public getFont(): com.wowza.gocoder.sdk.api.android.graphics.WZTextManager.Font;
								public getScaledSize(): com.wowza.gocoder.sdk.api.geometry.WZSize;
								public setPosition(param0: number, param1: number): void;
								public constructor(param0: javautilUUID, param1: string, param2: number, param3: number, param4: number);
							}
						}
					}
				}
			}
		}
	}
}

import androidcontentresAssetManager = android.content.res.AssetManager;
import javautilArrayList = java.util.ArrayList;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.AssetManager.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.android.graphics.WZText.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.geometry.WZSize.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.graphics.WZColor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
/// <reference path="./java.util.UUID.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module android {
						export module graphics {
							export class WZTextManager {
								public static SCALE_BASIS_FRAME_WIDTH: number;
								public static SCALE_BASIS_FRAME_HEIGHT: number;
								public static SCALE_BASIS_BASE_SIZE: number;
								public static SCALE_BASIS_CURRENT_SIZE: number;
								public mAssetManager: androidcontentresAssetManager;
								public mFonts: javautilArrayList;
								public mTextObjects: javautilArrayList;
								public mTextVisible: boolean;
								public mDisplayProjectionMatrix: native.Array<number>;
								public mModelViewMatrix: native.Array<number>;
								public mScratchMatrix: native.Array<number>;
								public mViewMatrixReady: boolean;
								public getFontById(param0: javautilUUID): com.wowza.gocoder.sdk.api.android.graphics.WZTextManager.Font;
								public createTextObject(param0: javautilUUID, param1: string, param2: com.wowza.gocoder.sdk.api.graphics.WZColor): com.wowza.gocoder.sdk.api.android.graphics.WZText;
								public onWZVideoFrameRendererDraw(param0: com.wowza.gocoder.sdk.api.android.opengl.WZGLES.EglEnv, param1: com.wowza.gocoder.sdk.api.geometry.WZSize, param2: number): void;
								public createTextObject(param0: javautilUUID, param1: string, param2: number, param3: number, param4: number): com.wowza.gocoder.sdk.api.android.graphics.WZText;
								public static getInstance(): com.wowza.gocoder.sdk.api.android.graphics.WZTextManager;
								public releaseTextObject(param0: com.wowza.gocoder.sdk.api.android.graphics.WZText): void;
								public release(): void;
								public createTextObject(param0: javautilUUID, param1: string, param2: number, param3: number, param4: number, param5: number): com.wowza.gocoder.sdk.api.android.graphics.WZText;
								public init(param0: androidcontentContext): void;
								public onWZVideoFrameRendererInit(param0: com.wowza.gocoder.sdk.api.android.opengl.WZGLES.EglEnv): void;
								public isWZVideoFrameRendererActive(): boolean;
								public clear(): void;
								public createTextObject(param0: javautilUUID): com.wowza.gocoder.sdk.api.android.graphics.WZText;
								public isTextVisible(): boolean;
								public onWZVideoFrameRendererRelease(param0: com.wowza.gocoder.sdk.api.android.opengl.WZGLES.EglEnv): void;
								public setTextVisible(param0: boolean): void;
								public loadFont(param0: string, param1: number, param2: number, param3: number): javautilUUID;
								public createTextObject(param0: javautilUUID, param1: string): com.wowza.gocoder.sdk.api.android.graphics.WZText;
							}
							export module WZTextManager {
								export class Font {
									public static CHAR_START: number;
									public static CHAR_END: number;
									public static CHAR_CNT: number;
									public static CHAR_NONE: number;
									public static CHAR_UNKNOWN: number;
									public static FONT_SIZE_MIN: number;
									public static FONT_SIZE_MAX: number;
									public static CHAR_BATCH_SIZE: number;
									public getFontSize(): number;
									public getCharHeight(): number;
									public deactivate(): void;
									public getFontPadX(): number;
									public setColor(param0: com.wowza.gocoder.sdk.api.graphics.WZColor): void;
									public getFileName(): string;
									public getFontDescent(): number;
									public release(): void;
									public getFontHeight(): number;
									public getFontDescent(param0: number): number;
									public getFontId(): javautilUUID;
									public getCellWidth(): number;
									public getCharWidthMax(param0: number): number;
									public getLength(param0: string, param1: number): number;
									public getFontPadY(): number;
									public getCharWidth(param0: string, param1: number): number;
									public getFontAscent(): number;
									public activate(param0: com.wowza.gocoder.sdk.api.graphics.WZColor, param1: native.Array<number>): void;
									public getCharHeight(param0: number): number;
									public getFontAscent(param0: number): number;
									public load(): boolean;
									public getCharWidthMax(): number;
									public getCharWidths(): native.Array<number>;
									public getCellHeight(): number;
								}
							}
						}
					}
				}
			}
		}
	}
}

import androidopenglEGLDisplay = android.opengl.EGLDisplay;
import androidopenglEGLConfig = android.opengl.EGLConfig;
import androidopenglEGLContext = android.opengl.EGLContext;
import javalangObject = java.lang.Object;
import androidopenglEGLSurface = android.opengl.EGLSurface;
import androidviewSurface = android.view.Surface;
/// <reference path="./android.opengl.EGLConfig.d.ts" />
/// <reference path="./android.opengl.EGLContext.d.ts" />
/// <reference path="./android.opengl.EGLDisplay.d.ts" />
/// <reference path="./android.opengl.EGLSurface.d.ts" />
/// <reference path="./android.view.Surface.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.data.WZDataMap.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.geometry.WZSize.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module android {
						export module opengl {
							export class WZGLES {
								public static DEFAULT_GLES_VERSION: number;
								public static IDENTITY_MATRIX: native.Array<number>;
								public static getEglSurfaceConfig(param0: androidopenglEGLDisplay, param1: androidopenglEGLSurface): androidopenglEGLConfig;
								public static destroyEglContext(param0: androidopenglEGLDisplay, param1: androidopenglEGLContext): void;
								public static createEglContext(param0: androidopenglEGLDisplay, param1: number, param2: androidopenglEGLContext): androidopenglEGLContext;
								public static getEglConfig(param0: androidopenglEGLDisplay, param1: number): androidopenglEGLConfig;
								public static createEglContext(param0: androidopenglEGLDisplay, param1: number): androidopenglEGLContext;
								public static getEglContextConfig(param0: androidopenglEGLDisplay, param1: androidopenglEGLContext): androidopenglEGLConfig;
								public static matrixToString(param0: string, param1: native.Array<number>): string;
								public constructor();
								public static checkEglError(param0: string): number;
								public static getEglErrorString(param0: number): string;
								public static getEglInfo(): string;
								public static createEglContext(param0: androidopenglEGLDisplay, param1: number, param2: androidopenglEGLContext, param3: boolean): androidopenglEGLContext;
								public static getEglSurfaceSize(param0: androidopenglEGLDisplay, param1: androidopenglEGLSurface): com.wowza.gocoder.sdk.api.geometry.WZSize;
								public static getEglInfo(param0: boolean): string;
								public static checkForEglError(param0: string): number;
								public static getEglConfig(param0: androidopenglEGLDisplay, param1: number, param2: boolean): androidopenglEGLConfig;
								public static getEglError(): number;
								public static createEglWindowSurface(param0: javalangObject, param1: androidopenglEGLDisplay, param2: androidopenglEGLConfig): androidopenglEGLSurface;
								public static getEglInfoDataMap(): com.wowza.gocoder.sdk.api.data.WZDataMap;
								public static surfaceToEGLRotation(param0: number): number;
								public static matrixToString(param0: native.Array<number>): string;
								public static getEglContextVersion(param0: androidopenglEGLDisplay, param1: androidopenglEGLContext): number;
							}
							export module WZGLES {
								export class EglEnv {
									public constructor(param0: number, param1: androidopenglEGLContext, param2: boolean);
									public makeCurrent(param0: androidopenglEGLSurface): boolean;
									public constructor(param0: number, param1: androidopenglEGLDisplay, param2: javalangObject, param3: boolean);
									public getEglVersion(): number;
									public getEglBaseSurface(): androidopenglEGLSurface;
									public constructor(param0: androidopenglEGLContext);
									public getBaseSurfaceSize(): com.wowza.gocoder.sdk.api.geometry.WZSize;
									public static createEglSurface(param0: androidopenglEGLDisplay, param1: androidopenglEGLSurface, param2: androidviewSurface): androidopenglEGLSurface;
									public setNativeSurface(param0: androidviewSurface): boolean;
									public makeNothingCurrent(): boolean;
									public copySurfaceContents(param0: androidopenglEGLSurface, param1: number, param2: number): boolean;
									public constructor(param0: number, param1: boolean);
									public swapBuffers(): boolean;
									public getNativeSurface(): androidviewSurface;
									public setPresentationTime(param0: number): boolean;
									public getEglDisplay(): androidopenglEGLDisplay;
									public getEglContext(): androidopenglEGLContext;
									public getEglSurfaceSize(): com.wowza.gocoder.sdk.api.geometry.WZSize;
									public generateEglWindowSurface(param0: javalangObject): androidopenglEGLSurface;
									public constructor(param0: androidopenglEGLDisplay, param1: androidopenglEGLContext);
									public constructor(param0: number, param1: javalangObject, param2: boolean);
									public setTextureId(param0: number): void;
									public makeCurrent(): boolean;
									public release(): void;
									public constructor(param0: number);
									public releaseSurface(): void;
									public constructor(param0: androidopenglEGLContext, param1: javalangObject, param2: boolean);
									public constructor(param0: number, param1: androidopenglEGLDisplay, param2: androidopenglEGLContext, param3: androidopenglEGLContext, param4: javalangObject, param5: boolean);
									public constructor(param0: androidopenglEGLDisplay, param1: androidopenglEGLContext, param2: javalangObject);
									public setSharedEglContext(param0: androidopenglEGLContext): boolean;
									public constructor(param0: androidopenglEGLContext, param1: androidopenglEGLSurface);
									public getEglConfig(): androidopenglEGLConfig;
									public constructor(param0: androidopenglEGLContext, param1: javalangObject);
									public getEglSurface(): androidopenglEGLSurface;
									public getTextureId(): number;
									public constructor(param0: androidopenglEGLDisplay, param1: androidopenglEGLContext, param2: androidopenglEGLSurface);
								}
							}
						}
					}
				}
			}
		}
	}
}

import javautilDate = java.util.Date;
/// <reference path="./com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.data.WZDataMap.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.data.WZDataScope.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.monitor.WZStreamingStat.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.status.WZStatus.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.status.WZStatusCallback.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module broadcast {
						export class WZBroadcast {
							public static LOG_STAT_SAMPLES: boolean;
							public static LOG_STAT_SUMMARY: boolean;
							public static LOG_WOWZ_MESSAGES: boolean;
							public mBroadcastStatus: com.wowza.gocoder.sdk.api.status.WZStatus;
							public mBroadcastConfig: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig;
							public mStartTime: javautilDate;
							public mEndTime: javautilDate;
							public mDuration: number;
							public constructor();
							public startBroadcast(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig, param1: com.wowza.gocoder.sdk.api.status.WZStatusCallback): com.wowza.gocoder.sdk.api.status.WZStatus;
							public sendDataEvent(param0: com.wowza.gocoder.sdk.api.data.WZDataScope, param1: string, param2: com.wowza.gocoder.sdk.api.data.WZDataMap, param3: com.wowza.gocoder.sdk.api.data.WZDataEvent.ResultCallback): void;
							public endBroadcast(): com.wowza.gocoder.sdk.api.status.WZStatus;
							public getBroadcastStatistics(): com.wowza.gocoder.sdk.api.monitor.WZStreamingStat;
							public sendDataEvent(param0: com.wowza.gocoder.sdk.api.data.WZDataScope, param1: string, param2: com.wowza.gocoder.sdk.api.data.WZDataMap): void;
							public sendDataEvent(param0: com.wowza.gocoder.sdk.api.data.WZDataScope, param1: string): void;
							public endBroadcast(param0: com.wowza.gocoder.sdk.api.status.WZStatusCallback): com.wowza.gocoder.sdk.api.status.WZStatus;
							public setLogLevel(param0: number): void;
							public isABRActivated(): boolean;
							public getBroadcastConfig(): com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig;
							public sendDataEvent(param0: com.wowza.gocoder.sdk.api.data.WZDataScope, param1: string, param2: com.wowza.gocoder.sdk.api.data.WZDataEvent.ResultCallback): void;
							public getStatusCallback(): com.wowza.gocoder.sdk.api.status.WZStatusCallback;
							public getBroadcastStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
							public getStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
							public startBroadcast(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig): com.wowza.gocoder.sdk.api.status.WZStatus;
							public unregisterDataEventListener(param0: string, param1: com.wowza.gocoder.sdk.api.data.WZDataEvent.EventListener): void;
							public setABRActivated(param0: boolean): void;
							public registerDataEventListener(param0: string, param1: com.wowza.gocoder.sdk.api.data.WZDataEvent.EventListener): void;
							public sendPingRequest(param0: com.wowza.gocoder.sdk.api.data.WZDataEvent.ResultCallback): void;
							public setStatusCallback(param0: com.wowza.gocoder.sdk.api.status.WZStatusCallback): void;
							public getLogLevel(): number;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.configuration.WZMediaConfig.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.errors.WZError.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.status.WZStatus.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module broadcast {
						export class WZBroadcastAPI {
							public constructor();
						}
						export module WZBroadcastAPI {
							export class AdaptiveBroadcaster {
								/**
								 * Constructs a new instance of the com.wowza.gocoder.sdk.api.broadcast.WZBroadcastAPI$AdaptiveBroadcaster interface with the provided implementation.
								 */
								public constructor(implementation: {
									changeAdaptiveBitrate(param0: number): void;
									getAdaptiveBitrate(): number;
									changeAdaptiveFramerate(param0: number): void;
									getAdaptiveFramerate(): number;
								});
								public getAdaptiveFramerate(): number;
								public changeAdaptiveBitrate(param0: number): void;
								public changeAdaptiveFramerate(param0: number): void;
								public getAdaptiveBitrate(): number;
							}
							export class AudioBroadcaster {
								/**
								 * Constructs a new instance of the com.wowza.gocoder.sdk.api.broadcast.WZBroadcastAPI$AudioBroadcaster interface with the provided implementation.
								 */
								public constructor(implementation: {
									isAudioEnabled(): boolean;
									setAudioEnabled(param0: boolean): void;
									isAudioPaused(): boolean;
									setAudioPaused(param0: boolean): void;
									prepareForBroadcast(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig): com.wowza.gocoder.sdk.api.status.WZStatus;
									getBroadcastConfig(): com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig;
									startBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
									stopBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
									getBroadcasterStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
									getStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
								});
								public getStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
								public getBroadcastConfig(): com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig;
								public setAudioEnabled(param0: boolean): void;
								public isAudioPaused(): boolean;
								public isAudioEnabled(): boolean;
								public setAudioPaused(param0: boolean): void;
								public stopBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
								public getBroadcasterStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
								public prepareForBroadcast(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig): com.wowza.gocoder.sdk.api.status.WZStatus;
								public startBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
							}
							export class BroadcastErrorCallback {
								/**
								 * Constructs a new instance of the com.wowza.gocoder.sdk.api.broadcast.WZBroadcastAPI$BroadcastErrorCallback interface with the provided implementation.
								 */
								public constructor(implementation: {
									onBroadcastError(param0: com.wowza.gocoder.sdk.api.errors.WZError): void;
								});
								public onBroadcastError(param0: com.wowza.gocoder.sdk.api.errors.WZError): void;
							}
							export class Broadcaster {
								/**
								 * Constructs a new instance of the com.wowza.gocoder.sdk.api.broadcast.WZBroadcastAPI$Broadcaster interface with the provided implementation.
								 */
								public constructor(implementation: {
									prepareForBroadcast(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig): com.wowza.gocoder.sdk.api.status.WZStatus;
									getBroadcastConfig(): com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig;
									startBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
									stopBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
									getBroadcasterStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
									getStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
								});
								public getStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
								public getBroadcastConfig(): com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig;
								public stopBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
								public getBroadcasterStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
								public prepareForBroadcast(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig): com.wowza.gocoder.sdk.api.status.WZStatus;
								public startBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
							}
							export class VideoBroadcaster {
								/**
								 * Constructs a new instance of the com.wowza.gocoder.sdk.api.broadcast.WZBroadcastAPI$VideoBroadcaster interface with the provided implementation.
								 */
								public constructor(implementation: {
									getVideoSourceConfig(): com.wowza.gocoder.sdk.api.configuration.WZMediaConfig;
									isVideoEnabled(): boolean;
									setVideoEnabled(param0: boolean): void;
									isVideoPaused(): boolean;
									setVideoPaused(param0: boolean): void;
									prepareForBroadcast(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig): com.wowza.gocoder.sdk.api.status.WZStatus;
									getBroadcastConfig(): com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig;
									startBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
									stopBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
									getBroadcasterStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
									getStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
								});
								public setVideoPaused(param0: boolean): void;
								public getStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
								public isVideoPaused(): boolean;
								public getBroadcastConfig(): com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig;
								public isVideoEnabled(): boolean;
								public setVideoEnabled(param0: boolean): void;
								public getVideoSourceConfig(): com.wowza.gocoder.sdk.api.configuration.WZMediaConfig;
								public stopBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
								public getBroadcasterStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
								public prepareForBroadcast(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig): com.wowza.gocoder.sdk.api.status.WZStatus;
								public startBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./_helpers.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module android {
					export class a {
						public static a: boolean;
						public static b: string;
						public static c: string;
						public static d: string;
						public static e: number;
						public static f: string;
						public constructor();
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.data.WZDataMap.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export class WZPlatformInfo {
						public static manufacturer: string;
						public static brand: string;
						public static model: string;
						public static device: string;
						public static androidSDK: number;
						public static androidRelease: string;
						public static getEncoderInfo(): string;
						public constructor();
						public static displayInfoDataMap(param0: android.content.Context): com.wowza.gocoder.sdk.api.data.WZDataMap;
						public static displayInfo(param0: android.content.Context): string;
						public toDataMap(): com.wowza.gocoder.sdk.api.data.WZDataMap;
						public static getEglInfo(): string;
						public static getInstance(): com.wowza.gocoder.sdk.api.WZPlatformInfo;
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.api.data.WZDataMap.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export class WZVersionInfo {
						public getBuildNumber(): number;
						public getPreRelease(): string;
						public getMinorVersion(): number;
						public getMajorVersion(): number;
						public getRevision(): number;
						public toVerboseString(): string;
						public static getInstance(): com.wowza.gocoder.sdk.api.WZVersionInfo;
						public toDataMap(): com.wowza.gocoder.sdk.api.data.WZDataMap;
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.WZVersionInfo.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.configuration.WZMediaConfig.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.configuration.WowzaConfig.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.devices.WZAudioDevice.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.devices.WZCameraView.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.errors.WZError.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.status.WZStatus.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.status.WZStatusCallback.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export class WowzaGoCoder {
						public static SDK_VERSION: string;
						public static PLATFORM_INFO: string;
						public static OPENGLES_INFO: string;
						public static ENCODER_INFO: string;
						public getDefaultAudioDevice(): com.wowza.gocoder.sdk.api.devices.WZAudioDevice;
						public startStreaming(param0: com.wowza.gocoder.sdk.api.configuration.WowzaConfig, param1: com.wowza.gocoder.sdk.api.status.WZStatusCallback): void;
						public static init(param0: android.content.Context, param1: string): com.wowza.gocoder.sdk.api.WowzaGoCoder;
						public unmuteAudio(): void;
						public static isInitialized(): boolean;
						public static hasPermission(param0: android.content.Context, param1: string): boolean;
						public isMuted(): boolean;
						public setConfig(param0: com.wowza.gocoder.sdk.api.configuration.WowzaConfig, param1: boolean): void;
						public setConfig(param0: com.wowza.gocoder.sdk.api.configuration.WZMediaConfig, param1: boolean): void;
						public setConfig(param0: com.wowza.gocoder.sdk.api.configuration.WZMediaConfig): void;
						public endStreaming(param0: com.wowza.gocoder.sdk.api.status.WZStatusCallback): void;
						public getAudioDevice(): com.wowza.gocoder.sdk.api.devices.WZAudioDevice;
						public static hasPermissions(param0: android.content.Context, param1: native.Array<string>): boolean;
						public muteAudio(): void;
						public static getInstance(): com.wowza.gocoder.sdk.api.WowzaGoCoder;
						public getStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
						public getCameraView(): com.wowza.gocoder.sdk.api.devices.WZCameraView;
						public startStreaming(param0: com.wowza.gocoder.sdk.api.status.WZStatusCallback): void;
						public startCameraPreview(): void;
						public setConfig(param0: com.wowza.gocoder.sdk.api.configuration.WowzaConfig): void;
						public endStreaming(): void;
						public isStreaming(): boolean;
						public stopCameraPreview(): void;
						public startCameraPreview(param0: com.wowza.gocoder.sdk.api.configuration.WZMediaConfig): void;
						public startStreaming(param0: com.wowza.gocoder.sdk.api.configuration.WZMediaConfig, param1: com.wowza.gocoder.sdk.api.status.WZStatusCallback): void;
						public static getVersionInfo(): com.wowza.gocoder.sdk.api.WZVersionInfo;
						public setCameraView(param0: com.wowza.gocoder.sdk.api.devices.WZCameraView): void;
						public getDefaultBroadcastConfig(): com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig;
						public static getLastError(): com.wowza.gocoder.sdk.api.errors.WZError;
						public getConfig(): com.wowza.gocoder.sdk.api.configuration.WowzaConfig;
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.geometry.WZPoint.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.geometry.WZSize.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.graphics.WZColor.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module android {
						export class WZAndroid {
							public constructor();
							public static WZPointToPoint(param0: com.wowza.gocoder.sdk.api.geometry.WZPoint): android.graphics.Point;
							public static PointToWZPoint(param0: android.graphics.Point): com.wowza.gocoder.sdk.api.geometry.WZSize;
							public static WZColorToColor(param0: com.wowza.gocoder.sdk.api.graphics.WZColor): number;
							public static CameraSizeToWZSize(param0: android.hardware.Camera.Size): com.wowza.gocoder.sdk.api.geometry.WZSize;
							public static ColorToWZColor(param0: number): com.wowza.gocoder.sdk.api.graphics.WZColor;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.geometry.WZPoint.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.geometry.WZSize.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module android {
						export module graphics {
							export class WZBitmap {
								public static CENTER: number;
								public static LEFT: number;
								public static RIGHT: number;
								public static TOP: number;
								public static BOTTOM: number;
								public static FRAME_WIDTH: number;
								public static FRAME_HEIGHT: number;
								public static SURFACE_WIDTH: number;
								public static SURFACE_HEIGHT: number;
								public static ORIGINAL_SIZE: number;
								public static CURRENT_SIZE: number;
								public mBitmap: android.graphics.Bitmap;
								public mSourceSize: com.wowza.gocoder.sdk.api.geometry.WZSize;
								public mDisplaySize: com.wowza.gocoder.sdk.api.geometry.WZSize;
								public mScaleBasis: number;
								public mScale: number;
								public mPosition: com.wowza.gocoder.sdk.api.geometry.WZPoint;
								public mRotationAngle: number;
								public mViewMatrixReady: boolean;
								public mDisplayProjectionMatrix: native.Array<number>;
								public mTextures: native.Array<number>;
								public mVisible: boolean;
								public onWZVideoFrameRendererDraw(param0: com.wowza.gocoder.sdk.api.android.opengl.WZGLES.EglEnv, param1: com.wowza.gocoder.sdk.api.geometry.WZSize, param2: number): void;
								public getScaleBasis(): number;
								public setScale(param0: number): void;
								public getSourceSize(): com.wowza.gocoder.sdk.api.geometry.WZSize;
								public setPosition(param0: com.wowza.gocoder.sdk.api.geometry.WZPoint): void;
								public setWidth(param0: number): void;
								public constructor();
								public constructor(param0: android.graphics.Bitmap);
								public getDisplaySize(): com.wowza.gocoder.sdk.api.geometry.WZSize;
								public setScale(param0: number, param1: number): void;
								public constructor(param0: native.Array<number>);
								public setBitmap(param0: android.graphics.Bitmap): void;
								public onWZVideoFrameRendererInit(param0: com.wowza.gocoder.sdk.api.android.opengl.WZGLES.EglEnv): void;
								public getRotationAngle(): number;
								public getPosition(): com.wowza.gocoder.sdk.api.geometry.WZPoint;
								public isWZVideoFrameRendererActive(): boolean;
								public onWZVideoFrameRendererRelease(param0: com.wowza.gocoder.sdk.api.android.opengl.WZGLES.EglEnv): void;
								public setHeight(param0: number): void;
								public setVisible(param0: boolean): void;
								public getScale(): number;
								public init(): void;
								public setRotation(param0: number): void;
								public setPosition(param0: number, param1: number): void;
								public isVisible(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.api.geometry.WZPoint.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.geometry.WZSize.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.graphics.WZColor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.UUID.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module android {
						export module graphics {
							export class WZText {
								public static CENTER: number;
								public static LEFT: number;
								public static RIGHT: number;
								public static TOP: number;
								public static BOTTOM: number;
								public mFontId: java.util.UUID;
								public mText: string;
								public mColor: com.wowza.gocoder.sdk.api.graphics.WZColor;
								public mFrameSize: com.wowza.gocoder.sdk.api.geometry.WZSize;
								public mBaseSize: com.wowza.gocoder.sdk.api.geometry.WZSize;
								public mScaleBasis: number;
								public mScale: number;
								public mAlignment: number;
								public mSpacing: number;
								public mPosition: com.wowza.gocoder.sdk.api.geometry.WZPoint;
								public mRotationAngle: number;
								public mVisible: boolean;
								public getScaleBasis(): number;
								public getSpacing(): number;
								public setColor(param0: number, param1: number, param2: number): void;
								public constructor(param0: java.util.UUID);
								public setPosition(param0: com.wowza.gocoder.sdk.api.geometry.WZPoint): void;
								public getFontId(): java.util.UUID;
								public setColor(param0: number, param1: number, param2: number, param3: number): void;
								public getDescent(): number;
								public setText(param0: string): void;
								public constructor(param0: java.util.UUID, param1: string, param2: com.wowza.gocoder.sdk.api.graphics.WZColor);
								public constructor(param0: java.util.UUID, param1: string, param2: number, param3: number, param4: number);
								public getHeight(): number;
								public setRotationAngle(param0: number): void;
								public getWidth(): number;
								public init(param0: java.util.UUID, param1: string): void;
								public getText(): string;
								public setVisible(param0: boolean): void;
								public setFontId(param0: java.util.UUID): void;
								public getScale(): number;
								public getCharHeight(): number;
								public setFrameSize(param0: com.wowza.gocoder.sdk.api.geometry.WZSize): void;
								public isVisible(): boolean;
								public getAscent(): number;
								public setScale(param0: number): void;
								public constructor(param0: java.util.UUID, param1: string);
								public setSpacing(param0: number): void;
								public setAlignment(param0: number): void;
								public constructor(param0: java.util.UUID, param1: string, param2: number, param3: number, param4: number, param5: number);
								public setScale(param0: number, param1: number): void;
								public getRotationAngle(): number;
								public getPosition(): com.wowza.gocoder.sdk.api.geometry.WZPoint;
								public setColor(param0: com.wowza.gocoder.sdk.api.graphics.WZColor): void;
								public getColor(): com.wowza.gocoder.sdk.api.graphics.WZColor;
								public getBaseSize(): com.wowza.gocoder.sdk.api.geometry.WZSize;
								public getAlignment(): number;
								public getCharWidthMax(): number;
								public getCharWidth(param0: string): number;
								public getFont(): com.wowza.gocoder.sdk.api.android.graphics.WZTextManager.Font;
								public getScaledSize(): com.wowza.gocoder.sdk.api.geometry.WZSize;
								public setPosition(param0: number, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.AssetManager.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.android.graphics.WZText.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.geometry.WZSize.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.graphics.WZColor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
/// <reference path="./java.util.UUID.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module android {
						export module graphics {
							export class WZTextManager {
								public static SCALE_BASIS_FRAME_WIDTH: number;
								public static SCALE_BASIS_FRAME_HEIGHT: number;
								public static SCALE_BASIS_BASE_SIZE: number;
								public static SCALE_BASIS_CURRENT_SIZE: number;
								public mAssetManager: android.content.res.AssetManager;
								public mFonts: java.util.ArrayList;
								public mTextObjects: java.util.ArrayList;
								public mTextVisible: boolean;
								public mDisplayProjectionMatrix: native.Array<number>;
								public mModelViewMatrix: native.Array<number>;
								public mScratchMatrix: native.Array<number>;
								public mViewMatrixReady: boolean;
								public onWZVideoFrameRendererDraw(param0: com.wowza.gocoder.sdk.api.android.opengl.WZGLES.EglEnv, param1: com.wowza.gocoder.sdk.api.geometry.WZSize, param2: number): void;
								public createTextObject(param0: java.util.UUID): com.wowza.gocoder.sdk.api.android.graphics.WZText;
								public createTextObject(param0: java.util.UUID, param1: string): com.wowza.gocoder.sdk.api.android.graphics.WZText;
								public createTextObject(param0: java.util.UUID, param1: string, param2: com.wowza.gocoder.sdk.api.graphics.WZColor): com.wowza.gocoder.sdk.api.android.graphics.WZText;
								public static getInstance(): com.wowza.gocoder.sdk.api.android.graphics.WZTextManager;
								public releaseTextObject(param0: com.wowza.gocoder.sdk.api.android.graphics.WZText): void;
								public createTextObject(param0: java.util.UUID, param1: string, param2: number, param3: number, param4: number, param5: number): com.wowza.gocoder.sdk.api.android.graphics.WZText;
								public release(): void;
								public getFontById(param0: java.util.UUID): com.wowza.gocoder.sdk.api.android.graphics.WZTextManager.Font;
								public onWZVideoFrameRendererInit(param0: com.wowza.gocoder.sdk.api.android.opengl.WZGLES.EglEnv): void;
								public isWZVideoFrameRendererActive(): boolean;
								public clear(): void;
								public isTextVisible(): boolean;
								public onWZVideoFrameRendererRelease(param0: com.wowza.gocoder.sdk.api.android.opengl.WZGLES.EglEnv): void;
								public setTextVisible(param0: boolean): void;
								public init(param0: android.content.Context): void;
								public loadFont(param0: string, param1: number, param2: number, param3: number): java.util.UUID;
								public createTextObject(param0: java.util.UUID, param1: string, param2: number, param3: number, param4: number): com.wowza.gocoder.sdk.api.android.graphics.WZText;
							}
							export module WZTextManager {
								export class Font {
									public static CHAR_START: number;
									public static CHAR_END: number;
									public static CHAR_CNT: number;
									public static CHAR_NONE: number;
									public static CHAR_UNKNOWN: number;
									public static FONT_SIZE_MIN: number;
									public static FONT_SIZE_MAX: number;
									public static CHAR_BATCH_SIZE: number;
									public getFontSize(): number;
									public getCharHeight(): number;
									public deactivate(): void;
									public getFontPadX(): number;
									public setColor(param0: com.wowza.gocoder.sdk.api.graphics.WZColor): void;
									public getFileName(): string;
									public getFontDescent(): number;
									public release(): void;
									public getFontHeight(): number;
									public getFontDescent(param0: number): number;
									public getCellWidth(): number;
									public getFontId(): java.util.UUID;
									public getCharWidthMax(param0: number): number;
									public getLength(param0: string, param1: number): number;
									public getFontPadY(): number;
									public getCharWidth(param0: string, param1: number): number;
									public getFontAscent(): number;
									public activate(param0: com.wowza.gocoder.sdk.api.graphics.WZColor, param1: native.Array<number>): void;
									public getCharHeight(param0: number): number;
									public getFontAscent(param0: number): number;
									public load(): boolean;
									public getCharWidthMax(): number;
									public getCharWidths(): native.Array<number>;
									public getCellHeight(): number;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.opengl.EGLConfig.d.ts" />
/// <reference path="./android.opengl.EGLContext.d.ts" />
/// <reference path="./android.opengl.EGLDisplay.d.ts" />
/// <reference path="./android.opengl.EGLSurface.d.ts" />
/// <reference path="./android.view.Surface.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.data.WZDataMap.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.geometry.WZSize.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module android {
						export module opengl {
							export class WZGLES {
								public static DEFAULT_GLES_VERSION: number;
								public static IDENTITY_MATRIX: native.Array<number>;
								public static destroyEglContext(param0: android.opengl.EGLDisplay, param1: android.opengl.EGLContext): void;
								public static getEglContextVersion(param0: android.opengl.EGLDisplay, param1: android.opengl.EGLContext): number;
								public static getEglContextConfig(param0: android.opengl.EGLDisplay, param1: android.opengl.EGLContext): android.opengl.EGLConfig;
								public static getEglSurfaceSize(param0: android.opengl.EGLDisplay, param1: android.opengl.EGLSurface): com.wowza.gocoder.sdk.api.geometry.WZSize;
								public static createEglWindowSurface(param0: java.lang.Object, param1: android.opengl.EGLDisplay, param2: android.opengl.EGLConfig): android.opengl.EGLSurface;
								public static matrixToString(param0: string, param1: native.Array<number>): string;
								public constructor();
								public static checkEglError(param0: string): number;
								public static getEglErrorString(param0: number): string;
								public static createEglContext(param0: android.opengl.EGLDisplay, param1: number): android.opengl.EGLContext;
								public static getEglConfig(param0: android.opengl.EGLDisplay, param1: number): android.opengl.EGLConfig;
								public static getEglInfo(): string;
								public static createEglContext(param0: android.opengl.EGLDisplay, param1: number, param2: android.opengl.EGLContext): android.opengl.EGLContext;
								public static getEglSurfaceConfig(param0: android.opengl.EGLDisplay, param1: android.opengl.EGLSurface): android.opengl.EGLConfig;
								public static createEglContext(param0: android.opengl.EGLDisplay, param1: number, param2: android.opengl.EGLContext, param3: boolean): android.opengl.EGLContext;
								public static getEglInfo(param0: boolean): string;
								public static checkForEglError(param0: string): number;
								public static getEglError(): number;
								public static getEglInfoDataMap(): com.wowza.gocoder.sdk.api.data.WZDataMap;
								public static surfaceToEGLRotation(param0: number): number;
								public static matrixToString(param0: native.Array<number>): string;
								public static getEglConfig(param0: android.opengl.EGLDisplay, param1: number, param2: boolean): android.opengl.EGLConfig;
							}
							export module WZGLES {
								export class EglEnv {
									public getEglDisplay(): android.opengl.EGLDisplay;
									public getEglVersion(): number;
									public constructor(param0: android.opengl.EGLContext, param1: android.opengl.EGLSurface);
									public constructor(param0: number, param1: android.opengl.EGLDisplay, param2: java.lang.Object, param3: boolean);
									public getBaseSurfaceSize(): com.wowza.gocoder.sdk.api.geometry.WZSize;
									public getEglSurface(): android.opengl.EGLSurface;
									public getEglConfig(): android.opengl.EGLConfig;
									public makeNothingCurrent(): boolean;
									public constructor(param0: number, param1: boolean);
									public swapBuffers(): boolean;
									public makeCurrent(param0: android.opengl.EGLSurface): boolean;
									public setPresentationTime(param0: number): boolean;
									public constructor(param0: number, param1: java.lang.Object, param2: boolean);
									public constructor(param0: android.opengl.EGLContext, param1: java.lang.Object);
									public getEglContext(): android.opengl.EGLContext;
									public constructor(param0: android.opengl.EGLContext, param1: java.lang.Object, param2: boolean);
									public getNativeSurface(): android.view.Surface;
									public constructor(param0: android.opengl.EGLDisplay, param1: android.opengl.EGLContext);
									public getEglSurfaceSize(): com.wowza.gocoder.sdk.api.geometry.WZSize;
									public copySurfaceContents(param0: android.opengl.EGLSurface, param1: number, param2: number): boolean;
									public setTextureId(param0: number): void;
									public constructor(param0: number, param1: android.opengl.EGLDisplay, param2: android.opengl.EGLContext, param3: android.opengl.EGLContext, param4: java.lang.Object, param5: boolean);
									public makeCurrent(): boolean;
									public release(): void;
									public generateEglWindowSurface(param0: java.lang.Object): android.opengl.EGLSurface;
									public constructor(param0: number);
									public setNativeSurface(param0: android.view.Surface): boolean;
									public releaseSurface(): void;
									public constructor(param0: android.opengl.EGLContext);
									public constructor(param0: number, param1: android.opengl.EGLContext, param2: boolean);
									public setSharedEglContext(param0: android.opengl.EGLContext): boolean;
									public getTextureId(): number;
									public static createEglSurface(param0: android.opengl.EGLDisplay, param1: android.opengl.EGLSurface, param2: android.view.Surface): android.opengl.EGLSurface;
									public getEglBaseSurface(): android.opengl.EGLSurface;
									public constructor(param0: android.opengl.EGLDisplay, param1: android.opengl.EGLContext, param2: java.lang.Object);
									public constructor(param0: android.opengl.EGLDisplay, param1: android.opengl.EGLContext, param2: android.opengl.EGLSurface);
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.data.WZDataMap.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.data.WZDataScope.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.monitor.WZStreamingStat.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.status.WZStatus.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.status.WZStatusCallback.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module broadcast {
						export class WZBroadcast {
							public static LOG_STAT_SAMPLES: boolean;
							public static LOG_STAT_SUMMARY: boolean;
							public static LOG_WOWZ_MESSAGES: boolean;
							public mBroadcastStatus: com.wowza.gocoder.sdk.api.status.WZStatus;
							public mBroadcastConfig: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig;
							public mStartTime: java.util.Date;
							public mEndTime: java.util.Date;
							public mDuration: number;
							public constructor();
							public startBroadcast(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig, param1: com.wowza.gocoder.sdk.api.status.WZStatusCallback): com.wowza.gocoder.sdk.api.status.WZStatus;
							public sendDataEvent(param0: com.wowza.gocoder.sdk.api.data.WZDataScope, param1: string, param2: com.wowza.gocoder.sdk.api.data.WZDataMap, param3: com.wowza.gocoder.sdk.api.data.WZDataEvent.ResultCallback): void;
							public endBroadcast(): com.wowza.gocoder.sdk.api.status.WZStatus;
							public getBroadcastStatistics(): com.wowza.gocoder.sdk.api.monitor.WZStreamingStat;
							public sendDataEvent(param0: com.wowza.gocoder.sdk.api.data.WZDataScope, param1: string, param2: com.wowza.gocoder.sdk.api.data.WZDataMap): void;
							public sendDataEvent(param0: com.wowza.gocoder.sdk.api.data.WZDataScope, param1: string): void;
							public endBroadcast(param0: com.wowza.gocoder.sdk.api.status.WZStatusCallback): com.wowza.gocoder.sdk.api.status.WZStatus;
							public setLogLevel(param0: number): void;
							public isABRActivated(): boolean;
							public getBroadcastConfig(): com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig;
							public sendDataEvent(param0: com.wowza.gocoder.sdk.api.data.WZDataScope, param1: string, param2: com.wowza.gocoder.sdk.api.data.WZDataEvent.ResultCallback): void;
							public getStatusCallback(): com.wowza.gocoder.sdk.api.status.WZStatusCallback;
							public getBroadcastStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
							public getStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
							public startBroadcast(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig): com.wowza.gocoder.sdk.api.status.WZStatus;
							public unregisterDataEventListener(param0: string, param1: com.wowza.gocoder.sdk.api.data.WZDataEvent.EventListener): void;
							public setABRActivated(param0: boolean): void;
							public registerDataEventListener(param0: string, param1: com.wowza.gocoder.sdk.api.data.WZDataEvent.EventListener): void;
							public sendPingRequest(param0: com.wowza.gocoder.sdk.api.data.WZDataEvent.ResultCallback): void;
							public setStatusCallback(param0: com.wowza.gocoder.sdk.api.status.WZStatusCallback): void;
							public getLogLevel(): number;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.configuration.WZMediaConfig.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.errors.WZError.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.status.WZStatus.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module broadcast {
						export class WZBroadcastAPI {
							public constructor();
						}
						export module WZBroadcastAPI {
							export class AdaptiveBroadcaster {
								/**
								 * Constructs a new instance of the com.wowza.gocoder.sdk.api.broadcast.WZBroadcastAPI$AdaptiveBroadcaster interface with the provided implementation.
								 */
								public constructor(implementation: {
									changeAdaptiveBitrate(param0: number): void;
									getAdaptiveBitrate(): number;
									changeAdaptiveFramerate(param0: number): void;
									getAdaptiveFramerate(): number;
								});
								public getAdaptiveFramerate(): number;
								public changeAdaptiveBitrate(param0: number): void;
								public changeAdaptiveFramerate(param0: number): void;
								public getAdaptiveBitrate(): number;
							}
							export class AudioBroadcaster {
								/**
								 * Constructs a new instance of the com.wowza.gocoder.sdk.api.broadcast.WZBroadcastAPI$AudioBroadcaster interface with the provided implementation.
								 */
								public constructor(implementation: {
									isAudioEnabled(): boolean;
									setAudioEnabled(param0: boolean): void;
									isAudioPaused(): boolean;
									setAudioPaused(param0: boolean): void;
									prepareForBroadcast(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig): com.wowza.gocoder.sdk.api.status.WZStatus;
									getBroadcastConfig(): com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig;
									startBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
									stopBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
									getBroadcasterStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
									getStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
								});
								public getStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
								public getBroadcastConfig(): com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig;
								public setAudioEnabled(param0: boolean): void;
								public isAudioPaused(): boolean;
								public isAudioEnabled(): boolean;
								public setAudioPaused(param0: boolean): void;
								public stopBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
								public getBroadcasterStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
								public prepareForBroadcast(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig): com.wowza.gocoder.sdk.api.status.WZStatus;
								public startBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
							}
							export class BroadcastErrorCallback {
								/**
								 * Constructs a new instance of the com.wowza.gocoder.sdk.api.broadcast.WZBroadcastAPI$BroadcastErrorCallback interface with the provided implementation.
								 */
								public constructor(implementation: {
									onBroadcastError(param0: com.wowza.gocoder.sdk.api.errors.WZError): void;
								});
								public onBroadcastError(param0: com.wowza.gocoder.sdk.api.errors.WZError): void;
							}
							export class Broadcaster {
								/**
								 * Constructs a new instance of the com.wowza.gocoder.sdk.api.broadcast.WZBroadcastAPI$Broadcaster interface with the provided implementation.
								 */
								public constructor(implementation: {
									prepareForBroadcast(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig): com.wowza.gocoder.sdk.api.status.WZStatus;
									getBroadcastConfig(): com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig;
									startBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
									stopBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
									getBroadcasterStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
									getStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
								});
								public getStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
								public getBroadcastConfig(): com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig;
								public stopBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
								public getBroadcasterStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
								public prepareForBroadcast(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig): com.wowza.gocoder.sdk.api.status.WZStatus;
								public startBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
							}
							export class VideoBroadcaster {
								/**
								 * Constructs a new instance of the com.wowza.gocoder.sdk.api.broadcast.WZBroadcastAPI$VideoBroadcaster interface with the provided implementation.
								 */
								public constructor(implementation: {
									getVideoSourceConfig(): com.wowza.gocoder.sdk.api.configuration.WZMediaConfig;
									isVideoEnabled(): boolean;
									setVideoEnabled(param0: boolean): void;
									isVideoPaused(): boolean;
									setVideoPaused(param0: boolean): void;
									prepareForBroadcast(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig): com.wowza.gocoder.sdk.api.status.WZStatus;
									getBroadcastConfig(): com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig;
									startBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
									stopBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
									getBroadcasterStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
									getStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
								});
								public setVideoPaused(param0: boolean): void;
								public getStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
								public isVideoPaused(): boolean;
								public getBroadcastConfig(): com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig;
								public isVideoEnabled(): boolean;
								public setVideoEnabled(param0: boolean): void;
								public getVideoSourceConfig(): com.wowza.gocoder.sdk.api.configuration.WZMediaConfig;
								public stopBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
								public getBroadcasterStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
								public prepareForBroadcast(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig): com.wowza.gocoder.sdk.api.status.WZStatus;
								public startBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.api.configuration.WZMediaConfig.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.configuration.WZStreamConfig.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.data.WZDataMap.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.errors.WZStreamingError.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.support.d.a.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module broadcast {
						export class WZBroadcastConfig extends com.wowza.gocoder.sdk.api.configuration.WZStreamConfig {
							public mVideoBroadcaster: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastAPI.VideoBroadcaster;
							public mAudioBroadcaster: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastAPI.AudioBroadcaster;
							public mVideoSourceConfig: com.wowza.gocoder.sdk.api.configuration.WZMediaConfig;
							public mOrientationBehavior: number;
							public setAudioBroadcaster(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastAPI.AudioBroadcaster): void;
							public getErrorCallback(): com.wowza.gocoder.sdk.api.broadcast.WZBroadcastAPI.BroadcastErrorCallback;
							public set(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig): void;
							public getVideoBroadcaster(): com.wowza.gocoder.sdk.api.broadcast.WZBroadcastAPI.VideoBroadcaster;
							public setVideoSourceConfig(param0: com.wowza.gocoder.sdk.api.configuration.WZMediaConfig): void;
							public registerVideoSink(param0: com.wowza.gocoder.sdk.api.sink.WZSinkAPI.VideoSink): void;
							public toString(): string;
							public unregisterVideoSink(param0: com.wowza.gocoder.sdk.api.sink.WZSinkAPI.VideoSink): void;
							public getAudioSinks(): native.Array<com.wowza.gocoder.sdk.api.sink.WZSinkAPI.AudioSink>;
							public getStreamingMonitor(): com.wowza.gocoder.sdk.support.d.a;
							public setVideoBroadcaster(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastAPI.VideoBroadcaster): void;
							public set(param0: com.wowza.gocoder.sdk.api.configuration.WZStreamConfig): void;
							public toDataMap(): com.wowza.gocoder.sdk.api.data.WZDataMap;
							public set(param0: com.wowza.gocoder.sdk.api.configuration.WZMediaConfig): void;
							public unregisterAudioSink(param0: com.wowza.gocoder.sdk.api.sink.WZSinkAPI.AudioSink): void;
							public constructor();
							public getVideoSinks(): native.Array<com.wowza.gocoder.sdk.api.sink.WZSinkAPI.VideoSink>;
							public setOrientationBehavior(param0: number): void;
							public getVideoSourceConfig(): com.wowza.gocoder.sdk.api.configuration.WZMediaConfig;
							public constructor(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig);
							public constructor(param0: com.wowza.gocoder.sdk.api.configuration.WZStreamConfig);
							public setStreamingMonitor(param0: com.wowza.gocoder.sdk.support.d.a): void;
							public getOrientationBehavior(): number;
							public getAudioBroadcaster(): com.wowza.gocoder.sdk.api.broadcast.WZBroadcastAPI.AudioBroadcaster;
							public constructor(param0: com.wowza.gocoder.sdk.api.configuration.WZMediaConfig);
							public validateForBroadcast(): com.wowza.gocoder.sdk.api.errors.WZStreamingError;
							public registerAudioSink(param0: com.wowza.gocoder.sdk.api.sink.WZSinkAPI.AudioSink): void;
							public toDataMap(param0: com.wowza.gocoder.sdk.api.data.WZDataMap): com.wowza.gocoder.sdk.api.data.WZDataMap;
							public setErrorCallback(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastAPI.BroadcastErrorCallback): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.opengl.EGLContext.d.ts" />
/// <reference path="./android.opengl.EGLSurface.d.ts" />
/// <reference path="./android.view.Surface.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.configuration.WZMediaConfig.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module broadcast {
						export class WZGLBroadcaster extends com.wowza.gocoder.sdk.api.broadcast.WZH264Broadcaster {
							public constructor(param0: android.opengl.EGLContext, param1: android.opengl.EGLSurface);
							public getAdaptiveBitrate(): number;
							public onFrameAvailable(param0: number): void;
							public setFrameRotation(param0: number): void;
							public setVideoEnabled(param0: boolean): void;
							public onPrepareEncoder(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig): void;
							public setEglSurface(param0: android.opengl.EGLSurface): void;
							public getVideoFrameRenderer(): com.wowza.gocoder.sdk.api.render.WZRenderAPI.VideoFrameRenderer;
							public isVideoPaused(): boolean;
							public setVideoPaused(param0: boolean): void;
							public onStopEncoding(): void;
							public constructor();
							public setFrameSize(param0: number, param1: number): void;
							public getVideoSourceConfig(): com.wowza.gocoder.sdk.api.configuration.WZMediaConfig;
							public onFrameAvailable(): void;
							public getEglSurface(): android.opengl.EGLSurface;
							public changeAdaptiveFramerate(param0: number): void;
							public constructor(param0: android.opengl.EGLContext);
							public getEglContext(): android.opengl.EGLContext;
							public generateEglSuface(param0: android.view.Surface): android.opengl.EGLSurface;
							public setVideoFrameRenderer(param0: com.wowza.gocoder.sdk.api.render.WZRenderAPI.VideoFrameRenderer): void;
							public changeAdaptiveBitrate(param0: number): void;
							public setEglContext(param0: android.opengl.EGLContext): void;
							public isVideoEnabled(): boolean;
							public getAdaptiveFramerate(): number;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.configuration.WZMediaConfig.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.status.WZStatus.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module broadcast {
						export class WZH264Broadcaster extends com.wowza.gocoder.sdk.support.c.a implements com.wowza.gocoder.sdk.api.broadcast.WZBroadcastAPI.VideoBroadcaster {
							public constructor();
							public getAdaptiveBitrate(): number;
							public stopBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
							public getVideoSourceConfig(): com.wowza.gocoder.sdk.api.configuration.WZMediaConfig;
							public setVideoEnabled(param0: boolean): void;
							public getBroadcastConfig(): com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig;
							public startBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
							public prepareForBroadcast(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig): com.wowza.gocoder.sdk.api.status.WZStatus;
							public changeAdaptiveFramerate(param0: number): void;
							public getStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
							public isVideoPaused(): boolean;
							public setVideoPaused(param0: boolean): void;
							public changeAdaptiveBitrate(param0: number): void;
							public isVideoEnabled(): boolean;
							public getBroadcasterStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
							public getAdaptiveFramerate(): number;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.media.MediaCodecInfo.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.data.WZDataMap.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.h264.WZProfileLevel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module codec {
						export class WZCodecUtils {
							public static H264_MIME_TYPE: string;
							public static AAC_MIME_TYPE: string;
							public constructor();
							public static getDecodersForType(param0: string): native.Array<android.media.MediaCodecInfo>;
							public static WZProfileLevelToProfileLevel(param0: com.wowza.gocoder.sdk.api.h264.WZProfileLevel): android.media.MediaCodecInfo.CodecProfileLevel;
							public static getCodecInfo(): string;
							public static getCodecInfoDataMap(): com.wowza.gocoder.sdk.api.data.WZDataMap;
							public static getProfiles(): native.Array<number>;
							public static getProfileLevels(): native.Array<com.wowza.gocoder.sdk.api.h264.WZProfileLevel>;
							public static ProfileLevelToWZProfileLevel(param0: android.media.MediaCodecInfo.CodecProfileLevel): com.wowza.gocoder.sdk.api.h264.WZProfileLevel;
							public static getCodecsForType(param0: string): native.Array<android.media.MediaCodecInfo>;
							public static getEncodersForType(param0: string): native.Array<android.media.MediaCodecInfo>;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.api.data.WZDataMap.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.geometry.WZSize.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.h264.WZProfileLevel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module configuration {
						export class WZMediaConfig {
							public static DEFAULT_VIDEO_FRAME_WIDTH: number;
							public static DEFAULT_VIDEO_FRAME_HEIGHT: number;
							public static DEFAULT_VIDEO_FRAME_SIZE: com.wowza.gocoder.sdk.api.geometry.WZSize;
							public static DEFAULT_VIDEO_BITRATE: number;
							public static DEFAULT_VIDEO_FRAME_RATE: number;
							public static DEFAULT_VIDEO_KEYFRAME_INTERVAL: number;
							public static DEFAULT_AUDIO_SAMPLE_RATE: number;
							public static DEFAULT_AUDIO_BITRATE: number;
							public static SUPPORTED_AUDIO_SAMPLE_RATES: native.Array<number>;
							public static RESIZE_TO_ASPECT: number;
							public static CROP_TO_FRAME: number;
							public static FILL_VIEW: number;
							public static FILL_FRAME: number;
							public static DEFAULT_SCALE_MODE: number;
							public static ORIENTATION_LANDSCAPE: number;
							public static ORIENTATION_PORTRAIT: number;
							public static ORIENTATION_LANDSCAPE_INVERTED: number;
							public static ORIENTATION_PORTRAIT_INVERTED: number;
							public static ALWAYS_LANDSCAPE: number;
							public static ALWAYS_PORTRAIT: number;
							public static SAME_AS_SOURCE: number;
							public static AUDIO_CHANNELS_STEREO: number;
							public static AUDIO_CHANNELS_MONO: number;
							public static FRAME_SIZE_176x144: com.wowza.gocoder.sdk.api.configuration.WZMediaConfig;
							public static FRAME_SIZE_320x240: com.wowza.gocoder.sdk.api.configuration.WZMediaConfig;
							public static FRAME_SIZE_352x288: com.wowza.gocoder.sdk.api.configuration.WZMediaConfig;
							public static FRAME_SIZE_640x480: com.wowza.gocoder.sdk.api.configuration.WZMediaConfig;
							public static FRAME_SIZE_960x540: com.wowza.gocoder.sdk.api.configuration.WZMediaConfig;
							public static FRAME_SIZE_1280x720: com.wowza.gocoder.sdk.api.configuration.WZMediaConfig;
							public static FRAME_SIZE_1440x1080: com.wowza.gocoder.sdk.api.configuration.WZMediaConfig;
							public static FRAME_SIZE_1920x1080: com.wowza.gocoder.sdk.api.configuration.WZMediaConfig;
							public static FRAME_SIZE_3840x2160: com.wowza.gocoder.sdk.api.configuration.WZMediaConfig;
							public static PRESET_CONFIGS: native.Array<com.wowza.gocoder.sdk.api.configuration.WZMediaConfig>;
							public static DEFAULT_VIDEO_BITRATE_SCALING_FACTOR: number;
							public static DEFAULT_VIDEO_FRAME_BUFFER_MULTIPLIER: number;
							public static DEFAULT_VIDEO_FRAME_SKIP_COUNT: number;
							public mVBELowBandwidthScalingFactor: number;
							public mVBEFrameRateLowBandwidthSkipCount: number;
							public mVBEFrameBufferSizeMultiplier: number;
							public mABREnabled: boolean;
							public mVideoFrameSize: com.wowza.gocoder.sdk.api.geometry.WZSize;
							public mVideoFramerate: number;
							public mVideoKeyFrameInterval: number;
							public mVideoBitRate: number;
							public mVideoProfileLevel: com.wowza.gocoder.sdk.api.h264.WZProfileLevel;
							public mVideoRotation: number;
							public mAudioChannels: number;
							public mAudioSampleRate: number;
							public mAudioBitRate: number;
							public mVideoEnabled: boolean;
							public mAudioEnabled: boolean;
							public mPresetLabel: string;
							public setAudioBitRate(param0: number): void;
							public getVideoFrameWidth(): number;
							public setVideoEnabled(param0: boolean): void;
							public static orientationLabel(param0: number): string;
							public getPresetLabel(): string;
							public static bitrateLabel(param0: number): string;
							public static fromFrameSizes(param0: native.Array<com.wowza.gocoder.sdk.api.geometry.WZSize>): native.Array<com.wowza.gocoder.sdk.api.configuration.WZMediaConfig>;
							public setFrameRateLowBandwidthSkipCount(param0: number): void;
							public setVideoFrameSize(param0: com.wowza.gocoder.sdk.api.geometry.WZSize): void;
							public static isLandscapeRotation(param0: number): boolean;
							public static keyFrameIntervalFramesToSeconds(param0: number, param1: number): number;
							public setABREnabled(param0: boolean): void;
							public setAudioEnabled(param0: boolean): void;
							public getAudioBitRate(): number;
							public getVideoFrameHeight(): number;
							public isABREnabled(): boolean;
							public getLowBandwidthScalingFactor(): number;
							public equals(param0: java.lang.Object): boolean;
							public getVideoKeyFrameInterval(): number;
							public setAudioSampleRate(param0: number): number;
							public getFrameRateLowBandwidthSkipCount(): number;
							public getPresetLabelByFrameSize(): string;
							public getLabel(param0: boolean, param1: boolean, param2: boolean, param3: boolean): string;
							public getAudioSampleRate(): number;
							public setVideoProfileLevel(param0: com.wowza.gocoder.sdk.api.h264.WZProfileLevel): void;
							public setVideoFramerate(param0: number): void;
							public setVideoFrameHeight(param0: number): void;
							public static rotationToOrientation(param0: number): number;
							public static isLandscape(param0: number): boolean;
							public setVideoRotation(param0: number): void;
							public compareTo(param0: com.wowza.gocoder.sdk.api.configuration.WZMediaConfig): number;
							public setVideoBitRate(param0: number): void;
							public isVideoEnabled(): boolean;
							public static isValidScaleMode(param0: number): boolean;
							public getVideoFrameSize(): com.wowza.gocoder.sdk.api.geometry.WZSize;
							public setVideoFrameWidth(param0: number): void;
							public getVideoFramerate(): number;
							public toString(): string;
							public setAudioChannels(param0: number): void;
							public getLabel(param0: boolean, param1: boolean, param2: boolean): string;
							public getFrameBufferSizeMultiplier(): number;
							public static orientationToRotation(param0: number): number;
							public static toFrameSizes(param0: native.Array<com.wowza.gocoder.sdk.api.configuration.WZMediaConfig>): native.Array<com.wowza.gocoder.sdk.api.geometry.WZSize>;
							public toDataMap(): com.wowza.gocoder.sdk.api.data.WZDataMap;
							public set(param0: com.wowza.gocoder.sdk.api.configuration.WZMediaConfig): void;
							public static orientationToSurfaceRotation(param0: number): number;
							public constructor();
							public setVideoFrameSize(param0: number, param1: number): void;
							public static isPortrait(param0: number): boolean;
							public isAudioEnabled(): boolean;
							public getVideoProfileLevel(): com.wowza.gocoder.sdk.api.h264.WZProfileLevel;
							public getVideoBitRate(): number;
							public setLowBandwidthScalingFactor(param0: number): void;
							public setFrameBufferSizeMultiplier(param0: number): void;
							public getAudioChannels(): number;
							public static isPortraitRotation(param0: number): boolean;
							public static surfaceRotationToOrientation(param0: number): number;
							public setVideoProfileLevel(param0: number, param1: number): void;
							public resetToDefaults(): void;
							public setVideoKeyFrameInterval(param0: number): void;
							public getVideoRotation(): number;
							public constructor(param0: com.wowza.gocoder.sdk.api.configuration.WZMediaConfig);
							public toDataMap(param0: com.wowza.gocoder.sdk.api.data.WZDataMap): com.wowza.gocoder.sdk.api.data.WZDataMap;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.api.configuration.WZMediaConfig.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.data.WZDataMap.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.errors.WZStreamingError.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module configuration {
						export class WZStreamConfig extends com.wowza.gocoder.sdk.api.configuration.WZMediaConfig {
							public static DEFAULT_PORT: number;
							public static DEFAULT_APP: string;
							public static DEFAULT_STREAM: string;
							public getConnectionURL(): string;
							public getUsername(): string;
							public setLogLevel(param0: number): void;
							public toString(): string;
							public getStreamName(): string;
							public getStreamMetadata(): com.wowza.gocoder.sdk.api.data.WZDataMap;
							public getLogLevel(): number;
							public set(param0: com.wowza.gocoder.sdk.api.configuration.WZStreamConfig): void;
							public toDataMap(): com.wowza.gocoder.sdk.api.data.WZDataMap;
							public set(param0: com.wowza.gocoder.sdk.api.configuration.WZMediaConfig): void;
							public setConnectionParameters(param0: com.wowza.gocoder.sdk.api.data.WZDataMap): void;
							public constructor();
							public getPortNumber(): number;
							public setHostAddress(param0: string): void;
							public setStreamName(param0: string): void;
							public setStreamMetadata(param0: com.wowza.gocoder.sdk.api.data.WZDataMap): void;
							public validateForPlayback(): com.wowza.gocoder.sdk.api.errors.WZStreamingError;
							public constructor(param0: com.wowza.gocoder.sdk.api.configuration.WZStreamConfig);
							public getPassword(): string;
							public getApplicationName(): string;
							public setPassword(param0: string): void;
							public setApplicationName(param0: string): void;
							public constructor(param0: com.wowza.gocoder.sdk.api.configuration.WZMediaConfig);
							public getHostAddress(): string;
							public validateForBroadcast(): com.wowza.gocoder.sdk.api.errors.WZStreamingError;
							public toDataMap(param0: com.wowza.gocoder.sdk.api.data.WZDataMap): com.wowza.gocoder.sdk.api.data.WZDataMap;
							public setUsername(param0: string): void;
							public setPortNumber(param0: number): void;
							public getConnectionParameters(): com.wowza.gocoder.sdk.api.data.WZDataMap;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.api.configuration.WZMediaConfig.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.configuration.WZStreamConfig.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module configuration {
						export class WowzaConfig extends com.wowza.gocoder.sdk.api.configuration.WZStreamConfig {
							public constructor();
							public setCapturedVideoRotates(param0: boolean): void;
							public constructor(param0: com.wowza.gocoder.sdk.api.configuration.WZStreamConfig);
							public constructor(param0: com.wowza.gocoder.sdk.api.configuration.WZMediaConfig);
							public set(param0: com.wowza.gocoder.sdk.api.configuration.WowzaConfig): void;
							public toString(): string;
							public constructor(param0: com.wowza.gocoder.sdk.api.configuration.WowzaConfig);
							public set(param0: com.wowza.gocoder.sdk.api.configuration.WZStreamConfig): void;
							public set(param0: com.wowza.gocoder.sdk.api.configuration.WZMediaConfig): void;
							public getCapturedVideoRotates(): boolean;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.api.data.WZDataType.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module data {
						export abstract class WZData {
							public mDataType: com.wowza.gocoder.sdk.api.data.WZDataType;
							public constructor();
							public isPrimitive(): boolean;
							public getDataType(): com.wowza.gocoder.sdk.api.data.WZDataType;
							public toString(param0: boolean, param1: number): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.api.data.WZDataMap.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module data {
						export class WZDataEvent {
							public constructor();
						}
						export module WZDataEvent {
							export class EventListener {
								/**
								 * Constructs a new instance of the com.wowza.gocoder.sdk.api.data.WZDataEvent$EventListener interface with the provided implementation.
								 */
								public constructor(implementation: {
									onWZDataEvent(param0: string, param1: com.wowza.gocoder.sdk.api.data.WZDataMap): com.wowza.gocoder.sdk.api.data.WZDataMap;
								});
								public onWZDataEvent(param0: string, param1: com.wowza.gocoder.sdk.api.data.WZDataMap): com.wowza.gocoder.sdk.api.data.WZDataMap;
							}
							export class ResultCallback {
								/**
								 * Constructs a new instance of the com.wowza.gocoder.sdk.api.data.WZDataEvent$ResultCallback interface with the provided implementation.
								 */
								public constructor(implementation: {
									onWZDataEventResult(param0: com.wowza.gocoder.sdk.api.data.WZDataMap, param1: boolean): void;
								});
								public onWZDataEventResult(param0: com.wowza.gocoder.sdk.api.data.WZDataMap, param1: boolean): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module data {
						export class WZDataItem extends com.wowza.gocoder.sdk.api.data.WZData {
							public constructor();
							public shortValue(): number;
							public set(param0: com.wowza.gocoder.sdk.api.data.WZDataItem): void;
							public setValue(param0: boolean): void;
							public stringValue(): string;
							public booleanValue(): boolean;
							public dateValue(): java.util.Date;
							public intValue(): number;
							public toString(): string;
							public isNull(): boolean;
							public setValue(param0: number): void;
							public doubleValue(): number;
							public constructor(param0: number);
							public toString(param0: boolean, param1: number): string;
							public constructor(param0: java.util.Date);
							public longValue(): number;
							public constructor(param0: string);
							public setValue(param0: string): void;
							public floatValue(): number;
							public constructor(param0: boolean);
							public setValue(param0: java.util.Date): void;
							public constructor(param0: com.wowza.gocoder.sdk.api.data.WZDataItem);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.api.data.WZData.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module data {
						export class WZDataList extends com.wowza.gocoder.sdk.api.data.WZData {
							public constructor();
							public add(param0: number, param1: boolean): void;
							public size(): number;
							public add(param0: java.util.Date): void;
							public remove(param0: com.wowza.gocoder.sdk.api.data.WZData): boolean;
							public clear(): void;
							public get(param0: number): com.wowza.gocoder.sdk.api.data.WZData;
							public toString(): string;
							public add(param0: number, param1: string): void;
							public add(param0: com.wowza.gocoder.sdk.api.data.WZData): boolean;
							public add(param0: boolean): void;
							public iterator(): java.util.Iterator;
							public remove(param0: number): com.wowza.gocoder.sdk.api.data.WZData;
							public add(param0: number, param1: java.util.Date): void;
							public toString(param0: boolean, param1: number): string;
							public lastIndexOf(param0: com.wowza.gocoder.sdk.api.data.WZData): number;
							public add(param0: number): void;
							public add(param0: number, param1: com.wowza.gocoder.sdk.api.data.WZData): void;
							public add(param0: number, param1: number): void;
							public indexOf(param0: com.wowza.gocoder.sdk.api.data.WZData): number;
							public add(param0: string): void;
							public isEmpty(): boolean;
							public contains(param0: com.wowza.gocoder.sdk.api.data.WZData): boolean;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.api.data.WZData.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module data {
						export class WZDataMap extends com.wowza.gocoder.sdk.api.data.WZData {
							public constructor();
							public keys(): native.Array<string>;
							public size(): number;
							public put(param0: string, param1: com.wowza.gocoder.sdk.api.data.WZData): void;
							public clear(): void;
							public toString(): string;
							public toString(param0: boolean, param1: number): string;
							public containsKey(param0: string): boolean;
							public put(param0: string, param1: number): void;
							public put(param0: string, param1: boolean): void;
							public containsValue(param0: java.lang.Object): boolean;
							public keySet(): java.util.Set;
							public get(param0: string): com.wowza.gocoder.sdk.api.data.WZData;
							public put(param0: string, param1: string): void;
							public remove(param0: string): com.wowza.gocoder.sdk.api.data.WZData;
							public isEmpty(): boolean;
							public put(param0: string, param1: java.util.Date): void;
							public toString(param0: boolean): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module data {
						export class WZDataScope {
							public static STREAM: com.wowza.gocoder.sdk.api.data.WZDataScope;
							public static MODULE: com.wowza.gocoder.sdk.api.data.WZDataScope;
							public static valueOf(param0: string): com.wowza.gocoder.sdk.api.data.WZDataScope;
							public static values(): native.Array<com.wowza.gocoder.sdk.api.data.WZDataScope>;
							public getValue(): number;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module data {
						export class WZDataType {
							public static NULL: com.wowza.gocoder.sdk.api.data.WZDataType;
							public static STRING: com.wowza.gocoder.sdk.api.data.WZDataType;
							public static BOOLEAN: com.wowza.gocoder.sdk.api.data.WZDataType;
							public static DATE: com.wowza.gocoder.sdk.api.data.WZDataType;
							public static INTEGER: com.wowza.gocoder.sdk.api.data.WZDataType;
							public static SHORT: com.wowza.gocoder.sdk.api.data.WZDataType;
							public static LONG: com.wowza.gocoder.sdk.api.data.WZDataType;
							public static FLOAT: com.wowza.gocoder.sdk.api.data.WZDataType;
							public static DOUBLE: com.wowza.gocoder.sdk.api.data.WZDataType;
							public static DATA_MAP: com.wowza.gocoder.sdk.api.data.WZDataType;
							public static DATA_LIST: com.wowza.gocoder.sdk.api.data.WZDataType;
							public static valueOf(param0: string): com.wowza.gocoder.sdk.api.data.WZDataType;
							public static values(): native.Array<com.wowza.gocoder.sdk.api.data.WZDataType>;
							public getValue(): number;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Message.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.configuration.WZMediaConfig.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.status.WZStatus.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module devices {
						export class WZAudioDevice {
							public constructor();
							public getSamplingConfig(): com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig;
							public stopBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
							public stopAudioSampler(): void;
							public isAudioEnabled(): boolean;
							public isAudioPaused(): boolean;
							public isMuted(): boolean;
							public getBroadcastConfig(): com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig;
							public setAudioPaused(param0: boolean): void;
							public startBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
							public startAudioSampler(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig): void;
							public prepareForBroadcast(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig): com.wowza.gocoder.sdk.api.status.WZStatus;
							public setSamplingConfig(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig): void;
							public isSamplingAudio(): boolean;
							public registerAudioSampleListener(param0: com.wowza.gocoder.sdk.api.devices.WZAudioDevice.AudioSampleListener): void;
							public getStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
							public unregisterAudioSampleListener(param0: com.wowza.gocoder.sdk.api.devices.WZAudioDevice.AudioSampleListener): void;
							public getAudioSource(): number;
							public setMuted(param0: boolean): void;
							public setAudioEnabled(param0: boolean): void;
							public startAudioSampler(): void;
							public setAudioSource(param0: number): void;
							public getBroadcasterStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
						}
						export module WZAudioDevice {
							export class AudioEncoderHandler {
								public handleMessage(param0: android.os.Message): void;
							}
							export class AudioRecorderHandler {
								public handleMessage(param0: android.os.Message): void;
							}
							export class AudioSampleListener {
								/**
								 * Constructs a new instance of the com.wowza.gocoder.sdk.api.devices.WZAudioDevice$AudioSampleListener interface with the provided implementation.
								 */
								public constructor(implementation: {
									isWZAudioSampleListenerEnabled(): boolean;
									onWZAudioSampleListenerSetup(param0: com.wowza.gocoder.sdk.api.configuration.WZMediaConfig): void;
									onWZAudioSampleRecorded(param0: native.Array<number>, param1: number, param2: number): void;
									onWZAudioPaused(param0: boolean): void;
									onWZAudioSampleListenerRelease(): void;
								});
								public onWZAudioPaused(param0: boolean): void;
								public onWZAudioSampleListenerSetup(param0: com.wowza.gocoder.sdk.api.configuration.WZMediaConfig): void;
								public isWZAudioSampleListenerEnabled(): boolean;
								public onWZAudioSampleListenerRelease(): void;
								public onWZAudioSampleRecorded(param0: native.Array<number>, param1: number, param2: number): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.RectF.d.ts" />
/// <reference path="./android.graphics.SurfaceTexture.d.ts" />
/// <reference path="./android.hardware.Camera.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.configuration.WZMediaConfig.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.data.WZDataMap.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.errors.WZError.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.geometry.WZSize.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.status.WZStatus.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module devices {
						export class WZCamera {
							public static DIRECTION_FRONT: number;
							public static DIRECTION_BACK: number;
							public static DIRECTION_INDETERMINATE: number;
							public static TORCH: number;
							public static FOCUS_MODE_AUTO: number;
							public static FOCUS_MODE_CONTINUOUS: number;
							public static FOCUS_MODE_OFF: number;
							public setFrameSize(param0: com.wowza.gocoder.sdk.api.geometry.WZSize): com.wowza.gocoder.sdk.api.geometry.WZSize;
							public isPreviewing(): boolean;
							public getDirection(): number;
							public startPreview(param0: android.content.Context, param1: com.wowza.gocoder.sdk.api.geometry.WZSize, param2: com.wowza.gocoder.sdk.api.geometry.WZSize, param3: number): boolean;
							public stopPreview(): void;
							public getFramerate(): number;
							public isTorchOn(): boolean;
							public static getNumberOfDeviceCameras(): number;
							public static getAvailableDeviceCameras(): native.Array<com.wowza.gocoder.sdk.api.devices.WZCamera>;
							public open(): boolean;
							public getPlatformDevice(): android.hardware.Camera;
							public toString(): string;
							public static sizeToWzSize(param0: android.hardware.Camera.Size): com.wowza.gocoder.sdk.api.geometry.WZSize;
							public hasCapability(param0: number): boolean;
							public getOptimalPreviewSize(param0: com.wowza.gocoder.sdk.api.geometry.WZSize, param1: com.wowza.gocoder.sdk.api.geometry.WZSize): com.wowza.gocoder.sdk.api.geometry.WZSize;
							public static getDeviceCameras(): native.Array<com.wowza.gocoder.sdk.api.devices.WZCamera>;
							public autoDetectOrientation(param0: android.content.Context): number;
							public getFocusMode(): number;
							public static directionString(param0: number): string;
							public getLastError(): com.wowza.gocoder.sdk.api.errors.WZError;
							public isDirectional(): boolean;
							public isAvailable(): boolean;
							public static getDeviceCameras(param0: boolean, param1: boolean): native.Array<com.wowza.gocoder.sdk.api.devices.WZCamera>;
							public pausePreview(): void;
							public toDataMap(): com.wowza.gocoder.sdk.api.data.WZDataMap;
							public continuePreview(): void;
							public getPreferredVideoFrameSize(): com.wowza.gocoder.sdk.api.geometry.WZSize;
							public getOptimalPreviewSize(param0: com.wowza.gocoder.sdk.api.geometry.WZSize): com.wowza.gocoder.sdk.api.geometry.WZSize;
							public getSupportedFrameSizes(): native.Array<com.wowza.gocoder.sdk.api.geometry.WZSize>;
							public getSupportedConfigs(): native.Array<com.wowza.gocoder.sdk.api.configuration.WZMediaConfig>;
							public release(): void;
							public static getDeviceCameras(param0: boolean): native.Array<com.wowza.gocoder.sdk.api.devices.WZCamera>;
							public getFrameSize(): com.wowza.gocoder.sdk.api.geometry.WZSize;
							public isBack(): boolean;
							public getCameraId(): number;
							public setFocusPoint(param0: number, param1: number, param2: number): void;
							public toViewCoords(param0: android.view.View, param1: android.graphics.Rect): android.graphics.RectF;
							public isFront(): boolean;
							public getStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
							public setFocusMode(param0: number): void;
							public setFramerate(param0: number): number;
							public getSurfaceTexture(): android.graphics.SurfaceTexture;
							public static getCameraInfo(): string;
							public setSurfaceTexture(param0: android.graphics.SurfaceTexture): boolean;
							public setTorchOn(param0: boolean): void;
							public startPreview(param0: android.content.Context, param1: com.wowza.gocoder.sdk.api.geometry.WZSize, param2: number): boolean;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.SurfaceHolder.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.configuration.WZMediaConfig.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.devices.WZCamera.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.errors.WZError.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.geometry.WZSize.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.graphics.WZColor.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.status.WZStatus.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.support.b.c.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module devices {
						export class WZCameraView {
							public static DEFAULT_CAMERA_DIRECTION: number;
							public static DEFAULT_SCALE_MODE: number;
							public static DEFAULT_FRAME_SIZE: com.wowza.gocoder.sdk.api.geometry.WZSize;
							public mContext: android.content.Context;
							public mPreviewStatus: com.wowza.gocoder.sdk.api.status.WZStatus;
							public mCameras: native.Array<com.wowza.gocoder.sdk.api.devices.WZCamera>;
							public mActiveCamera: com.wowza.gocoder.sdk.api.devices.WZCamera;
							public mDefaultCameraDirection: number;
							public mSurfaceBroadcaster: com.wowza.gocoder.sdk.support.b.c;
							public setFrameSize(param0: com.wowza.gocoder.sdk.api.geometry.WZSize): com.wowza.gocoder.sdk.api.geometry.WZSize;
							public setPreviewReadyListener(param0: com.wowza.gocoder.sdk.api.devices.WZCameraView.PreviewStatusListener): void;
							public isPreviewing(): boolean;
							public getAdaptiveBitrate(): number;
							public getFramerate(): number;
							public static getNumberOfDeviceCameras(): number;
							public stopPreview(param0: com.wowza.gocoder.sdk.api.devices.WZCameraView.PreviewStatusListener): com.wowza.gocoder.sdk.api.devices.WZCamera;
							public getVideoBackgroundColor(): com.wowza.gocoder.sdk.api.graphics.WZColor;
							public setVideoEnabled(param0: boolean): void;
							public registerFrameListener(param0: com.wowza.gocoder.sdk.api.render.WZRenderAPI.VideoFrameListener): void;
							public onResume(): void;
							public static getDeviceCameras(): native.Array<com.wowza.gocoder.sdk.api.devices.WZCamera>;
							public getCameraById(param0: number): com.wowza.gocoder.sdk.api.devices.WZCamera;
							public getScaleMode(): number;
							public getPreviewStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
							public onMeasure(param0: number, param1: number): void;
							public startPreview(param0: com.wowza.gocoder.sdk.api.configuration.WZMediaConfig): com.wowza.gocoder.sdk.api.devices.WZCamera;
							public getDeviceOrientation(): number;
							public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
							public unregisterFrameListener(param0: com.wowza.gocoder.sdk.api.render.WZRenderAPI.VideoFrameListener): void;
							public constructor(param0: android.content.Context);
							public registerFrameRenderer(param0: com.wowza.gocoder.sdk.api.render.WZRenderAPI.VideoFrameRenderer): void;
							public getBroadcaster(): com.wowza.gocoder.sdk.api.broadcast.WZBroadcastAPI.VideoBroadcaster;
							public setCamera(param0: number): com.wowza.gocoder.sdk.api.devices.WZCamera;
							public unregisterFrameRenderer(param0: com.wowza.gocoder.sdk.api.render.WZRenderAPI.VideoFrameRenderer): void;
							public stopBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
							public getVideoSourceConfig(): com.wowza.gocoder.sdk.api.configuration.WZMediaConfig;
							public isSwitchCameraAvailable(param0: com.wowza.gocoder.sdk.api.configuration.WZMediaConfig): boolean;
							public surfaceChanged(param0: android.view.SurfaceHolder, param1: number, param2: number, param3: number): void;
							public getScreenSize(): com.wowza.gocoder.sdk.api.geometry.WZSize;
							public clearView(): void;
							public setCameraByDirection(param0: number): com.wowza.gocoder.sdk.api.devices.WZCamera;
							public getBroadcastConfig(): com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig;
							public startBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
							public changeAdaptiveFramerate(param0: number): void;
							public onLowMemory(): void;
							public isPreviewPaused(): boolean;
							public changeAdaptiveBitrate(param0: number): void;
							public isVideoEnabled(): boolean;
							public getAdaptiveFramerate(): number;
							public setScaleMode(param0: number): void;
							public setCameraConfig(param0: com.wowza.gocoder.sdk.api.configuration.WZMediaConfig): void;
							public getOtherCamera(): com.wowza.gocoder.sdk.api.devices.WZCamera;
							public static getAvailableDeviceCameras(): native.Array<com.wowza.gocoder.sdk.api.devices.WZCamera>;
							public setPreviewStatusListener(param0: com.wowza.gocoder.sdk.api.devices.WZCameraView.PreviewStatusListener): void;
							public setVideoBackgroundColor(param0: com.wowza.gocoder.sdk.api.graphics.WZColor): void;
							public prepareForBroadcast(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig): com.wowza.gocoder.sdk.api.status.WZStatus;
							public startPreview(param0: com.wowza.gocoder.sdk.api.configuration.WZMediaConfig, param1: com.wowza.gocoder.sdk.api.devices.WZCameraView.PreviewStatusListener): com.wowza.gocoder.sdk.api.devices.WZCamera;
							public getCameraByDirection(param0: number): com.wowza.gocoder.sdk.api.devices.WZCamera;
							public surfaceDestroyed(param0: android.view.SurfaceHolder): void;
							public isVideoPaused(): boolean;
							public getCamera(): com.wowza.gocoder.sdk.api.devices.WZCamera;
							public switchCamera(): com.wowza.gocoder.sdk.api.devices.WZCamera;
							public setVideoPaused(param0: boolean): void;
							public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
							public getOtherCameraId(): number;
							public isPaused(): boolean;
							public surfaceCreated(param0: android.view.SurfaceHolder): void;
							public getBroadcasterStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
							public isSwitchCameraAvailable(param0: com.wowza.gocoder.sdk.api.geometry.WZSize): boolean;
							public startPreview(): com.wowza.gocoder.sdk.api.devices.WZCamera;
							public getCameras(): native.Array<com.wowza.gocoder.sdk.api.devices.WZCamera>;
							public isPreviewReady(): boolean;
							public getFrameSize(): com.wowza.gocoder.sdk.api.geometry.WZSize;
							public stopPreview(): com.wowza.gocoder.sdk.api.devices.WZCamera;
							public onConfigurationChanged(param0: android.content.res.Configuration): void;
							public isSwitchCameraAvailable(): boolean;
							public setCamera(param0: com.wowza.gocoder.sdk.api.devices.WZCamera): com.wowza.gocoder.sdk.api.devices.WZCamera;
							public getStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
							public getActiveFrameSize(): com.wowza.gocoder.sdk.api.geometry.WZSize;
							public onPause(): void;
							public setFramerate(param0: number): number;
							public static getCameraInfo(): string;
							public startPreview(param0: com.wowza.gocoder.sdk.api.devices.WZCameraView.PreviewStatusListener): com.wowza.gocoder.sdk.api.devices.WZCamera;
							public setFrameSize(param0: number, param1: number): com.wowza.gocoder.sdk.api.geometry.WZSize;
						}
						export module WZCameraView {
							export class PreviewStatusListener {
								/**
								 * Constructs a new instance of the com.wowza.gocoder.sdk.api.devices.WZCameraView$PreviewStatusListener interface with the provided implementation.
								 */
								public constructor(implementation: {
									onWZCameraPreviewStarted(param0: com.wowza.gocoder.sdk.api.devices.WZCamera, param1: com.wowza.gocoder.sdk.api.geometry.WZSize, param2: number): void;
									onWZCameraPreviewStopped(param0: number): void;
									onWZCameraPreviewError(param0: com.wowza.gocoder.sdk.api.devices.WZCamera, param1: com.wowza.gocoder.sdk.api.errors.WZError): void;
								});
								public onWZCameraPreviewStopped(param0: number): void;
								public onWZCameraPreviewError(param0: com.wowza.gocoder.sdk.api.devices.WZCamera, param1: com.wowza.gocoder.sdk.api.errors.WZError): void;
								public onWZCameraPreviewStarted(param0: com.wowza.gocoder.sdk.api.devices.WZCamera, param1: com.wowza.gocoder.sdk.api.geometry.WZSize, param2: number): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module devices {
						export class WZDeviceUtils {
							public constructor();
							public static getSurfaceRotation(param0: android.content.Context): number;
							public static getDeviceOrientation(param0: android.content.Context): number;
							public static getDeviceRotation(param0: android.content.Context): number;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.media.MediaCodecInfo.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.h264.WZProfileLevel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module encoder {
						export class WZEncoderAPI {
							public static H264_MIME_TYPE: string;
							public static AAC_MIME_TYPE: string;
							public constructor();
							public static WZProfileLevelToProfileLevel(param0: com.wowza.gocoder.sdk.api.h264.WZProfileLevel): android.media.MediaCodecInfo.CodecProfileLevel;
							public static getProfiles(): native.Array<number>;
							public static getProfileLevels(): native.Array<com.wowza.gocoder.sdk.api.h264.WZProfileLevel>;
							public static ProfileLevelToWZProfileLevel(param0: android.media.MediaCodecInfo.CodecProfileLevel): com.wowza.gocoder.sdk.api.h264.WZProfileLevel;
							public static getEncodersForType(param0: string): native.Array<android.media.MediaCodecInfo>;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module errors {
						export class WZError {
							public static ERRORS_RESOURCE_FOLDER: string;
							public static KEY_PATTERN: string;
							public mErrorClass: string;
							public mErrorCode: number;
							public mErrorDescription: string;
							public mException: java.lang.Exception;
							public mWarning: boolean;
							public getErrorClass(): string;
							public getErrorDescription(): string;
							public getErrorCode(): number;
							public constructor(param0: java.lang.Exception);
							public toString(): string;
							public constructor(param0: string, param1: number);
							public getException(): java.lang.Exception;
							public constructor(param0: string, param1: number, param2: java.lang.Exception, param3: boolean);
							public constructor(param0: string, param1: boolean);
							public setErrorDescription(param0: string): void;
							public constructor(param0: string, param1: java.lang.Exception);
							public constructor(param0: string);
							public isWarning(): boolean;
							public constructor(param0: string, param1: number, param2: boolean);
							public set(param0: com.wowza.gocoder.sdk.api.errors.WZError): void;
							public static registerErrors(param0: string): void;
							public constructor(param0: com.wowza.gocoder.sdk.api.errors.WZError);
							public constructor(param0: string, param1: number, param2: java.lang.Exception);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.api.errors.WZError.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module errors {
						export class WZPlatformError extends com.wowza.gocoder.sdk.api.errors.WZError {
							public static ERROR_CLASS: string;
							public static CAMERA_PREVIEW_SDK_INIT_FAILURE: number;
							public static CAMERA_DISCOVERY_FAILURE: number;
							public static CAMERA_INIT_FAILURE: number;
							public static CAMERA_ACTIVATION_FAILURE: number;
							public static CAMERA_TORCH_FAILURE: number;
							public static CAMERA_RELEASE_FAILURE: number;
							public static CAMERA_AUTOFOCUS_FAILURE: number;
							public static CAMERA_TEXTURE_NOT_SET: number;
							public static CAMERA_PREVIEW_TEXTURE_FAILURE: number;
							public static CAMERA_INTERROGATION_ERROR: number;
							public static MP4_FILE_OPEN_OUTPUT_FAILURE: number;
							public static MP4_FILE_PATH_NOT_SPECIFIED: number;
							public static VIDEO_ENCODER_NOT_FOUND: number;
							public static AUDIO_ENCODER_NOT_FOUND: number;
							public static VIDEO_ENCODER_CONFIGURATION_FAILURE: number;
							public static AUDIO_ENCODER_CONFIGURATION_FAILURE: number;
							public static VIDEO_ENCODER_START_FAILURE: number;
							public static AUDIO_ENCODER_START_FAILURE: number;
							public static VIDEO_ENCODER_BITRATE_CHANGE_FAILURE: number;
							public static VIDEO_ENCODER_NOT_RUNNING: number;
							public static VIDEO_DECODER_NOT_RUNNING: number;
							public static AUDIO_RECORDER_READ_FAILURE: number;
							public static AUDIO_RECORDER_BUFFER_CONFIGURATION_FAILURE: number;
							public static AUDIO_RECORDER_INITIALIZATION_FAILURE: number;
							public static VIDEO_DECODER_NOT_FOUND: number;
							public static AUDIO_DECODER_NOT_FOUND: number;
							public static VIDEO_DECODER_CONFIGURATION_FAILURE: number;
							public static AUDIO_DECODER_CONFIGURATION_FAILURE: number;
							public static VIDEO_DECODER_START_FAILURE: number;
							public static AUDIO_DECODER_START_FAILURE: number;
							public static AUDIO_ENCODER_NOT_RUNNING: number;
							public static AUDIO_DECODER_NOT_RUNNING: number;
							public static DECODER_NOT_RUNNING: number;
							public static DECODER_START_FAILURE: number;
							public constructor(param0: string, param1: number, param2: java.lang.Exception, param3: boolean);
							public constructor(param0: string, param1: boolean);
							public constructor(param0: string, param1: java.lang.Exception);
							public constructor(param0: number, param1: boolean);
							public constructor(param0: string);
							public constructor(param0: string, param1: number, param2: boolean);
							public constructor(param0: com.wowza.gocoder.sdk.api.errors.WZError);
							public constructor(param0: number, param1: java.lang.Exception);
							public constructor(param0: java.lang.Exception);
							public constructor(param0: string, param1: number);
							public constructor(param0: string, param1: number, param2: java.lang.Exception);
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.api.errors.WZError.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module errors {
						export class WZSDKError extends com.wowza.gocoder.sdk.api.errors.WZError {
							public static ERROR_CLASS: string;
							public static INVALID_SDK_LICENSE_KEY: number;
							public static SDK_LICENSE_KEY_HAS_EXPIRED: number;
							public static ERROR_MESSAGE_RESOURCE_FAILURE: number;
							public static LIBRARY_LOAD_FAILURE: number;
							public static SDK_LICENSE_KEY_VERSION_MISMATCH: number;
							public static SDK_LICENSE_KEY_APP_ID_MISMATCH: number;
							public static SDK_NOT_INITIALZED_ERROR: number;
							public static ENCODER_FAILED_TO_START: number;
							public static ENCODER_FAILED_TO_SHUTDOWN: number;
							public static ENCODING_FAIURE: number;
							public static SINK_FAILED_TO_START: number;
							public static SINK_FAILED_TO_SHUTDOWN: number;
							public static SINK_FAILURE: number;
							public static CAPTURE_DEVICE_FAILED_TO_START: number;
							public static CAPTURE_DEVICE_FAILED_TO_SHUTDOWN: number;
							public static CAPTURE_DEVICE_FAILURE: number;
							public static INVALID_SESSION_STATE: number;
							public constructor(param0: string, param1: number, param2: java.lang.Exception, param3: boolean);
							public constructor(param0: string, param1: boolean);
							public constructor(param0: string, param1: java.lang.Exception);
							public constructor(param0: string);
							public constructor(param0: string, param1: number, param2: boolean);
							public constructor(param0: com.wowza.gocoder.sdk.api.errors.WZError);
							public constructor(param0: number, param1: java.lang.Exception);
							public constructor(param0: java.lang.Exception);
							public constructor(param0: string, param1: number);
							public constructor(param0: string, param1: number, param2: java.lang.Exception);
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.api.errors.WZError.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module errors {
						export class WZStreamingError extends com.wowza.gocoder.sdk.api.errors.WZError {
							public static ERROR_CLASS: string;
							public static OPEN_CONNECTION_FAILED: number;
							public static START_STREAMING_SESSION_FAILED: number;
							public static INIT_STREAMING_SESSION_FAILED: number;
							public static MAX_RECONNECT_ATTEMPTS_ATTEMPTED: number;
							public static AUTHENTICATION_FAILED: number;
							public static CONNECTION_REJECTED: number;
							public static CONNECTION_FAILURE: number;
							public static INVALID_HOST_ADDRESS: number;
							public static INVALID_PORT_NUMBER: number;
							public static INVALID_APP_NAME: number;
							public static INVALID_STREAM_NAME: number;
							public static ENCODING_VIDEO_FRAME_FAILURE: number;
							public static ENCODING_AUDIO_FRAME_FAILURE: number;
							public static STREAMING_VIDEO_FRAME_FAILURE: number;
							public static STREAMING_AUDIO_FRAME_FAILURE: number;
							public static STREAMING_DATA_FRAME_FAILURE: number;
							public static UNKNOWN_HOST: number;
							public static CONNECTION_TIMEOUT: number;
							public static CONNECTION_SECURITY_ERROR: number;
							public static CONNECTION_IO_ERROR: number;
							public static CONNECTION_MISC_ERROR: number;
							public static SESSION_WRITE_ERROR: number;
							public static SESSION_READ_ERROR: number;
							public static STREAM_CREATION_ERROR: number;
							public static STREAM_PLAY_FAILED: number;
							public static STREAM_PUBLISH_DENIED: number;
							public static STREAM_NOT_FOUND: number;
							public static STREAM_UNPUBLISHED: number;
							public static SESSION_AUTH_REQUIRED: number;
							public static SESSION_INVALID_REDIRECT_URI: number;
							public static SESSION_MISC_ERROR: number;
							public static CONNECTION_REFUSED: number;
							public static VIDEO_SOURCE_NOT_SPECIFIED: number;
							public static AUDIO_SOURCE_NOT_SPECIFIED: number;
							public static INVALID_SESSION_COMPONENT_STATE: number;
							public static SESSION_COMPONENT_TRANSITION_ERROR: number;
							public constructor(param0: string, param1: number, param2: java.lang.Exception, param3: boolean);
							public constructor(param0: string, param1: boolean);
							public constructor(param0: string, param1: java.lang.Exception);
							public constructor(param0: string);
							public constructor(param0: string, param1: number, param2: boolean);
							public constructor(param0: com.wowza.gocoder.sdk.api.errors.WZError);
							public constructor(param0: number, param1: java.lang.Exception);
							public constructor(param0: java.lang.Exception);
							public constructor(param0: string, param1: number);
							public constructor(param0: string, param1: number, param2: java.lang.Exception);
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.api.geometry.WZPoint.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.geometry.WZSize.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module geometry {
						export class WZCropDimensions {
							public constructor();
							public constructor(param0: com.wowza.gocoder.sdk.api.geometry.WZCropDimensions);
							public constructor(param0: com.wowza.gocoder.sdk.api.geometry.WZSize, param1: com.wowza.gocoder.sdk.api.geometry.WZSize, param2: number);
							public equals(param0: java.lang.Object): boolean;
							public setSrcSize(param0: com.wowza.gocoder.sdk.api.geometry.WZSize): void;
							public getCenterPoint(): com.wowza.gocoder.sdk.api.geometry.WZPoint;
							public getSrcSize(): com.wowza.gocoder.sdk.api.geometry.WZSize;
							public getScaledSize(): com.wowza.gocoder.sdk.api.geometry.WZSize;
							public toString(): string;
							public getScaleX(): number;
							public set(param0: com.wowza.gocoder.sdk.api.geometry.WZCropDimensions): void;
							public getScaleMode(): number;
							public constructor(param0: com.wowza.gocoder.sdk.api.geometry.WZSize, param1: com.wowza.gocoder.sdk.api.geometry.WZSize);
							public getOffset(): com.wowza.gocoder.sdk.api.geometry.WZPoint;
							public getDestSize(): com.wowza.gocoder.sdk.api.geometry.WZSize;
							public getScaleY(): number;
							public setDestSize(param0: com.wowza.gocoder.sdk.api.geometry.WZSize): void;
							public setScaleMode(param0: number): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module geometry {
						export class WZPoint {
							public x: number;
							public y: number;
							public constructor();
							public getY(): number;
							public compareTo(param0: number, param1: number): number;
							public distanceTo(param0: com.wowza.gocoder.sdk.api.geometry.WZPoint): number;
							public inverted(): com.wowza.gocoder.sdk.api.geometry.WZPoint;
							public constructor(param0: number, param1: number);
							public equals(param0: java.lang.Object): boolean;
							public compareTo(param0: com.wowza.gocoder.sdk.api.geometry.WZPoint): number;
							public toString(): string;
							public equals(param0: number, param1: number): boolean;
							public setY(param0: number): void;
							public set(param0: number, param1: number): void;
							public static label(param0: number, param1: number): string;
							public distanceTo(param0: number, param1: number): number;
							public setX(param0: number): void;
							public invert(): void;
							public equals(param0: number, param1: number, param2: number, param3: number): boolean;
							public constructor(param0: com.wowza.gocoder.sdk.api.geometry.WZPoint);
							public getX(): number;
							public set(param0: com.wowza.gocoder.sdk.api.geometry.WZPoint): void;
							public static distance(param0: number, param1: number, param2: number, param3: number): number;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.api.geometry.WZPoint.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.geometry.WZSize.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module geometry {
						export class WZSize {
							public width: number;
							public height: number;
							public equalsAspect(param0: com.wowza.gocoder.sdk.api.geometry.WZSize): boolean;
							public constructor(param0: number, param1: number);
							public center(param0: com.wowza.gocoder.sdk.api.geometry.WZSize): com.wowza.gocoder.sdk.api.geometry.WZSize.ScaledDimensions;
							public absOffsetFrom(param0: com.wowza.gocoder.sdk.api.geometry.WZSize): com.wowza.gocoder.sdk.api.geometry.WZSize;
							public static closestTo(param0: number, param1: number, param2: native.Array<com.wowza.gocoder.sdk.api.geometry.WZSize>): com.wowza.gocoder.sdk.api.geometry.WZSize;
							public getHeight(): number;
							public longDimension(): number;
							public static asLandscape(param0: number, param1: number): com.wowza.gocoder.sdk.api.geometry.WZSize;
							public static closestTo(param0: com.wowza.gocoder.sdk.api.geometry.WZSize, param1: native.Array<com.wowza.gocoder.sdk.api.geometry.WZSize>): com.wowza.gocoder.sdk.api.geometry.WZSize;
							public static longDimension(param0: number, param1: number): number;
							public static filterByAspectRatio(param0: native.Array<com.wowza.gocoder.sdk.api.geometry.WZSize>, param1: com.wowza.gocoder.sdk.api.geometry.WZSize): native.Array<com.wowza.gocoder.sdk.api.geometry.WZSize>;
							public area(param0: number, param1: number): number;
							public static isPortrait(param0: number, param1: number): boolean;
							public compareTo(param0: number, param1: number): number;
							public static isLandscape(param0: number, param1: number): boolean;
							public asLandscape(): com.wowza.gocoder.sdk.api.geometry.WZSize;
							public static closestToIndex(param0: number, param1: number, param2: native.Array<com.wowza.gocoder.sdk.api.geometry.WZSize>): number;
							public static isZero(param0: number, param1: number): boolean;
							public equals(param0: java.lang.Object): boolean;
							public equalsAspect(param0: number, param1: number): boolean;
							public constructor(param0: com.wowza.gocoder.sdk.api.geometry.WZSize);
							public area(): number;
							public static equalsAspect(param0: com.wowza.gocoder.sdk.api.geometry.WZSize, param1: com.wowza.gocoder.sdk.api.geometry.WZSize): boolean;
							public equals(param0: number, param1: number): boolean;
							public static aspectRatioLabel(param0: number, param1: number): string;
							public static aspectRatio(param0: number, param1: number): number;
							public set(param0: number, param1: number): void;
							public equals(param0: number, param1: number, param2: number, param3: number): boolean;
							public isPortrait(): boolean;
							public setWidth(param0: number): void;
							public static isSquare(param0: number, param1: number): boolean;
							public getWidth(): number;
							public aspectRatio(): number;
							public inverted(): com.wowza.gocoder.sdk.api.geometry.WZSize;
							public offsetFrom(param0: com.wowza.gocoder.sdk.api.geometry.WZSize): com.wowza.gocoder.sdk.api.geometry.WZSize;
							public static offset(param0: number, param1: number, param2: number, param3: number): com.wowza.gocoder.sdk.api.geometry.WZSize;
							public toString(): string;
							public static equalsAspect(param0: number, param1: number, param2: number, param3: number): boolean;
							public aspectRatioLabel(): string;
							public asPortrait(): com.wowza.gocoder.sdk.api.geometry.WZSize;
							public isZero(): boolean;
							public static label(param0: number, param1: number): string;
							public center(param0: number, param1: number): com.wowza.gocoder.sdk.api.geometry.WZPoint;
							public setHeight(param0: number): void;
							public constructor();
							public static absOffset(param0: number, param1: number, param2: number, param3: number): com.wowza.gocoder.sdk.api.geometry.WZSize;
							public fitsWithin(param0: com.wowza.gocoder.sdk.api.geometry.WZSize): boolean;
							public isSquare(): boolean;
							public static asPortrait(param0: number, param1: number): com.wowza.gocoder.sdk.api.geometry.WZSize;
							public largerThan(param0: com.wowza.gocoder.sdk.api.geometry.WZSize): boolean;
							public center(): com.wowza.gocoder.sdk.api.geometry.WZPoint;
							public scaleWithFill(param0: com.wowza.gocoder.sdk.api.geometry.WZSize): com.wowza.gocoder.sdk.api.geometry.WZSize.ScaledDimensions;
							public static findContainers(param0: native.Array<com.wowza.gocoder.sdk.api.geometry.WZSize>, param1: com.wowza.gocoder.sdk.api.geometry.WZSize): native.Array<com.wowza.gocoder.sdk.api.geometry.WZSize>;
							public isLandscape(): boolean;
							public static closestToIndex(param0: com.wowza.gocoder.sdk.api.geometry.WZSize, param1: native.Array<com.wowza.gocoder.sdk.api.geometry.WZSize>): number;
							public invert(): void;
							public compareTo(param0: com.wowza.gocoder.sdk.api.geometry.WZSize): number;
							public scaleWithCrop(param0: com.wowza.gocoder.sdk.api.geometry.WZSize): com.wowza.gocoder.sdk.api.geometry.WZSize.ScaledDimensions;
							public set(param0: com.wowza.gocoder.sdk.api.geometry.WZSize): void;
						}
						export module WZSize {
							export class ScaledDimensions {
								public srcSize: com.wowza.gocoder.sdk.api.geometry.WZSize;
								public destSize: com.wowza.gocoder.sdk.api.geometry.WZSize;
								public scaledSize: com.wowza.gocoder.sdk.api.geometry.WZSize;
								public offset: com.wowza.gocoder.sdk.api.geometry.WZSize;
								public centerPoint: com.wowza.gocoder.sdk.api.geometry.WZPoint;
								public scaleX: number;
								public scaleY: number;
								public constructor(param0: com.wowza.gocoder.sdk.api.geometry.WZSize, param1: com.wowza.gocoder.sdk.api.geometry.WZSize);
								public toString(): string;
								public center(): com.wowza.gocoder.sdk.api.geometry.WZSize.ScaledDimensions;
								public scaleWithFill(): com.wowza.gocoder.sdk.api.geometry.WZSize.ScaledDimensions;
								public setSrcSize(param0: com.wowza.gocoder.sdk.api.geometry.WZSize): void;
								public scaleWithCrop(): com.wowza.gocoder.sdk.api.geometry.WZSize.ScaledDimensions;
								public setDestSize(param0: com.wowza.gocoder.sdk.api.geometry.WZSize): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.FloatBuffer.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module gles {
						export class Drawable2d {
							public getTexCoordStride(): number;
							public getVertexCount(): number;
							public toString(): string;
							public constructor(param0: com.wowza.gocoder.sdk.api.gles.Drawable2d.Prefab);
							public getTexCoordArray(): java.nio.FloatBuffer;
							public getVertexStride(): number;
							public getVertexArray(): java.nio.FloatBuffer;
							public getCoordsPerVertex(): number;
						}
						export module Drawable2d {
							export class Prefab {
								public static TRIANGLE: com.wowza.gocoder.sdk.api.gles.Drawable2d.Prefab;
								public static RECTANGLE: com.wowza.gocoder.sdk.api.gles.Drawable2d.Prefab;
								public static FULL_RECTANGLE: com.wowza.gocoder.sdk.api.gles.Drawable2d.Prefab;
								public static valueOf(param0: string): com.wowza.gocoder.sdk.api.gles.Drawable2d.Prefab;
								public static values(): native.Array<com.wowza.gocoder.sdk.api.gles.Drawable2d.Prefab>;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.opengl.EGLContext.d.ts" />
/// <reference path="./android.opengl.EGLSurface.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module gles {
						export class EglCore {
							public static FLAG_RECORDABLE: number;
							public static FLAG_TRY_GLES3: number;
							public constructor();
							public createWindowSurface(param0: java.lang.Object): android.opengl.EGLSurface;
							public releaseSurface(param0: android.opengl.EGLSurface): void;
							public static logCurrent(param0: string): void;
							public setPresentationTime(param0: android.opengl.EGLSurface, param1: number): void;
							public finalize(): void;
							public release(): void;
							public isCurrent(param0: android.opengl.EGLSurface): boolean;
							public makeNothingCurrent(): void;
							public queryString(param0: number): string;
							public createOffscreenSurface(param0: number, param1: number): android.opengl.EGLSurface;
							public constructor(param0: android.opengl.EGLContext, param1: number);
							public querySurface(param0: android.opengl.EGLSurface, param1: number): number;
							public getGlVersion(): number;
							public swapBuffers(param0: android.opengl.EGLSurface): boolean;
							public makeCurrent(param0: android.opengl.EGLSurface): void;
							public makeCurrent(param0: android.opengl.EGLSurface, param1: android.opengl.EGLSurface): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.opengl.EGLSurface.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.gles.EglCore.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module gles {
						export class EglSurfaceBase {
							public static TAG: string;
							public mEglCore: com.wowza.gocoder.sdk.api.gles.EglCore;
							public constructor(param0: com.wowza.gocoder.sdk.api.gles.EglCore);
							public getWidth(): number;
							public getHeight(): number;
							public swapBuffers(): boolean;
							public makeCurrentReadFrom(param0: com.wowza.gocoder.sdk.api.gles.EglSurfaceBase): void;
							public createWindowSurface(param0: java.lang.Object): void;
							public saveFrame(param0: java.io.File): void;
							public createOffscreenSurface(param0: number, param1: number): void;
							public getEglSurface(): android.opengl.EGLSurface;
							public makeCurrent(): void;
							public setPresentationTime(param0: number): void;
							public releaseEglSurface(): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.nio.FloatBuffer.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module gles {
						export class FlatShadedProgram {
							public constructor();
							public draw(param0: native.Array<number>, param1: native.Array<number>, param2: java.nio.FloatBuffer, param3: number, param4: number, param5: number, param6: number): void;
							public release(): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.api.gles.Texture2dProgram.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module gles {
						export class FullFrameRect {
							public getProgram(): com.wowza.gocoder.sdk.api.gles.Texture2dProgram;
							public drawFrame(param0: number, param1: native.Array<number>): void;
							public changeProgram(param0: com.wowza.gocoder.sdk.api.gles.Texture2dProgram): void;
							public createTextureObject(): number;
							public release(param0: boolean): void;
							public constructor(param0: com.wowza.gocoder.sdk.api.gles.Texture2dProgram);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
/// <reference path="./java.nio.FloatBuffer.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module gles {
						export class GlUtil {
							public static TAG: string;
							public static IDENTITY_MATRIX: native.Array<number>;
							public static checkLocation(param0: number, param1: string): void;
							public static createFloatBuffer(param0: native.Array<number>): java.nio.FloatBuffer;
							public static loadShader(param0: number, param1: string): number;
							public static checkGlError(param0: string): void;
							public static createProgram(param0: string, param1: string): number;
							public static createImageTexture(param0: java.nio.ByteBuffer, param1: number, param2: number, param3: number): number;
							public static logVersionInfo(): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.api.gles.EglCore.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module gles {
						export class OffscreenSurface extends com.wowza.gocoder.sdk.api.gles.EglSurfaceBase {
							public constructor(param0: com.wowza.gocoder.sdk.api.gles.EglCore);
							public constructor(param0: com.wowza.gocoder.sdk.api.gles.EglCore, param1: number, param2: number);
							public release(): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.api.gles.Drawable2d.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.gles.FlatShadedProgram.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.gles.Texture2dProgram.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module gles {
						export class Sprite2d {
							public getPositionY(): number;
							public setPosition(param0: number, param1: number): void;
							public getModelViewMatrix(): native.Array<number>;
							public setTexture(param0: number): void;
							public getColor(): native.Array<number>;
							public constructor(param0: com.wowza.gocoder.sdk.api.gles.Drawable2d);
							public setScale(param0: number, param1: number): void;
							public draw(param0: com.wowza.gocoder.sdk.api.gles.FlatShadedProgram, param1: native.Array<number>): void;
							public toString(): string;
							public getRotation(): number;
							public draw(param0: com.wowza.gocoder.sdk.api.gles.Texture2dProgram, param1: native.Array<number>, param2: native.Array<number>): void;
							public getScaleX(): number;
							public setColor(param0: number, param1: number, param2: number): void;
							public getPositionX(): number;
							public getScaleY(): number;
							public setRotation(param0: number): void;
							public draw(param0: com.wowza.gocoder.sdk.api.gles.Texture2dProgram, param1: native.Array<number>): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.FloatBuffer.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module gles {
						export class Texture2dProgram {
							public static KERNEL_SIZE: number;
							public constructor(param0: com.wowza.gocoder.sdk.api.gles.Texture2dProgram.ProgramType);
							public setKernel(param0: native.Array<number>, param1: number): void;
							public createTextureObject(): number;
							public release(): void;
							public setTexSize(param0: number, param1: number): void;
							public draw(param0: native.Array<number>, param1: java.nio.FloatBuffer, param2: number, param3: number, param4: number, param5: number, param6: native.Array<number>, param7: java.nio.FloatBuffer, param8: number, param9: number): void;
							public getProgramType(): com.wowza.gocoder.sdk.api.gles.Texture2dProgram.ProgramType;
						}
						export module Texture2dProgram {
							export class ProgramType {
								public static TEXTURE_2D: com.wowza.gocoder.sdk.api.gles.Texture2dProgram.ProgramType;
								public static TEXTURE_EXT: com.wowza.gocoder.sdk.api.gles.Texture2dProgram.ProgramType;
								public static TEXTURE_EXT_BW: com.wowza.gocoder.sdk.api.gles.Texture2dProgram.ProgramType;
								public static TEXTURE_EXT_FILT: com.wowza.gocoder.sdk.api.gles.Texture2dProgram.ProgramType;
								public static values(): native.Array<com.wowza.gocoder.sdk.api.gles.Texture2dProgram.ProgramType>;
								public static valueOf(param0: string): com.wowza.gocoder.sdk.api.gles.Texture2dProgram.ProgramType;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.SurfaceTexture.d.ts" />
/// <reference path="./android.view.Surface.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.gles.EglCore.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module gles {
						export class WindowSurface extends com.wowza.gocoder.sdk.api.gles.EglSurfaceBase {
							public constructor(param0: com.wowza.gocoder.sdk.api.gles.EglCore);
							public constructor(param0: com.wowza.gocoder.sdk.api.gles.EglCore, param1: android.graphics.SurfaceTexture);
							public recreate(param0: com.wowza.gocoder.sdk.api.gles.EglCore): void;
							public constructor(param0: com.wowza.gocoder.sdk.api.gles.EglCore, param1: android.view.Surface, param2: boolean);
							public release(): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module graphics {
						export class WZColor {
							public static WHITE: com.wowza.gocoder.sdk.api.graphics.WZColor;
							public static BLACK: com.wowza.gocoder.sdk.api.graphics.WZColor;
							public static GREY: com.wowza.gocoder.sdk.api.graphics.WZColor;
							public static DARKGREY: com.wowza.gocoder.sdk.api.graphics.WZColor;
							public static LIGHTGREY: com.wowza.gocoder.sdk.api.graphics.WZColor;
							public static RED: com.wowza.gocoder.sdk.api.graphics.WZColor;
							public static GREEN: com.wowza.gocoder.sdk.api.graphics.WZColor;
							public static BLUE: com.wowza.gocoder.sdk.api.graphics.WZColor;
							public static YELLOW: com.wowza.gocoder.sdk.api.graphics.WZColor;
							public static CYAN: com.wowza.gocoder.sdk.api.graphics.WZColor;
							public static MAGENTA: com.wowza.gocoder.sdk.api.graphics.WZColor;
							public static ORANGE: com.wowza.gocoder.sdk.api.graphics.WZColor;
							public red: number;
							public green: number;
							public blue: number;
							public alpha: number;
							public constructor();
							public set(param0: number): void;
							public toArray(): native.Array<number>;
							public compareTo(param0: com.wowza.gocoder.sdk.api.graphics.WZColor): number;
							public toPacked(): number;
							public equals(param0: java.lang.Object): boolean;
							public set(param0: number, param1: number, param2: number): void;
							public toString(): string;
							public static packedColor(param0: number, param1: number, param2: number, param3: number): number;
							public constructor(param0: number, param1: number, param2: number);
							public constructor(param0: com.wowza.gocoder.sdk.api.graphics.WZColor);
							public static fromPacked(param0: number): com.wowza.gocoder.sdk.api.graphics.WZColor;
							public static validateColor(param0: number, param1: number, param2: number, param3: number): boolean;
							public set(param0: number, param1: number, param2: number, param3: number): void;
							public set(param0: com.wowza.gocoder.sdk.api.graphics.WZColor): void;
							public constructor(param0: number, param1: number, param2: number, param3: number);
							public validate(): boolean;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module h264 {
						export class WZProfileLevel {
							public static PROFILE_BASELINE: number;
							public static PROFILE_MAIN: number;
							public static PROFILE_HIGH: number;
							public static PROFILE_LEVEL_AUTO: number;
							public static PROFILE_LEVEL1: number;
							public static PROFILE_LEVEL1B: number;
							public static PROFILE_LEVEL11: number;
							public static PROFILE_LEVEL12: number;
							public static PROFILE_LEVEL13: number;
							public static PROFILE_LEVEL2: number;
							public static PROFILE_LEVEL21: number;
							public static PROFILE_LEVEL22: number;
							public static PROFILE_LEVEL3: number;
							public static PROFILE_LEVEL31: number;
							public static PROFILE_LEVEL32: number;
							public static PROFILE_LEVEL4: number;
							public static PROFILE_LEVEL41: number;
							public static PROFILE_LEVEL42: number;
							public static PROFILE_LEVEL5: number;
							public static PROFILE_LEVEL51: number;
							public mProfile: number;
							public mLevel: number;
							public constructor(param0: com.wowza.gocoder.sdk.api.h264.WZProfileLevel);
							public set(param0: com.wowza.gocoder.sdk.api.h264.WZProfileLevel): void;
							public getLevel(): number;
							public constructor(param0: number, param1: number);
							public equals(param0: java.lang.Object): boolean;
							public compareTo(param0: java.lang.Object): number;
							public getProfile(): number;
							public toString(): string;
							public constructor(param0: number);
							public validate(): boolean;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module logging {
						export class WZAndroidLogger extends com.wowza.gocoder.sdk.api.logging.WZLogger {
							public info(param0: string, param1: string): void;
							public error(param0: string, param1: string, param2: java.lang.Throwable): void;
							public verbose(param0: string, param1: string): void;
							public static getInstance(): com.wowza.gocoder.sdk.api.logging.WZAndroidLogger;
							public warn(param0: string, param1: string): void;
							public error(param0: string, param1: string): void;
							public error(param0: string, param1: java.lang.Throwable): void;
							public debug(param0: string, param1: string): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.api.errors.WZError.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.logging.WZLogger.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module logging {
						export class WZLog {
							public static DEFAULT_LOGGING_TAG: string;
							public static LOG_LEVEL_VERBOSE: number;
							public static LOG_LEVEL_DEBUG: number;
							public static LOG_LEVEL_INFO: number;
							public static LOG_LEVEL_WARN: number;
							public static LOG_LEVEL_ERROR: number;
							public static MIN_LOG_LEVEL: number;
							public static MAX_LOG_LEVEL: number;
							public static LOGGING_ENABLED: boolean;
							public constructor();
							public static info(param0: string): void;
							public static warn(param0: string): void;
							public static unregisterLogger(param0: com.wowza.gocoder.sdk.api.logging.WZLogger): void;
							public static info(param0: string, param1: string): void;
							public static verbose(param0: string): void;
							public static error(param0: string, param1: string): void;
							public static error(param0: string, param1: com.wowza.gocoder.sdk.api.errors.WZError, param2: java.lang.Throwable): void;
							public static error(param0: com.wowza.gocoder.sdk.api.errors.WZError): void;
							public static isValidLogLevel(param0: number): boolean;
							public static error(param0: string, param1: string, param2: java.lang.Throwable): void;
							public static error(param0: java.lang.Throwable): void;
							public static getLogger(): com.wowza.gocoder.sdk.api.logging.WZLogger;
							public static registerLogger(param0: com.wowza.gocoder.sdk.api.logging.WZLogger): void;
							public static verbose(param0: string, param1: string): void;
							public static debug(param0: string, param1: string): void;
							public static error(param0: string, param1: java.lang.Throwable): void;
							public static warn(param0: string, param1: string): void;
							public static warn(param0: com.wowza.gocoder.sdk.api.errors.WZError): void;
							public static debug(param0: string): void;
							public static warn(param0: string, param1: com.wowza.gocoder.sdk.api.errors.WZError): void;
							public static error(param0: string): void;
							public static error(param0: string, param1: com.wowza.gocoder.sdk.api.errors.WZError): void;
							public static error(param0: com.wowza.gocoder.sdk.api.errors.WZError, param1: java.lang.Throwable): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module logging {
						export abstract class WZLogger {
							public constructor();
							public info(param0: string, param1: string): void;
							public error(param0: string, param1: string, param2: java.lang.Throwable): void;
							public verbose(param0: string, param1: string): void;
							public warn(param0: string, param1: string): void;
							public error(param0: string, param1: string): void;
							public error(param0: string, param1: java.lang.Throwable): void;
							public debug(param0: string, param1: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module monitor {
						export class WZStreamingStat {
							public sampleInterval: number;
							public timeElapsed: number;
							public bps: number;
							public bytesTransmitted: number;
							public bytesBuffered: number;
							public videoBytesTransmitted: number;
							public videoBytesBuffered: number;
							public audioBytesTransmitted: number;
							public audioBytesBuffered: number;
							public avgChunkSize: number;
							public videoFramesTransmitted: number;
							public videoFramesBuffered: number;
							public videoFramesDropped: number;
							public avgVideoFrameLatency: number;
							public avgEncodedVideoFrameSize: number;
							public totalBytesTransmitted: number;
							public totalVideoBytesTransmitted: number;
							public totalAudioBytesTransmitted: number;
							public constructor();
							public constructor(param0: com.wowza.gocoder.sdk.api.monitor.WZStreamingStat);
							public toCSV(): string;
							public set(param0: com.wowza.gocoder.sdk.api.monitor.WZStreamingStat): void;
							public static getStatSeparator(): string;
							public static getCSVHeader(): string;
							public toRow(param0: boolean): string;
							public static getStatHeader(): string;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.configuration.WZMediaConfig.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.status.WZStatus.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module mp4 {
						export class WZMP4Broadcaster {
							public mBroadcastConfig: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig;
							public mBroadcasterStatus: com.wowza.gocoder.sdk.api.status.WZStatus;
							public mContext: android.content.Context;
							public mFileUri: android.net.Uri;
							public stopBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
							public getFileUri(): android.net.Uri;
							public getVideoSourceConfig(): com.wowza.gocoder.sdk.api.configuration.WZMediaConfig;
							public isAudioEnabled(): boolean;
							public setVideoEnabled(param0: boolean): void;
							public isAudioPaused(): boolean;
							public getBroadcastConfig(): com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig;
							public startBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
							public setAudioPaused(param0: boolean): void;
							public prepareForBroadcast(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig): com.wowza.gocoder.sdk.api.status.WZStatus;
							public getLooping(): boolean;
							public getStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
							public setFileUri(param0: android.net.Uri): void;
							public setAudioEnabled(param0: boolean): void;
							public isVideoPaused(): boolean;
							public setLooping(param0: boolean): void;
							public setVideoPaused(param0: boolean): void;
							public setOffset(param0: number): void;
							public getOffset(): number;
							public getMP4Config(): com.wowza.gocoder.sdk.api.configuration.WZMediaConfig;
							public isVideoEnabled(): boolean;
							public constructor(param0: android.content.Context);
							public getBroadcasterStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.media.MediaExtractor.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.configuration.WZMediaConfig.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module mp4 {
						export class WZMP4Util {
							public constructor();
							public static maxTrackDuration(param0: android.content.Context, param1: android.net.Uri, param2: boolean, param3: boolean): number;
							public static maxTrackDuration(param0: string, param1: boolean, param2: boolean): number;
							public static getFileConfig(param0: string): com.wowza.gocoder.sdk.api.configuration.WZMediaConfig;
							public static findTrackIndexByMimeType(param0: android.media.MediaExtractor, param1: string): number;
							public static getFileConfig(param0: android.content.Context, param1: android.net.Uri): com.wowza.gocoder.sdk.api.configuration.WZMediaConfig;
							public static getFileConfig(param0: java.io.FileDescriptor): com.wowza.gocoder.sdk.api.configuration.WZMediaConfig;
							public static maxTrackDuration(param0: java.io.FileDescriptor, param1: boolean, param2: boolean): number;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.media.MediaFormat.d.ts" />
/// <reference path="./android.media.MediaMuxer.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.status.WZStatus.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module mp4 {
						export class WZMP4Writer {
							public mMuxerConfig: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig;
							public mMuxerStatus: com.wowza.gocoder.sdk.api.status.WZStatus;
							public mSinkStatus: com.wowza.gocoder.sdk.api.status.WZStatus;
							public mMediaMuxer: android.media.MediaMuxer;
							public mFilePath: string;
							public mVideoTrackIndex: number;
							public mAudioTrackIndex: number;
							public mActive: boolean;
							public mVideoEnabled: boolean;
							public mVideoPaused: boolean;
							public mAudioEnabled: boolean;
							public mAudioPaused: boolean;
							public constructor();
							public onAudioSample(param0: number, param1: java.nio.ByteBuffer, param2: android.media.MediaCodec.BufferInfo): void;
							public stopBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
							public isAudioEnabled(): boolean;
							public setVideoEnabled(param0: boolean): void;
							public isAudioPaused(): boolean;
							public startBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
							public getBroadcastConfig(): com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig;
							public setAudioPaused(param0: boolean): void;
							public prepareForBroadcast(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig): com.wowza.gocoder.sdk.api.status.WZStatus;
							public onVideoFormat(param0: android.media.MediaFormat): void;
							public onAudioFormat(param0: android.media.MediaFormat): void;
							public getStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
							public getFilePath(): string;
							public setFilePath(param0: string): void;
							public onVideoFrame(param0: number, param1: java.nio.ByteBuffer, param2: android.media.MediaCodec.BufferInfo): void;
							public setAudioEnabled(param0: boolean): void;
							public isVideoPaused(): boolean;
							public setVideoPaused(param0: boolean): void;
							public isVideoEnabled(): boolean;
							public getBroadcasterStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module player {
						export class WZPlayerAPI {
							public constructor();
						}
						export module WZPlayerAPI {
							export class WZAudioStreamReceiver {
								/**
								 * Constructs a new instance of the com.wowza.gocoder.sdk.api.player.WZPlayerAPI$WZAudioStreamReceiver interface with the provided implementation.
								 */
								public constructor(implementation: {
									onAudioSampleReceived(param0: number, param1: number, param2: native.Array<number>): void;
								});
								public onAudioSampleReceived(param0: number, param1: number, param2: native.Array<number>): void;
							}
							export class WZVideoStreamReceiver {
								/**
								 * Constructs a new instance of the com.wowza.gocoder.sdk.api.player.WZPlayerAPI$WZVideoStreamReceiver interface with the provided implementation.
								 */
								public constructor(implementation: {
									onEnhancedSeekStart(): void;
									onEnhancedSeekEnd(): void;
									onVideoFrameReceived(param0: number, param1: number, param2: native.Array<number>): void;
								});
								public onEnhancedSeekStart(): void;
								public onEnhancedSeekEnd(): void;
								public onVideoFrameReceived(param0: number, param1: number, param2: native.Array<number>): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.api.configuration.WZMediaConfig.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.configuration.WZStreamConfig.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.data.WZDataMap.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module player {
						export class WZPlayerConfig extends com.wowza.gocoder.sdk.api.configuration.WZStreamConfig {
							public constructor();
							public setPreRollBufferDuration(param0: number): void;
							public constructor(param0: com.wowza.gocoder.sdk.api.configuration.WZStreamConfig);
							public toString(): string;
							public constructor(param0: com.wowza.gocoder.sdk.api.configuration.WZMediaConfig);
							public constructor(param0: com.wowza.gocoder.sdk.api.player.WZPlayerConfig);
							public set(param0: com.wowza.gocoder.sdk.api.player.WZPlayerConfig): void;
							public toDataMap(param0: com.wowza.gocoder.sdk.api.data.WZDataMap): com.wowza.gocoder.sdk.api.data.WZDataMap;
							public set(param0: com.wowza.gocoder.sdk.api.configuration.WZStreamConfig): void;
							public getPreRollBufferDuration(): number;
							public toDataMap(): com.wowza.gocoder.sdk.api.data.WZDataMap;
							public set(param0: com.wowza.gocoder.sdk.api.configuration.WZMediaConfig): void;
							public getPreRollBufferDurationMillis(): number;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.configuration.WZStreamConfig.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.data.WZDataMap.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.data.WZDataScope.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.player.WZPlayerConfig.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.status.WZStatus.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.status.WZStatusCallback.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module player {
						export class WZPlayerView {
							public static STATE_READY_TO_PLAY: number;
							public static STATE_PREPARING: number;
							public static STATE_PLAYING: number;
							public static STATE_STOPPING: number;
							public static STATE_PLAYBACK_COMPLETE: number;
							public static STATE_ERROR: number;
							public static STATE_PREBUFFERING_STARTED: number;
							public static STATE_PREBUFFERING_ENDED: number;
							public setVolume(param0: number): void;
							public onVideoFrameReceived(param0: number, param1: number, param2: native.Array<number>): void;
							public onStateChanged(param0: com.wowza.gocoder.sdk.api.status.WZStatusCallback): void;
							public setLogLevel(param0: number): void;
							public sendDataEvent(param0: com.wowza.gocoder.sdk.api.data.WZDataScope, param1: string, param2: com.wowza.gocoder.sdk.api.data.WZDataEvent.ResultCallback): void;
							public getScaleMode(): number;
							public stop(): void;
							public getStreamConfig(): com.wowza.gocoder.sdk.api.configuration.WZStreamConfig;
							public isBuffering(): boolean;
							public unregisterDataEventListener(param0: string, param1: com.wowza.gocoder.sdk.api.data.WZDataEvent.EventListener): void;
							public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
							public getDuration(): number;
							public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
							public getLogLevel(): number;
							public constructor(param0: android.content.Context);
							public getStreamStats(): com.wowza.gocoder.sdk.api.data.WZDataMap;
							public sendDataEvent(param0: com.wowza.gocoder.sdk.api.data.WZDataScope, param1: string, param2: com.wowza.gocoder.sdk.api.data.WZDataMap, param3: com.wowza.gocoder.sdk.api.data.WZDataEvent.ResultCallback): void;
							public isReadyToPlay(): boolean;
							public onEnhancedSeekEnd(): void;
							public sendDataEvent(param0: com.wowza.gocoder.sdk.api.data.WZDataScope, param1: string, param2: com.wowza.gocoder.sdk.api.data.WZDataMap): void;
							public sendDataEvent(param0: com.wowza.gocoder.sdk.api.data.WZDataScope, param1: string): void;
							public clear(): void;
							public getVolume(): number;
							public onEnhancedSeekStart(): void;
							public isMuted(): boolean;
							public mute(param0: boolean): void;
							public onAudioSampleReceived(param0: number, param1: number, param2: native.Array<number>): void;
							public isPlaying(): boolean;
							public getCurrentStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
							public play(param0: com.wowza.gocoder.sdk.api.player.WZPlayerConfig, param1: com.wowza.gocoder.sdk.api.status.WZStatusCallback): void;
							public stop(param0: com.wowza.gocoder.sdk.api.status.WZStatusCallback): void;
							public getMetadata(): com.wowza.gocoder.sdk.api.data.WZDataMap;
							public registerDataEventListener(param0: string, param1: com.wowza.gocoder.sdk.api.data.WZDataEvent.EventListener): void;
							public sendPingRequest(param0: com.wowza.gocoder.sdk.api.data.WZDataEvent.ResultCallback): void;
							public getCurrentTime(): number;
							public getCurrentState(): number;
							public setScaleMode(param0: number): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.geometry.WZCropDimensions.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.geometry.WZSize.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module render {
						export abstract class WZRenderAPI {
							public constructor();
						}
						export module WZRenderAPI {
							export class VideoFrameListener {
								/**
								 * Constructs a new instance of the com.wowza.gocoder.sdk.api.render.WZRenderAPI$VideoFrameListener interface with the provided implementation.
								 */
								public constructor(implementation: {
									isWZVideoFrameListenerActive(): boolean;
									onWZVideoFrameListenerInit(param0: com.wowza.gocoder.sdk.api.android.opengl.WZGLES.EglEnv): void;
									onWZVideoFrameListenerFrameAvailable(param0: com.wowza.gocoder.sdk.api.android.opengl.WZGLES.EglEnv, param1: com.wowza.gocoder.sdk.api.geometry.WZSize, param2: number, param3: number): void;
									onWZVideoFrameListenerRelease(param0: com.wowza.gocoder.sdk.api.android.opengl.WZGLES.EglEnv): void;
								});
								public onWZVideoFrameListenerFrameAvailable(param0: com.wowza.gocoder.sdk.api.android.opengl.WZGLES.EglEnv, param1: com.wowza.gocoder.sdk.api.geometry.WZSize, param2: number, param3: number): void;
								public onWZVideoFrameListenerRelease(param0: com.wowza.gocoder.sdk.api.android.opengl.WZGLES.EglEnv): void;
								public isWZVideoFrameListenerActive(): boolean;
								public onWZVideoFrameListenerInit(param0: com.wowza.gocoder.sdk.api.android.opengl.WZGLES.EglEnv): void;
							}
							export class VideoFrameRenderer {
								/**
								 * Constructs a new instance of the com.wowza.gocoder.sdk.api.render.WZRenderAPI$VideoFrameRenderer interface with the provided implementation.
								 */
								public constructor(implementation: {
									isWZVideoFrameRendererActive(): boolean;
									onWZVideoFrameRendererInit(param0: com.wowza.gocoder.sdk.api.android.opengl.WZGLES.EglEnv): void;
									onWZVideoFrameRendererDraw(param0: com.wowza.gocoder.sdk.api.android.opengl.WZGLES.EglEnv, param1: com.wowza.gocoder.sdk.api.geometry.WZSize, param2: number): void;
									onWZVideoFrameRendererRelease(param0: com.wowza.gocoder.sdk.api.android.opengl.WZGLES.EglEnv): void;
								});
								public onWZVideoFrameRendererDraw(param0: com.wowza.gocoder.sdk.api.android.opengl.WZGLES.EglEnv, param1: com.wowza.gocoder.sdk.api.geometry.WZSize, param2: number): void;
								public isWZVideoFrameRendererActive(): boolean;
								public onWZVideoFrameRendererRelease(param0: com.wowza.gocoder.sdk.api.android.opengl.WZGLES.EglEnv): void;
								public onWZVideoFrameRendererInit(param0: com.wowza.gocoder.sdk.api.android.opengl.WZGLES.EglEnv): void;
							}
							export class VideoRendererConfig extends com.wowza.gocoder.sdk.api.render.WZRenderAPI.VideoViewConfig {
								public constructor(param0: com.wowza.gocoder.sdk.api.render.WZRenderAPI.VideoViewConfig);
								public toString(): string;
								public setEglSurfaceRotation(param0: number): void;
								public getCropDimensions(): com.wowza.gocoder.sdk.api.geometry.WZCropDimensions;
								public getEglViewportSize(): com.wowza.gocoder.sdk.api.geometry.WZSize;
								public constructor(param0: android.content.Context);
								public equals(param0: java.lang.Object): boolean;
								public set(param0: com.wowza.gocoder.sdk.api.render.WZRenderAPI.VideoViewConfig): void;
								public constructor();
								public constructor(param0: com.wowza.gocoder.sdk.api.render.WZRenderAPI.VideoRendererConfig);
								public getEglSurfaceRotation(): number;
								public set(param0: com.wowza.gocoder.sdk.api.render.WZRenderAPI.VideoRendererConfig): void;
							}
							export class VideoViewConfig {
								public scaleMode: number;
								public viewSize: com.wowza.gocoder.sdk.api.geometry.WZSize;
								public surfaceSize: com.wowza.gocoder.sdk.api.geometry.WZSize;
								public clientFrameSize: com.wowza.gocoder.sdk.api.geometry.WZSize;
								public activeFrameSize: com.wowza.gocoder.sdk.api.geometry.WZSize;
								public surfaceRotation: number;
								public framerate: number;
								public toString(): string;
								public getScaleMode(): number;
								public setSurfaceSize(param0: com.wowza.gocoder.sdk.api.geometry.WZSize): void;
								public constructor(param0: android.content.Context);
								public setFramerate(param0: number): void;
								public getSurfaceSize(): com.wowza.gocoder.sdk.api.geometry.WZSize;
								public set(param0: com.wowza.gocoder.sdk.api.render.WZRenderAPI.VideoViewConfig): void;
								public constructor();
								public setSurfaceRotation(param0: number): void;
								public getActiveFrameSize(): com.wowza.gocoder.sdk.api.geometry.WZSize;
								public setScaleMode(param0: number): void;
								public getFramerate(): number;
								public constructor(param0: com.wowza.gocoder.sdk.api.render.WZRenderAPI.VideoViewConfig);
								public getViewSize(): com.wowza.gocoder.sdk.api.geometry.WZSize;
								public setViewSize(param0: com.wowza.gocoder.sdk.api.geometry.WZSize): void;
								public equals(param0: java.lang.Object): boolean;
								public setActiveFrameSize(param0: com.wowza.gocoder.sdk.api.geometry.WZSize): void;
								public getClientFrameSize(): com.wowza.gocoder.sdk.api.geometry.WZSize;
								public setClientFrameSize(param0: com.wowza.gocoder.sdk.api.geometry.WZSize): void;
								public getSurfaceRotation(): number;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.media.MediaFormat.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.status.WZStatus.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module sink {
						export class WZSinkAPI {
							public constructor();
						}
						export module WZSinkAPI {
							export class AudioSink {
								/**
								 * Constructs a new instance of the com.wowza.gocoder.sdk.api.sink.WZSinkAPI$AudioSink interface with the provided implementation.
								 */
								public constructor(implementation: {
									isAudioEnabled(): boolean;
									setAudioEnabled(param0: boolean): void;
									isAudioPaused(): boolean;
									setAudioPaused(param0: boolean): void;
									prepareForBroadcast(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig): com.wowza.gocoder.sdk.api.status.WZStatus;
									getBroadcastConfig(): com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig;
									startBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
									stopBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
									getBroadcasterStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
									getStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
								});
								public getStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
								public getBroadcastConfig(): com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig;
								public setAudioEnabled(param0: boolean): void;
								public isAudioPaused(): boolean;
								public isAudioEnabled(): boolean;
								public setAudioPaused(param0: boolean): void;
								public stopBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
								public getBroadcasterStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
								public prepareForBroadcast(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig): com.wowza.gocoder.sdk.api.status.WZStatus;
								public startBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
							}
							export class MediaCodecAudioSink {
								/**
								 * Constructs a new instance of the com.wowza.gocoder.sdk.api.sink.WZSinkAPI$MediaCodecAudioSink interface with the provided implementation.
								 */
								public constructor(implementation: {
									onAudioFormat(param0: android.media.MediaFormat): void;
									onAudioSample(param0: number, param1: java.nio.ByteBuffer, param2: android.media.MediaCodec.BufferInfo): void;
									isAudioEnabled(): boolean;
									setAudioEnabled(param0: boolean): void;
									isAudioPaused(): boolean;
									setAudioPaused(param0: boolean): void;
									prepareForBroadcast(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig): com.wowza.gocoder.sdk.api.status.WZStatus;
									getBroadcastConfig(): com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig;
									startBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
									stopBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
									getBroadcasterStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
									getStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
								});
								public getStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
								public getBroadcastConfig(): com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig;
								public setAudioEnabled(param0: boolean): void;
								public isAudioPaused(): boolean;
								public onAudioSample(param0: number, param1: java.nio.ByteBuffer, param2: android.media.MediaCodec.BufferInfo): void;
								public isAudioEnabled(): boolean;
								public setAudioPaused(param0: boolean): void;
								public stopBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
								public getBroadcasterStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
								public prepareForBroadcast(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig): com.wowza.gocoder.sdk.api.status.WZStatus;
								public onAudioFormat(param0: android.media.MediaFormat): void;
								public startBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
							}
							export class MediaCodecVideoSink {
								/**
								 * Constructs a new instance of the com.wowza.gocoder.sdk.api.sink.WZSinkAPI$MediaCodecVideoSink interface with the provided implementation.
								 */
								public constructor(implementation: {
									onVideoFormat(param0: android.media.MediaFormat): void;
									onVideoFrame(param0: number, param1: java.nio.ByteBuffer, param2: android.media.MediaCodec.BufferInfo): void;
									isVideoEnabled(): boolean;
									setVideoEnabled(param0: boolean): void;
									isVideoPaused(): boolean;
									setVideoPaused(param0: boolean): void;
									prepareForBroadcast(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig): com.wowza.gocoder.sdk.api.status.WZStatus;
									getBroadcastConfig(): com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig;
									startBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
									stopBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
									getBroadcasterStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
									getStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
								});
								public setVideoPaused(param0: boolean): void;
								public getStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
								public isVideoPaused(): boolean;
								public getBroadcastConfig(): com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig;
								public onVideoFormat(param0: android.media.MediaFormat): void;
								public isVideoEnabled(): boolean;
								public setVideoEnabled(param0: boolean): void;
								public onVideoFrame(param0: number, param1: java.nio.ByteBuffer, param2: android.media.MediaCodec.BufferInfo): void;
								public stopBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
								public getBroadcasterStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
								public prepareForBroadcast(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig): com.wowza.gocoder.sdk.api.status.WZStatus;
								public startBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
							}
							export class StreamingAudioSink {
								/**
								 * Constructs a new instance of the com.wowza.gocoder.sdk.api.sink.WZSinkAPI$StreamingAudioSink interface with the provided implementation.
								 */
								public constructor(implementation: {
									onAudioFrame(param0: number, param1: native.Array<number>, param2: number): void;
									isAudioEnabled(): boolean;
									setAudioEnabled(param0: boolean): void;
									isAudioPaused(): boolean;
									setAudioPaused(param0: boolean): void;
									prepareForBroadcast(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig): com.wowza.gocoder.sdk.api.status.WZStatus;
									getBroadcastConfig(): com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig;
									startBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
									stopBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
									getBroadcasterStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
									getStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
								});
								public getStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
								public getBroadcastConfig(): com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig;
								public onAudioFrame(param0: number, param1: native.Array<number>, param2: number): void;
								public setAudioEnabled(param0: boolean): void;
								public isAudioPaused(): boolean;
								public isAudioEnabled(): boolean;
								public setAudioPaused(param0: boolean): void;
								public stopBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
								public getBroadcasterStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
								public prepareForBroadcast(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig): com.wowza.gocoder.sdk.api.status.WZStatus;
								public startBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
							}
							export class StreamingVideoSink {
								/**
								 * Constructs a new instance of the com.wowza.gocoder.sdk.api.sink.WZSinkAPI$StreamingVideoSink interface with the provided implementation.
								 */
								public constructor(implementation: {
									onVideoConfigFrame(param0: native.Array<number>, param1: number): void;
									onParameterSets(param0: native.Array<number>, param1: native.Array<number>): void;
									onVideoFrame(param0: number, param1: native.Array<number>, param2: number): void;
									isVideoEnabled(): boolean;
									setVideoEnabled(param0: boolean): void;
									isVideoPaused(): boolean;
									setVideoPaused(param0: boolean): void;
									prepareForBroadcast(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig): com.wowza.gocoder.sdk.api.status.WZStatus;
									getBroadcastConfig(): com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig;
									startBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
									stopBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
									getBroadcasterStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
									getStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
								});
								public setVideoPaused(param0: boolean): void;
								public getStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
								public isVideoPaused(): boolean;
								public isVideoEnabled(): boolean;
								public stopBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
								public getBroadcasterStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
								public onVideoConfigFrame(param0: native.Array<number>, param1: number): void;
								public onParameterSets(param0: native.Array<number>, param1: native.Array<number>): void;
								public startBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
								public getBroadcastConfig(): com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig;
								public onVideoFrame(param0: number, param1: native.Array<number>, param2: number): void;
								public setVideoEnabled(param0: boolean): void;
								public prepareForBroadcast(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig): com.wowza.gocoder.sdk.api.status.WZStatus;
							}
							export class VideoSink {
								/**
								 * Constructs a new instance of the com.wowza.gocoder.sdk.api.sink.WZSinkAPI$VideoSink interface with the provided implementation.
								 */
								public constructor(implementation: {
									isVideoEnabled(): boolean;
									setVideoEnabled(param0: boolean): void;
									isVideoPaused(): boolean;
									setVideoPaused(param0: boolean): void;
									prepareForBroadcast(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig): com.wowza.gocoder.sdk.api.status.WZStatus;
									getBroadcastConfig(): com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig;
									startBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
									stopBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
									getBroadcasterStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
									getStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
								});
								public setVideoPaused(param0: boolean): void;
								public getStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
								public isVideoPaused(): boolean;
								public getBroadcastConfig(): com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig;
								public isVideoEnabled(): boolean;
								public setVideoEnabled(param0: boolean): void;
								public stopBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
								public getBroadcasterStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
								public prepareForBroadcast(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig): com.wowza.gocoder.sdk.api.status.WZStatus;
								public startBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module status {
						export class WZState {
							public static IDLE: number;
							public static STARTING: number;
							public static READY: number;
							public static RUNNING: number;
							public static STOPPING: number;
							public static PAUSED: number;
							public static STOPPED: number;
							public static COMPLETE: number;
							public static SHUTDOWN: number;
							public static ERROR: number;
							public static UNKNOWN: number;
							public static PREBUFFERING_STARTED: number;
							public static PREBUFFERING_ENDED: number;
							public static MIN_STATE: number;
							public static MAX_STATE: number;
							public constructor();
							public static toLabel(param0: number): string;
							public static isValidState(param0: number): boolean;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.api.errors.WZError.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module status {
						export class WZStatus {
							public constructor(param0: number, param1: com.wowza.gocoder.sdk.api.errors.WZError);
							public toString(): string;
							public isUnknown(): boolean;
							public isRunning(): boolean;
							public isBuffering(): boolean;
							public set(param0: com.wowza.gocoder.sdk.api.status.WZStatus): void;
							public getLastError(): com.wowza.gocoder.sdk.api.errors.WZError;
							public isPaused(): boolean;
							public isStopping(): boolean;
							public clearLastError(): com.wowza.gocoder.sdk.api.errors.WZError;
							public clearLastError(param0: number): com.wowza.gocoder.sdk.api.errors.WZError;
							public constructor();
							public getState(): number;
							public setAndWaitForState(param0: number, param1: number): number;
							public isReady(): boolean;
							public setError(param0: com.wowza.gocoder.sdk.api.errors.WZError): void;
							public waitForState(param0: number): number;
							public isStarting(): boolean;
							public isStopped(): boolean;
							public constructor(param0: number);
							public isComplete(): boolean;
							public isIdle(): boolean;
							public set(param0: number, param1: com.wowza.gocoder.sdk.api.errors.WZError): void;
							public isShutdown(): boolean;
							public constructor(param0: com.wowza.gocoder.sdk.api.status.WZStatus);
							public setState(param0: number): void;
							public getLastError(param0: boolean): com.wowza.gocoder.sdk.api.errors.WZError;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.api.status.WZStatus.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module api {
					export module status {
						export class WZStatusCallback {
							/**
							 * Constructs a new instance of the com.wowza.gocoder.sdk.api.status.WZStatusCallback interface with the provided implementation.
							 */
							public constructor(implementation: {
								onWZStatus(param0: com.wowza.gocoder.sdk.api.status.WZStatus): void;
								onWZError(param0: com.wowza.gocoder.sdk.api.status.WZStatus): void;
							});
							public onWZError(param0: com.wowza.gocoder.sdk.api.status.WZStatus): void;
							public onWZStatus(param0: com.wowza.gocoder.sdk.api.status.WZStatus): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export class a {
						public static b: string;
						public constructor();
						public static a(param0: string, param1: string): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.support.a.b.a.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module a {
						export class a {
							public constructor();
							public static a(param0: string, param1: string): void;
							public static a(): com.wowza.gocoder.sdk.support.a.b.a;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module a {
						export module a {
							export module a {
								export class a {
									public static c: com.wowza.gocoder.sdk.support.a.a.a.a;
									public static valueOf(param0: string): com.wowza.gocoder.sdk.support.a.a.a.a;
									public a(): number;
									public b(): string;
									public static values(): native.Array<com.wowza.gocoder.sdk.support.a.a.a.a>;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.support.a.a.a.a.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module a {
						export module a {
							export module a {
								export module a {
									export class a extends com.wowza.gocoder.sdk.support.a.a.a.a.b {
										public a(param0: string, param1: string, param2: native.Array<com.wowza.gocoder.sdk.support.a.a.a.a>): void;
										public a(): void;
										public constructor();
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.support.a.a.a.a.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module a {
						export module a {
							export module a {
								export module a {
									export abstract class b {
										public d(): boolean;
										public c(): void;
										public a(param0: string, param1: string, param2: native.Array<com.wowza.gocoder.sdk.support.a.a.a.a>): void;
										public a(): void;
										public constructor();
										public b(): number;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.res.AssetManager.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.support.a.a.a.a.b.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module a {
						export module a {
							export module a {
								export class b {
									public d(): number;
									public b(param0: string, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): number;
									public a(param0: number): void;
									public h(): number;
									public b(param0: string, param1: number, param2: number, param3: number, param4: number): number;
									public constructor(param0: com.wowza.gocoder.sdk.support.a.a.a.a.b, param1: android.content.res.AssetManager);
									public a(param0: string, param1: number, param2: number, param3: number): boolean;
									public a(param0: number, param1: number): void;
									public a(param0: string, param1: number, param2: number, param3: number, param4: number): void;
									public c(): number;
									public a(param0: number, param1: native.Array<number>): void;
									public a(param0: string): number;
									public g(): number;
									public a(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>): void;
									public constructor(param0: android.content.res.AssetManager);
									public a(param0: string, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): void;
									public f(): number;
									public b(): number;
									public a(): void;
									public b(param0: number): void;
									public a(param0: native.Array<number>): void;
									public a(param0: string, param1: number, param2: number): void;
									public e(): number;
									public b(param0: string, param1: number, param2: number): number;
									public a(param0: number, param1: number, param2: native.Array<number>): void;
									public d(param0: string, param1: number, param2: number): void;
									public b(param0: string, param1: number, param2: number, param3: number): number;
									public i(): number;
									public c(param0: string, param1: number, param2: number): number;
									public a(param0: string, param1: number, param2: number, param3: number): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.support.a.a.a.a.b.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.support.a.a.a.e.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module a {
						export module a {
							export module a {
								export class c {
									public a(): void;
									public a(param0: native.Array<number>): void;
									public constructor(param0: number, param1: com.wowza.gocoder.sdk.support.a.a.a.a.b);
									public a(param0: number, param1: number, param2: number, param3: number, param4: com.wowza.gocoder.sdk.support.a.a.a.e, param5: native.Array<number>): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module a {
						export module a {
							export module a {
								export class d {
									public constructor();
									public static a(param0: android.content.Context, param1: number): number;
									public static a(param0: android.graphics.Bitmap): number;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module a {
						export module a {
							export module a {
								export class e {
									public a: number;
									public b: number;
									public c: number;
									public d: number;
									public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number);
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module a {
						export module a {
							export module a {
								export class f {
									public constructor();
									public static a(param0: number, param1: string): number;
									public a(param0: native.Array<number>): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.support.a.a.a.a.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.FloatBuffer.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module a {
						export module a {
							export module a {
								export class g {
									public static b: number;
									public constructor();
									public static a(param0: number, param1: string): number;
									public static a(param0: native.Array<number>): java.nio.FloatBuffer;
									public static a(param0: number, param1: number, param2: native.Array<com.wowza.gocoder.sdk.support.a.a.a.a>): number;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module a {
						export module a {
							export module a {
								export class h {
									public g: number;
									public h: number;
									public i: number;
									public l: number;
									public m: number;
									public b(): void;
									public a(param0: number, param1: number, param2: number): void;
									public a(): void;
									public a(param0: native.Array<number>, param1: number, param2: number): void;
									public constructor(param0: number, param1: number);
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.geometry.WZSize.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module a {
						export module b {
							export class a extends com.wowza.gocoder.sdk.api.android.graphics.WZBitmap {
								public onWZVideoFrameRendererDraw(param0: com.wowza.gocoder.sdk.api.android.opengl.WZGLES.EglEnv, param1: com.wowza.gocoder.sdk.api.geometry.WZSize, param2: number): void;
								public isWZVideoFrameRendererActive(): boolean;
								public onWZVideoFrameRendererRelease(param0: com.wowza.gocoder.sdk.api.android.opengl.WZGLES.EglEnv): void;
								public constructor();
								public constructor(param0: android.graphics.Bitmap);
								public constructor(param0: native.Array<number>);
								public onWZVideoFrameRendererInit(param0: com.wowza.gocoder.sdk.api.android.opengl.WZGLES.EglEnv): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.Surface.d.ts" />
/// <reference path="./android.view.SurfaceHolder.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.geometry.WZSize.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module a {
						export module c {
							export class a {
								public surfaceDestroyed(param0: android.view.SurfaceHolder): void;
								public surfaceCreated(param0: android.view.SurfaceHolder): void;
								public getScaleMode(): number;
								public a(param0: number, param1: number): void;
								public getVideoFrameSize(): com.wowza.gocoder.sdk.api.geometry.WZSize;
								public constructor(param0: android.content.Context);
								public setScaleMode(param0: number): void;
								public surfaceChanged(param0: android.view.SurfaceHolder, param1: number, param2: number, param3: number): void;
								public getSurface(): android.view.Surface;
								public setVideoFrameSize(param0: com.wowza.gocoder.sdk.api.geometry.WZSize): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.configuration.WZMediaConfig.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.monitor.WZStreamingStat.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.status.WZStatus.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module b {
						export class a {
							public constructor();
							public static a(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig): boolean;
							public stopBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
							public getVideoSourceConfig(): com.wowza.gocoder.sdk.api.configuration.WZMediaConfig;
							public a(param0: com.wowza.gocoder.sdk.api.monitor.WZStreamingStat): void;
							public e(): number;
							public setVideoEnabled(param0: boolean): void;
							public startBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
							public getBroadcastConfig(): com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig;
							public a(param0: boolean): void;
							public prepareForBroadcast(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig): com.wowza.gocoder.sdk.api.status.WZStatus;
							public a(): com.wowza.gocoder.sdk.api.broadcast.WZBroadcastAPI.VideoBroadcaster;
							public a(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastAPI.VideoBroadcaster): void;
							public getStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
							public d(): number;
							public constructor(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastAPI.VideoBroadcaster);
							public f(): number;
							public isVideoPaused(): boolean;
							public c(): number;
							public setVideoPaused(param0: boolean): void;
							public b(): boolean;
							public isVideoEnabled(): boolean;
							public getBroadcasterStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.status.WZStatus.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module b {
						export class b {
							public constructor();
							public static c(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig): com.wowza.gocoder.sdk.api.status.WZStatus;
							public static a(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig): com.wowza.gocoder.sdk.api.status.WZStatus;
							public static b(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig): com.wowza.gocoder.sdk.api.status.WZStatus;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.configuration.WZMediaConfig.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.geometry.WZSize.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module b {
						export class c extends com.wowza.gocoder.sdk.api.broadcast.WZH264Broadcaster implements com.wowza.gocoder.sdk.api.render.WZRenderAPI.VideoFrameListener {
							public constructor();
							public getAdaptiveBitrate(): number;
							public getVideoSourceConfig(): com.wowza.gocoder.sdk.api.configuration.WZMediaConfig;
							public setVideoEnabled(param0: boolean): void;
							public onWZVideoFrameListenerRelease(param0: com.wowza.gocoder.sdk.api.android.opengl.WZGLES.EglEnv): void;
							public onPrepareEncoder(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig): void;
							public changeAdaptiveFramerate(param0: number): void;
							public onWZVideoFrameListenerInit(param0: com.wowza.gocoder.sdk.api.android.opengl.WZGLES.EglEnv): void;
							public b(param0: com.wowza.gocoder.sdk.api.render.WZRenderAPI.VideoFrameRenderer): void;
							public isWZVideoFrameListenerActive(): boolean;
							public constructor(param0: com.wowza.gocoder.sdk.api.render.WZRenderAPI.VideoFrameRenderer);
							public isVideoPaused(): boolean;
							public onWZVideoFrameListenerFrameAvailable(param0: com.wowza.gocoder.sdk.api.android.opengl.WZGLES.EglEnv, param1: com.wowza.gocoder.sdk.api.geometry.WZSize, param2: number, param3: number): void;
							public setVideoPaused(param0: boolean): void;
							public changeAdaptiveBitrate(param0: number): void;
							public a(param0: com.wowza.gocoder.sdk.api.render.WZRenderAPI.VideoFrameRenderer): void;
							public isVideoEnabled(): boolean;
							public getAdaptiveFramerate(): number;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.opengl.EGLContext.d.ts" />
/// <reference path="./android.os.Message.d.ts" />
/// <reference path="./android.view.Surface.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.configuration.WZMediaConfig.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.status.WZStatus.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.support.d.a.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module c {
						export class a {
							public getAdaptiveBitrate(): number;
							public getMediaFormatDescription(): string;
							public stopEncoding(): com.wowza.gocoder.sdk.api.status.WZStatus;
							public onFrameSubmittedToEncoder(param0: number): void;
							public startEncoderThread(): void;
							public onPrepareEncoder(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig): void;
							public initEncoderGL(param0: android.view.Surface): void;
							public onDrainEncoder(): void;
							public onEncodeInputSurfaceContents(param0: number): void;
							public getEncoderConfig(): com.wowza.gocoder.sdk.api.configuration.WZMediaConfig;
							public flushEncoder(): void;
							public onStartEncoding(): void;
							public encodeInputSurfaceContents(param0: number): void;
							public drainEncoder(): void;
							public getStreamingMonitor(): com.wowza.gocoder.sdk.support.d.a;
							public getEglEnv(): com.wowza.gocoder.sdk.api.android.opengl.WZGLES.EglEnv;
							public prepareEncoder(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig): com.wowza.gocoder.sdk.api.status.WZStatus;
							public startEncoding(): com.wowza.gocoder.sdk.api.status.WZStatus;
							public onStopEncoding(): void;
							public initEncoderGL(param0: android.opengl.EGLContext, param1: android.view.Surface): boolean;
							public constructor();
							public getMediaCodecName(): string;
							public onFrameSubmittedToEncoder(): void;
							public setSharedContext(param0: android.opengl.EGLContext): void;
							public hasFrameRateIntervalElapsed(): boolean;
							public getEncoderInputSurface(): android.view.Surface;
							public runOnEncoderThread(param0: java.lang.Runnable): void;
							public changeAdaptiveFramerate(param0: number): void;
							public shutdownEncoderThread(): void;
							public getEncoderStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
							public onShutdown(): void;
							public getEncoderEglEnv(): com.wowza.gocoder.sdk.api.android.opengl.WZGLES.EglEnv;
							public changeAdaptiveBitrate(param0: number): void;
							public run(): void;
							public getAdaptiveFramerate(): number;
						}
						export module a {
							export class a {
								public handleMessage(param0: android.os.Message): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.api.monitor.WZStreamingStat.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module d {
						export class a {
							public static f: number;
							public static g: number;
							public static h: number;
							public static i: number;
							public static j: number;
							public constructor();
							public b(param0: com.wowza.gocoder.sdk.support.d.a.a): void;
							public d(): void;
							public a(param0: number): void;
							public e(): com.wowza.gocoder.sdk.api.monitor.WZStreamingStat;
							public constructor(param0: number);
							public a(param0: number, param1: number): void;
							public a(): number;
							public d(param0: number): number;
							public c(): boolean;
							public b(param0: number, param1: number): void;
							public a(param0: com.wowza.gocoder.sdk.support.d.a.a): void;
							public b(): void;
							public c(param0: number): void;
							public b(param0: number): void;
						}
						export module a {
							export class a {
								/**
								 * Constructs a new instance of the com.wowza.gocoder.sdk.support.d.a$a interface with the provided implementation.
								 */
								public constructor(implementation: {
									a(param0: com.wowza.gocoder.sdk.api.monitor.WZStreamingStat): void;
								});
								public a(param0: com.wowza.gocoder.sdk.api.monitor.WZStreamingStat): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module e {
						export class a {
							public constructor();
							public d(): void;
							public a(): number;
							public e(): number;
							public h(): number;
							public f(): number;
							public g(): boolean;
							public c(): com.wowza.gocoder.sdk.support.e.a.a;
							public b(): number;
							public a(param0: number, param1: number, param2: native.Array<number>): void;
						}
						export module a {
							export class a {
								public static c: number;
								public static d: number;
								public static e: number;
								public static f: number;
								public a(): number;
								public b(): number;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.api.configuration.WZMediaConfig.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.status.WZStatus.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.status.WZStatusCallback.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module e {
						export abstract class b {
							public T(): number;
							public a(param0: number, param1: native.Array<number>, param2: number, param3: number, param4: number): number;
							public C(): number;
							public a(): string;
							public s(): number;
							public m(): number;
							public I(): number;
							public a(param0: com.wowza.gocoder.sdk.api.status.WZStatusCallback): void;
							public d(): string;
							public Q(): number;
							public j(): boolean;
							public F(): number;
							public p(): number;
							public H(): number;
							public O(): number;
							public u(): number;
							public A(): number;
							public a(param0: com.wowza.gocoder.sdk.support.g.b.a): void;
							public G(): number;
							public a(param0: com.wowza.gocoder.sdk.api.configuration.WZMediaConfig, param1: native.Array<number>): com.wowza.gocoder.sdk.api.status.WZStatus;
							public P(): number;
							public n(): number;
							public a(param0: number): string;
							public v(): number;
							public b(): string;
							public V(): void;
							public run(): void;
							public b(param0: native.Array<number>): com.wowza.gocoder.sdk.api.configuration.WZMediaConfig;
							public l(): number;
							public a(param0: number): void;
							public N(): boolean;
							public M(): number;
							public W(): void;
							public o(): number;
							public i(): number;
							public c(): void;
							public a(param0: number, param1: number): number;
							public f(): com.wowza.gocoder.sdk.api.status.WZStatus;
							public e(): com.wowza.gocoder.sdk.api.status.WZStatusCallback;
							public w(): number;
							public J(): number;
							public a(param0: number, param1: number, param2: native.Array<number>): void;
							public g(): com.wowza.gocoder.sdk.api.configuration.WZMediaConfig;
							public U(): number;
							public t(): number;
							public B(): number;
							public x(): number;
							public R(): number;
							public E(): number;
							public K(): number;
							public q(): number;
							public r(): number;
							public k(): number;
							public S(): number;
							public y(): number;
							public L(): number;
							public a(param0: native.Array<number>): com.wowza.gocoder.sdk.api.configuration.WZMediaConfig;
							public D(): number;
							public z(): number;
							public h(): com.wowza.gocoder.sdk.support.g.b.a;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.media.MediaCodec.d.ts" />
/// <reference path="./android.media.MediaFormat.d.ts" />
/// <reference path="./android.view.Surface.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.configuration.WZMediaConfig.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.status.WZStatus.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.status.WZStatusCallback.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module e {
						export class c extends com.wowza.gocoder.sdk.support.e.d {
							public constructor();
							public a(param0: number): void;
							public a(param0: number, param1: native.Array<number>, param2: number, param3: number, param4: number): number;
							public a(param0: number, param1: number): number;
							public a(param0: android.media.MediaCodec, param1: android.media.MediaFormat): void;
							public b(param0: com.wowza.gocoder.sdk.api.configuration.WZMediaConfig, param1: native.Array<number>): android.media.MediaFormat;
							public a(param0: android.media.MediaCodec, param1: number, param2: android.media.MediaCodec.BufferInfo, param3: java.nio.ByteBuffer, param4: number, param5: number, param6: number, param7: number, param8: number): number;
							public a(): string;
							public X(): void;
							public a(param0: com.wowza.gocoder.sdk.support.g.b.a): void;
							public a(param0: android.view.Surface): void;
							public a(param0: com.wowza.gocoder.sdk.api.configuration.WZMediaConfig, param1: native.Array<number>): com.wowza.gocoder.sdk.api.status.WZStatus;
							public a(param0: native.Array<number>): com.wowza.gocoder.sdk.api.configuration.WZMediaConfig;
							public a(param0: com.wowza.gocoder.sdk.api.status.WZStatusCallback): void;
							public a(param0: number, param1: number, param2: native.Array<number>): void;
							public a(param0: number): string;
							public U(): number;
							public a(param0: android.media.MediaCodec, param1: native.Array<java.nio.ByteBuffer>): void;
							public b(): string;
							public b(param0: number, param1: number, param2: native.Array<number>): number;
							public b(param0: native.Array<number>): com.wowza.gocoder.sdk.api.configuration.WZMediaConfig;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.media.MediaCodec.d.ts" />
/// <reference path="./android.media.MediaFormat.d.ts" />
/// <reference path="./android.view.Surface.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.configuration.WZMediaConfig.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.status.WZStatus.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.status.WZStatusCallback.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module e {
						export abstract class d extends com.wowza.gocoder.sdk.support.e.b {
							public a(param0: number): void;
							public a(param0: number, param1: native.Array<number>, param2: number, param3: number, param4: number): number;
							public a(param0: number, param1: number): number;
							public c(): void;
							public b(param0: com.wowza.gocoder.sdk.api.configuration.WZMediaConfig, param1: native.Array<number>): android.media.MediaFormat;
							public a(param0: android.media.MediaCodec, param1: android.media.MediaFormat): void;
							public a(param0: android.media.MediaCodec, param1: number, param2: android.media.MediaCodec.BufferInfo, param3: java.nio.ByteBuffer, param4: number, param5: number, param6: number, param7: number, param8: number): number;
							public a(): string;
							public X(): void;
							public a(param0: com.wowza.gocoder.sdk.support.g.b.a): void;
							public a(param0: android.view.Surface): void;
							public a(param0: com.wowza.gocoder.sdk.api.configuration.WZMediaConfig, param1: native.Array<number>): com.wowza.gocoder.sdk.api.status.WZStatus;
							public a(param0: native.Array<number>): com.wowza.gocoder.sdk.api.configuration.WZMediaConfig;
							public Y(): android.view.Surface;
							public a(param0: com.wowza.gocoder.sdk.api.status.WZStatusCallback): void;
							public a(param0: number, param1: number, param2: native.Array<number>): void;
							public a(param0: number): string;
							public U(): number;
							public a(param0: android.media.MediaCodec, param1: native.Array<java.nio.ByteBuffer>): void;
							public b(): string;
							public b(param0: native.Array<number>): com.wowza.gocoder.sdk.api.configuration.WZMediaConfig;
							public b(param0: number, param1: number, param2: native.Array<number>): number;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.media.MediaCodec.d.ts" />
/// <reference path="./android.media.MediaFormat.d.ts" />
/// <reference path="./android.view.Surface.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.configuration.WZMediaConfig.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.status.WZStatus.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.status.WZStatusCallback.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module e {
						export class e extends com.wowza.gocoder.sdk.support.e.d {
							public constructor();
							public a(param0: number): void;
							public a(param0: number, param1: native.Array<number>, param2: number, param3: number, param4: number): number;
							public constructor(param0: android.view.Surface);
							public a(param0: number, param1: number): number;
							public a(param0: android.media.MediaCodec, param1: android.media.MediaFormat): void;
							public b(param0: com.wowza.gocoder.sdk.api.configuration.WZMediaConfig, param1: native.Array<number>): android.media.MediaFormat;
							public a(param0: android.media.MediaCodec, param1: number, param2: android.media.MediaCodec.BufferInfo, param3: java.nio.ByteBuffer, param4: number, param5: number, param6: number, param7: number, param8: number): number;
							public a(): string;
							public a(param0: com.wowza.gocoder.sdk.support.g.b.a): void;
							public a(param0: android.view.Surface): void;
							public a(param0: com.wowza.gocoder.sdk.api.configuration.WZMediaConfig, param1: native.Array<number>): com.wowza.gocoder.sdk.api.status.WZStatus;
							public a(param0: native.Array<number>): com.wowza.gocoder.sdk.api.configuration.WZMediaConfig;
							public a(param0: com.wowza.gocoder.sdk.api.status.WZStatusCallback): void;
							public a(param0: number, param1: number, param2: native.Array<number>): void;
							public a(param0: number): string;
							public U(): number;
							public a(param0: android.media.MediaCodec, param1: native.Array<java.nio.ByteBuffer>): void;
							public b(): string;
							public b(param0: number, param1: number, param2: native.Array<number>): number;
							public b(param0: native.Array<number>): com.wowza.gocoder.sdk.api.configuration.WZMediaConfig;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.SurfaceTexture.d.ts" />
/// <reference path="./android.os.Message.d.ts" />
/// <reference path="./android.view.Surface.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.geometry.WZSize.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.graphics.WZColor.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.status.WZStatus.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module f {
						export class a {
							public constructor();
							public d(): com.wowza.gocoder.sdk.api.android.opengl.WZGLES.EglEnv;
							public isWZVideoFrameRendererActive(): boolean;
							public a(): com.wowza.gocoder.sdk.api.status.WZStatus;
							public a(param0: com.wowza.gocoder.sdk.api.render.WZRenderAPI.VideoViewConfig): void;
							public a(param0: native.Array<com.wowza.gocoder.sdk.api.render.WZRenderAPI.VideoFrameRenderer>): void;
							public j(): void;
							public f(): com.wowza.gocoder.sdk.api.render.WZRenderAPI.VideoViewConfig;
							public a(param0: com.wowza.gocoder.sdk.api.graphics.WZColor): void;
							public c(): android.graphics.SurfaceTexture;
							public a(param0: boolean): void;
							public onWZVideoFrameRendererDraw(param0: com.wowza.gocoder.sdk.api.android.opengl.WZGLES.EglEnv, param1: com.wowza.gocoder.sdk.api.geometry.WZSize, param2: number): void;
							public k(): void;
							public a(param0: android.view.Surface): void;
							public onWZVideoFrameRendererInit(param0: com.wowza.gocoder.sdk.api.android.opengl.WZGLES.EglEnv): void;
							public onFrameAvailable(param0: android.graphics.SurfaceTexture): void;
							public g(): boolean;
							public h(): com.wowza.gocoder.sdk.api.status.WZStatus;
							public onWZVideoFrameRendererRelease(param0: com.wowza.gocoder.sdk.api.android.opengl.WZGLES.EglEnv): void;
							public b(): boolean;
							public e(): com.wowza.gocoder.sdk.api.geometry.WZSize;
							public a(param0: native.Array<com.wowza.gocoder.sdk.api.render.WZRenderAPI.VideoFrameListener>): void;
							public i(): void;
						}
						export module a {
							export class a {
								public handleMessage(param0: android.os.Message): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module g {
						export class a {
							public constructor();
							public static b(param0: number): string;
							public static a(param0: string, param1: native.Array<number>): string;
							public static a(param0: number, param1: number): string;
							public static a(param0: string): string;
							public static a(param0: number): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module g {
						export class b {
							public static a: number;
							public static b: number;
							public static c: number;
							public static d: number;
							public static e: number;
							public static f: number;
							public static g: number;
							public static h: number;
							public static i: number;
							public static j: number;
							public static k: number;
							public static l: number;
							public constructor();
						}
						export module b {
							export class a {
								/**
								 * Constructs a new instance of the com.wowza.gocoder.sdk.support.g.b$a interface with the provided implementation.
								 */
								public constructor(implementation: {
									U(): number;
								});
								public U(): number;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.api.errors.WZSDKError.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module licensing {
						export class LicenseManager {
							public isEvaluation(): boolean;
							public static getInstance(): com.wowza.gocoder.sdk.support.licensing.LicenseManager;
							public getExpirationDate(): java.util.Date;
							public getLicensingError(): com.wowza.gocoder.sdk.api.errors.WZSDKError;
							public getLicenseVersion(): number;
							public matchesVersion(): boolean;
							public isExpired(): boolean;
							public isRegistered(): boolean;
							public static init(param0: string, param1: string): com.wowza.gocoder.sdk.support.licensing.LicenseManager;
							public isValid(): boolean;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.io.Serializable.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module wmstransport {
						export module a {
							export class a {
								public static g: number;
								public static a(param0: native.Array<number>, param1: string): boolean;
								public static a(param0: native.Array<number>, param1: number, param2: number): string;
								public static d(param0: string): string;
								public static a(param0: native.Array<number>, param1: number): string;
								public static a(param0: native.Array<number>, param1: number, param2: number, param3: number): string;
								public static a(param0: string): native.Array<number>;
								public static b(param0: native.Array<number>, param1: number, param2: number, param3: number): native.Array<number>;
								public static a(param0: string, param1: number): native.Array<number>;
								public static a(param0: string, param1: string): boolean;
								public static f(param0: string): void;
								public static c(param0: string, param1: string): void;
								public static b(param0: string): java.lang.Object;
								public static a(param0: native.Array<string>): void;
								public static b(param0: string, param1: string): void;
								public static c(param0: string): native.Array<number>;
								public static a(param0: java.io.Serializable, param1: number): string;
								public static e(param0: string): void;
								public static a(param0: java.io.Serializable): string;
								public static a(param0: native.Array<number>): string;
							}
							export module a {
								export class a {
									public constructor(param0: java.io.InputStream);
									public read(param0: native.Array<number>, param1: number, param2: number): number;
									public constructor(param0: java.io.InputStream, param1: number);
									public read(): number;
								}
								export class b {
									public constructor(param0: java.io.OutputStream, param1: number);
									public b(): void;
									public close(): void;
									public c(): void;
									public constructor(param0: java.io.OutputStream);
									public write(param0: native.Array<number>, param1: number, param2: number): void;
									public a(): void;
									public write(param0: number): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module wmstransport {
						export module a {
							export class b {
								public f(): number;
								public d(param0: number): number;
								public e(param0: number): number;
								public a(): number;
								public c(param0: number): number;
								public constructor(param0: native.Array<number>, param1: number);
								public f(param0: number): number;
								public constructor(param0: native.Array<number>);
								public d(): void;
								public a(param0: number): void;
								public e(): number;
								public b(param0: number): number;
								public b(): number;
								public c(): number;
								public constructor(param0: native.Array<number>, param1: number, param2: number);
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module wmstransport {
						export module a {
							export class c {
								public static a(param0: native.Array<number>, param1: number, param2: number): string;
								public static b(param0: native.Array<number>, param1: number): number;
								public static c(param0: native.Array<number>, param1: number, param2: number): number;
								public static a(param0: native.Array<number>, param1: number, param2: number, param3: boolean): number;
								public static b(param0: number, param1: native.Array<number>, param2: number, param3: number): number;
								public static a(param0: native.Array<number>, param1: number, param2: number, param3: string): string;
								public static b(param0: native.Array<number>, param1: number, param2: number, param3: boolean): number;
								public static a(param0: number, param1: native.Array<number>, param2: number, param3: number, param4: boolean): void;
								public static c(param0: native.Array<number>, param1: native.Array<number>): boolean;
								public static a(param0: number, param1: native.Array<number>, param2: number, param3: number): void;
								public static c(param0: native.Array<number>): number;
								public static a(param0: string): native.Array<number>;
								public static e(param0: native.Array<number>): number;
								public static d(param0: native.Array<number>): number;
								public static a(param0: native.Array<number>, param1: number): number;
								public static d(param0: native.Array<number>, param1: number, param2: number): number;
								public constructor();
								public static c(param0: native.Array<number>, param1: number): number;
								public static b(param0: native.Array<number>, param1: native.Array<number>): number;
								public static a(param0: native.Array<number>, param1: native.Array<number>): number;
								public static e(param0: native.Array<number>, param1: number, param2: number): number;
								public static b(param0: native.Array<number>, param1: number, param2: number): string;
								public static c(param0: native.Array<number>, param1: number, param2: number, param3: boolean): number;
								public static a(param0: number): native.Array<number>;
								public static b(param0: native.Array<number>): string;
								public static a(param0: native.Array<number>): string;
								public static a(param0: java.nio.ByteBuffer): number;
								public static a(param0: number, param1: number): native.Array<number>;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFPacket.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module wmstransport {
						export module a {
							export class d {
								public static h: number;
								public static i: number;
								public static j: number;
								public static k: number;
								public static l: number;
								public static m: number;
								public static n: number;
								public static o: number;
								public static p: number;
								public static a(param0: native.Array<number>): number;
								public static b(param0: number): string;
								public static c(param0: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFPacket): number;
								public static c(param0: number): string;
								public static d(param0: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFPacket): number;
								public static g(param0: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFPacket): boolean;
								public constructor();
								public static e(param0: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFPacket): boolean;
								public static f(param0: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFPacket): boolean;
								public static b(param0: native.Array<number>): number;
								public static a(param0: native.Array<number>): boolean;
								public static b(param0: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFPacket): number;
								public static f(param0: number): number;
								public static e(param0: number): number;
								public static a(param0: number): number;
								public static a(param0: number): string;
								public static d(param0: number): number;
								public static a(param0: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFPacket): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module wmstransport {
						export module a {
							export class e {
								/**
								 * Constructs a new instance of the com.wowza.gocoder.sdk.support.wmstransport.a.e interface with the provided implementation.
								 */
								public constructor(implementation: {
									a(): number;
									a(param0: number): void;
									c(param0: number): number;
									b(param0: number): number;
									e(param0: number): number;
									d(param0: number): number;
								});
								public b(param0: number): number;
								public d(param0: number): number;
								public e(param0: number): number;
								public a(): number;
								public c(param0: number): number;
								public a(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module wmstransport {
						export module a {
							export class f {
								/**
								 * Constructs a new instance of the com.wowza.gocoder.sdk.support.wmstransport.a.f interface with the provided implementation.
								 */
								public constructor(implementation: {
									a(): native.Array<number>;
									a(param0: native.Array<number>): void;
									b(): number;
									a(param0: number): void;
									c(): number;
									b(param0: number): void;
								});
								public a(): native.Array<number>;
								public b(): number;
								public c(): number;
								public a(param0: native.Array<number>): void;
								public a(param0: number): void;
								public b(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module wmstransport {
						export module a {
							export class g {
								public a(): native.Array<number>;
								public d(): number;
								public b(): number;
								public c(): number;
								public constructor(param0: native.Array<number>, param1: number, param2: number);
								public constructor();
								public constructor(param0: native.Array<number>);
								public a(param0: native.Array<number>): void;
								public a(param0: number): void;
								public b(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.support.wmstransport.a.f.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module wmstransport {
						export module a {
							export class h {
								public a(param0: com.wowza.gocoder.sdk.support.wmstransport.a.f): void;
								public f(): number;
								public a(param0: boolean): native.Array<number>;
								public a(param0: number): com.wowza.gocoder.sdk.support.wmstransport.a.f;
								public a(param0: com.wowza.gocoder.sdk.support.wmstransport.a.h): void;
								public constructor();
								public g(): native.Array<number>;
								public a(param0: number): void;
								public b(param0: number): void;
								public e(): number;
								public a(param0: number, param1: com.wowza.gocoder.sdk.support.wmstransport.a.f): void;
								public a(): void;
								public b(): number;
								public c(): java.util.List;
								public d(): java.util.List;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module wmstransport {
						export module wms {
							export module a {
								export module a {
									export class a {
										public i(): number;
										public constructor();
										public e(): number;
										public a(param0: com.wowza.gocoder.sdk.support.wmstransport.wms.a.a.a): boolean;
										public h(): boolean;
										public a(): number;
										public g(): number;
										public c(): number;
										public b(param0: number): void;
										public a(param0: boolean): void;
										public e(param0: number): void;
										public f(): number;
										public toString(): string;
										public d(): number;
										public g(param0: number): void;
										public a(param0: number): void;
										public f(param0: number): void;
										public b(): number;
										public c(param0: number): void;
										public d(param0: number): void;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.support.wmstransport.wms.a.a.a.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module wmstransport {
						export module wms {
							export module a {
								export module a {
									export class b {
										public static d: native.Array<number>;
										public static b(param0: com.wowza.gocoder.sdk.support.wmstransport.wms.a.a.a, param1: native.Array<number>, param2: number): void;
										public static a(param0: number): number;
										public constructor();
										public static a(param0: com.wowza.gocoder.sdk.support.wmstransport.wms.a.a.a, param1: native.Array<number>, param2: number): void;
										public static a(param0: native.Array<number>, param1: number, param2: number, param3: number): boolean;
										public static c(param0: number): string;
										public static a(param0: native.Array<number>, param1: number, param2: number): number;
										public static b(param0: number): number;
										public static a(param0: native.Array<number>, param1: number): com.wowza.gocoder.sdk.support.wmstransport.wms.a.a.a;
										public static a(param0: native.Array<number>, param1: number, param2: number): native.Array<number>;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module wmstransport {
						export module wms {
							export module a {
								export module b {
									export class a {
										public i: number;
										public j: number;
										public k: number;
										public l: number;
										public m: number;
										public n: number;
										public o: number;
										public p: number;
										public q: number;
										public r: native.Array<number>;
										public s: number;
										public t: number;
										public u: number;
										public v: number;
										public w: number;
										public x: number;
										public y: number;
										public z: number;
										public A: number;
										public B: number;
										public C: number;
										public D: number;
										public E: number;
										public F: number;
										public G: number;
										public H: number;
										public I: number;
										public J: number;
										public K: number;
										public L: number;
										public M: number;
										public N: number;
										public O: number;
										public P: number;
										public Q: number;
										public R: number;
										public S: number;
										public T: number;
										public U: number;
										public V: number;
										public h(): number;
										public constructor();
										public toString(): string;
										public e(): number;
										public f(): number;
										public a(): number;
										public d(): number;
										public g(): number;
										public c(): number;
										public b(): number;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module wmstransport {
						export module wms {
							export module a {
								export module b {
									export class b {
										public c: native.Array<number>;
										public a(): string;
										public constructor();
										public toString(): string;
										public b(): string;
										public a(param0: native.Array<number>): void;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.support.wmstransport.a.h.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.support.wmstransport.wms.a.b.a.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.support.wmstransport.wms.a.b.b.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.support.wmstransport.wms.b.a.a.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module wmstransport {
						export module wms {
							export module a {
								export module b {
									export class c {
										public static k: number;
										public static l: number;
										public static m: number;
										public static n: number;
										public static o: number;
										public static p: number;
										public static q: number;
										public static r: number;
										public static s: number;
										public static t: number;
										public static u: number;
										public static v: number;
										public static w: number;
										public static x: number;
										public static y: number;
										public static z: number;
										public static A: number;
										public static B: number;
										public static C: number;
										public static D: number;
										public static E: number;
										public static F: number;
										public static G: number;
										public static H: number;
										public static I: number;
										public static J: number;
										public static K: number;
										public static L: number;
										public static M: number;
										public static N: number;
										public static O: number;
										public static P: number;
										public static Q: number;
										public static R: number;
										public static S: number;
										public static T: number;
										public static U: number;
										public static V: number;
										public static W: number;
										public static X: number;
										public static Y: number;
										public static Z: native.Array<number>;
										public static aa: native.Array<number>;
										public static c(param0: native.Array<number>, param1: number, param2: number, param3: number): void;
										public static d(param0: native.Array<number>, param1: number, param2: number, param3: number): void;
										public constructor();
										public static e(param0: native.Array<number>, param1: number, param2: number, param3: number): void;
										public static a(param0: number): string;
										public static i(param0: native.Array<number>, param1: number, param2: number): native.Array<number>;
										public static a(param0: native.Array<number>): com.wowza.gocoder.sdk.support.wmstransport.wms.a.b.a;
										public static a(param0: com.wowza.gocoder.sdk.support.wmstransport.wms.b.a.a, param1: native.Array<number>): native.Array<number>;
										public static g(param0: number): string;
										public static c(param0: number): boolean;
										public static b(param0: native.Array<number>, param1: number, param2: number, param3: number): number;
										public static b(param0: native.Array<number>, param1: number, param2: number): boolean;
										public static a(param0: com.wowza.gocoder.sdk.support.wmstransport.wms.a.b.b): native.Array<number>;
										public static f(param0: native.Array<number>, param1: number, param2: number): void;
										public static d(param0: number): string;
										public static e(param0: number): string;
										public static a(param0: native.Array<number>, param1: number, param2: number, param3: number): native.Array<number>;
										public static a(param0: native.Array<number>, param1: number, param2: number, param3: java.util.List): void;
										public static f(param0: number): string;
										public static a(param0: number, param1: number, param2: number, param3: number): number;
										public static d(param0: native.Array<number>, param1: number, param2: number): com.wowza.gocoder.sdk.support.wmstransport.wms.a.b.b;
										public static a(param0: com.wowza.gocoder.sdk.support.wmstransport.wms.b.a.a): native.Array<number>;
										public static h(param0: native.Array<number>, param1: number, param2: number): void;
										public static a(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number): native.Array<number>;
										public static a(param0: native.Array<number>, param1: number, param2: number, param3: java.util.List, param4: number): void;
										public static g(param0: native.Array<number>, param1: number, param2: number): void;
										public static j(param0: native.Array<number>, param1: number, param2: number): void;
										public static a(param0: native.Array<number>, param1: number, param2: number): native.Array<number>;
										public static c(param0: native.Array<number>, param1: number, param2: number): native.Array<number>;
										public static a(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: com.wowza.gocoder.sdk.support.wmstransport.wms.a.b.b): com.wowza.gocoder.sdk.support.wmstransport.a.h;
										public static b(param0: number): boolean;
										public static e(param0: native.Array<number>, param1: number, param2: number): com.wowza.gocoder.sdk.support.wmstransport.wms.b.a.a;
										public static a(param0: native.Array<number>, param1: number): com.wowza.gocoder.sdk.support.wmstransport.wms.a.b.a;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Class.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module wmstransport {
						export module wms {
							export module a {
								export module c {
									export class a {
										public static a: java.lang.Class;
										public static b: string;
										public static c: number;
										public static d: number;
										public static e: number;
										public static f: string;
										public static g: string;
										public static h: string;
										public static i: number;
										public static j: number;
										public static k: number;
										public static l: number;
										public static m: number;
										public static n: number;
										public static o: number;
										public static p: number;
										public static q: number;
										public static r: number;
										public static s: number;
										public static t: number;
										public static u: number;
										public static v: number;
										public static w: number;
										public static x: number;
										public static y: number;
										public static z: number;
										public static A: number;
										public static B: number;
										public static C: number;
										public static D: number;
										public static E: number;
										public static F: number;
										public static G: number;
										public constructor();
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.support.wmstransport.wms.a.d.b.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module wmstransport {
						export module wms {
							export module a {
								export module d {
									export class a {
										public static a(param0: number, param1: native.Array<number>): com.wowza.gocoder.sdk.support.wmstransport.wms.a.d.b;
										public constructor();
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module wmstransport {
						export module wms {
							export module a {
								export module d {
									export class b {
										/**
										 * Constructs a new instance of the com.wowza.gocoder.sdk.support.wmstransport.wms.a.d.b interface with the provided implementation.
										 */
										public constructor(implementation: {
											a(): number;
											b(): number;
											c(): number;
											d(): number;
											e(): number;
											f(): number;
											g(): number;
											h(): number;
										});
										public h(): number;
										public e(): number;
										public f(): number;
										public a(): number;
										public d(): number;
										public g(): number;
										public c(): number;
										public b(): number;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module wmstransport {
						export module wms {
							export module a {
								export module d {
									export class c {
										/**
										 * Constructs a new instance of the com.wowza.gocoder.sdk.support.wmstransport.wms.a.d.c interface with the provided implementation.
										 */
										public constructor(implementation: {
											a(param0: number): void;
											i(): number;
											j(): boolean;
											k(): boolean;
											l(): number;
											b(param0: number): void;
											m(): native.Array<number>;
											a(param0: native.Array<number>): void;
											n(): number;
											a(param0: native.Array<number>, param1: number): number;
											a(param0: native.Array<number>, param1: number, param2: number): number;
										});
										public b(param0: number): void;
										public a(param0: native.Array<number>, param1: number): number;
										public i(): number;
										public k(): boolean;
										public n(): number;
										public a(param0: native.Array<number>, param1: number, param2: number): number;
										public l(): number;
										public j(): boolean;
										public m(): native.Array<number>;
										public a(param0: number): void;
										public a(param0: native.Array<number>): void;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.support.wmstransport.wms.a.d.e.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module wmstransport {
						export module wms {
							export module a {
								export module d {
									export class d extends com.wowza.gocoder.sdk.support.wmstransport.wms.a.d.e {
										public a(param0: native.Array<number>, param1: number): number;
										public k(): boolean;
										public hashCode(): number;
										public e(): native.Array<number>;
										public n(): number;
										public constructor();
										public j(): boolean;
										public a(): number;
										public c(): number;
										public b(param0: com.wowza.gocoder.sdk.support.wmstransport.wms.a.d.d): void;
										public a(param0: string): void;
										public a(param0: com.wowza.gocoder.sdk.support.wmstransport.wms.a.d.e): void;
										public e(param0: number): void;
										public b(param0: com.wowza.gocoder.sdk.support.wmstransport.wms.a.d.e): boolean;
										public m(): native.Array<number>;
										public a(param0: number): void;
										public c(param0: number): void;
										public b(): number;
										public a_(): string;
										public i(): number;
										public a(param0: native.Array<number>): void;
										public b(param0: number): void;
										public a(param0: native.Array<number>, param1: number, param2: number): number;
										public toString(): string;
										public l(): number;
										public d(): number;
										public a(param0: com.wowza.gocoder.sdk.support.wmstransport.wms.a.d.d): boolean;
										public f(param0: number): void;
										public d(param0: number): void;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module wmstransport {
						export module wms {
							export module a {
								export module d {
									export abstract class e {
										public e: number;
										public f: number;
										public g: number;
										public h: native.Array<number>;
										public a(param0: native.Array<number>, param1: number): number;
										public a_(): string;
										public i(): number;
										public k(): boolean;
										public hashCode(): number;
										public n(): number;
										public constructor();
										public j(): boolean;
										public a(param0: native.Array<number>): void;
										public b(param0: number): void;
										public a(param0: com.wowza.gocoder.sdk.support.wmstransport.wms.a.d.e): void;
										public a(param0: native.Array<number>, param1: number, param2: number): number;
										public l(): number;
										public b(param0: com.wowza.gocoder.sdk.support.wmstransport.wms.a.d.e): boolean;
										public m(): native.Array<number>;
										public a(param0: number): void;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.support.wmstransport.wms.a.d.e.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module wmstransport {
						export module wms {
							export module a {
								export module d {
									export class f extends com.wowza.gocoder.sdk.support.wmstransport.wms.a.d.e implements com.wowza.gocoder.sdk.support.wmstransport.wms.a.d.b {
										public i: number;
										public j: number;
										public k: number;
										public a(param0: native.Array<number>, param1: number): number;
										public h(param0: number): void;
										public k(): boolean;
										public hashCode(): number;
										public n(): number;
										public constructor();
										public r(): number;
										public j(): boolean;
										public g(): number;
										public a(): number;
										public s(): native.Array<number>;
										public c(): number;
										public a(param0: string): void;
										public a(param0: com.wowza.gocoder.sdk.support.wmstransport.wms.a.d.e): void;
										public e(param0: number): void;
										public q(): number;
										public f(): number;
										public b(param0: com.wowza.gocoder.sdk.support.wmstransport.wms.a.d.e): boolean;
										public m(): native.Array<number>;
										public a(param0: com.wowza.gocoder.sdk.support.wmstransport.wms.a.d.f): void;
										public g(param0: number): void;
										public a(param0: number): void;
										public c(param0: number): void;
										public b(): number;
										public a_(): string;
										public b(param0: com.wowza.gocoder.sdk.support.wmstransport.wms.a.d.f): boolean;
										public i(): number;
										public p(): number;
										public e(): number;
										public a(param0: native.Array<number>): void;
										public b(param0: number): void;
										public h(): number;
										public a(param0: native.Array<number>, param1: number, param2: number): number;
										public o(): number;
										public toString(): string;
										public l(): number;
										public d(): number;
										public f(param0: number): void;
										public d(param0: number): void;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module wmstransport {
						export module wms {
							export module a {
								export module e {
									export class a {
										public static a: number;
										public static b: number;
										public static c: number;
										public static d: number;
										public static e: string;
										public static f: string;
										public static g: string;
										public constructor();
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextDeserialize.d.ts" />
/// <reference path="./java.io.DataOutputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module wmstransport {
						export module wms {
							export module amf {
								export class AMF3Utils {
									public static TAG: string;
									public static deserializeString(param0: java.nio.ByteBuffer): string;
									public constructor();
									public static deserializeDate(param0: java.nio.ByteBuffer): java.util.Date;
									public static deserializeString(param0: java.nio.ByteBuffer, param1: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextDeserialize): string;
									public static deserializeInt(param0: java.nio.ByteBuffer): number;
									public static serializeZeroLengthString(param0: java.io.DataOutputStream): void;
									public static serializeDate(param0: java.io.DataOutputStream, param1: java.util.Date): number;
									public static serializeInt(param0: java.io.DataOutputStream, param1: number): number;
									public static deserializeString(param0: java.nio.ByteBuffer, param1: number): string;
									public static serializeStringNoLength(param0: java.io.DataOutputStream, param1: string): number;
									public static serializeString(param0: java.io.DataOutputStream, param1: string): number;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextDeserialize.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextSerialize.d.ts" />
/// <reference path="./java.io.DataOutputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module wmstransport {
						export module wms {
							export module amf {
								export abstract class AMFData {
									public static TAG: string;
									public static DATA_TYPE_UNKNOWN: number;
									public static DATA_TYPE_NUMBER: number;
									public static DATA_TYPE_BOOLEAN: number;
									public static DATA_TYPE_STRING: number;
									public static DATA_TYPE_OBJECT: number;
									public static DATA_TYPE_MOVIE_CLIP: number;
									public static DATA_TYPE_NULL: number;
									public static DATA_TYPE_UNDEFINED: number;
									public static DATA_TYPE_REFERENCE_OBJECT: number;
									public static DATA_TYPE_MIXED_ARRAY: number;
									public static DATA_TYPE_OBJECT_END: number;
									public static DATA_TYPE_ARRAY: number;
									public static DATA_TYPE_DATE: number;
									public static DATA_TYPE_LONG_STRING: number;
									public static DATA_TYPE_AS_OBJECT: number;
									public static DATA_TYPE_RECORDSET: number;
									public static DATA_TYPE_XML: number;
									public static DATA_TYPE_CUSTOM_CLASS: number;
									public static DATA_TYPE_AMF3: number;
									public static DATA_TYPE_INTEGER: number;
									public static DATA_TYPE_BYTEARRAY: number;
									public static DATA_TYPE_XML_TOP: number;
									public static DATA_TYPE_AMF3_UNDEFINED: number;
									public static DATA_TYPE_AMF3_NULL: number;
									public static DATA_TYPE_AMF3_BOOLEAN_FALSE: number;
									public static DATA_TYPE_AMF3_BOOLEAN_TRUE: number;
									public static DATA_TYPE_AMF3_INTEGER: number;
									public static DATA_TYPE_AMF3_NUMBER: number;
									public static DATA_TYPE_AMF3_STRING: number;
									public static DATA_TYPE_AMF3_XML_LEGACY: number;
									public static DATA_TYPE_AMF3_DATE: number;
									public static DATA_TYPE_AMF3_ARRAY: number;
									public static DATA_TYPE_AMF3_OBJECT: number;
									public static DATA_TYPE_AMF3_XML_TOP: number;
									public static DATA_TYPE_AMF3_BYTEARRAY: number;
									public static AMF_LEVEL0: number;
									public static AMF_LEVEL3: number;
									public static MILLS_PER_HOUR: number;
									public type: number;
									public serialize(param0: java.io.DataOutputStream, param1: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextSerialize): void;
									public static testNextByte(param0: java.nio.ByteBuffer, param1: number): boolean;
									public static isObjStart(param0: java.nio.ByteBuffer, param1: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextDeserialize): boolean;
									public deserialize(param0: java.nio.ByteBuffer, param1: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextDeserialize): void;
									public serialize(param0: number): native.Array<number>;
									public serialize(param0: java.io.DataOutputStream): void;
									public static isArrayStart(param0: java.nio.ByteBuffer, param1: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextDeserialize): boolean;
									public static peekByte(param0: java.nio.ByteBuffer): number;
									public getType(): number;
									public setType(param0: number): void;
									public static isAMF3Start(param0: java.nio.ByteBuffer, param1: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextDeserialize): boolean;
									public static isByteArrayStart(param0: java.nio.ByteBuffer, param1: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextDeserialize): boolean;
									public static skipByte(param0: java.nio.ByteBuffer): number;
									public serialize(): native.Array<number>;
									public constructor();
									public static createContextSerialize(param0: number): com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextSerialize;
									public static createContextDeserialize(param0: number): com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextDeserialize;
									public static isObjEnd(param0: java.nio.ByteBuffer, param1: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextDeserialize): boolean;
									public static deserializeInnerObject(param0: java.nio.ByteBuffer, param1: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextDeserialize): com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFData;
									public static triggerAMF3Switch(param0: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFData): boolean;
									public static createContextSerialize(): com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextSerialize;
									public static getReference(param0: java.nio.ByteBuffer, param1: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextDeserialize): com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFData;
									public serialize(param0: java.io.DataOutputStream, param1: number): void;
									public static isMixedArrayStart(param0: java.nio.ByteBuffer, param1: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextDeserialize): boolean;
									public static createContextDeserialize(): com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextDeserialize;
									public deserialize(param0: java.nio.ByteBuffer): void;
									public getValue(): java.lang.Object;
									public serialize(param0: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextSerialize): native.Array<number>;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFData.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextDeserialize.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextSerialize.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataObj.d.ts" />
/// <reference path="./java.io.DataOutputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module wmstransport {
						export module wms {
							export module amf {
								export class AMFDataArray extends com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFData {
									public static TAG: string;
									public serialize(param0: java.io.DataOutputStream, param1: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextSerialize): void;
									public add(param0: number, param1: string): void;
									public set(param0: number, param1: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFData): void;
									public set(param0: number, param1: string): void;
									public set(param0: number, param1: java.util.Date): void;
									public deserialize(param0: java.nio.ByteBuffer, param1: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextDeserialize): void;
									public getBoolean(param0: number): boolean;
									public serialize(param0: number): native.Array<number>;
									public add(param0: number, param1: java.util.Date): void;
									public set(param0: number, param1: boolean): void;
									public getDate(param0: number): java.util.Date;
									public add(param0: string): void;
									public getInt(param0: number): number;
									public add(param0: number, param1: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFData): void;
									public serialize(param0: java.io.DataOutputStream): void;
									public add(param0: number, param1: boolean): void;
									public getFloat(param0: number): number;
									public constructor(param0: native.Array<number>);
									public add(param0: number, param1: number): void;
									public getDouble(param0: number): number;
									public set(param0: number, param1: number): void;
									public serialize(): native.Array<number>;
									public constructor();
									public add(param0: number): void;
									public size(): number;
									public getByte(param0: number): number;
									public remove(param0: number): com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFData;
									public add(param0: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFData): void;
									public get(param0: number): com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFData;
									public add(param0: boolean): void;
									public getShort(param0: number): number;
									public toString(): string;
									public constructor(param0: native.Array<number>, param1: number, param2: number);
									public getObject(param0: number): com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataObj;
									public serialize(param0: java.io.DataOutputStream, param1: number): void;
									public getString(param0: number): string;
									public add(param0: java.util.Date): void;
									public deserialize(param0: java.nio.ByteBuffer): void;
									public getValue(): java.lang.Object;
									public getLong(param0: number): number;
									public constructor(param0: java.nio.ByteBuffer);
									public serialize(param0: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextSerialize): native.Array<number>;
									public constructor(param0: java.nio.ByteBuffer, param1: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextDeserialize);
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextDeserialize.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextSerialize.d.ts" />
/// <reference path="./java.io.DataOutputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module wmstransport {
						export module wms {
							export module amf {
								export class AMFDataByteArray extends com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFData {
									public static TAG: string;
									public serialize(param0: java.io.DataOutputStream, param1: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextSerialize): void;
									public serialize(): native.Array<number>;
									public constructor();
									public size(): number;
									public static wrap(param0: java.nio.ByteBuffer): com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataByteArray;
									public decompress(): number;
									public deserialize(param0: java.nio.ByteBuffer, param1: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextDeserialize): void;
									public serialize(param0: number): native.Array<number>;
									public toString(): string;
									public constructor(param0: native.Array<number>, param1: number, param2: number);
									public static wrap(param0: native.Array<number>): com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataByteArray;
									public serialize(param0: java.io.DataOutputStream): void;
									public serialize(param0: java.io.DataOutputStream, param1: number): void;
									public getValue(): java.lang.Object;
									public deserialize(param0: java.nio.ByteBuffer): void;
									public constructor(param0: java.nio.ByteBuffer);
									public toByteBuffer(): java.nio.ByteBuffer;
									public serialize(param0: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextSerialize): native.Array<number>;
									public constructor(param0: native.Array<number>);
									public toArray(): native.Array<number>;
									public compress(): number;
									public constructor(param0: java.nio.ByteBuffer, param1: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextDeserialize);
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataTrait.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module wmstransport {
						export module wms {
							export module amf {
								export class AMFDataContextDeserialize {
									public static TAG: string;
									public constructor();
									public addString(param0: string): void;
									public setIntData(param0: number): void;
									public setObjectEncoding(param0: number): void;
									public getTrait(param0: number): com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataTrait;
									public addObject(param0: java.lang.Object): void;
									public constructor(param0: number);
									public isIntData(): boolean;
									public getString(param0: number): string;
									public getObject(param0: number): java.lang.Object;
									public clearIntData(): number;
									public isAMF3(): boolean;
									public addTrait(param0: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataTrait): void;
									public getIntData(): number;
									public isAMF0(): boolean;
									public getObjectEncoding(): number;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataTrait.d.ts" />
/// <reference path="./java.io.DataOutputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module wmstransport {
						export module wms {
							export module amf {
								export class AMFDataContextSerialize {
									public static TAG: string;
									public constructor();
									public setTargetEncoding(param0: number): void;
									public writeString(param0: java.io.DataOutputStream, param1: string): void;
									public getTargetEncoding(): number;
									public isAMF3(): boolean;
									public getObjectReference(param0: java.lang.Object): number;
									public setObjectEncoding(param0: number): void;
									public getStringReference(param0: string): number;
									public getTraitReference(param0: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataTrait): number;
									public constructor(param0: number);
									public isAMF0(): boolean;
									public getObjectEncoding(): number;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextDeserialize.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextSerialize.d.ts" />
/// <reference path="./java.io.DataOutputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
/// <reference path="./java.text.SimpleDateFormat.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./java.util.TimeZone.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module wmstransport {
						export module wms {
							export module amf {
								export class AMFDataItem extends com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFData {
									public static TAG: string;
									public static gmtTimeZone: java.util.TimeZone;
									public static DATEFORMAT: string;
									public fastDateFormat: java.text.SimpleDateFormat;
									public serialize(param0: java.io.DataOutputStream, param1: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextSerialize): void;
									public shortValue(): number;
									public dateValue(): java.util.Date;
									public deserialize(param0: java.nio.ByteBuffer, param1: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextDeserialize): void;
									public serialize(param0: number): native.Array<number>;
									public longValue(): number;
									public serialize(param0: java.io.DataOutputStream): void;
									public constructor(param0: string);
									public intValue(): number;
									public constructor(param0: native.Array<number>);
									public doubleValue(): number;
									public booleanValue(): boolean;
									public serialize(): native.Array<number>;
									public constructor();
									public byteValue(): number;
									public toString(): string;
									public constructor(param0: native.Array<number>, param1: number, param2: number);
									public constructor(param0: number);
									public constructor(param0: boolean);
									public serialize(param0: java.io.DataOutputStream, param1: number): void;
									public constructor(param0: java.util.Date);
									public floatValue(): number;
									public deserialize(param0: java.nio.ByteBuffer): void;
									public getValue(): java.lang.Object;
									public constructor(param0: java.nio.ByteBuffer);
									public serialize(param0: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextSerialize): native.Array<number>;
									public constructor(param0: java.nio.ByteBuffer, param1: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextDeserialize);
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFData.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextDeserialize.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextSerialize.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataObj.d.ts" />
/// <reference path="./java.io.DataOutputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module wmstransport {
						export module wms {
							export module amf {
								export class AMFDataList extends com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFData {
									public static TAG: string;
									public serialize(param0: java.io.DataOutputStream, param1: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextSerialize): void;
									public add(param0: number, param1: string): void;
									public set(param0: number, param1: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFData): void;
									public set(param0: number, param1: string): void;
									public set(param0: number, param1: java.util.Date): void;
									public deserialize(param0: java.nio.ByteBuffer, param1: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextDeserialize): void;
									public getBoolean(param0: number): boolean;
									public serialize(param0: number): native.Array<number>;
									public add(param0: number, param1: java.util.Date): void;
									public set(param0: number, param1: boolean): void;
									public getDate(param0: number): java.util.Date;
									public add(param0: string): void;
									public getInt(param0: number): number;
									public add(param0: number, param1: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFData): void;
									public serialize(param0: java.io.DataOutputStream): void;
									public add(param0: number, param1: boolean): void;
									public getType(param0: number): number;
									public getFloat(param0: number): number;
									public serialize(param0: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextSerialize, param1: native.Array<number>): native.Array<number>;
									public getType(): number;
									public constructor(param0: native.Array<number>);
									public add(param0: number, param1: number): void;
									public getDouble(param0: number): number;
									public set(param0: number, param1: number): void;
									public serialize(): native.Array<number>;
									public constructor();
									public add(param0: number): void;
									public size(): number;
									public getByte(param0: number): number;
									public remove(param0: number): com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFData;
									public add(param0: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFData): void;
									public get(param0: number): com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFData;
									public add(param0: boolean): void;
									public getShort(param0: number): number;
									public toString(): string;
									public constructor(param0: native.Array<number>, param1: number, param2: number);
									public getObject(param0: number): com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataObj;
									public serialize(param0: java.io.DataOutputStream, param1: number): void;
									public getString(param0: number): string;
									public serialize(param0: java.io.DataOutputStream, param1: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextSerialize, param2: native.Array<number>): void;
									public add(param0: java.util.Date): void;
									public deserialize(param0: java.nio.ByteBuffer): void;
									public getValue(): java.lang.Object;
									public getLong(param0: number): number;
									public constructor(param0: java.nio.ByteBuffer);
									public serialize(param0: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextSerialize): native.Array<number>;
									public constructor(param0: java.nio.ByteBuffer, param1: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextDeserialize);
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFData.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextDeserialize.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextSerialize.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataObj.d.ts" />
/// <reference path="./java.io.DataOutputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module wmstransport {
						export module wms {
							export module amf {
								export class AMFDataMixedArray extends com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataObj {
									public static TAG: string;
									public serialize(param0: java.io.DataOutputStream, param1: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextSerialize): void;
									public getObject(param0: string): com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataObj;
									public put(param0: string, param1: string): void;
									public getDate(param0: string): java.util.Date;
									public deserialize(param0: java.nio.ByteBuffer, param1: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextDeserialize): void;
									public getBoolean(param0: number): boolean;
									public serialize(param0: number): native.Array<number>;
									public getDate(param0: number): java.util.Date;
									public put(param0: string, param1: boolean): void;
									public getInt(param0: number): number;
									public serialize(param0: java.io.DataOutputStream): void;
									public getFloat(param0: number): number;
									public getByte(param0: string): number;
									public constructor(param0: native.Array<number>);
									public put(param0: string, param1: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFData): void;
									public put(param0: string, param1: number): void;
									public getDouble(param0: number): number;
									public serialize(): native.Array<number>;
									public getBoolean(param0: string): boolean;
									public constructor();
									public remove(param0: string): com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFData;
									public getDouble(param0: string): number;
									public getLong(param0: string): number;
									public getByte(param0: number): number;
									public remove(param0: number): com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFData;
									public getString(param0: string): string;
									public getShort(param0: string): number;
									public getKeys(): java.util.List;
									public get(param0: number): com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFData;
									public put(param0: string, param1: java.util.Date): void;
									public getShort(param0: number): number;
									public toString(): string;
									public constructor(param0: native.Array<number>, param1: number, param2: number);
									public get(param0: string): com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFData;
									public getKey(param0: number): string;
									public getObject(param0: number): com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataObj;
									public serialize(param0: java.io.DataOutputStream, param1: number): void;
									public getString(param0: number): string;
									public getInt(param0: string): number;
									public deserialize(param0: java.nio.ByteBuffer): void;
									public getLong(param0: number): number;
									public constructor(param0: java.nio.ByteBuffer);
									public serialize(param0: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextSerialize): native.Array<number>;
									public containsKey(param0: string): boolean;
									public getFloat(param0: string): number;
									public constructor(param0: java.nio.ByteBuffer, param1: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextDeserialize);
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFData.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextDeserialize.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextSerialize.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataTrait.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.support.wmstransport.wms.amf.IAMFExternalizable.d.ts" />
/// <reference path="./java.io.DataOutputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module wmstransport {
						export module wms {
							export module amf {
								export class AMFDataObj extends com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFData implements com.wowza.gocoder.sdk.support.wmstransport.wms.amf.IAMFDataObj {
									public static TAG: string;
									public static DECODE_UNDEFINED: number;
									public static DECODE_OBJ_REF: number;
									public static DECODE_TRAITS_REF: number;
									public static DECODE_TRAITS_EXT: number;
									public static DECODE_TRAITS: number;
									public members: java.util.Map;
									public order: java.util.List;
									public trait: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataTrait;
									public serializer: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.IAMFExternalizable;
									public serialize(param0: java.io.DataOutputStream, param1: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextSerialize): void;
									public put(param0: string, param1: string): void;
									public getDate(param0: string): java.util.Date;
									public setSerializer(param0: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.IAMFExternalizable): void;
									public getBoolean(param0: number): boolean;
									public serialize(param0: number): native.Array<number>;
									public put(param0: string, param1: boolean): void;
									public serialize(param0: java.io.DataOutputStream): void;
									public put(param0: string, param1: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFData): void;
									public put(param0: string, param1: number): void;
									public getDouble(param0: number): number;
									public getBoolean(param0: string): boolean;
									public getDouble(param0: string): number;
									public getClassName(): string;
									public remove(param0: number): com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFData;
									public getKeys(): java.util.List;
									public constructor(param0: native.Array<number>, param1: number, param2: number);
									public getObject(param0: number): com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataObj;
									public getString(param0: number): string;
									public getInt(param0: string): number;
									public deserialize(param0: java.nio.ByteBuffer): void;
									public getLong(param0: number): number;
									public constructor(param0: java.nio.ByteBuffer);
									public getFloat(param0: string): number;
									public getObject(param0: string): com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataObj;
									public deserialize(param0: java.nio.ByteBuffer, param1: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextDeserialize): void;
									public getDate(param0: number): java.util.Date;
									public getInt(param0: number): number;
									public getTrait(): com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataTrait;
									public getFloat(param0: number): number;
									public getByte(param0: string): number;
									public constructor(param0: native.Array<number>);
									public serialize(): native.Array<number>;
									public constructor();
									public remove(param0: string): com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFData;
									public size(): number;
									public getLong(param0: string): number;
									public getByte(param0: number): number;
									public getString(param0: string): string;
									public getShort(param0: string): number;
									public get(param0: number): com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFData;
									public put(param0: string, param1: java.util.Date): void;
									public getShort(param0: number): number;
									public toString(): string;
									public get(param0: string): com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFData;
									public getKey(param0: number): string;
									public serialize(param0: java.io.DataOutputStream, param1: number): void;
									public setClassName(param0: string): void;
									public getValue(): java.lang.Object;
									public serialize(param0: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextSerialize): native.Array<number>;
									public containsKey(param0: string): boolean;
									public getSerializer(): com.wowza.gocoder.sdk.support.wmstransport.wms.amf.IAMFExternalizable;
									public constructor(param0: java.nio.ByteBuffer, param1: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextDeserialize);
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFData.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module wmstransport {
						export module wms {
							export module amf {
								export class AMFDataTrait {
									public static TAG: string;
									public constructor();
									public setDynamic(param0: boolean): void;
									public getMember(param0: number): string;
									public addMember(param0: string): void;
									public getClassName(): string;
									public isDynamic(): boolean;
									public clone(): com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataTrait;
									public setClassName(param0: string): void;
									public getMemberCount(): number;
									public getMembers(): java.util.List;
									public getInnerObj(): com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFData;
									public setInnerObj(param0: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFData): void;
									public isMember(param0: string): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module wmstransport {
						export module wms {
							export module amf {
								export class AMFObj {
									public static TAG: string;
									public static AMFDEBUGHEADERSIZE: boolean;
									public static WOWZDEBUGHEADERSIZE: boolean;
									public setLastSentAbsTimecode(param0: boolean): void;
									public setAbsTimecodeShort(param0: number): number;
									public incByteContainerLevel(param0: number): void;
									public isByteContainerFull(): boolean;
									public setObjectEncoding(param0: number): void;
									public getChunkCounter(): number;
									public setId(param0: number): void;
									public setSize(param0: number): void;
									public getSrc(): number;
									public setChunkCounter(param0: number): void;
									public isLongTimecode(): boolean;
									public getType(): number;
									public setType(param0: number): void;
									public addChunk(param0: native.Array<number>, param1: number, param2: number): void;
									public isObjectEncodingAMF3(): boolean;
									public setAbsTimecodeLong(param0: number): number;
									public getTimecode(): number;
									public setNew(param0: boolean): void;
									public getByteContainerLevel(): number;
									public isByteContainerEmpty(): boolean;
									public getSize(): number;
									public isLastSentAbsTimecode(): boolean;
									public isObjectEncodingAMF0(): boolean;
									public setSrc(param0: number): void;
									public toString(): string;
									public constructor(param0: number);
									public setByteContainerLevel(param0: number): void;
									public constructor(param0: number, param1: number);
									public getAbsTimecode(): number;
									public clearByteContainer(): void;
									public isNew(): boolean;
									public getChunks(): java.util.List;
									public incAbsTimecode(param0: number): number;
									public setLongTimecode(param0: boolean): void;
									public getId(): number;
									public setTimecode(param0: number): void;
									public getObjectEncoding(): number;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module wmstransport {
						export module wms {
							export module amf {
								export class AMFObjChunk {
									public static TAG: string;
									public buffer: native.Array<number>;
									public offset: number;
									public len: number;
									public constructor(param0: native.Array<number>, param1: number, param2: number);
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.nio.ByteBuffer.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module wmstransport {
						export module wms {
							export module amf {
								export class AMFPacket {
									public static TAG: string;
									public clone(): com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFPacket;
									public constructor(param0: number, param1: number, param2: native.Array<number>);
									public setSize(param0: number): void;
									public getSrc(): number;
									public isAudio(): boolean;
									public getData(): native.Array<number>;
									public static calcTotalPacketSize(param0: number, param1: number, param2: number, param3: number, param4: boolean): number;
									public getType(): number;
									public setType(param0: number): void;
									public isVideo(): boolean;
									public clone(param0: boolean): com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFPacket;
									public getDataBuffer(): java.nio.ByteBuffer;
									public setTimecodes(param0: number, param1: number): void;
									public setAbsTimecode(param0: number): void;
									public getMissing(): number;
									public constructor();
									public getTimecode(): number;
									public constructor(param0: number, param1: number, param2: number);
									public getSize(): number;
									public getSeq(): number;
									public setSrc(param0: number): void;
									public toString(): string;
									public setSeq(param0: number): void;
									public truncatePacket(param0: number): void;
									public getFirstByte(): number;
									public getAbsTimecode(): number;
									public setDataBuffer(param0: java.nio.ByteBuffer): void;
									public addData(param0: native.Array<number>, param1: number, param2: number): number;
									public addDataEx(param0: native.Array<number>, param1: number, param2: number, param3: number): number;
									public setDataBuffer(param0: native.Array<number>): void;
									public setTimecode(param0: number): void;
									public getSecondByte(): number;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFData.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataObj.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module wmstransport {
						export module wms {
							export module amf {
								export class IAMFDataObj {
									/**
									 * Constructs a new instance of the com.wowza.gocoder.sdk.support.wmstransport.wms.amf.IAMFDataObj interface with the provided implementation.
									 */
									public constructor(implementation: {
										containsKey(param0: string): boolean;
										put(param0: string, param1: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFData): void;
										put(param0: string, param1: string): void;
										put(param0: string, param1: number): void;
										put(param0: string, param1: number): void;
										put(param0: string, param1: number): void;
										put(param0: string, param1: java.util.Date): void;
										put(param0: string, param1: boolean): void;
										getKeys(): java.util.List;
										getKey(param0: number): string;
										get(param0: string): com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFData;
										get(param0: number): com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFData;
										remove(param0: string): com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFData;
										remove(param0: number): com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFData;
										getString(param0: string): string;
										getInt(param0: string): number;
										getLong(param0: string): number;
										getShort(param0: string): number;
										getDouble(param0: string): number;
										getFloat(param0: string): number;
										getByte(param0: string): number;
										getBoolean(param0: string): boolean;
										getDate(param0: string): java.util.Date;
										getObject(param0: string): com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataObj;
										getString(param0: number): string;
										getInt(param0: number): number;
										getLong(param0: number): number;
										getShort(param0: number): number;
										getByte(param0: number): number;
										getDouble(param0: number): number;
										getFloat(param0: number): number;
										getBoolean(param0: number): boolean;
										getDate(param0: number): java.util.Date;
										getObject(param0: number): com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataObj;
									});
									public static TAG: string;
									public getObject(param0: string): com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataObj;
									public put(param0: string, param1: string): void;
									public getDate(param0: string): java.util.Date;
									public getBoolean(param0: number): boolean;
									public getDate(param0: number): java.util.Date;
									public put(param0: string, param1: boolean): void;
									public getInt(param0: number): number;
									public getFloat(param0: number): number;
									public getByte(param0: string): number;
									public put(param0: string, param1: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFData): void;
									public put(param0: string, param1: number): void;
									public getDouble(param0: number): number;
									public getBoolean(param0: string): boolean;
									public remove(param0: string): com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFData;
									public getDouble(param0: string): number;
									public getLong(param0: string): number;
									public getByte(param0: number): number;
									public remove(param0: number): com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFData;
									public getString(param0: string): string;
									public getShort(param0: string): number;
									public getKeys(): java.util.List;
									public get(param0: number): com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFData;
									public put(param0: string, param1: java.util.Date): void;
									public getShort(param0: number): number;
									public get(param0: string): com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFData;
									public getKey(param0: number): string;
									public getObject(param0: number): com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataObj;
									public getString(param0: number): string;
									public getInt(param0: string): number;
									public getLong(param0: number): number;
									public containsKey(param0: string): boolean;
									public getFloat(param0: string): number;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextDeserialize.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextSerialize.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataObj.d.ts" />
/// <reference path="./java.io.DataOutputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module wmstransport {
						export module wms {
							export module amf {
								export class IAMFExternalizable {
									/**
									 * Constructs a new instance of the com.wowza.gocoder.sdk.support.wmstransport.wms.amf.IAMFExternalizable interface with the provided implementation.
									 */
									public constructor(implementation: {
										deserialize(param0: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataObj, param1: java.nio.ByteBuffer, param2: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextDeserialize): void;
										serialize(param0: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataObj, param1: java.io.DataOutputStream, param2: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextSerialize): void;
										getClassName(): string;
										setClassName(param0: string): void;
									});
									public setClassName(param0: string): void;
									public getClassName(): string;
									public deserialize(param0: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataObj, param1: java.nio.ByteBuffer, param2: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextDeserialize): void;
									public serialize(param0: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataObj, param1: java.io.DataOutputStream, param2: com.wowza.gocoder.sdk.support.wmstransport.wms.amf.AMFDataContextSerialize): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module wmstransport {
						export module wms {
							export module b {
								export module a {
									export class a {
										public a: native.Array<number>;
										public b: java.util.List;
										public constructor();
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module wmstransport {
						export module wms {
							export module c {
								export class a {
									public constructor();
									public static b(param0: native.Array<number>, param1: java.util.List, param2: native.Array<number>): native.Array<number>;
									public static a(param0: native.Array<number>, param1: java.util.List, param2: native.Array<number>): native.Array<number>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module wmstransport {
						export module wms {
							export module d {
								export class a {
									public static a: number;
									public static b: number;
									public static c: number;
									public static d: number;
									public static e: number;
									public static f: number;
									public static g: number;
									public static h: number;
									public static i: number;
									public static j: number;
									public static k: number;
									public static l: number;
									public static m: number;
									public static n: number;
									public static o: number;
									public static p: number;
									public static q: number;
									public static r: number;
									public static s: number;
									public static t: number;
									public static u: number;
									public static v: number;
									public static w: number;
									public static x: number;
									public static y: number;
									public static z: number;
									public static A: number;
									public static B: number;
									public static C: number;
									public static D: number;
									public static E: number;
									public static F: number;
									public static G: number;
									public static H: number;
									public static I: number;
									public static J: number;
									public static K: number;
									public static L: number;
									public static M: number;
									public static N: number;
									public static O: number;
									public static P: number;
									public static Q: number;
									public static R: number;
									public static S: number;
									public static T: number;
									public static U: number;
									public static V: number;
									public static W: number;
									public static X: number;
									public static Y: number;
									public static Z: number;
									public static aa: number;
									public static ab: number;
									public static ac: number;
									public static ad: number;
									public static ae: number;
									public static af: number;
									public constructor();
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.data.WZDataMap.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.data.WZDataScope.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.status.WZStatus.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.support.wse.d.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module wse {
						export abstract class a {
							public g: boolean;
							public constructor();
							public a(param0: number): void;
							public isAudioEnabled(): boolean;
							public setVideoEnabled(param0: boolean): void;
							public e(): com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig;
							public b(): number;
							public isAudioPaused(): boolean;
							public setAudioPaused(param0: boolean): void;
							public a(param0: boolean): void;
							public a(param0: string, param1: com.wowza.gocoder.sdk.api.data.WZDataEvent.EventListener): void;
							public a(param0: com.wowza.gocoder.sdk.api.data.WZDataScope, param1: string, param2: com.wowza.gocoder.sdk.api.data.WZDataMap, param3: com.wowza.gocoder.sdk.api.data.WZDataEvent.ResultCallback): void;
							public a(param0: com.wowza.gocoder.sdk.api.data.WZDataEvent.ResultCallback): void;
							public d(): com.wowza.gocoder.sdk.api.status.WZStatus;
							public f(): void;
							public c(): boolean;
							public setAudioEnabled(param0: boolean): void;
							public isVideoPaused(): boolean;
							public setVideoPaused(param0: boolean): void;
							public a(): com.wowza.gocoder.sdk.support.wse.d;
							public isVideoEnabled(): boolean;
							public b(param0: string, param1: com.wowza.gocoder.sdk.api.data.WZDataEvent.EventListener): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.api.configuration.WZStreamConfig.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.data.WZDataMap.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.data.WZDataScope.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.status.WZStatus.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.support.wse.d.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module wse {
						export class b extends com.wowza.gocoder.sdk.support.wse.a implements com.wowza.gocoder.sdk.api.data.WZDataEvent.EventListener {
							public constructor();
							public a(param0: number): void;
							public a(param0: com.wowza.gocoder.sdk.api.data.WZDataScope, param1: string, param2: com.wowza.gocoder.sdk.api.data.WZDataMap, param3: com.wowza.gocoder.sdk.api.data.WZDataEvent.ResultCallback): void;
							public a(param0: com.wowza.gocoder.sdk.api.data.WZDataEvent.ResultCallback): void;
							public onWZDataEvent(param0: string, param1: com.wowza.gocoder.sdk.api.data.WZDataMap): com.wowza.gocoder.sdk.api.data.WZDataMap;
							public a(param0: com.wowza.gocoder.sdk.api.configuration.WZStreamConfig, param1: number, param2: com.wowza.gocoder.sdk.api.player.WZPlayerAPI.WZVideoStreamReceiver, param3: com.wowza.gocoder.sdk.api.player.WZPlayerAPI.WZAudioStreamReceiver): com.wowza.gocoder.sdk.api.status.WZStatus;
							public h(): com.wowza.gocoder.sdk.api.data.WZDataMap;
							public a(param0: com.wowza.gocoder.sdk.api.player.WZPlayerAPI.WZVideoStreamReceiver, param1: com.wowza.gocoder.sdk.api.player.WZPlayerAPI.WZAudioStreamReceiver): com.wowza.gocoder.sdk.api.status.WZStatus;
							public g(): com.wowza.gocoder.sdk.api.status.WZStatus;
							public a(): com.wowza.gocoder.sdk.support.wse.d;
							public a(param0: boolean): void;
							public a(param0: string, param1: com.wowza.gocoder.sdk.api.data.WZDataEvent.EventListener): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.status.WZStatus.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module wse {
						export class c extends com.wowza.gocoder.sdk.support.wse.a implements com.wowza.gocoder.sdk.api.sink.WZSinkAPI.StreamingAudioSink, com.wowza.gocoder.sdk.api.sink.WZSinkAPI.StreamingVideoSink {
							public h: boolean;
							public constructor();
							public stopBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
							public isAudioEnabled(): boolean;
							public setVideoEnabled(param0: boolean): void;
							public isAudioPaused(): boolean;
							public getBroadcastConfig(): com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig;
							public startBroadcasting(): com.wowza.gocoder.sdk.api.status.WZStatus;
							public setAudioPaused(param0: boolean): void;
							public prepareForBroadcast(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig): com.wowza.gocoder.sdk.api.status.WZStatus;
							public onVideoConfigFrame(param0: native.Array<number>, param1: number): void;
							public onParameterSets(param0: native.Array<number>, param1: native.Array<number>): void;
							public getStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
							public onVideoFrame(param0: number, param1: native.Array<number>, param2: number): void;
							public setAudioEnabled(param0: boolean): void;
							public isVideoPaused(): boolean;
							public setVideoPaused(param0: boolean): void;
							public onAudioFrame(param0: number, param1: native.Array<number>, param2: number): void;
							public isVideoEnabled(): boolean;
							public getBroadcasterStatus(): com.wowza.gocoder.sdk.api.status.WZStatus;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.data.WZDataMap.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.data.WZDataScope.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.errors.WZError.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.support.wse.jni.wmstransport.WMSTransport.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module wse {
						export class d {
							public b(): com.wowza.gocoder.sdk.support.wse.jni.wmstransport.WMSTransport;
							public a(param0: boolean): com.wowza.gocoder.sdk.api.errors.WZError;
							public e(): number;
							public f(param0: number): number;
							public onFunctionCallResultReceived(param0: number, param1: com.wowza.gocoder.sdk.api.data.WZDataMap, param2: boolean, param3: number, param4: number): void;
							public k(): void;
							public s(): number;
							public a(param0: number, param1: number, param2: com.wowza.gocoder.sdk.api.player.WZPlayerAPI.WZVideoStreamReceiver, param3: com.wowza.gocoder.sdk.api.player.WZPlayerAPI.WZAudioStreamReceiver): number;
							public a(param0: com.wowza.gocoder.sdk.api.data.WZDataEvent.ResultCallback): void;
							public f(): boolean;
							public h(): boolean;
							public m(): number;
							public d(param0: number): number;
							public b(param0: number): number;
							public p(): number;
							public b(param0: string, param1: com.wowza.gocoder.sdk.api.data.WZDataEvent.EventListener): void;
							public g(): void;
							public b(param0: number, param1: native.Array<number>, param2: number, param3: number): number;
							public u(): number;
							public onFunctionCallRequestReceived(param0: string, param1: com.wowza.gocoder.sdk.api.data.WZDataMap, param2: number, param3: number, param4: number): void;
							public a(param0: string, param1: com.wowza.gocoder.sdk.api.data.WZDataEvent.EventListener): void;
							public a(param0: com.wowza.gocoder.sdk.api.data.WZDataScope, param1: string, param2: com.wowza.gocoder.sdk.api.data.WZDataMap, param3: com.wowza.gocoder.sdk.api.data.WZDataEvent.ResultCallback): void;
							public c(param0: number): void;
							public n(): com.wowza.gocoder.sdk.api.data.WZDataMap;
							public v(): number;
							public l(): number;
							public a(param0: number): void;
							public o(): number;
							public i(): number;
							public a(param0: number, param1: number): number;
							public b(param0: com.wowza.gocoder.sdk.api.player.WZPlayerAPI.WZVideoStreamReceiver, param1: com.wowza.gocoder.sdk.api.player.WZPlayerAPI.WZAudioStreamReceiver): number;
							public e(param0: number): number;
							public w(): number;
							public a(): number;
							public t(): number;
							public constructor();
							public x(): number;
							public a(param0: number, param1: native.Array<number>, param2: number, param3: number): number;
							public y(): void;
							public j(): void;
							public a(param0: com.wowza.gocoder.sdk.api.broadcast.WZBroadcastConfig): void;
							public c(): com.wowza.gocoder.sdk.api.errors.WZError;
							public a(param0: com.wowza.gocoder.sdk.api.player.WZPlayerAPI.WZVideoStreamReceiver, param1: com.wowza.gocoder.sdk.api.player.WZPlayerAPI.WZAudioStreamReceiver): number;
							public a(param0: native.Array<number>, param1: native.Array<number>): void;
							public q(): number;
							public r(): number;
							public d(): com.wowza.gocoder.sdk.api.errors.WZError;
							public a(param0: number, param1: com.wowza.gocoder.sdk.api.player.WZPlayerAPI.WZVideoStreamReceiver, param2: com.wowza.gocoder.sdk.api.player.WZPlayerAPI.WZAudioStreamReceiver): number;
							public a(param0: number, param1: string): com.wowza.gocoder.sdk.api.errors.WZError;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.wowza.gocoder.sdk.api.data.WZDataList.d.ts" />
/// <reference path="./com.wowza.gocoder.sdk.api.data.WZDataMap.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.StringBuffer.d.ts" />
declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module wse {
						export module jni {
							export module wmstransport {
								export class WMSTransport {
									public static PUSHPUBLISHSESSIONWOWZ_MAXSTREAMCOUNT: number;
									public static PUSHPUBLISHSESSIONWOWZ_CHANNELCOUNT: number;
									public static PUSHPUBLISHSESSIONWOWZ_MAXERRORSTR: number;
									public static PUSHPUBLISHSESSIONWOWZ_HANDSHAKESIZE_CLIENT0: number;
									public static PUSHPUBLISHSESSIONWOWZ_HANDSHAKESIZE_SERVER0: number;
									public static PUSHPUBLISHSESSIONWOWZ_HANDSHAKESIZE_CLIENT1: number;
									public static PUSHPUBLISHSESSIONWOWZ_DEFAULTINPUTBUFFERSIZE: number;
									public static PUSHPUBLISHSESSIONWOWZ_CONFIRM_BYTESRECEIVED: number;
									public static SESSIONDIRECTION_PUBLISH: number;
									public static SESSIONDIRECTION_PLAY: number;
									public static SESSIONSTATE_HANDSHAKE_SERVER0_SEND: number;
									public static SESSIONSTATE_HANDSHAKE_SERVER0_SENT: number;
									public static SESSIONSTATE_HANDSHAKE_SERVER1_SEND: number;
									public static SESSIONSTATE_HANDSHAKE_SERVER1_SENT: number;
									public static SESSIONSTATE_CONNECT_SENT: number;
									public static SESSIONSTATE_CONNECT_AUTH_NEEDAUTH: number;
									public static SESSIONSTATE_CONNECT_AUTH_AUTHFAILED: number;
									public static SESSIONSTATE_CONNECT_AUTH_AUTHREQ: number;
									public static SESSIONSTATE_CONNECT_REDIRECT: number;
									public static SESSIONSTATE_CONNECT_REJECTED: number;
									public static SESSIONSTATE_PUBLISH_DENIED: number;
									public static SESSIONSTATE_CONNECTED: number;
									public static SESSIONSTATE_CLOSING: number;
									public static SESSIONSTATE_CLOSED: number;
									public static STREAMSTATE_START: number;
									public static STREAMSTATE_PUBLISH: number;
									public static STREAMSTATE_UNPUBLISH: number;
									public static STREAMSTATE_PUBLISH_DENIED: number;
									public static STREAMSTATE_PLAY: number;
									public static STREAMSTATE_PLAYFAILED: number;
									public static STREAMSTATE_PLAYSTOP: number;
									public static SESSIONERROR_NOERROR: number;
									public static SESSIONERROR_ALLOCFAILED: number;
									public static SESSIONERROR_MESSAGEOUTOFORDER: number;
									public static SESSIONERROR_INVALIDPROTOCOL: number;
									public static SESSIONERROR_INVALIDMESSAGETYPE_MEDIA: number;
									public static SESSIONERROR_INVALIDMESSAGETYPE_UNKNOWN: number;
									public static SESSIONERROR_INVALIDMESSAGETYPE_SHAREDOBJECT: number;
									public static SESSIONERROR_NOTFOUNDRESULT: number;
									public static SESSIONERROR_CONNECTIONFAILED: number;
									public static SESSIONERROR_CONNECTIONAUTHFAILED: number;
									public static SESSIONERROR_CONNECTIONREJECTED: number;
									public static SESSIONERROR_CONNECTIONAUTHWRONGCREDENTIALS: number;
									public static SESSIONERROR_STREAMCREATEFAILED: number;
									public static SESSIONERROR_STREAMCREATECANNOTFINDSTREAM: number;
									public static SESSIONERROR_STREAMFAILURE: number;
									public static SESSIONPENDINGFUNCTION_CONNECT: number;
									public static SESSIONPENDINGFUNCTION_CREATESTREAM: number;
									public static SESSIONPENDINGFUNCTION_TOTAL: number;
									public static STREAMPENDINGFUNCTION_PUBLISH: number;
									public static STREAMPENDINGFUNCTION_TOTAL: number;
									public static SESSIONLOGLEVEL_VERBOSE: number;
									public static SESSIONLOGLEVEL_DEBUG: number;
									public static SESSIONLOGLEVEL_INFO: number;
									public static SESSIONLOGLEVEL_WARN: number;
									public static SESSIONLOGLEVEL_ERROR: number;
									public static WZ_LOGLEVEL_VERBOSE: number;
									public static WZ_LOGLEVEL_DEBUG: number;
									public static WZ_LOGLEVEL_INFO: number;
									public static WZ_LOGLEVEL_WARN: number;
									public static WZ_LOGLEVEL_ERROR: number;
									public getTotalBytesWritten(): number;
									public getVideoCodec(): number;
									public getVideoDataOffset(): number;
									public getVideoFrameType(): number;
									public holderGetBufferPtr(): native.Array<number>;
									public streamSetVideoAVCLevel(param0: number, param1: number): void;
									public streamSetAudioDataRate(param0: number, param1: number): void;
									public pushPublishAudioCodecStringToId(param0: string): number;
									public getSessionState(): number;
									public newSession(): boolean;
									public setLogLevel(param0: number): void;
									public registerDataEventListener(param0: string, param1: com.wowza.gocoder.sdk.api.data.WZDataEvent.EventListener): number;
									public getRedirectURL(param0: java.lang.StringBuffer, param1: number): void;
									public sendModuleFunctionResult(param0: number, param1: number, param2: number, param3: com.wowza.gocoder.sdk.api.data.WZDataMap, param4: boolean): number;
									public sendModuleFunctionCall(param0: number, param1: number, param2: string, param3: com.wowza.gocoder.sdk.api.data.WZDataMap, param4: com.wowza.gocoder.sdk.api.data.WZDataEvent.ResultCallback): number;
									public clearError(): void;
									public streamSetVideoDisplaySize(param0: number, param1: number, param2: number): void;
									public setAuthSalt(param0: string): void;
									public streamSetOnMetaDataExtra(param0: number, param1: com.wowza.gocoder.sdk.api.data.WZDataMap): void;
									public audioGenerateElementary(param0: native.Array<number>, param1: native.Array<number>, param2: native.Array<boolean>): number;
									public getSessionError(): number;
									public holderGetType(): number;
									public streamSetAudioSampleRate(param0: number, param1: number): void;
									public pushPublishVideoCodecStringToId(param0: string): number;
									public isAudioCodecConfig(): boolean;
									public streamSetPlayStart(param0: number, param1: number): void;
									public getTotalBytesRead(): number;
									public getMessagesToWriteLen(): number;
									public parserInit(param0: number): number;
									public getInputBufferSize(): number;
									public isVideoKeyFrame(): boolean;
									public getAudioCodec(): number;
									public destroySession(): void;
									public streamSetAudioCodecId(param0: number, param1: number): void;
									public streamAddAudioFrame(param0: number, param1: number, param2: native.Array<number>, param3: number): number;
									public readParseBytes(param0: number): number;
									public audioSetCodecConfig(): number;
									public streamSetVideoFrameSize(param0: number, param1: number, param2: number): void;
									public sendPingRequest(param0: com.wowza.gocoder.sdk.api.data.WZDataEvent.ResultCallback): number;
									public getTotalBytesPending(): number;
									public holderGetTimecode(): number;
									public incrementMessageBytesWritten(param0: number): number;
									public setConnectionFlashVersion(param0: string): void;
									public unregisterDataEventListener(param0: string, param1: com.wowza.gocoder.sdk.api.data.WZDataEvent.EventListener): number;
									public streamAddDataFrame(param0: number, param1: number, param2: com.wowza.gocoder.sdk.api.data.WZDataList): number;
									public streamSetVideoAVCProfile(param0: number, param1: number): void;
									public parserNextMessage(): number;
									public getAuthSalt(param0: number): string;
									public getStreamMetadata(): com.wowza.gocoder.sdk.api.data.WZDataMap;
									public parserDone(): number;
									public setAuthUserName(param0: string): void;
									public isVideoEnhancedSeek(param0: number): boolean;
									public streamSetAudioAACObjectType(param0: number, param1: number): void;
									public streamAddVideoFrame(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>, param5: number): number;
									public constructor(param0: com.wowza.gocoder.sdk.support.wse.jni.wmstransport.WMSTransport.FunctionListener);
									public getAuthChallenge(param0: number): string;
									public getMessagesToWrite(): native.Array<number>;
									public prepareSession(): number;
									public holderGetBufferLen(): number;
									public videoGenerateElementary(param0: native.Array<number>, param1: native.Array<number>, param2: native.Array<boolean>): number;
									public streamSetStreamName(param0: number, param1: string): void;
									public closeStream(param0: number): number;
									public streamSetVideoNALSPS(param0: number, param1: native.Array<number>, param2: number): void;
									public getAudioDataOffset(): number;
									public setAuthPassword(param0: string): void;
									public addStream(): number;
									public parseBytes(param0: number, param1: com.wowza.gocoder.sdk.api.player.WZPlayerAPI.WZVideoStreamReceiver, param2: com.wowza.gocoder.sdk.api.player.WZPlayerAPI.WZAudioStreamReceiver): number;
									public setDirection(param0: number): void;
									public closeSession(param0: number): number;
									public streamSetVideoCodecId(param0: number, param1: number): void;
									public setAuthOpaque(param0: string): void;
									public streamGetState(param0: number): number;
									public getAuthOpaque(param0: number): string;
									public setConnectionURL(param0: string): void;
									public setAuthChallenge(param0: string): void;
									public sendStreamDataEvent(param0: number, param1: number, param2: string, param3: com.wowza.gocoder.sdk.api.data.WZDataMap): number;
									public streamSetVideoNALPPS(param0: number, param1: native.Array<number>, param2: number): void;
									public isVideoCodecConfig(): boolean;
									public streamSetVideoFrameRate(param0: number, param1: number): void;
									public setInputBuffer(param0: native.Array<number>, param1: number): void;
									public getSessionErrorDescription(): string;
									public videoSetCodecConfig(): number;
									public streamSetVideoDataRate(param0: number, param1: number): void;
									public streamSetAudioChannels(param0: number, param1: number): void;
								}
								export module WMSTransport {
									export class FunctionListener {
										/**
										 * Constructs a new instance of the com.wowza.gocoder.sdk.support.wse.jni.wmstransport.WMSTransport$FunctionListener interface with the provided implementation.
										 */
										public constructor(implementation: {
											onFunctionCallRequestReceived(param0: string, param1: com.wowza.gocoder.sdk.api.data.WZDataMap, param2: number, param3: number, param4: number): void;
											onFunctionCallResultReceived(param0: number, param1: com.wowza.gocoder.sdk.api.data.WZDataMap, param2: boolean, param3: number, param4: number): void;
										});
										public onFunctionCallResultReceived(param0: number, param1: com.wowza.gocoder.sdk.api.data.WZDataMap, param2: boolean, param3: number, param4: number): void;
										public onFunctionCallRequestReceived(param0: string, param1: com.wowza.gocoder.sdk.api.data.WZDataMap, param2: number, param3: number, param4: number): void;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module wse {
						export module jni {
							export module wmstransport {
								export class a {
									public static a: number;
									public static b: number;
									public static c: number;
									public static d: number;
									public static e: number;
									public static f: number;
									public static g: number;
									public static h: number;
									public static i: number;
									public static j: number;
									public static k: number;
									public static l: number;
									public static m: number;
									public static n: number;
									public static o: number;
									public static p: number;
									public static q: number;
									public static r: number;
									public static s: number;
									public static t: number;
									public static u: number;
									public static v: number;
									public static w: number;
									public static x: number;
									public static y: number;
									public static z: number;
									public static A: number;
									public static B: number;
									public static C: number;
									public static D: number;
									public static E: number;
									public static F: number;
									public static G: number;
									public static H: number;
									public static I: number;
									public static J: number;
									public static K: number;
									public static L: number;
									public static M: number;
									public static N: number;
									public static O: number;
									public static P: number;
									public static Q: number;
									public static R: number;
									public static S: number;
									public static T: number;
									public static U: number;
									public static V: number;
									public static W: number;
									public static X: number;
									public static Y: number;
									public static Z: number;
									public static aa: number;
									public static ab: number;
									public static ac: number;
									public static ad: number;
									public static ae: number;
									public static af: number;
									public static ag: number;
									public static ah: number;
									public static ai: number;
									public static aj: string;
									public static ak: string;
									public static al: string;
									public static am: string;
									public static an: string;
									public static ao: string;
									public static ap: string;
									public static aq: string;
									public static ar: string;
									public static as: string;
									public static at: string;
									public static au: string;
									public static av: number;
									public static aw: number;
									public static ax: number;
									public static ay: number;
									public static az: number;
									public static aA: number;
									public static aB: number;
									public static aC: number;
									public static aD: number;
									public static aE: number;
									public static aF: number;
									public static aG: number;
									public static aH: number;
									public static aI: number;
									public static aJ: number;
									public static aK: number;
									public static aL: number;
									public static aM: native.Array<number>;
									public static aN: native.Array<number>;
									public static aO: native.Array<number>;
									public static aP: native.Array<number>;
									public static aQ: native.Array<number>;
									public static aR: number;
									public static aS: number;
									public static aT: number;
									public static aU: number;
									public static aV: number;
									public static aW: number;
									public static aX: number;
									public static aY: number;
									public static aZ: number;
									public static ba: number;
									public static bb: number;
									public static bc: number;
									public static bd: number;
									public static be: number;
									public static bf: number;
									public static bg: number;
									public static bh: number;
									public static bi: number;
									public static bj: number;
									public static bk: number;
									public static bl: number;
									public static bm: number;
									public static bn: number;
									public static bo: number;
									public static bp: number;
									public static bq: number;
									public static br: number;
									public static bs: number;
									public static bt: number;
									public static bu: number;
									public static bv: number;
									public static bw: number;
									public static bx: number;
									public static by: number;
									public static bz: number;
									public static bA: number;
									public static bB: number;
									public static bC: number;
									public static bD: number;
									public constructor();
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module wowza {
		export module gocoder {
			export module sdk {
				export module support {
					export module wse {
						export module jni {
							export module wmstransport {
								export class b {
									public static a: number;
									public static b: number;
									public static c: number;
									public constructor();
								}
							}
						}
					}
				}
			}
		}
	}
}

