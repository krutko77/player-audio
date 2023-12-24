import { renderPlaylistInfo } from "./info/renderPlaylistInfo.component.js";
import { renderPlaylistCover } from "./cover/renderPlaylistCover.component.js";
import { createElementWithClass } from "../../../helpers.js";

export function renderPlaylistHeader(playlistForRendering, playlistBody) {
	let playlistDescriptionElement = createElementWithClass("div", "playlist__description", "description");
	playlistBody.append(playlistDescriptionElement);

	let playlistDescriptionImgBox = createElementWithClass("div", "description__img-box");
	playlistDescriptionElement.append(playlistDescriptionImgBox);

	let playlistDescriptionTextBox = createElementWithClass("div", "description__text-box", "text-box");
	playlistDescriptionElement.append(playlistDescriptionTextBox);

	let playlistTextBoxLabel = createElementWithClass("p", "text-box__label");
	playlistTextBoxLabel.textContent = "playlist";
	playlistDescriptionTextBox.append(playlistTextBoxLabel);

	renderPlaylistCover(playlistForRendering, playlistDescriptionImgBox);
	renderPlaylistInfo(playlistForRendering, playlistDescriptionTextBox);
}

