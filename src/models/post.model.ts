import {ImageModel} from "@/models/image.model.ts";
import {VideoModel} from "@/models/video.model.ts";

export interface PostModel {
    allowComments: boolean;
    category: string;
    categoryNames: string[];
    collectionName: string;
    userPhotoURL: string;
    userName: string;
    sharedCount: number;
    commentsCount: number;
    likesCount: number;
    mediaPhotos: ImageModel[];
    country: string;
    description: string;
    dynamicLinkOfProduct: string;
    flagEmoji: string;
    id: string;
    idUser: string;
    isBusinessAccount: boolean;
    isDeleted: boolean;
    isEnabled: boolean;
    media: VideoModel[];
    modify: boolean;
    paginaWeb: string | null;
    //photoVideoArray: ["Photo"],
    profileBackgroundColor: string;
    region: string[];
    userTokenNotification: string;
}