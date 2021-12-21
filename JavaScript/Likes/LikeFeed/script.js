var likes = [9, 12, 9];

function liked(postNumber) {
    likes[postNumber]++;
    document.querySelector(".like_count_" + postNumber).innerText = likes[postNumber] + " like(s)";
}