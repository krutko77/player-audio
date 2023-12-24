import { createElementWithClass } from "../../../../helpers.js";

export function renderPlaylistCover(playlistForRendering, playlistDescriptionImgBox) {
	let playlistImage = createElementWithClass("img", "description__img");
	playlistImage.src = playlistForRendering.coverImageUrl;
	playlistImage.alt = "playlist image";
	playlistImage.width = "170";
	playlistImage.height = "176";
	playlistDescriptionImgBox.append(playlistImage);
}