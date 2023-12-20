
let playlists = [{
		title: "Hip-Hop Hits",
		coverImageUrl: "../../img/playlist1-img.jpg",
		info: {
			totalTracksCount: "4 tracks",
			totalTracksDuration: "12m 13s",
			artistNames: "Eminem, 50cent, Lloyd Banks",
			otherArtist: "and others",
		},
		tracks: [
			{
				coverImageUrl: "../../img/Eminem.jpg",
				artistName: "Eminem - ",
				title: "Rap God",
				fileUrl: "../../files/Eminem_-_Rap_God.mp3",
				isHot: true,
				trackImgId: "track-img-1",
				artistNameId: "artist-name-1",
				trackNameId: "track-name-1",
				audioBoxId: "audio-box-1",
			},
			{
				coverImageUrl: "../../img/50-cent.jpg",
				artistName: "50cent - ",
				title: "In da Club",
				fileUrl: "../../files/50_Cent_-_In_Da_Club_47965582.mp3",
				isHot: false,
				trackImgId: "track-img-2",
				artistNameId: "artist-name-2",
				trackNameId: "track-name-2",
				audioBoxId: "audio-box-2",
			},
			{
				coverImageUrl: "../../img/DMX.jpg",
				artistName: "DMX - ",
				title: "Give It To Ya",
				fileUrl: "../../files/DMX_-_X_Gon_Give_It_to_Ya_73088122.mp3",
				isHot: true,
				trackImgId: "track-img-3",
				artistNameId: "artist-name-3",
				trackNameId: "track-name-3",
				audioBoxId: "audio-box-3",
			},
			{
				coverImageUrl: "../../img/Eminem-2.jpg",
				artistName: "Eminem feat 50 Cent, Cashis - ",
				title: "You Don't Know",
				fileUrl:
				"../../files/Eminem_50_Cent_Lloyd_Banks_Cahis_-_You_Dont_Know_48270332.mp3",
				isHot: false,
			},
		],
	},

	{
		title: "Rap Hits 1990s",
		coverImageUrl: "../../img/playlist2-img.jpg",
		info: {
			totalTracksCount: "4 tracks",
			totalTracksDuration: "17m 44s",
			artistNames: "Public Enemy, Vanila Ice, MC Hammer",
			otherArtist: "and others",
		},
		tracks: [
			{
				coverImageUrl: "../../img/Public-enemy.jpg",
				artistName: "Public Enemy - ",
				title: "Fight the Power",
				fileUrl: "../../files/Public_Enemy_-_Fight_The_Power_48021083.mp3",
				isHot: true,
				trackImgId: "track-img-5",
				artistNameId: "artist-name-5",
				trackNameId: "track-name-5",
				audioBoxId: "audio-box-5",
			},
			{
				coverImageUrl: "../../img/Vanilia-ice.jpg",
				artistName: "Vanila Ice - ",
				title: "Ice Ice Baby",
				fileUrl: "../../files/Vanilla_Ice_-_Ice_Ice_Baby_48283042.mp3",
				isHot: true,
				trackImgId: "track-img-6",
				artistNameId: "artist-name-6",
				trackNameId: "track-name-6",
				audioBoxId: "audio-box-6",
			},
			{
				coverImageUrl: "../../img/MC-hammer.jpg",
				artistName: "MC Hammer - ",
				title: "You Can’t Touch This",
				fileUrl: "../../files/MC_Hammer_-_U_Cant_Touch_This_48049905.mp3",
				isHot: false,
				trackImgId: "track-img-7",
				artistNameId: "artist-name-7",
				trackNameId: "track-name-7",
				audioBoxId: "audio-box-7",
			},
			{
				coverImageUrl: "../../img/Brand-nubian.jpg",
				artistName: "Brand Nubian - ",
				title: "Brand Nubian",
				fileUrl: "../../files/Brand_Nubian_-_Brand_Nubian_48295459.mp3",
				isHot: false,
			},
		],
	}
]


renderPlaylists(playlists); 

function renderPlaylists (inputPlaylists) {
	
	for (let i = 0; i < inputPlaylists.length; i++) { 
		const playlist = inputPlaylists[i]; 
		renderPlaylist(playlist); 
	}
}

