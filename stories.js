// ─────────────────────────────────────────────────────────────────
//  FeelGoodNews — stories.js
//  This is your CMS (Content Management System).
//
//  HOW TO ADD A NEW STORY:
//  1. Copy one of the story objects below (everything between { and })
//  2. Paste it at the TOP of the STORIES array (so newest shows first)
//  3. Fill in each field with your story's details
//  4. Save the file — the homepage will update automatically!
//
//  HOW TO ADD A REAL PHOTO:
//  1. Drop your image file into the "images/articles/" folder
//  2. Set imgUrl to "images/articles/your-filename.png"
//  3. You can leave emoji blank ("") once you have a real image
//
//  QUICK FIELD GUIDE:
//    emoji   — a placeholder shown when there's no real photo yet
//    imgUrl  — path to a real photo, e.g. "images/articles/story1.png"
//              leave as "" to show the emoji instead
//    tag     — short category label shown on the card
//    title   — the story headline
//    excerpt — a 1–2 sentence summary shown on the card
//    author  — the journalist's full name
//    date    — publication date (written however you like)
//    url     — link to the full article page
//              use "#" as a placeholder until the page is built
// ─────────────────────────────────────────────────────────────────

const STORIES = [
  {
    emoji:   "👁️",
    imgUrl:  "images/articles/bionic-eye2.png",
    tag:     "Science",
    title:   "Europe Approves Bionic Eye Implant That Gives Sight Back to the Blind",
    excerpt: "A retinal implant called PRIMA has passed clinical trials and been approved in Europe, offering partial vision restoration to millions affected by age-related sight loss.",
    author:  "Xander Lundblad",
    date:    "September 3, 2026",
    url:     "articles/bionic-eye.html"
  },
  {
    emoji:   "⚡",
    imgUrl:  "images/articles/europe-clean-energy.png",
    tag:     "Environment",
    title:   "Europe's Clean Energy Bet Is Paying Off — Big",
    excerpt: "The European Union saved an estimated €51 billion in 2025 by cutting its reliance on imported fossil fuels, pouring €90 billion into renewables and sending solar power to record highs.",
    author:  "Jake Aaron",
    date:    "July 29, 2026",
    url:     "articles/europe-clean-energy.html"
  },
  {
    emoji:   "🐢",
    imgUrl:  "images/articles/sea-turtle.png",
    tag:     "Environment",
    title:   "Sea Turtles Are Back",
    excerpt: "Once heavily reduced by overhunting and habitat loss, sea turtles are persevering. A global review has revealed that, against the odds, their populations are steadily rebounding.",
    author:  "Jake Aaron",
    date:    "May 31, 2026",
    url:     "articles/sea-turtles.html"
  },
  {
    emoji:   "🌟",
    imgUrl:  "images/articles/jude-baker.png",
    tag:     "Community",
    title:   "Jude Baker's Selfless Wish",
    excerpt: "After beating a rare bone cancer, 14-year-old Jude Baker used his Make-A-Wish to feed over 300 people in his community, and refused to eat until every last person was served.",
    author:  "Jake Aaron",
    date:    "May 1, 2026",
    url:     "articles/jude-baker.html"
  },
  {
    emoji:   "🏈",
    imgUrl:  "images/articles/fernando-mendoza.png",
    tag:     "Sports",
    title:   "Heisman Winner Fernando Mendoza Commits $500K to MS Research",
    excerpt: "The number one NFL Draft pick, along with his brother Alberto, started the Mendoza Family Fund in honor of their mother Elisa who has MS, and have now raised over $500,000.",
    author:  "Jake Aaron",
    date:    "May 1, 2026",
    url:     "articles/fernando-mendoza.html"
  },
  {
    emoji:   "🧚",
    imgUrl:  "images/articles/bar-fairies.png",
    tag:     "Community",
    title:   "The Bar Fairies: Rewarding Safe Choices One Gift Card at a Time",
    excerpt: "If you leave your car behind instead of driving under the influence in the Lake of the Ozarks, you might find a surprise gift card from The Bar Fairies waiting for you.",
    author:  "Jake Aaron",
    date:    "May 1, 2026",
    url:     "articles/bar-fairies.html"
  }
];

// ─────────────────────────────────────────────────────────────────
//  FEATURED STORY (shown in the hero banner on the homepage)
//  Update this object to change the featured story.
// ─────────────────────────────────────────────────────────────────

const FEATURED_STORY = {
  emoji:   "👁️",
  imgUrl:  "images/articles/bionic-eye2.png",
  title:   "Europe Approves Bionic Eye Implant That Gives Sight Back to the Blind",
  excerpt: "A retinal implant called PRIMA has passed clinical trials and been approved in Europe, offering partial vision restoration to millions affected by age-related sight loss.",
  url:     "articles/bionic-eye.html"
};

// ─────────────────────────────────────────────────────────────────
//  Rendering functions — no need to edit anything below this line
// ─────────────────────────────────────────────────────────────────

function renderFeatured() {
  const imgEl     = document.getElementById('featured-img');
  const titleEl   = document.getElementById('featured-title');
  const excerptEl = document.getElementById('featured-excerpt');
  const linkEl    = document.getElementById('featured-link');

  if (FEATURED_STORY.imgUrl) {
    imgEl.innerHTML = `<img src="${FEATURED_STORY.imgUrl}" alt="${FEATURED_STORY.title}" />`;
  } else {
    imgEl.textContent = FEATURED_STORY.emoji;
  }

  titleEl.textContent   = FEATURED_STORY.title;
  excerptEl.textContent = FEATURED_STORY.excerpt;
  linkEl.href           = FEATURED_STORY.url;
}

function renderStories() {
  const grid = document.getElementById('story-grid');
  grid.innerHTML = STORIES.map(s => `
    <article class="story-card" onclick="location.href='${s.url}'">
      <div class="story-card-img">
        ${s.imgUrl
          ? `<img src="${s.imgUrl}" alt="${s.title}" />`
          : s.emoji}
      </div>
      <div class="story-card-body">
        <span class="story-tag">${s.tag}</span>
        <h3>${s.title}</h3>
        <p>${s.excerpt}</p>
        <div class="story-meta">
          <div class="story-author">
            <div class="author-avatar">${s.author.split(' ').map(w => w[0]).join('')}</div>
            <span>${s.author}</span>
          </div>
          <span>${s.date}</span>
        </div>
      </div>
    </article>
  `).join('');
}

// Run on page load — only fires on pages that have these elements (homepage)
if (document.getElementById("featured-img"))  renderFeatured();
if (document.getElementById("story-grid"))    renderStories();