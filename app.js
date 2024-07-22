document.getElementById('videoUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('video/')) {
        const videoURL = URL.createObjectURL(file);
        addVideoToFeed(videoURL);
    }
});

function addVideoToFeed(videoURL) {
    const videoFeed = document.getElementById('videoFeed');
    
    const videoContainer = document.createElement('div');
    videoContainer.className = 'video-container';
    
    const videoElement = document.createElement('video');
    videoElement.src = videoURL;
    videoElement.controls = true;
    
    videoContainer.appendChild(videoElement);
    videoFeed.appendChild(videoContainer);
}
