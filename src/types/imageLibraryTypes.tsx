export type mediaType = string

export interface IResponseLib {
    fileName: string,
    fileSize: number,
    height: number,
    type: string,
    uri: string,
    width: number
}

export type Callback = (response: ImagePickerResponse) => any;

export interface ImageLibraryOptions {
    selectionLimit?: number;
    mediaType: MediaType;
    maxWidth?: number;
    maxHeight?: number;
    quality?: PhotoQuality;
    videoQuality?: AndroidVideoOptions | iOSVideoOptions;
    includeBase64?: boolean;
    includeExtra?: boolean;
}

export interface CameraOptions
    extends Omit<ImageLibraryOptions, 'selectionLimit'> {
    durationLimit?: number;
    saveToPhotos?: boolean;
    cameraType?: CameraType;
}

export interface Asset {
    base64?: string;
    uri?: string;
    width?: number;
    height?: number;
    fileSize?: number;
    type?: string;
    fileName?: string;
    duration?: number;
    bitrate?: number;
    timestamp?: string;
    id?: string;
}

export interface ImagePickerResponse {
    didCancel?: boolean;
    errorCode?: ErrorCode;
    errorMessage?: string;
    assets?: Asset[];
}

export type PhotoQuality =
    | 0
    | 0.1
    | 0.2
    | 0.3
    | 0.4
    | 0.5
    | 0.6
    | 0.7
    | 0.8
    | 0.9
    | 1;
export type CameraType = 'back' | 'front';
export type MediaType = 'photo' | 'video' | 'mixed';
export type AndroidVideoOptions = 'low' | 'high';
export type iOSVideoOptions = 'low' | 'medium' | 'high';
export type ErrorCode = 'camera_unavailable' | 'permission' | 'others';

/*
*{
* "fileName": "rn_image_picker_lib_temp_e3c554ff-c0e2-4c82-8a6f-56a9cee350a1.jpg",
* "fileSize": 491147,
* "height": 1600,
* "type": "image/jpeg",
* "uri": "file:///data/user/0/com.mobileapp/cache/rn_image_picker_lib_temp_e3c554ff-c0e2-4c82-8a6f-56a9cee350a1.jpg",
* "width": 720
* }
* */