function renderPlaylist(playlistForRendering) {
	const contentPage = document.getElementById("content-page");
	let playlistBody = document.createElement("div");
	playlistBody.classList.add("content__playlist", "playlist");
	contentPage.append(playlistBody);

	renderPlaylistHeader(playlistForRendering, playlistBody);
	renderPlaylistTracks(playlistForRendering, playlistBody); 
}

function renderPlaylistHeader(playlistForRendering, arg) {
	let playlistDescriptionElement = document.createElement("div");
	playlistDescriptionElement.classList.add("playlist__description", "description");
	arg.append(playlistDescriptionElement);

	let playlistDescriptionImgBox = document.createElement("div");
	playlistDescriptionImgBox.classList.add("description__img-box");
	playlistDescriptionElement.append(playlistDescriptionImgBox);

	let playlistDescriptionTextBox = document.createElement("div");
	playlistDescriptionTextBox.classList.add("description__text-box", "text-box");
	playlistDescriptionElement.append(playlistDescriptionTextBox);

	let playlistTextBoxLabel = document.createElement("p");
	playlistTextBoxLabel.classList.add("text-box__label");
	playlistTextBoxLabel.textContent = "playlist";
	playlistDescriptionTextBox.append(playlistTextBoxLabel);

	let playlistImage = document.createElement("img");
	playlistImage.classList.add("description__img");
	playlistImage.src = playlistForRendering.coverImageUrl;
	playlistImage.alt = "playlist image";
	playlistImage.width = "170";
	playlistImage.height = "176";
	playlistDescriptionImgBox.append(playlistImage);

	let playlistTitle = document.createElement("h2");
	playlistTitle.classList.add("text-box__playlist-title");
	playlistTitle.append(playlistForRendering.title);
	playlistDescriptionTextBox.append(playlistTitle);

	let playlistCount = document.createElement("p");
	playlistCount.classList.add("text-box__text-small");
	playlistCount.append(playlistForRendering.info.totalTracksCount + "," + " " + 
	playlistForRendering.info.totalTracksDuration);
	playlistDescriptionTextBox.append(playlistCount);

	let playlistArtistsList = document.createElement("p");
	playlistArtistsList.classList.add("text-box__text");
	playlistArtistsList.append(playlistForRendering.info.artistNames);
	playlistDescriptionTextBox.append(playlistArtistsList);

	let playlistOtherArtists = document.createElement("span");
	playlistOtherArtists.append(" " + playlistForRendering.info.otherArtist);
	playlistOtherArtists.classList.add("text-box__span");
	playlistArtistsList.append(playlistOtherArtists);
}

function renderPlaylistTracks(playlistForRendering, arg) {
	let playlistTracksElement = document.createElement("div");
	playlistTracksElement.classList.add("playlist__tracks", "tracks");
	arg.append(playlistTracksElement);

	let tracksList = document.createElement("ul");
	tracksList.classList.add("tracks__list", "list");
	playlistTracksElement.append(tracksList);

	for (let i = 0; i < playlistForRendering.tracks.length; i++) { 
		const track = playlistForRendering.tracks[i]; 
		renderTrack(track, tracksList); 
  }
}


function renderTrack(inputTrack, arg) {
	let trackElement = document.createElement("li");
	trackElement.classList.add("list__item");
	

	let trackBlock = document.createElement("div");
	trackBlock.classList.add("list__grid", "grid");
	trackElement.append(trackBlock);

	let trackImageBox = document.createElement("div");
	trackImageBox.classList.add("grid__img-box");
	trackBlock.append(trackImageBox);

	let trackImage = document.createElement("img");
	trackImage.classList.add("grid__img");
	trackImage.src = inputTrack.coverImageUrl;
	trackImage.alt = "artist image";
	trackImage.width = "48";
	trackImage.height = "48";
	trackImageBox.append(trackImage);

	let trackTitle = document.createElement("div");
	trackTitle.classList.add("grid__track-title");
	trackBlock.append(trackTitle);

	let trackIconBox = document.createElement("span");
	trackIconBox.classList.add("grid__icon");
	trackTitle.append(trackIconBox);

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

	let songTitle = document.createElement("span");
	songTitle.classList.add("grid__song-title");
	songTitle.append(inputTrack.title);
	trackTitle.append(songTitle);

	let trackAudio = document.createElement("audio");
	trackAudio.classList.add("grid__audio");
	trackAudio.src = inputTrack.fileUrl;
	trackAudio.controls = true;
   trackBlock.append(trackAudio);

	arg.append(trackElement);
}




