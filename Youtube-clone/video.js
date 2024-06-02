import YOUR_API_KEY from "./API_CONSTANTS.js";

const video_http = "https://www.googleapis.com/youtube/v3/videos?";
const commentThread_http =
  "https://www.googleapis.com/youtube/v3/commentThreads?";
const maxResults = 100;
const urlParams = new URLSearchParams(window.location.search);
const videoId = urlParams.get("id");
const videoPlayerContainer = document.getElementById("video-player");

if (videoId) {
  fetch(
    video_http +
      new URLSearchParams({
        part: "snippet",
        id: videoId,
        key: YOUR_API_KEY,
      })
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.items && data.items.length > 0) {
        videoPlayerContainer.innerHTML = ` <iframe width="1024" height="550" src="https://www.youtube.com/embed/${videoId}" frameborder="20" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `;
      } else {
        videoPlayerContainer.innerHTML = "<p>Video unavailable</p>";
      }
    })
    .catch((error) => {
      console.log("Error fetching video data:", error);
      videoPlayerContainer.innerHTML = "<p>Video unavailable</p>";
    });
} else {
  videoPlayerContainer.innerHTML = "<p>No Video ID provided.</p>";
}

const fetchAndDisplayComments = () => {
  fetch(
    commentThread_http +
      new URLSearchParams({
        key: YOUR_API_KEY,
        part: "snippet",
        videoId,
        maxResults,
      })
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.items && data.items.length > 0) {
        data.items.forEach((item) => {
          const comment = item.snippet.topLevelComment.snippet;
          console.log(comment);
          displayComment(comment);
        });
      }
    });
};
const displayComment = (comment) => {
  const commentList = document.getElementById("video-comments-list");
  const commentItem = document.createElement("li");
  commentItem.classList.add("comment-item");
  commentItem.innerHTML = `
    <div class="comment-author">
        <img
        src="${comment.authorProfileImageUrl}"
        alt="profile-img"
        />
       ${comment.authorDisplayName}
    </div>
    <div class="comment-body">
        <div class="comment-text">${comment.textDisplay}</div>
            <div class="comments-actions">
                <img src="img/liked video.PNG" alt="like-icon" />
                <span class="action-count">${comment.likeCount}</span>
                <img
                    src="img/liked video.PNG"
                    alt="dislike-icon"
                    class="dislike"
                />
                <span class="action-reply">Reply</span>
            </div>
    </div>
  `;
  commentList.appendChild(commentItem);
};
fetchAndDisplayComments();
