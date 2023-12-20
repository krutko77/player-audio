
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
	},

	{
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
]


renderPlaylists(playlists); 

function renderPlaylists (inputPlaylists) {
	
	for (let i = 0; i < inputPlaylists.length; i++) { 
		const playlist = inputPlaylists[i]; 
		renderPlaylist(playlist); 
	}
}

function renderPlaylist(playlistForRendering) {
	renderPlaylistHeader(playlistForRendering);
	/* renderPlaylistTracks(playlistForRendering);  */
 }

function renderPlaylistHeader(playlistForRendering) {
	const contentPage = document.getElementById("content-page");
	let playlistBody = document.createElement("div");
	playlistBody.classList.add("content__playlist", "playlist");
	contentPage.append(playlistBody);

	let playlistDescription = document.createElement("div");
	playlistDescription.classList.add("playlist__description", "description");
	playlistBody.append(playlistDescription);

	let playlistDescriptionImgBox = document.createElement("div");
	playlistDescriptionImgBox.classList.add("description__img-box");
	playlistDescription.append(playlistDescriptionImgBox);

	let playlistDescriptionTextBox = document.createElement("div");
	playlistDescriptionTextBox.classList.add("description__text-box", "text-box");
	playlistDescription.append(playlistDescriptionTextBox);

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

/* function renderPlaylistTracks(playlistForRendering) {
  let divElement = document.getElementsByName(`${index}playlistName`);

  const playlistTracksListElement = divElement[0].querySelector("[data-role='tracks-list']");
  const template = document.getElementById("track-template");
 
	const listTrack = playlistForRendering.tracks.map((track, index) => {

	const trackElement = document.createElement("li");
	trackElement.classList.add("list__item");
	trackElement.setAttribute('name', index + 'trackName');
	trackElement.innerHTML = template.innerHTML;
	playlistTracksListElement.appendChild(trackElement);
	renderPlaylistTrack(track, index);
	return trackElement;
  })
}

function renderPlaylistTrack(inputTrackForRendering, index) {
  let liElement = document.getElementsByName(`${index}trackName`);

  let trackImageElement = document.createElement("img");
  trackImageElement.classList.add("grid__img");
  trackImageElement.src = inputTrackForRendering.coverImageUrl;
  trackImageElement.alt = "artist image";
  trackImageElement.width = "48";
  trackImageElement.height = "48";
  const trackImageBox = liElement[0].querySelector("[data-role='img-box']");
  trackImageBox.append(trackImageElement);

  let trackIconElement = document.createElement("img");
  trackIconElement.classList.add("grid__icon");
  trackIconElement.src = "../img/light-icon.svg";
  trackIconElement.alt = "light image";
  trackIconElement.width = "12";
  trackIconElement.height = "12";
  const iconBox = liElement[0].querySelector("[data-role='icon']");

  if (inputTrackForRendering.isHot) {
   iconBox.append(trackIconElement);
  }

  let trackArtistNameElement = document.createElement("span");
  trackArtistNameElement.append(inputTrackForRendering.artistName);
  iconBox.after(trackArtistNameElement);

  let songTitleElement = document.createElement("span");
  songTitleElement.classList.add("grid__song-title");
  songTitleElement.append(inputTrackForRendering.title);
  const trackTitle = liElement[0].querySelector("[data-role='track-title']");
  trackTitle.appendChild(songTitleElement);
  

  let trackAudioElement = document.createElement("audio");
  trackAudioElement.classList.add("grid__audio");
  trackAudioElement.src = inputTrackForRendering.fileUrl;
  trackAudioElement.controls = true;
  const audioBox = liElement[0].querySelector("[data-role='audio-box']");
  audioBox.append(trackAudioElement);
}
 */



/* function renderPlaylists (playlistsForRendering) {
	
	const playlistTemplate = document.getElementById("playlist-template");
 
	const listPlaylist = playlists.map((playlist, index) => {

	let playlistBody = document.createElement("div");
	playlistBody.classList.add("content__playlist", "playlist");
	playlistBody.setAttribute('name', index + 'playlistName');	
	playlistBody.innerHTML = playlistTemplate.innerHTML;
	contentPage.append(playlistBody);
	
	renderPlaylist(playlist, index);
	return playlistBody;
  })
 }
 */
