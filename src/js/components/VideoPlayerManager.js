import $ from "jquery";

export default class VideoPlayerManager {
    constructor(videoSelector) {
        this.videoElement = $(videoSelector);
    }

    init() {
        for (let video of this.videoElement) {
            const button = $(video).siblings(".video-play-button");
            button.on("click", () => {
                this.toggleVideoPlay(video, button);
            });
            $(video).on("pause", () => {
                button.html('<i class="icon icon-play"></i>');
                button.addClass("play").removeClass("pause");
            });
            $(video).on("play", () => {
                button.html('<i class="icon icon-pause"></i>');
                button.addClass("pause").removeClass("play");
            });
        }
    }

    toggleVideoPlay(video, button) {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }
}