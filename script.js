const scrollContainer = document.querySelector('.categories');
const scrollLeft = document.querySelector('.scroll-left');
const scrollRight = document.querySelector('.scroll-right');

// Function to check scroll position and hide/show buttons accordingly
function checkScrollPosition() {
    const scrollLeftPosition = scrollContainer.scrollLeft;
    const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;

    // Show or hide the left scroll button
    if (scrollLeftPosition === 0) {
        scrollLeft.classList.add('hidden');
    } else {
        scrollLeft.classList.remove('hidden');
    }

    // Show or hide the right scroll button
    if (scrollLeftPosition >= maxScrollLeft) {
        scrollRight.classList.add('hidden');
    } else {
        scrollRight.classList.remove('hidden');
    }
}

// Initially check scroll position
checkScrollPosition();

// Scroll left button click event
scrollLeft.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: -150, // Adjust scroll distance
        behavior: 'smooth'
    });
});

// Scroll right button click event
scrollRight.addEventListener('click', () => {
    const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    // Check if we're close to the end and scroll to the exact max position if necessary
    if (scrollContainer.scrollLeft + 150 >= maxScrollLeft) {
        scrollContainer.scrollTo({
            left: maxScrollLeft, // Scroll exactly to the end
            behavior: 'smooth'
        });
    } else {
        scrollContainer.scrollBy({
            left: 150, // Normal scroll
            behavior: 'smooth'
        });
    }
});

// Check scroll position when user manually scrolls
scrollContainer.addEventListener('scroll', checkScrollPosition);

// Video loading functionality for video.html
function loadVideoPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const videoId = urlParams.get('id');

    const videos = {
        "1": { title: "Playing India's Scariest Bhootni Game (Kamla)", src: "https://www.youtube.com/embed/zTM2YtE-K1g", description: "This is Video 1." },
        "2": { title: "Squid Game: Season 2", src: "https://www.youtube.com/embed/OsIohljR4WY", description: "This is Video 2." },
        "3": { title: "Imu's Will | One Piece", src: "https://www.youtube.com/embed/EXAMPLE_VIDEO_ID_3", description: "This is Video 3." },
        "4": { title: "YO", src: "https://www.youtube.com/embed/EXAMPLE_VIDEO_ID_4", description: "This is Video 4." },
        "5": { title: "ThefatRat - Rise Up (Lyrics)", src: "https://www.youtube.com/embed/EXAMPLE_VIDEO_ID_5", description: "This is Video 5." },
        "6": { title: "INDIA'S GOT LATENT | EP 05 ft. @KunalKamra @AtulKhatriComedian", src: "https://www.youtube.com/embed/EXAMPLE_VIDEO_ID_6", description: "This is Video 6." },
        "7": { title: "कौन बना रहा है इंसान को Plastic Body | CID | TV Serial Latest Episode", src: "https://www.youtube.com/embed/EXAMPLE_VIDEO_ID_7", description: "This is Video 7." }
    };

    const video = videos[videoId];
    if (video) {
        document.getElementById("video-title").textContent = video.title;
        document.getElementById("video-player").src = video.src;
        document.getElementById("video-description").textContent = video.description;
        console.log("Video loaded:", video.title);
    } else {
        console.error("Video not found for ID:", videoId);
        document.body.innerHTML = "<p>Video not found.</p>";
    }
}

if (window.location.pathname.endsWith("video.html")) {
    loadVideoPage();
}
