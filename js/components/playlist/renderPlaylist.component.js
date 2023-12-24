import { renderPlaylistHeader } from "./header/renderPlaylistHeaderComponent.js";
import { renderPlaylistTracks } from "./tracks/renderPlaylistTracks.component.js";
import { createElementWithClass } from "../../helpers.js";

export function renderPlaylist(playlistForRendering) {
	const contentPage = document.getElementById("content-page");
	let playlistBody = createElementWithClass("div", "content__playlist", "playlist");
	contentPage.append(playlistBody);

	renderPlaylistHeader(playlistForRendering, playlistBody);
	renderPlaylistTracks(playlistForRendering, playlistBody);
}

