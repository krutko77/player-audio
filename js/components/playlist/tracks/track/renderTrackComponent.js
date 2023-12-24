import { createElementWithClass } from "../../../../helpers.js";

export function renderTrack(inputTrack, tracksList) {
	let trackElement = createElementWithClass("li", "list__item");
	let trackBlock = createElementWithClass("div", "list__grid", "grid");
	trackElement.append(trackBlock);
	let trackImageBox = createElementWithClass("div", "grid__img-box");
	trackBlock.append(trackImageBox);
	let trackTitle = createElementWithClass("div", "grid__track-title");
	trackBlock.append(trackTitle);
	let trackIconBox = createElementWithClass("span", "grid__icon");
	trackTitle.append(trackIconBox);

	let trackImage = createElementWithClass("img", "grid__img")
	trackImage.src = inputTrack.coverImageUrl;
	trackImage.alt = "artist image";
	trackImage.width = "48";
	trackImage.height = "48";
	trackImageBox.append(trackImage);

	let trackIcon = document.createElement("img");
	trackIcon.src = "../img/light-icon.svg";
	trackIcon.alt = "light image";
	trackIcon.width = "12";
	trackIcon.height = "12";

	if (inputTrack.isHot) {
		trackIconBox.append(trackIcon);
	}

	let trackArtistName = document.createElement("span");
	trackArtistName.append(inputTrack.artistName);
	trackTitle.append(trackArtistName);

	let songTitle = createElementWithClass("span", "grid__song-title");
	songTitle.append(inputTrack.title);
	trackTitle.append(songTitle);

	let trackAudio = createElementWithClass("audio", "grid__audio");
	trackAudio.src = inputTrack.fileUrl;
	trackAudio.controls = true;
	trackBlock.append(trackAudio);

	tracksList.append(trackElement);
}