import { renderPlaylist } from "./playlist/renderPlaylist.component.js";

export function renderPlaylists(inputPlaylists) {
	let numberId = 0;
	for (let i = 0; i < inputPlaylists.length; i++) {
		const playlist = inputPlaylists[i];
		numberId = numberId + 1;
		let buttonId = "button_" + numberId;
		renderPlaylist(playlist, buttonId);
	}
}

