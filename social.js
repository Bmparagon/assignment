const pObject = [

    {
        username: "Judas",
        date: "01-01-2025",
        image: "images/judas.jpeg",
        content: "Guys it was fun betraying Jesus",
        likes: "11k",
        comments: "2k",
        views: "120k",
    },
    
    {
        username: "FastandFurious",
        date: "01-01-2025",
        image: "images/carblack.jpeg",
        content: "Introducing this sweet baby in the next season of FaF, coming soon",
        likes: "1k",
        comments: "244",
        views: "12k",
    },

    {
        username: "Ifenna",
        date: "01-01-2025",
        image: "images/efootball.jpeg",
        content: "The best game in the world, @efootball",
        likes: "400k",
        comments: "20k",
        views: "120M",
    },

    {
        username: "Emma",
        date: "01-01-2025",
        image: "images/dog.jpeg",
        content: "Better than nigerian security forces",
        likes: "1k",
        comments: "2",
        views: "12k",
    },

    {
        username: "Chii",
        date: "01-01-2025",
        image: "images/lady.jpeg",
        content: "Enjoying nature beauty",
        likes: "110k",
        comments: "29k",
        views: "500k",
    },

    {
        username: "Jenny",
        date: "01-01-2025",
        image: "images/lovies.jpeg",
        content: "Enjoy while it lasts",
        likes: "16k",
        comments: "4k",
        views: "130k",
    },

    {
        username: "Ifenna",
        date: "01-01-2025",
        image: "images/messi.jpeg",
        content: "World best & Greatest player of all time",
        likes: "4.3M",
        comments: "1M",
        views: "104M",
    },

    {
        username: "FIFA",
        date: "01-01-2025",
        image: "images/wc.jpeg",
        content: "GREAT",
        likes: "127k",
        comments: "5k",
        views: "420k",
    },

    {
        username: "Emma",
        date: "01-01-2025",
        image: "images/meme.jpeg",
        content: "lol",
        likes: "11k",
        comments: "1k",
        views: "17k",
    },

    {
        username: "Judas",
        date: "01-01-2025",
        image: "images/road.jpeg",
        content: "Road to success is always lonely, you gotta endure",
        likes: "155k",
        comments: "6k",
        views: "405k",
    },

];

const postContainer = document.getElementById("postContainer");

pObject.forEach((post) => {
  const card = document.createElement("div");
  card.className = "post-card";

  card.innerHTML = `
    <div class="post-header">
      <h3 class="username">@${post.username}</h3>
    </div>
    <img src="${post.image}" alt="post image" class="post-image" width="100%" />
    <p class="post-text">${post.content}</p>
    <span class="date">${post.date}</span>
    
    <div class="post-action">
      <span class="likes">💖 <span class="likenumber">${post.likes}</span> likes</span>
      <span class="comments">💬 <span class="comment-number">${post.comments}</span> comments</span>
      <span class="views">👁 ${post.views} views</span>
    </div>
  `;

  // 👍 Attach interaction after card is built
  const likeSpan = card.querySelector(".likes");
  const likeNumber = card.querySelector(".likenumber");
  let likes = post.likes;

  likeSpan.addEventListener("click", () => {
    likes++;
    likeNumber.textContent = likes;
  });

  postContainer.appendChild(card);
});