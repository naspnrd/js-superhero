import YOUR_API_KEY from "./API_CONSTANTS.js";

const videoCardContainer = document.querySelector(".video-container");
const searchInput = document.querySelector(".search-bar");
const searchBtn = document.querySelector(".search-btn");
const video_http = "https://www.googleapis.com/youtube/v3/videos?";
const channel_http = "https://www.googleapis.com/youtube/v3/channels?";
const search_http = "https://www.googleapis.com/youtube/v3/search?";
const numberOfVideosToBeLoaded = 25;

fetch(
  video_http +
    new URLSearchParams({
      key: YOUR_API_KEY,
      part: "snippet,contentDetails",
      chart: "mostPopular",
      maxResults: numberOfVideosToBeLoaded,
      regionCode: "IN",
    })
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.items.forEach((item) => {
      getChannelIcon(item);
    });
  })
  .catch((err) => console.log(err));

const getChannelIcon = (video_data) => {
  fetch(
    channel_http +
      new URLSearchParams({
        key: YOUR_API_KEY,
        part: "snippet",
        id: video_data.snippet.channelId,
      })
  )
    .then((res) => res.json())
    .then((data) => {
      video_data.channelThumbnail = data.items[0].snippet.thumbnails.high.url;
      makeVideoCard(video_data);
    })
    .catch((err) => console.log(err));
};

searchBtn.addEventListener("click", () => {
  const searchedValue = searchInput.value;
  if (searchedValue.length) {
    searchVideos(searchedValue);
  }
});

const searchVideos = (query) => {
  fetch(
    search_http +
      new URLSearchParams({
        key: YOUR_API_KEY,
        part: "snippet",
        q: query,
        maxResults: numberOfVideosToBeLoaded,
        type: "video",
      })
  )
    .then((res) => res.json())
    .then((data) => {
      console.log("search--", data);
      videoCardContainer.innerHTML = "";
      data.items.forEach((item) => {
        if ((item.id.kind = "youtube#video")) {
          getChannelIcon(item);
          getVideoDetails(item.id.videoId);
        }
      });
    })
    .catch((err) => console.log("Error fetching search results: ", err));
};

const getVideoDetails = (videoId) => {
  fetch(
    video_http +
      new URLSearchParams({
        key: YOUR_API_KEY,
        part: "snippet",
        id: videoId,
        maxResults: numberOfVideosToBeLoaded,
      })
  )
    .then((res) => res.json())
    .then((data) => {
      console.log("searched video ---", data);
      if (data.items.length > 0) makeVideoCard(data.items[0]);
    });
};
const makeVideoCard = (data) => {
  const videoCard = document.createElement("div");
  videoCard.classList.add("video");
  videoCard.addEventListener("click", () => {
    console.log("video clicked");
    window.location.href = `video.html?id=${data.id}`; // need to implement this
  });
  videoCard.innerHTML = `
    <img src="${
      data.snippet.thumbnails.high.url
    }" class="thumbnail" alt="thumbnail"/>
    <div class="content">
        <img src="${
          data.channelThumbnail ?? data.snippet.thumbnails.high.url
        }" class="channel-icon"/>
        <div class="info">
            <h4 class="title">${data.snippet.title}</h4>
            <p class="channel-name">${data.snippet.channelTitle}</p>
        </div>
    </div>
  `;

  videoCardContainer.appendChild(videoCard);
};
