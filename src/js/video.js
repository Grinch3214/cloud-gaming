export function initVideoButton() {
	document.addEventListener("DOMContentLoaded", function () {
		const playButton = document.getElementById("playButton");
		const video = document.getElementById("video");

		playButton.addEventListener("click", function () {
			if (video.paused || video.ended) {
				video.play();
			}
		});

		video.addEventListener("click", function () {
			if (video.paused || video.ended) {
				video.play();
			} else {
				video.pause();
			}
		});

		video.addEventListener("play", function () {
			playButton.classList.add("hidden");
		});

		video.addEventListener("pause", function () {
			playButton.classList.remove("hidden");
		});

		video.addEventListener("ended", function () {
			playButton.classList.remove("hidden");
		});
	});
}