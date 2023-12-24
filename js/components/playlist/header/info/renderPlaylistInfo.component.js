import { createElementWithClass } from "../../../../helpers.js";

export function renderPlaylistInfo(playlistForRendering, playlistDescriptionTextBox) {
	let playlistTitle = createElementWithClass("h2", "text-box__playlist-title");
	playlistTitle.append(playlistForRendering.title);
	playlistDescriptionTextBox.append(playlistTitle);

	let playlistCount = createElementWithClass("p", "text-box__text-small");
	playlistCount.append(playlistForRendering.info.totalTracksCount + "," + " " +
		playlistForRendering.info.totalTracksDuration);
	playlistDescriptionTextBox.append(playlistCount);

	let playlistArtistsList = createElementWithClass("p", "text-box__text");
	playlistArtistsList.append(playlistForRendering.info.artistNames);
	playlistDescriptionTextBox.append(playlistArtistsList);

	let playlistOtherArtists = createElementWithClass("span", "text-box__span");
	playlistOtherArtists.append(" " + playlistForRendering.info.otherArtist);
	playlistArtistsList.append(playlistOtherArtists);
}

