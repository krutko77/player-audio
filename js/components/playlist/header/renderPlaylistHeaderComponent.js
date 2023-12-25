import { renderPlaylistInfo } from "./info/renderPlaylistInfo.component.js";
import { renderPlaylistCover } from "./cover/renderPlaylistCover.component.js";
import { createElementWithClass } from "../../../helpers.js";

export function renderPlaylistHeader(playlistForRendering, playlistBody, buttonId) {
	let playlistDescriptionElement = createElementWithClass("div", "playlist__description", "description");
	playlistBody.append(playlistDescriptionElement);

	let playlistDescriptionImgBox = createElementWithClass("div", "description__img-box");
	playlistDescriptionElement.append(playlistDescriptionImgBox);

	let playlistDescriptionTextBox = createElementWithClass("div", "description__text-box", "text-box");
	playlistDescriptionElement.append(playlistDescriptionTextBox);

	let playlistDescriptionButtonBox = createElementWithClass("div", "text-box__button-box");
	playlistDescriptionTextBox.append(playlistDescriptionButtonBox);

	let playlistDescriptionLabel = createElementWithClass("span", "text-box__label");
	playlistDescriptionLabel.textContent = "playlist";
	playlistDescriptionButtonBox.append(playlistDescriptionLabel);

	let playlistDescriptionButton = createElementWithClass("button", "text-box__button");
	playlistDescriptionButton.id = buttonId;
	playlistDescriptionButton.textContent = "add track";
	playlistDescriptionButtonBox.append(playlistDescriptionButton);

	renderPlaylistCover(playlistForRendering, playlistDescriptionImgBox);
	renderPlaylistInfo(playlistForRendering, playlistDescriptionTextBox);
}

