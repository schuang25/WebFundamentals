var likes = 3;

function liked() {
    likes++;
    document.querySelector(".like_count").innerText = likes + " like(s)";
}