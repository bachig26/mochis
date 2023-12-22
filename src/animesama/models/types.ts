import { MochiResponse, PlaylistEpisodeServerSubtitle, PlaylistGroup } from "@mochiapp/js/dist";

export type Anime = {
    title: string;
    altTitle?: string;
    posterImage?: string;
    url: string;
    filters: {[id: string]: string[]}
}

export type RequestingPlaylistGroup = {
    playlistGroup: PlaylistGroup;
    promises: Map<string, Promise<MochiResponse>>;
}

export interface IVideo {
    /**
     * The **MAIN URL** of the video provider that should take you to the video
     */
    url: string;
    /**
     * The Quality of the video should include the `p` suffix
     */
    quality?: string;
    /**
     * make sure to set this to `true` if the video is hls
     */
    isM3U8?: boolean;
    /**
     * set this to `true` if the video is dash (mpd)
     */
    isDASH?: boolean;
    /**
     * size of the video in **bytes**
     */
    size?: number;
    [x: string]: unknown; // other fields
}

export interface ISource {
    headers?: { [k: string]: string };
    subtitles?: PlaylistEpisodeServerSubtitle[];
    sources: IVideo[];
    download?: string;
    embedURL?: string;
}