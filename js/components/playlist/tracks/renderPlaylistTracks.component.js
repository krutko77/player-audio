import { renderTrack } from "./track/renderTrackComponent.js";
import { createElementWithClass } from "../../../helpers.js";

export function renderPlaylistTracks(playlistForRendering, playlistBody) {
	let playlistTracksElement = createElementWithClass("div", "playlist__tracks", "tracks");
	playlistBody.append(playlistTracksElement);

	let tracksList = createElementWithClass("ul", "tracks__list", "list");
	playlistTracksElement.append(tracksList);

	for (let i = 0; i < playlistForRendering.tracks.length; i++) {
		const track = playlistForRendering.tracks[i];
		renderTrack(track, tracksList);
	}
}

