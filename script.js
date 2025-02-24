import videos from './data/videos.js';


// Menu Button Toggle
const menuButton = document.querySelector('.js-menu-button');
const sidebar = document.querySelector('.js-sidebar');
menuButton.addEventListener('click', () => {
  sidebar.classList.toggle('visible');
});

// Generating Videos
const videosGrid = document.querySelector('.js-videos-grid');

let videosGridHTML = '';

videos.forEach((video) => {
  videosGridHTML += 
  `
    <a href="#" class="video-cell">
      <div class="thumbnail">
        <div class="video-duration">
          <p>${video.duration}</p>
        </div>
        <img src="${video.thumbnail}" alt="Video">
      </div>
      <div class="video-info">
        <div class="profile-picture">
          <img src="${video.channelLogo}" alt="pfp">
        </div>
        <div class="info-container">
          <h4>${video.title}</h6>
          <p>${video.channel}</p>
          <p>${video.views} &#8226; ${video.release}</p>
        </div>
      </div>
    </a>
  `;
});

videosGrid.innerHTML = videosGridHTML;