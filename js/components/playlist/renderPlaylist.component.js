import { renderPlaylistHeader } from "./header/renderPlaylistHeaderComponent.js";
import { renderPlaylistTracks } from "./tracks/renderPlaylistTracks.component.js";
import { renderTrack } from "./tracks/track/renderTrackComponent.js";
import { newTracks } from "../../data.module.js";

import { createElementWithClass } from "../../helpers.js";

export function renderPlaylist(playlistForRendering, buttonId, tracksList) {
	const contentPage = document.getElementById("content-page");
	let playlistBody = createElementWithClass("div", "content__playlist", "playlist");
	contentPage.append(playlistBody);

	renderPlaylistHeader(playlistForRendering, playlistBody, buttonId);
	renderPlaylistTracks(playlistForRendering, playlistBody);

	let button = document.getElementById(buttonId);
	console.log(button)
	button.addEventListener('click', renderNewTrack(newTracks, tracksList));

	function renderNewTrack(newTracks, tracksList) {
		let i = 0;
		renderTrack(newTracks[i], tracksList);
		i++;
	}
}

