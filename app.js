// app.js

// Array to store video data
const videos = [
    {
        src: 'video1.mp4',
        likes: 0,
        comments: ['Great video!', 'Loved it!']
    },
    {
        src: 'video2.mp4',
        likes: 0,
        comments: ['Amazing!', 'So cool!']
    }
];

// Function to render videos
function renderVideos() {
    const videoFeed = document.getElementById('video-feed');
    videoFeed.innerHTML = ''; // Clear existing content
    
    videos.forEach((video, index) => {
        const videoElement = document.createElement('video');
        videoElement.src = video.src;
        videoElement.controls = true;
        videoElement.dataset.index = index;
        
        // Create like button
        const likeButton = document.createElement('button');
        likeButton.textContent = `Like (${video.likes})`;
        likeButton.onclick = () => {
            video.likes++;
            likeButton.textContent = `Like (${video.likes})`;
        };
        
        // Create comments list
        const commentsList = document.createElement('ul');
        video.comments.forEach(comment => {
            const commentItem = document.createElement('li');
            commentItem.textContent = comment;
            commentsList.appendChild(commentItem);
        });
        
        // Append elements to the video item
        const videoItem = document.createElement('div');
        videoItem.className = 'video-item';
        videoItem.appendChild(videoElement);
        videoItem.appendChild(likeButton);
        videoItem.appendChild(commentsList);
        
        videoFeed.appendChild(videoItem);
    });
}

// Initialize the video feed
renderVideos();
